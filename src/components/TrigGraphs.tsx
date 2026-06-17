"use client";

import React from "react";
import { motion } from "framer-motion";

export function TrigIdentityGraph() {
  return (
    <div className="w-full aspect-video bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl flex flex-col items-center justify-center p-6 relative overflow-hidden shadow-inner">
      <h3 className="text-xl font-bold text-white absolute top-4 left-6">Негізгі тепе-теңдіктер</h3>
      <svg viewBox="-120 -120 240 240" className="w-64 h-64 overflow-visible drop-shadow-2xl mt-4">
        <circle cx="0" cy="0" r="100" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
        <line x1="-120" y1="0" x2="120" y2="0" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
        <line x1="0" y1="-120" x2="0" y2="120" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
        <motion.path 
          d="M 0 0 L 80 -60 L 80 0 Z" 
          fill="rgba(56, 189, 248, 0.3)" 
          stroke="#38bdf8" 
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />
        <text x="40" y="-35" fill="white" fontSize="12" fontWeight="bold" transform="rotate(-37 40 -35)">1 (R)</text>
        <text x="85" y="-30" fill="#f472b6" fontSize="14" fontWeight="bold">sin α</text>
        <text x="40" y="15" fill="#34d399" fontSize="14" fontWeight="bold">cos α</text>
        <text x="-60" y="-90" fill="#fbbf24" fontSize="16" fontWeight="bold">sin²α + cos²α = 1</text>
      </svg>
    </div>
  );
}

export function TrigRadiansGraph() {
  return (
    <div className="w-full aspect-video bg-gradient-to-br from-teal-900 to-emerald-900 rounded-2xl flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <h3 className="text-xl font-bold text-white absolute top-4 left-6">Радиан және Градус</h3>
      <svg viewBox="-110 -110 220 220" className="w-64 h-64 mt-4">
        <circle cx="0" cy="0" r="100" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="4" />
        <motion.circle cx="0" cy="0" r="100" fill="none" stroke="#34d399" strokeWidth="6" strokeDasharray="628" initial={{ strokeDashoffset: 628 }} animate={{ strokeDashoffset: 0 }} transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }} />
        <line x1="-110" y1="0" x2="110" y2="0" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
        <line x1="0" y1="-110" x2="0" y2="110" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
        <text x="115" y="5" fill="white" fontSize="14" fontWeight="bold">0 / 2π</text>
        <text x="-15" y="-115" fill="white" fontSize="14" fontWeight="bold">π/2 (90°)</text>
        <text x="-140" y="5" fill="white" fontSize="14" fontWeight="bold">π (180°)</text>
        <text x="-25" y="125" fill="white" fontSize="14" fontWeight="bold">3π/2 (270°)</text>
        <text x="-30" y="-15" fill="#fbbf24" fontSize="18" fontWeight="bold">π = 180°</text>
      </svg>
    </div>
  );
}

