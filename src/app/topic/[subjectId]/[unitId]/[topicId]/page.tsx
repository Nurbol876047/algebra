"use client";

import { use, useState } from "react";
import { getTopic, getSubject, getUnit, curriculum } from "@/data/curriculum";
import Breadcrumbs from "@/components/Breadcrumbs";
import MathText from "@/components/MathText";
import VisualRenderer from "@/components/VisualRenderer";
import { useProgressStore } from "@/store/useProgressStore";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, Calculator, Image as ImageIcon, 
  ListChecks, Target, CheckCircle2, ChevronLeft, ChevronRight, PenTool
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const TABS = [
  { id: "theory", label: "Теория", icon: BookOpen },
  { id: "formulas", label: "Формулалар", icon: Calculator },
  { id: "visuals", label: "Сызбалар", icon: ImageIcon },
  { id: "examples", label: "Мысалдар", icon: ListChecks },
  { id: "practice", label: "Практика", icon: PenTool },
  { id: "selfcheck", label: "Өзін-өзі тексеру", icon: CheckCircle2 },
  { id: "test", label: "Мини-тест", icon: Target }
] as const;


export default function TopicPage({ params }: { params: Promise<{ subjectId: string; unitId: string; topicId: string }> }) {
  const { subjectId, unitId, topicId } = use(params);
  
  const subject = getSubject(subjectId);
  const unit = getUnit(subjectId, unitId);
  const topic = getTopic(subjectId, unitId, topicId);
  
  const { isCompleted, markCompleted, markIncomplete } = useProgressStore();
  const completed = topic ? isCompleted(topic.id) : false;

  const [activeTab, setActiveTab] = useState<typeof TABS[number]["id"]>("theory");
  const [revealedPractice, setRevealedPractice] = useState<Record<number, boolean>>({});
  const [testAnswers, setTestAnswers] = useState<Record<number, number>>({});
  const [showTestResults, setShowTestResults] = useState(false);

  if (!subject || !unit || !topic) return <div className="p-8 text-center text-gray-500 font-medium">Тақырып табылмады.</div>;

  const isGrade10 = subject.id.includes("10");
  const allTopics = curriculum
    .filter(s => isGrade10 ? s.id.includes("10") : !s.id.includes("10"))
    .flatMap(s => s.units.flatMap(u => u.topics.map(t => ({ s, u, t }))));
  const currentIndex = allTopics.findIndex(x => x.s.id === subject.id && x.u.id === unit.id && x.t.id === topic.id);
  const prevLink = currentIndex > 0 ? `/topic/${allTopics[currentIndex - 1].s.id}/${allTopics[currentIndex - 1].u.id}/${allTopics[currentIndex - 1].t.id}` : null;
  const nextLink = currentIndex < allTopics.length - 1 ? `/topic/${allTopics[currentIndex + 1].s.id}/${allTopics[currentIndex + 1].u.id}/${allTopics[currentIndex + 1].t.id}` : null;

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-white border-b sticky top-16 z-20 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <Breadcrumbs items={[{ label: subject.title }, { label: unit.title }, { label: topic.title }]} />
          <div className="flex items-center justify-between mt-2">
            <h1 className="text-3xl font-extrabold text-gray-900">{topic.title}</h1>
            <button
              onClick={() => completed ? markIncomplete(topic.id) : markCompleted(topic.id)}
              className={cn(
                "px-6 py-2.5 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-sm",
                completed 
                  ? "bg-green-100 text-green-600 border-2 border-green-500 shadow-green-100" 
                  : "bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-md border-2 border-transparent"
              )}
            >
              <CheckCircle2 className="w-5 h-5" />
              {completed ? "Аяқталды" : "Аяқтау"}
            </button>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap gap-2 pb-4 mt-4">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all whitespace-nowrap",
                  isActive 
                    ? "bg-indigo-100 text-indigo-700 shadow-inner" 
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                )}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === "theory" && (
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200">
                <MathText content={topic.theory || "*Теориялық материал жақында қосылады*"} />
              </div>
            )}

            {activeTab === "formulas" && (
              <div className="bg-indigo-50/50 rounded-3xl p-8 shadow-sm border border-indigo-100">
                <MathText content={topic.formulas || "*Формулалар жақында қосылады*"} />
              </div>
            )}

            {activeTab === "visuals" && (
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200 text-center">
                <VisualRenderer subjectId={subject.id} unitId={unit.id} topicId={topic.id} />
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <MathText content={topic.visualSchemas || "*Визуалды сызбалар жақында қосылады*"} />
                </div>
              </div>
            )}

            {activeTab === "examples" && (
              <div className="space-y-6">
                {topic.examples.length === 0 && <div className="text-gray-500 text-center py-8">Мысалдар әлі қосылмаған.</div>}
                {topic.examples.map((ex, i) => (
                  <div key={i} className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="bg-blue-50/80 px-6 py-4 border-b border-blue-100 font-bold text-blue-900">
                      {ex.title}
                    </div>
                    <div className="p-6 space-y-6">
                      {ex.steps.map((step, idx) => (
                        <div key={idx} className="flex gap-4">
                          <div className="shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm">
                            {idx + 1}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-800 mb-1">{step.title}</div>
                            <MathText content={step.description} className="text-gray-600" />
                          </div>
                        </div>
                      ))}
                      <div className="mt-4 p-4 bg-green-50 rounded-2xl border border-green-100 flex items-center gap-3">
                        <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-green-800 uppercase tracking-wider mb-1">Жауабы</div>
                          <MathText content={ex.answer} className="text-green-900 font-medium" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "practice" && (
              <div className="space-y-6">
                {topic.practice.length === 0 && <div className="text-gray-500 text-center py-8">Тапсырмалар әлі қосылмаған.</div>}
                {topic.practice.map((prac, i) => (
                  <div key={i} className="bg-white rounded-3xl shadow-sm border border-gray-200 p-6">
                    <MathText content={prac.question} className="font-medium text-gray-900 text-lg mb-6" />
                    
                    {!revealedPractice[i] ? (
                      <button 
                        onClick={() => setRevealedPractice(prev => ({...prev, [i]: true}))}
                        className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl font-bold transition-colors w-full"
                      >
                        Шешімін көру
                      </button>
                    ) : (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="space-y-4">
                        <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                          <div className="font-bold text-gray-500 mb-2 text-sm uppercase">Шешуі</div>
                          <MathText content={prac.solution} />
                        </div>
                        <div className="p-4 bg-green-50 text-green-900 rounded-2xl font-bold border border-green-100">
                          Жауабы: {prac.answer}
                        </div>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeTab === "selfcheck" && (
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200">
                <h3 className="font-bold text-xl mb-6 text-gray-900">Сұрақтарға жауап беріңіз:</h3>
                {topic.selfCheck.length === 0 && <div className="text-gray-500">Сұрақтар әлі қосылмаған.</div>}
                <ul className="space-y-4">
                  {topic.selfCheck.map((q, i) => (
                    <li key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                      <div className="shrink-0 w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">
                        {i + 1}
                      </div>
                      <MathText content={q} className="text-gray-800 pt-1" />
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "test" && (
              <div className="space-y-8">
                {topic.miniTest.length === 0 && <div className="text-gray-500 text-center py-8">Тест әлі қосылмаған.</div>}
                {topic.miniTest.map((q, qIndex) => (
                  <div key={qIndex} className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-200">
                    <MathText content={`**${qIndex + 1}.** ${q.question}`} className="text-xl font-bold mb-6" />
                    <div className="grid gap-3">
                      {q.options.map((opt, oIndex) => {
                        const isSelected = testAnswers[qIndex] === oIndex;
                        const isCorrect = oIndex === q.correctAnswerIndex;
                        const showStatus = showTestResults;
                        
                        let btnClass = "border-2 border-gray-100 hover:border-indigo-300 hover:bg-indigo-50 text-gray-700";
                        if (showStatus) {
                          if (isCorrect) btnClass = "border-2 border-green-500 bg-green-50 text-green-800";
                          else if (isSelected && !isCorrect) btnClass = "border-2 border-red-500 bg-red-50 text-red-800";
                          else btnClass = "border-2 border-gray-100 opacity-50";
                        } else if (isSelected) {
                          btnClass = "border-2 border-indigo-500 bg-indigo-50 text-indigo-800 shadow-sm";
                        }

                        return (
                          <button
                            key={oIndex}
                            onClick={() => !showTestResults && setTestAnswers(prev => ({...prev, [qIndex]: oIndex}))}
                            disabled={showTestResults}
                            className={cn("px-6 py-4 rounded-2xl text-left font-medium transition-all", btnClass)}
                          >
                            <MathText content={opt} />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
                
                {topic.miniTest.length > 0 && !showTestResults && (
                  <button 
                    onClick={() => setShowTestResults(true)}
                    disabled={Object.keys(testAnswers).length < topic.miniTest.length}
                    className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-2xl font-bold text-lg transition-colors shadow-md"
                  >
                    Нәтижені тексеру
                  </button>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-200 pb-12 relative z-10">
          {prevLink ? (
            <Link href={prevLink} className="flex items-center gap-3 px-4 sm:px-6 py-4 rounded-2xl bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 font-bold transition-all active:scale-95 shadow-sm hover:shadow-md">
              <ChevronLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Алдыңғы</span>
            </Link>
          ) : <div className="w-[40px] sm:w-[140px]"/>}
          
          <Link href="/" className="flex items-center gap-2 px-4 sm:px-6 py-4 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold transition-all active:scale-95 shadow-sm">
            <BookOpen className="w-5 h-5" />
            <span className="hidden sm:inline">Мазмұны</span>
          </Link>

          {nextLink ? (
            <Link href={nextLink} className="flex items-center gap-3 px-4 sm:px-6 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-all active:scale-95 shadow-md hover:shadow-lg">
              <span className="hidden sm:inline">Келесі</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          ) : <div className="w-[40px] sm:w-[140px]"/>}
        </div>
      </div>
    </div>
  );
}
