"use client";

import { curriculum, getAllTopicsFlat } from "@/data/curriculum";
import Link from "next/link";
import { BookOpen, Calculator, PenTool, CheckCircle2, ChevronDown, ChevronRight, Award, Lightbulb, Activity, Box, Database, LineChart } from "lucide-react";
import { useProgressStore } from "@/store/useProgressStore";
import Hero3D from "@/components/Hero3D";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Home() {
  const { completedTopics, isCompleted, activeGrade } = useProgressStore();
  const allTopics = getAllTopicsFlat();
  
  const currentCurriculum = curriculum.filter(s => {
    if (activeGrade === 11) return s.id.includes("11");
    if (activeGrade === 10) return s.id.includes("10");
    return !s.id.includes("10") && !s.id.includes("11");
  });
  const [activeSubject, setActiveSubject] = useState(currentCurriculum[0]?.id);

  useEffect(() => {
    if (!currentCurriculum.find(s => s.id === activeSubject)) {
      setActiveSubject(currentCurriculum[0]?.id);
    }
  }, [activeGrade, currentCurriculum, activeSubject]);

  const currentTopics = allTopics.filter(t => {
    if (activeGrade === 11) return t.subject.id.includes("11");
    if (activeGrade === 10) return t.subject.id.includes("10");
    return !t.subject.id.includes("10") && !t.subject.id.includes("11");
  });
  const completedCurrent = currentTopics.filter(t => isCompleted(t.topic.id));
  const progressPercent = currentTopics.length > 0 ? Math.round((completedCurrent.length / currentTopics.length) * 100) : 0;

  const description = activeGrade === 11
    ? "Алгебра және анализ бастамалары. Геометрия. 11 сынып бағдарламасы бойынша күрделі есептер мен ҰБТ-ға дайындық."
    : activeGrade === 10 
      ? "Алгебра және анализ бастамалары. Стереометрия. Фундаменталды түсініктер мен күрделі есептерді тереңірек зерттеңіз."
      : "Алгебра және геометрия. Интерактивті оқыту платформасы. Өз қарқыныңмен оқы, мысалдарды шеш және біліміңді тексер.";

  // Unified Playful Style (Tree, Vibrant)
  return (
    <div className="relative min-h-screen pb-24">
      <Hero3D />
      
      <div className="relative z-10 max-w-5xl mx-auto p-6 md:p-10 pt-16 md:pt-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 bg-white/70 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/50"
        >
          <div className="inline-flex items-center justify-center p-4 bg-slate-800 rounded-2xl mb-6 shadow-lg shadow-slate-300">
            <Award className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Математика <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-900">{activeGrade} сынып</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
            {description}
          </p>

          <div className="mt-10 max-w-md mx-auto">
            <div className="flex justify-between text-sm font-bold text-gray-700 mb-2">
              <span>Жалпы үлгерім</span>
              <span className="text-indigo-600">{progressPercent}%</span>
            </div>
            <div className="w-full bg-gray-200/80 rounded-full h-4 overflow-hidden shadow-inner">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="bg-gradient-to-r from-emerald-400 to-emerald-500 h-full rounded-full"
              />
            </div>
            <p className="text-gray-500 mt-2 text-sm font-medium">{completedCurrent.length} / {currentTopics.length} тақырып</p>
          </div>
        </motion.div>

        <div className="flex gap-4 justify-center mb-10">
          {currentCurriculum.map((subj) => (
            <button
              key={subj.id}
              onClick={() => setActiveSubject(subj.id)}
              className={cn(
                "px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-sm flex items-center gap-3 border-b-4",
                activeSubject === subj.id 
                  ? "bg-slate-800 border-slate-950 text-white shadow-slate-300 shadow-lg scale-105" 
                  : "bg-white border-gray-200 text-gray-600 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-800"
              )}
            >
              {subj.id.includes("algebra") ? <Calculator className="w-6 h-6" /> : <PenTool className="w-6 h-6" />}
              {subj.title}
            </button>
          ))}
        </div>

        <div className="space-y-12">
          {currentCurriculum.find(s => s.id === activeSubject)?.units.map((unit, unitIdx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              key={unit.id} 
              className="relative"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black text-xl shadow-md shadow-slate-300 border border-slate-700">
                  {unitIdx + 1}
                </div>
                <h2 className="text-2xl font-bold text-white bg-slate-800 px-6 py-2 rounded-2xl shadow-md shadow-slate-300 border border-slate-700">
                  {unit.title}
                </h2>
              </div>
              
              <div className="flex flex-col items-center gap-6 relative">
                {/* Path line connecting nodes */}
                <div className="absolute top-8 bottom-8 w-2 bg-slate-200 left-1/2 -translate-x-1/2 rounded-full -z-10" />

                {unit.topics.map((topic, topicIdx) => {
                  const isDone = isCompleted(topic.id);
                  const isEven = topicIdx % 2 === 0;
                  
                  return (
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      key={topic.id}
                      className={cn(
                        "w-full max-w-[320px] relative",
                        isEven ? "md:mr-32" : "md:ml-32"
                      )}
                    >
                      <Link href={`/topic/${activeSubject}/${unit.id}/${topic.id}`} className="block">
                        <div className={cn(
                          "p-6 rounded-3xl border-b-8 transition-all duration-200 shadow-lg",
                          isDone 
                            ? "bg-emerald-500 border-emerald-700 hover:bg-emerald-400 shadow-emerald-200" 
                            : "bg-slate-800 border-slate-950 hover:bg-slate-700 shadow-slate-300"
                        )}>
                          <div className={cn(
                            "w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 shadow-inner border-4",
                            isDone ? "bg-emerald-400 border-emerald-300 text-white" : "bg-slate-700 border-slate-600 text-white"
                          )}>
                            {isDone ? <CheckCircle2 className="w-8 h-8" /> : <BookOpen className="w-8 h-8" />}
                          </div>
                          <h3 className="font-bold text-white text-center leading-tight mb-2">
                            {topic.title}
                          </h3>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}

                {unit.topics.length === 0 && (
                  <div className="bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl text-gray-500 font-medium italic border">
                    Тақырыптар жақында қосылады...
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