export function TrigFunctionsGraph() {
  return (
    <div className="w-full aspect-video bg-gradient-to-br from-rose-900 to-orange-900 rounded-2xl flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <h3 className="text-xl font-bold text-white absolute top-4 left-6">sin, cos, tg, ctg</h3>
      <svg viewBox="-100 -100 200 200" className="w-64 h-64 mt-4">
        <line x1="-100" y1="0" x2="100" y2="0" stroke="white" strokeWidth="1" />
        <line x1="0" y1="-100" x2="0" y2="100" stroke="white" strokeWidth="1" />
        <circle cx="0" cy="0" r="80" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
        <motion.line x1="0" y1="0" x2="60" y2="-52.9" stroke="#fcd34d" strokeWidth="3" initial={{ rotate: 0 }} animate={{ rotate: -360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} />
        <circle cx="60" cy="-52.9" r="6" fill="#fcd34d" />
        <line x1="60" y1="0" x2="60" y2="-52.9" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 4" />
        <line x1="0" y1="-52.9" x2="60" y2="-52.9" stroke="#34d399" strokeWidth="2" strokeDasharray="4 4" />
        <text x="-80" y="-80" fill="white" fontSize="12">x = cos α</text>
        <text x="-80" y="-60" fill="white" fontSize="12">y = sin α</text>
        <text x="-80" y="-40" fill="white" fontSize="12">tg α = y/x</text>
      </svg>
    </div>
  );
}

export function TrigPropertiesGraph() {
  return (
    <div className="w-full aspect-video bg-gradient-to-br from-cyan-900 to-blue-900 rounded-2xl flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <h3 className="text-xl font-bold text-white absolute top-4 left-6">Функциялардың қасиеттері</h3>
      <svg viewBox="0 0 400 200" className="w-full h-48 mt-8">
        <line x1="0" y1="100" x2="400" y2="100" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
        <line x1="200" y1="0" x2="200" y2="200" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
        <motion.path d="M 0 100 Q 50 20 100 100 T 200 100 T 300 100 T 400 100" fill="none" stroke="#f472b6" strokeWidth="3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }} />
        <motion.path d="M 0 20 Q 50 100 100 180 T 200 20 T 300 180 T 400 20" fill="none" stroke="#34d399" strokeWidth="3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }} />
        <text x="10" y="20" fill="#f472b6" fontSize="14" fontWeight="bold">y = sin(x)</text>
        <text x="10" y="40" fill="#34d399" fontSize="14" fontWeight="bold">y = cos(x)</text>
        <text x="210" y="190" fill="white" fontSize="12">Период: 2π</text>
      </svg>
    </div>
  );
}

export function TrigReductionGraph() {
  return (
    <div className="w-full aspect-video bg-gradient-to-br from-violet-900 to-fuchsia-900 rounded-2xl flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <h3 className="text-xl font-bold text-white absolute top-4 left-6">Келтіру формулалары</h3>
      <svg viewBox="-100 -100 200 200" className="w-64 h-64 mt-4">
        <line x1="-100" y1="0" x2="100" y2="0" stroke="white" strokeWidth="2" />
        <line x1="0" y1="-100" x2="0" y2="100" stroke="white" strokeWidth="2" />
        <circle cx="0" cy="0" r="80" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
        <motion.circle cx="60" cy="-52.9" r="6" fill="#34d399" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 1, repeat: Infinity }} />
        <motion.circle cx="-60" cy="-52.9" r="6" fill="#f87171" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 1, repeat: Infinity, delay: 0.5 }} />
        <line x1="0" y1="0" x2="60" y2="-52.9" stroke="#34d399" strokeWidth="2" />
        <line x1="0" y1="0" x2="-60" y2="-52.9" stroke="#f87171" strokeWidth="2" />
        <path d="M 60 -52.9 Q 0 -80 -60 -52.9" fill="none" stroke="#fbbf24" strokeWidth="2" strokeDasharray="5 5" markerEnd="url(#arrow)" />
        <text x="-80" y="-85" fill="white" fontSize="10">π - α</text>
        <text x="60" y="-65" fill="white" fontSize="10">α</text>
        <text x="-60" y="80" fill="white" fontSize="12">sin(π - α) = sin α</text>
      </svg>
    </div>
  );
}

export function TrigSumGraph() {
  return (
    <div className="w-full aspect-video bg-gradient-to-br from-amber-900 to-red-900 rounded-2xl flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <h3 className="text-xl font-bold text-white absolute top-4 left-6">Қосынды формуласы</h3>
      <svg viewBox="0 0 200 200" className="w-64 h-64 mt-4">
        <path d="M 0 200 L 180 200 A 180 180 0 0 0 120 60 Z" fill="rgba(56, 189, 248, 0.4)" stroke="#38bdf8" strokeWidth="2" />
        <path d="M 0 200 L 120 60 A 180 180 0 0 0 0 20 Z" fill="rgba(244, 114, 182, 0.4)" stroke="#f472b6" strokeWidth="2" />
        <text x="100" y="180" fill="white" fontSize="16" fontWeight="bold">α</text>
        <text x="40" y="100" fill="white" fontSize="16" fontWeight="bold">β</text>
        <text x="80" y="30" fill="white" fontSize="16" fontWeight="bold">α + β</text>
        <text x="10" y="20" fill="#fcd34d" fontSize="12">sin(α+β) = sinα cosβ + cosα sinβ</text>
      </svg>
    </div>
  );
}

export function TrigDoubleAngleGraph() {
  return (
    <div className="w-full aspect-video bg-gradient-to-br from-emerald-900 to-cyan-900 rounded-2xl flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <h3 className="text-xl font-bold text-white absolute top-4 left-6">Қос бұрыш</h3>
      <svg viewBox="0 0 200 200" className="w-64 h-64 mt-4">
        <path d="M 20 180 L 180 180 A 160 160 0 0 0 140 80 Z" fill="rgba(52, 211, 153, 0.5)" stroke="#34d399" strokeWidth="2" />
        <path d="M 20 180 L 140 80 A 160 160 0 0 0 20 20 Z" fill="rgba(52, 211, 153, 0.8)" stroke="#34d399" strokeWidth="2" />
        <text x="120" y="160" fill="white" fontSize="18" fontWeight="bold">α</text>
        <text x="70" y="100" fill="white" fontSize="18" fontWeight="bold">α</text>
        <text x="140" y="40" fill="#fcd34d" fontSize="24" fontWeight="bold">2α</text>
        <text x="10" y="15" fill="white" fontSize="12">sin(2α) = 2sinα cosα</text>
      </svg>
    </div>
  );
}

