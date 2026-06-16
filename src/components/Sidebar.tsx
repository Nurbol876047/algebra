"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { curriculum } from "@/data/curriculum";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight, BookOpen, Calculator, PenTool } from "lucide-react";
import { useState } from "react";
import { useProgress } from "@/hooks/useProgress";

export default function Sidebar() {
  const pathname = usePathname();
  const [expandedSubjects, setExpandedSubjects] = useState<string[]>(["algebra", "geometry"]);
  const [expandedUnits, setExpandedUnits] = useState<string[]>([]);
  const { isCompleted } = useProgress();

  const toggleSubject = (id: string) => {
    setExpandedSubjects((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const toggleUnit = (id: string) => {
    setExpandedUnits((prev) =>
      prev.includes(id) ? prev.filter((u) => u !== id) : [...prev, id]
    );
  };

  return (
    <aside className="w-64 flex-shrink-0 bg-white border-r h-full overflow-y-auto hidden md:block">
      <div className="p-6">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-blue-600">
          <BookOpen className="w-6 h-6" />
          <span>Math 9 Grade</span>
        </Link>
      </div>
      <nav className="px-4 pb-6 space-y-2">
        {curriculum.map((subject) => {
          const isSubExpanded = expandedSubjects.includes(subject.id);
          return (
            <div key={subject.id}>
              <button
                onClick={() => toggleSubject(subject.id)}
                className="w-full flex items-center justify-between px-3 py-2 text-sm font-semibold text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-2">
                  {subject.id === "algebra" ? <Calculator className="w-4 h-4" /> : <PenTool className="w-4 h-4" />}
                  {subject.title}
                </div>
                {isSubExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </button>
              
              {isSubExpanded && (
                <div className="mt-1 ml-4 space-y-1 border-l-2 border-gray-100 pl-2">
                  {subject.units.map((unit) => {
                    const isUnitExpanded = expandedUnits.includes(unit.id);
                    return (
                      <div key={unit.id}>
                        <button
                          onClick={() => toggleUnit(unit.id)}
                          className="w-full text-left px-3 py-2 text-xs font-medium text-gray-600 rounded-md hover:bg-gray-100 flex justify-between items-center"
                        >
                          <span className="truncate pr-2">{unit.title}</span>
                          {isUnitExpanded ? <ChevronDown className="w-3 h-3 flex-shrink-0" /> : <ChevronRight className="w-3 h-3 flex-shrink-0" />}
                        </button>
                        
                        {isUnitExpanded && (
                          <div className="mt-1 ml-2 space-y-1">
                            {unit.topics.map((topic) => {
                              const href = `/topic/${subject.id}/${unit.id}/${topic.id}`;
                              const active = pathname === href;
                              const completed = isCompleted(topic.id);
                              return (
                                <Link
                                  key={topic.id}
                                  href={href}
                                  className={cn(
                                    "block px-3 py-2 text-xs rounded-md transition-colors",
                                    active
                                      ? "bg-blue-50 text-blue-700 font-medium"
                                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                                  )}
                                >
                                  <div className="flex items-center gap-2">
                                    <div className={cn("w-1.5 h-1.5 rounded-full flex-shrink-0", completed ? "bg-green-500" : "bg-gray-300")} />
                                    <span className="truncate">{topic.title}</span>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
