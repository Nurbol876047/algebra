"use client";

import { useState } from "react";
import { Search, Menu } from "lucide-react";
import { getAllTopicsFlat } from "@/data/curriculum";
import Link from "next/link";
import { useProgressStore } from "@/store/useProgressStore";
import { useRouter, usePathname } from "next/navigation";
import { Home } from "lucide-react";

export default function TopBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<ReturnType<typeof getAllTopicsFlat>>([]);
  const router = useRouter();
  const pathname = usePathname();
  const { activeGrade, setActiveGrade } = useProgressStore();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    if (val.trim().length > 2) {
      const all = getAllTopicsFlat();
      const filtered = all.filter((item) =>
        item.topic.title.toLowerCase().includes(val.toLowerCase()) ||
        item.unit.title.toLowerCase().includes(val.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  };

  const navigateTo = (subjectId: string, unitId: string, topicId: string) => {
    setQuery("");
    setResults([]);
    router.push(`/topic/${subjectId}/${unitId}/${topicId}`);
  };

  return (
    <header className="h-16 border-b bg-white flex items-center justify-between px-6 sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <button className="md:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-md">
          <Menu className="w-5 h-5" />
        </button>

        {pathname !== "/" && (
          <Link href="/">
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-full font-bold text-sm transition-colors shadow-sm border border-indigo-100">
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Басты бетке</span>
            </button>
          </Link>
        )}
        
        <div className="relative hidden sm:block">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Тақырыпты іздеу..."
            value={query}
            onChange={handleSearch}
            className="pl-9 pr-4 py-2 w-64 md:w-80 rounded-full border border-gray-200 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
          />
          
          {results.length > 0 && (
            <div className="absolute top-full left-0 mt-2 w-full max-w-md bg-white border shadow-lg rounded-lg overflow-hidden py-2 max-h-96 overflow-y-auto">
              {results.map((res) => (
                <button
                  key={res.topic.id}
                  onClick={() => navigateTo(res.subject.id, res.unit.id, res.topic.id)}
                  className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b last:border-0"
                >
                  <p className="text-sm font-medium text-gray-900">{res.topic.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{res.subject.title} / {res.unit.title}</p>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-full">
        <button
          onClick={() => setActiveGrade(9)}
          className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${
            activeGrade === 9 ? "bg-white text-slate-800 shadow-sm" : "text-gray-500 hover:text-gray-700"
          }`}
        >
          9 Сынып
        </button>
        <button
          onClick={() => setActiveGrade(10)}
          className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${
            activeGrade === 10 ? "bg-white text-slate-800 shadow-sm" : "text-gray-500 hover:text-gray-700"
          }`}
        >
          10 Сынып
        </button>
        <button
          onClick={() => setActiveGrade(11)}
          className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${
            activeGrade === 11 ? "bg-white text-slate-800 shadow-sm" : "text-gray-500 hover:text-gray-700"
          }`}
        >
          11 Сынып
        </button>
      </div>
    </header>
  );
}