export function TrigHalfAngleGraph() {
  return (
    <div className="w-full aspect-video bg-gradient-to-br from-indigo-950 to-blue-900 rounded-2xl flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <h3 className="text-xl font-bold text-white absolute top-4 left-6">Жарты бұрыш</h3>
      <svg viewBox="0 0 200 200" className="w-64 h-64 mt-4">
        <path d="M 10 190 L 190 190 A 180 180 0 0 0 10 10 Z" fill="rgba(255, 255, 255, 0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
        <path d="M 10 190 L 190 190 A 180 180 0 0 0 137 63 Z" fill="rgba(248, 113, 113, 0.6)" stroke="#f87171" strokeWidth="2" />
        <line x1="10" y1="190" x2="137" y2="63" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
        <text x="140" y="160" fill="white" fontSize="18" fontWeight="bold">α/2</text>
        <text x="60" y="50" fill="white" fontSize="24" fontWeight="bold">α</text>
        <text x="0" y="20" fill="#fcd34d" fontSize="12">sin²(α/2) = (1-cosα)/2</text>
      </svg>
    </div>
  );
}

export function TrigSumProductGraph() {
  return (
    <div className="w-full aspect-video bg-gradient-to-br from-slate-900 to-gray-800 rounded-2xl flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <h3 className="text-xl font-bold text-white absolute top-4 left-6">Қосынды → Көбейтінді</h3>
      <svg viewBox="0 0 400 200" className="w-full h-48 mt-8">
        <motion.path d="M 0 100 Q 25 50 50 100 T 100 100 T 150 100 T 200 100" fill="none" stroke="#38bdf8" strokeWidth="2" />
        <text x="210" y="105" fill="white" fontSize="24" fontWeight="bold">+</text>
        <motion.path d="M 230 100 Q 255 70 280 100 T 330 100 T 380 100" fill="none" stroke="#f472b6" strokeWidth="2" />
        <line x1="200" y1="150" x2="200" y2="180" stroke="white" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="210" y="170" fill="white" fontSize="16" fontWeight="bold">=</text>
        <motion.path d="M 100 180 Q 150 140 200 180 T 300 180" fill="none" stroke="#34d399" strokeWidth="4" />
        <text x="50" y="40" fill="#fbbf24" fontSize="12">sin x + sin y = 2 sin(...) cos(...)</text>
      </svg>
    </div>
  );
}

export function TrigProductSumGraph() {
  return (
    <div className="w-full aspect-video bg-gradient-to-br from-pink-950 to-rose-900 rounded-2xl flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <h3 className="text-xl font-bold text-white absolute top-4 left-6">Көбейтінді → Қосынды</h3>
      <svg viewBox="0 0 400 200" className="w-full h-48 mt-8">
        <rect x="50" y="50" width="80" height="80" rx="10" fill="rgba(255,255,255,0.1)" stroke="#38bdf8" strokeWidth="2" />
        <rect x="170" y="50" width="80" height="80" rx="10" fill="rgba(255,255,255,0.1)" stroke="#f472b6" strokeWidth="2" />
        <text x="145" y="95" fill="white" fontSize="24" fontWeight="bold">×</text>
        <text x="90" y="95" fill="white" fontSize="18" fontWeight="bold" textAnchor="middle">sin α</text>
        <text x="210" y="95" fill="white" fontSize="18" fontWeight="bold" textAnchor="middle">cos β</text>
        <path d="M 270 90 L 320 90" stroke="white" strokeWidth="3" markerEnd="url(#arrow)" />
        <text x="360" y="85" fill="#34d399" fontSize="16" fontWeight="bold" textAnchor="middle">1/2 [sin + sin]</text>
      </svg>
    </div>
  );
}

export function TrigSimplificationGraph() {
  return (
    <div className="w-full aspect-video bg-gradient-to-br from-slate-800 to-indigo-950 rounded-2xl flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <h3 className="text-xl font-bold text-white absolute top-4 left-6">Өрнектерді ықшамдау</h3>
      <svg viewBox="0 0 400 200" className="w-full h-48 mt-8">
        <rect x="50" y="30" width="120" height="40" rx="5" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
        <text x="110" y="55" fill="white" fontSize="14" textAnchor="middle">(1 - cos²α) / sinα</text>
        
        <line x1="110" y1="70" x2="110" y2="100" stroke="white" strokeWidth="2" markerEnd="url(#arrow)" />
        
        <rect x="50" y="100" width="120" height="40" rx="5" fill="#334155" stroke="#94a3b8" strokeWidth="2" />
        <text x="110" y="125" fill="#fcd34d" fontSize="14" textAnchor="middle">sin²α / sinα</text>

        <line x1="170" y1="120" x2="230" y2="120" stroke="white" strokeWidth="2" markerEnd="url(#arrow)" />

        <rect x="230" y="100" width="100" height="40" rx="20" fill="#10b981" stroke="#047857" strokeWidth="2" />
        <text x="280" y="125" fill="white" fontSize="16" fontWeight="bold" textAnchor="middle">sin α</text>
      </svg>
    </div>
  );
}
