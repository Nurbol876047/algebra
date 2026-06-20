"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box, Cylinder, Plane, Sphere, Line } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";

// --- 2D Coordinate System Base ---
function CoordinateSystem({ children }: { children?: React.ReactNode }) {

  return (
    <div className="relative w-full aspect-square max-w-md mx-auto bg-white border-2 border-slate-200 rounded-2xl shadow-inner overflow-hidden">
      <svg viewBox="-10 -10 20 20" className="w-full h-full text-slate-200">
        <defs>
          <pattern id="grid" width="1" height="1" patternUnits="userSpaceOnUse">
            <rect width="1" height="1" fill="none" stroke="currentColor" strokeWidth="0.05" />
          </pattern>
        </defs>
        <rect x="-10" y="-10" width="20" height="20" fill="url(#grid)" />
        
        <line x1="-10" y1="0" x2="10" y2="0" stroke="#94a3b8" strokeWidth="0.1" />
        <line x1="0" y1="-10" x2="0" y2="10" stroke="#94a3b8" strokeWidth="0.1" />
        
        <polygon points="9.5,-0.2 10,0 9.5,0.2" fill="#94a3b8" />
        <polygon points="-0.2,-9.5 0,-10 0.2,-9.5" fill="#94a3b8" />

        <g transform="scale(1, -1)">
          {children}
        </g>
      </svg>
    </div>
  );
}

// --- Algebra 10 Visuals ---

function FunctionGraph() {
  const parabolaPoints = useMemo(() => {
    let pts = "";
    for (let x = -5; x <= 5; x += 0.1) pts += `${x},${x * x} `;
    return pts;
  }, []);

  const hyperbolaPoints1 = useMemo(() => {
    let pts = "";
    for (let x = -10; x <= 1.8; x += 0.1) pts += `${x},${1 / (x - 2)} `;
    return pts;
  }, []);

  const hyperbolaPoints2 = useMemo(() => {
    let pts = "";
    for (let x = 2.2; x <= 10; x += 0.1) pts += `${x},${1 / (x - 2)} `;
    return pts;
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        <polyline points={parabolaPoints} fill="none" stroke="#3b82f6" strokeWidth="0.2" />
        <polyline points={hyperbolaPoints1} fill="none" stroke="#ef4444" strokeWidth="0.2" />
        <polyline points={hyperbolaPoints2} fill="none" stroke="#ef4444" strokeWidth="0.2" />
        <line x1="2" y1="-10" x2="2" y2="10" stroke="#ef4444" strokeWidth="0.05" strokeDasharray="0.2, 0.2" />
      </CoordinateSystem>
      <div className="flex gap-4 text-sm font-bold flex-wrap justify-center">
        <span className="flex items-center gap-2"><div className="w-3 h-3 bg-blue-500 rounded-full"></div>Парабола: y = x²</span>
        <span className="flex items-center gap-2"><div className="w-3 h-3 bg-red-500 rounded-full"></div>Гипербола: y = 1/(x-2)</span>
      </div>
    </div>
  );
}

function ComplexPlaneScene() {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        {/* Axis Labels */}
        <text x="8" y="-0.5" fontSize="1" fill="#64748b" transform="scale(1, -1)">Re</text>
        <text x="0.5" y="-8" fontSize="1" fill="#64748b" transform="scale(1, -1)">Im</text>

        {/* Vector z = 4 + 3i */}
        <line x1="0" y1="0" x2="4" y2="3" stroke="#10b981" strokeWidth="0.2" strokeLinecap="round" />
        <circle cx="4" cy="3" r="0.2" fill="#10b981" />
        <text x="4.5" y="-3.5" fontSize="1" fill="#10b981" transform="scale(1, -1)">z = 4 + 3i</text>
        
        {/* Dashed projections */}
        <line x1="4" y1="0" x2="4" y2="3" stroke="#94a3b8" strokeWidth="0.1" strokeDasharray="0.3,0.3" />
        <line x1="0" y1="3" x2="4" y2="3" stroke="#94a3b8" strokeWidth="0.1" strokeDasharray="0.3,0.3" />
        
        {/* Coordinate values */}
        <text x="3.8" y="1" fontSize="1" fill="#64748b" transform="scale(1, -1)">4</text>
        <text x="-1.5" y="-2.8" fontSize="1" fill="#64748b" transform="scale(1, -1)">3i</text>
      </CoordinateSystem>
      
      <div className="bg-slate-50 text-slate-700 px-6 py-4 rounded-xl text-center shadow-sm w-full max-w-md border border-slate-200">
        <h4 className="font-bold mb-2">Комплекс жазықтық</h4>
        <p className="text-sm opacity-80">
          Көлденең ось - нақты бөлігі (Re), тік ось - жорамал бөлігі (Im).
          z = 4 + 3i саны жазықтықта вектор ретінде кескінделеді. Оның модулі |z| = 5.
        </p>
      </div>
    </div>
  );
}

function UnitCircle() {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        <circle cx="0" cy="0" r="5" fill="none" stroke="#3b82f6" strokeWidth="0.1" />
        <path d="M 0 0 L 3.535 3.535" stroke="#ef4444" strokeWidth="0.1" />
        <path d="M 3.535 3.535 L 3.535 0" stroke="#10b981" strokeWidth="0.1" strokeDasharray="0.2, 0.2" />
        <path d="M 3.535 0 L 0 0" stroke="#8b5cf6" strokeWidth="0.1" />
        <path d="M 1.5 0 A 1.5 1.5 0 0 1 1.06 1.06" fill="none" stroke="#ef4444" strokeWidth="0.1" />
        <circle cx="3.535" cy="3.535" r="0.2" fill="#ef4444" />
      </CoordinateSystem>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-bold bg-white p-4 rounded-xl border border-slate-200 w-full max-w-md">
        <span className="flex items-center gap-2"><div className="w-3 h-3 bg-blue-500 rounded-full"></div> Радиус = 1</span>
        <span className="flex items-center gap-2"><div className="w-3 h-3 bg-red-500 rounded-full"></div> Бұрыш</span>
        <span className="flex items-center gap-2"><div className="w-3 h-3 bg-green-500 rounded-full"></div> sin(α)</span>
        <span className="flex items-center gap-2"><div className="w-3 h-3 bg-purple-500 rounded-full"></div> cos(α)</span>
      </div>
    </div>
  );
}

function LimitsGraph() {
  const curve = useMemo(() => {
    let pts = "";
    for (let x = -8; x <= 8; x += 0.1) {
      if (Math.abs(x - 2) > 0.1) pts += `${x},${Math.sin(x) + x} `;
    }
    return pts;
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        <polyline points={curve} fill="none" stroke="#3b82f6" strokeWidth="0.2" />
        {/* Hole at x=2 */}
        <circle cx="2" cy={Math.sin(2) + 2} r="0.3" fill="white" stroke="#3b82f6" strokeWidth="0.1" />
        <line x1="2" y1="0" x2="2" y2={Math.sin(2) + 2} stroke="#94a3b8" strokeDasharray="0.2,0.2" strokeWidth="0.1" />
        <line x1="0" y1={Math.sin(2) + 2} x2="2" y2={Math.sin(2) + 2} stroke="#94a3b8" strokeDasharray="0.2,0.2" strokeWidth="0.1" />
      </CoordinateSystem>
      <div className="text-sm font-bold bg-white p-4 rounded-xl border border-slate-200">
        lim(x→2) f(x) = L (функцияда x=2 нүктесінде үзіліс бар, бірақ шегі бар)
      </div>
    </div>
  );
}

function DerivativeGraph() {
  const curve = useMemo(() => {
    let pts = "";
    for (let x = -8; x <= 8; x += 0.1) pts += `${x},${Math.sin(x) * 3} `;
    return pts;
  }, []);
  
  // Tangent line at x=0
  // f(x) = 3*sin(x), f'(x) = 3*cos(x)
  // at x=0: y=0, m=3 -> y = 3x
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        <polyline points={curve} fill="none" stroke="#3b82f6" strokeWidth="0.2" />
        <line x1="-3" y1="-9" x2="3" y2="9" stroke="#ef4444" strokeWidth="0.15" />
        <circle cx="0" cy="0" r="0.3" fill="#ef4444" />
      </CoordinateSystem>
      <div className="text-sm font-bold bg-white p-4 rounded-xl border border-slate-200">
        <span className="text-blue-500">f(x)</span> қисығына x=0 нүктесінде жүргізілген <span className="text-red-500">жанама (f'(0))</span>
      </div>
    </div>
  );
}

function ExtremaGraph() {
  const curve = useMemo(() => {
    let pts = "";
    // Cubic function: y = x^3/4 - 3x
    for (let x = -8; x <= 8; x += 0.1) pts += `${x},${(Math.pow(x, 3)/4) - 3*x} `;
    return pts;
  }, []);
  
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        <polyline points={curve} fill="none" stroke="#3b82f6" strokeWidth="0.2" />
        {/* Maximum at x = -2: y = -8/4 - 3(-2) = -2 + 6 = 4 */}
        <circle cx="-2" cy="4" r="0.3" fill="#ef4444" />
        <text x="-2" y="5.5" fontSize="1" fill="#ef4444" textAnchor="middle" transform="scale(1,-1)">MAX</text>
        {/* Minimum at x = 2: y = 8/4 - 3(2) = 2 - 6 = -4 */}
        <circle cx="2" cy="-4" r="0.3" fill="#10b981" />
        <text x="2" y="-5.5" fontSize="1" fill="#10b981" textAnchor="middle" transform="scale(1,-1)">MIN</text>
      </CoordinateSystem>
      <div className="text-sm font-bold bg-white p-4 rounded-xl border border-slate-200">
        Функцияның локальді максимумы және минимумы (f'(x) = 0 нүктелері)
      </div>
    </div>
  );
}
function SpecificStatisticsHistogramGraph() {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        {/* We will draw bars for 3, 4, and 5 */}
        {/* y-axis is frequency (1, 2, 3), x-axis is grade (3, 4, 5) */}
        
        {/* Grade 3: count 2 */}
        <rect x="2.5" y="0" width="1" height="2" fill="#3b82f6" fillOpacity="0.8" />
        <text x="3" y="-1" fontSize="0.8" fill="#3b82f6" textAnchor="middle" transform="scale(1,-1)">«3»</text>
        <text x="3" y="2.2" fontSize="0.8" fill="#3b82f6" textAnchor="middle" transform="scale(1,-1)">2 рет</text>

        {/* Grade 4: count 3 */}
        <rect x="3.5" y="0" width="1" height="3" fill="#ef4444" fillOpacity="0.8" />
        <text x="4" y="-1" fontSize="0.8" fill="#ef4444" textAnchor="middle" transform="scale(1,-1)">«4»</text>
        <text x="4" y="3.2" fontSize="0.8" fill="#ef4444" textAnchor="middle" transform="scale(1,-1)">3 рет</text>

        {/* Grade 5: count 2 */}
        <rect x="4.5" y="0" width="1" height="2" fill="#10b981" fillOpacity="0.8" />
        <text x="5" y="-1" fontSize="0.8" fill="#10b981" textAnchor="middle" transform="scale(1,-1)">«5»</text>
        <text x="5" y="2.2" fontSize="0.8" fill="#10b981" textAnchor="middle" transform="scale(1,-1)">2 рет</text>
        
        {/* Mean line at x = 4 */}
        <line x1="4" y1="0" x2="4" y2="4" stroke="#f59e0b" strokeWidth="0.1" strokeDasharray="0.2,0.2" />
        <text x="4" y="4.5" fontSize="0.7" fill="#f59e0b" textAnchor="middle" transform="scale(1,-1)">Орташа = 4</text>
      </CoordinateSystem>
      <div className="text-sm font-bold bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm w-full max-w-md">
        <h4 className="text-slate-800 mb-2">Нақты мысал: Бағалар жиілігі (Гистограмма)</h4>
        <div className="flex flex-col gap-2 text-left pl-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="opacity-80">Берілген бағалар: <strong>3, 4, 5, 4, 4, 3, 5</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
            <span className="opacity-80">Мода: ең биік баған — <strong>4</strong> (3 рет кездесті).</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
            <span className="font-bold text-amber-600">Орташа мән: (3×2 + 4×3 + 5×2) / 7 = 28 / 7 = 4.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Geometry 10 Visuals (3D) ---

function StereometryScene() {
  return (
    <div className="w-full aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-inner relative">
      <Canvas camera={{ position: [0, 5, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <directionalLight position={[-5, 5, 5]} intensity={0.5} color="blue" />
        
        <group position={[-2, 0, 0]}>
          <Box args={[2, 2, 2]}>
            <meshStandardMaterial color="#3b82f6" transparent opacity={0.8} />
          </Box>
          <Box args={[2.01, 2.01, 2.01]}>
            <meshBasicMaterial color="white" wireframe={true} />
          </Box>
        </group>

        <group position={[2, 0, 0]}>
          <Cylinder args={[0, 1.5, 2.5, 3]}>
            <meshStandardMaterial color="#ef4444" transparent opacity={0.8} />
          </Cylinder>
          <Cylinder args={[0, 1.51, 2.51, 3]}>
            <meshBasicMaterial color="white" wireframe={true} />
          </Cylinder>
        </group>
        <OrbitControls autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
}

function ParallelismScene() {
  return (
    <div className="w-full aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-inner relative">
      <Canvas camera={{ position: [5, 5, 5], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <Plane args={[5, 5]} position={[0, -1, 0]} rotation={[-Math.PI/2, 0, 0]}>
          <meshStandardMaterial color="#3b82f6" transparent opacity={0.5} side={THREE.DoubleSide} />
        </Plane>
        <Plane args={[5, 5]} position={[0, 1, 0]} rotation={[-Math.PI/2, 0, 0]}>
          <meshStandardMaterial color="#10b981" transparent opacity={0.5} side={THREE.DoubleSide} />
        </Plane>
        <OrbitControls autoRotate autoRotateSpeed={1} />
      </Canvas>
      <div className="absolute bottom-4 left-4 text-white text-sm font-bold bg-black/50 px-4 py-2 rounded-lg">
        Кеңістіктегі параллель жазықтықтар
      </div>
    </div>
  );
}

function PerpendicularityScene() {
  return (
    <div className="w-full aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-inner relative">
      <Canvas camera={{ position: [5, 5, 5], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <Plane args={[5, 5]} position={[0, 0, 0]} rotation={[-Math.PI/2, 0, 0]}>
          <meshStandardMaterial color="#3b82f6" transparent opacity={0.5} side={THREE.DoubleSide} />
        </Plane>
        <Plane args={[5, 5]} position={[0, 2.5, 0]} rotation={[0, 0, 0]}>
          <meshStandardMaterial color="#ef4444" transparent opacity={0.5} side={THREE.DoubleSide} />
        </Plane>
        {/* Perpendicular line */}
        <Cylinder args={[0.05, 0.05, 5]} position={[0, 0, 0]}>
          <meshBasicMaterial color="white" />
        </Cylinder>
        <OrbitControls autoRotate autoRotateSpeed={1} />
      </Canvas>
      <div className="absolute bottom-4 left-4 text-white text-sm font-bold bg-black/50 px-4 py-2 rounded-lg">
        Жазықтықтардың және түзулердің перпендикулярлығы (90°)
      </div>
    </div>
  );
}

function VectorsScene() {
  return (
    <div className="w-full aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-inner relative">
      <Canvas camera={{ position: [3, 3, 5], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <axesHelper args={[5]} />
        <group>
          {/* Vector a */}
          <Cylinder args={[0.05, 0.05, 3]} position={[1.5, 1.5, 0]} rotation={[0, 0, -Math.PI/4]}>
            <meshBasicMaterial color="#3b82f6" />
          </Cylinder>
          <Cylinder args={[0, 0.2, 0.5]} position={[3, 3, 0]} rotation={[0, 0, -Math.PI/4]}>
            <meshBasicMaterial color="#3b82f6" />
          </Cylinder>
        </group>
        <OrbitControls autoRotate autoRotateSpeed={1} />
      </Canvas>
      <div className="absolute bottom-4 left-4 text-white text-sm font-bold bg-black/50 px-4 py-2 rounded-lg">
        Кеңістіктегі векторлар (x, y, z осьтері)
      </div>
    </div>
  );
}

function VectorsAdditionScene() {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        <defs>
          <marker id="arrowBlue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6" />
          </marker>
          <marker id="arrowRed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
          </marker>
          <marker id="arrowGreen" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981" />
          </marker>
        </defs>

        <line x1="0" y1="0" x2="4" y2="2" stroke="#3b82f6" strokeWidth="0.2" markerEnd="url(#arrowBlue)" />
        <text x="2" y="-2.5" fontSize="1" fill="#3b82f6" transform="scale(1,-1)">a</text>

        <line x1="4" y1="2" x2="6" y2="6" stroke="#ef4444" strokeWidth="0.2" markerEnd="url(#arrowRed)" />
        <text x="5.5" y="-3.5" fontSize="1" fill="#ef4444" transform="scale(1,-1)">b</text>

        <line x1="0" y1="0" x2="6" y2="6" stroke="#10b981" strokeWidth="0.2" strokeDasharray="0.2,0.2" markerEnd="url(#arrowGreen)" />
        <text x="2" y="-4" fontSize="1" fill="#10b981" transform="scale(1,-1)">a + b</text>
      </CoordinateSystem>
      <div className="text-sm font-bold bg-white p-4 rounded-xl border border-slate-200">
        Векторларды қосу (Үшбұрыш ережесі)
      </div>
    </div>
  );
}

function ScalarProductScene() {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        <defs>
          <marker id="arrowBlue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6" />
          </marker>
          <marker id="arrowRed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
          </marker>
        </defs>

        {/* Vector a(1, 2) scaled by 2 -> (2, 4) */}
        <line x1="0" y1="0" x2="2" y2="4" stroke="#3b82f6" strokeWidth="0.2" markerEnd="url(#arrowBlue)" />
        <text x="1.5" y="-4.5" fontSize="1" fill="#3b82f6" transform="scale(1,-1)">a(1; 2)</text>

        {/* Vector b(3, -1) scaled by 2 -> (6, -2) */}
        <line x1="0" y1="0" x2="6" y2="-2" stroke="#ef4444" strokeWidth="0.2" markerEnd="url(#arrowRed)" />
        <text x="6" y="3.5" fontSize="1" fill="#ef4444" transform="scale(1,-1)">b(3; -1)</text>

        {/* Angle arc between them */}
        <path d="M 1.42 -0.47 A 1.5 1.5 0 0 0 0.67 1.34" fill="none" stroke="#10b981" strokeWidth="0.15" />
        <text x="1.8" y="-0.5" fontSize="1" fill="#10b981" transform="scale(1,-1)">φ</text>

      </CoordinateSystem>
      <div className="text-sm font-bold bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm w-full max-w-md">
        <h4 className="text-slate-800 mb-2">Нақты мысал: Скаляр көбейтінді</h4>
        <div className="opacity-80">
          a · b = x₁x₂ + y₁y₂ = 1 × 3 + 2 × (-1) = <span className="text-red-500 font-bold">1</span>
        </div>
        <div className="text-xs mt-2 text-slate-500">
          (Графикте көрнекілік үшін векторлар 2 есе үлкейтіліп сызылған)
        </div>
      </div>
    </div>
  );
}

function TriangleScene() {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        {/* Triangle vertices: A(0,0), B(6,0), C(4,5) */}
        <polygon points="0,0 6,0 4,5" fill="none" stroke="#3b82f6" strokeWidth="0.2" />
        
        {/* Vertices text */}
        <text x="-0.5" y="0.5" fontSize="1" fill="#94a3b8" transform="scale(1,-1)">A</text>
        <text x="6.2" y="0.5" fontSize="1" fill="#94a3b8" transform="scale(1,-1)">B</text>
        <text x="3.8" y="-5.5" fontSize="1" fill="#94a3b8" transform="scale(1,-1)">C</text>

        {/* Sides text */}
        <text x="3" y="-0.5" fontSize="1" fill="#ef4444" transform="scale(1,-1)">c</text>
        <text x="1.5" y="-3" fontSize="1" fill="#10b981" transform="scale(1,-1)">b</text>
        <text x="5.2" y="-3" fontSize="1" fill="#8b5cf6" transform="scale(1,-1)">a</text>

        {/* Angles text */}
        <text x="0.8" y="-0.5" fontSize="0.8" fill="#3b82f6" transform="scale(1,-1)">α</text>
        <text x="4.8" y="-0.5" fontSize="0.8" fill="#3b82f6" transform="scale(1,-1)">β</text>
        <text x="3.8" y="-4" fontSize="0.8" fill="#3b82f6" transform="scale(1,-1)">γ</text>
      </CoordinateSystem>
      <div className="text-sm font-bold bg-white p-4 rounded-xl border border-slate-200 text-center">
        Синустар теоремасы: a / sin(α) = b / sin(β) = c / sin(γ)<br/>
        Косинустар теоремасы: c² = a² + b² - 2ab · cos(γ)
      </div>
    </div>
  );
}

function AnalyticGeometryScene() {
  return (
    <div className="w-full aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-inner relative">
      <Canvas camera={{ position: [5, 5, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <axesHelper args={[4]} />
        
        {/* Sphere */}
        <Sphere args={[2, 32, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#8b5cf6" transparent opacity={0.6} wireframe={true} />
        </Sphere>
        {/* Plane cutting the sphere */}
        <Plane args={[6, 6]} position={[0, 0, 0]} rotation={[-Math.PI/2, 0, 0]}>
          <meshStandardMaterial color="#3b82f6" transparent opacity={0.4} side={THREE.DoubleSide} />
        </Plane>
        
        <OrbitControls autoRotate autoRotateSpeed={1} />
      </Canvas>
      <div className="absolute bottom-4 left-4 text-white text-sm font-bold bg-black/50 px-4 py-2 rounded-lg">
        Аналитикалық геометрия: Сфера және жазықтық
      </div>
    </div>
  );
}


function SpecificPrismScene() {
  return (
    <div className="w-full aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-inner relative flex flex-col">
      <Canvas camera={{ position: [5, 4, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <Box args={[2, 5, 2]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#10b981" transparent opacity={0.6} wireframe={false} />
        </Box>
        <Box args={[2.01, 5.01, 2.01]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#34d399" wireframe={true} />
        </Box>
        
        <OrbitControls autoRotate autoRotateSpeed={1.5} />
      </Canvas>
      <div className="absolute bottom-4 left-4 right-4 text-white text-sm bg-black/60 px-4 py-3 rounded-lg flex flex-col gap-1 backdrop-blur-md">
        <span className="font-bold text-green-400">Нақты мысал: Дұрыс төртбұрышты призма</span>
        <span>Табан қабырғасы a = 4, биіктігі h = 10.</span>
        <span>Толық бетінің ауданы: S = 192.</span>
      </div>
    </div>
  );
}

function SpecificPyramidScene() {
  return (
    <div className="w-full aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-inner relative flex flex-col">
      <Canvas camera={{ position: [5, 4, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <Cylinder args={[0, 2.12, 2, 4]} position={[0, 0, 0]} rotation={[0, Math.PI / 4, 0]}>
          <meshStandardMaterial color="#f59e0b" transparent opacity={0.7} />
        </Cylinder>
        <Cylinder args={[0, 2.13, 2.01, 4]} position={[0, 0, 0]} rotation={[0, Math.PI / 4, 0]}>
          <meshStandardMaterial color="#fbbf24" wireframe={true} />
        </Cylinder>

        <Line points={[[0, -1, 0], [0, 1, 0]]} color="#ef4444" lineWidth={2} />
        
        <OrbitControls autoRotate autoRotateSpeed={1.5} />
      </Canvas>
      <div className="absolute bottom-4 left-4 right-4 text-white text-sm bg-black/60 px-4 py-3 rounded-lg flex flex-col gap-1 backdrop-blur-md">
        <span className="font-bold text-amber-400">Нақты мысал: Дұрыс төртбұрышты пирамида</span>
        <span>Табан қабырғасы a = 6, биіктігі h = 4, апофемасы l = 5.</span>
        <span>Толық бетінің ауданы: S = 96.</span>
      </div>
    </div>
  );
}

function SpecificConeScene() {
  return (
    <div className="w-full aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-inner relative flex flex-col">
      <Canvas camera={{ position: [5, 4, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <Cylinder args={[0, 3, 4, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#3b82f6" transparent opacity={0.6} />
        </Cylinder>
        <Cylinder args={[0, 3.01, 4.01, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#60a5fa" wireframe={true} />
        </Cylinder>
        
        <Line points={[[0, -2, 0], [0, 2, 0]]} color="#ef4444" lineWidth={2} />
        <Line points={[[0, -2, 0], [3, -2, 0]]} color="#10b981" lineWidth={2} />
        <Line points={[[0, 2, 0], [3, -2, 0]]} color="#f59e0b" lineWidth={2} />

        <OrbitControls autoRotate autoRotateSpeed={1.5} />
      </Canvas>
      <div className="absolute bottom-4 left-4 right-4 text-white text-sm bg-black/60 px-4 py-3 rounded-lg flex flex-col gap-1 backdrop-blur-md">
        <span className="font-bold text-blue-400">Нақты мысал: Конус ауданы</span>
        <span>Табан радиусы R = 3, биіктігі h = 4, жасаушысы l = 5.</span>
        <span>Бүйір беті: S = 15π.</span>
      </div>
    </div>
  );
}

function SpecificSphereAreaScene() {
  return (
    <div className="w-full aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-inner relative flex flex-col">
      <Canvas camera={{ position: [6, 4, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <Sphere args={[3, 32, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#8b5cf6" transparent opacity={0.4} />
        </Sphere>
        <Sphere args={[3.02, 16, 16]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#c4b5fd" wireframe={true} opacity={0.3} transparent />
        </Sphere>
        
        <Line points={[[0,0,0], [3,0,0]]} color="#ef4444" lineWidth={3} />
        
        <OrbitControls autoRotate autoRotateSpeed={1} />
      </Canvas>
      <div className="absolute bottom-4 left-4 right-4 text-white text-sm bg-black/60 px-4 py-3 rounded-lg flex flex-col gap-1 backdrop-blur-md">
        <span className="font-bold text-purple-400">Нақты мысал: Сфера ауданы</span>
        <span>Радиусы R = 5 см сфера.</span>
        <span>Сфера ауданы: S = 4πR² = 100π.</span>
      </div>
    </div>
  );
}

function SpecificAllVolumesScene() {
  return (
    <div className="w-full aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-inner relative flex flex-col">
      <Canvas camera={{ position: [0, 5, 12], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        {/* Sphere */}
        <Sphere args={[1, 32, 32]} position={[-5, 0, 0]}>
          <meshStandardMaterial color="#ec4899" transparent opacity={0.8} />
        </Sphere>
        
        {/* Cylinder */}
        <Cylinder args={[1, 1, 2, 32]} position={[-2.5, 0, 0]}>
          <meshStandardMaterial color="#3b82f6" transparent opacity={0.8} />
        </Cylinder>
        
        {/* Cone */}
        <Cylinder args={[0, 1, 2, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#ef4444" transparent opacity={0.8} />
        </Cylinder>
        
        {/* Prism */}
        <Box args={[1.5, 2, 1.5]} position={[2.5, 0, 0]}>
          <meshStandardMaterial color="#10b981" transparent opacity={0.8} />
        </Box>
        
        {/* Pyramid */}
        <Cylinder args={[0, 1.2, 2, 4]} position={[5, 0, 0]} rotation={[0, Math.PI / 4, 0]}>
          <meshStandardMaterial color="#f59e0b" transparent opacity={0.8} />
        </Cylinder>
        
        <OrbitControls autoRotate autoRotateSpeed={1} />
      </Canvas>
      <div className="absolute bottom-4 left-4 right-4 text-white text-sm bg-black/60 px-4 py-3 rounded-lg flex flex-col gap-1 backdrop-blur-md">
        <span className="font-bold text-teal-400">Кеңістік денелерінің көлемдері</span>
        <span>Шар, Цилиндр, Конус, Призма, Пирамида.</span>
        <span>Цилиндр мен конустың табаны мен биіктігі бірдей болса: V(цил) = 3 × V(конус).</span>
      </div>
    </div>
  );
}

function PlatonicSolidsScene() {
  return (
    <div className="w-full aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-inner relative flex flex-col">
      <Canvas camera={{ position: [5, 4, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <mesh position={[-2, 0, 0]}>
          <octahedronGeometry args={[1.5]} />
          <meshStandardMaterial color="#8b5cf6" transparent opacity={0.8} />
        </mesh>
        <mesh position={[2, 0, 0]}>
          <icosahedronGeometry args={[1.5]} />
          <meshStandardMaterial color="#ec4899" transparent opacity={0.8} />
        </mesh>

        <OrbitControls autoRotate autoRotateSpeed={1.5} />
      </Canvas>
      <div className="absolute bottom-4 left-4 right-4 text-white text-sm bg-black/60 px-4 py-3 rounded-lg flex flex-col gap-1 backdrop-blur-md">
        <span className="font-bold text-fuchsia-400">Нақты мысал: Платон денелері</span>
        <span>Октаэдр (8 жақ) және Икосаэдр (20 жақ).</span>
        <span>Барлық жақтары дұрыс үшбұрыштардан тұрады.</span>
      </div>
    </div>
  );
}

function CylinderConeScene() {
  return (
    <div className="w-full aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-inner relative flex flex-col">
      <Canvas camera={{ position: [0, 4, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <mesh position={[-2, 0, 0]}>
          <cylinderGeometry args={[1.5, 1.5, 3, 32]} />
          <meshStandardMaterial color="#3b82f6" transparent opacity={0.8} />
        </mesh>
        
        <mesh position={[2, 0, 0]}>
          <cylinderGeometry args={[0, 1.5, 3, 32]} />
          <meshStandardMaterial color="#ef4444" transparent opacity={0.8} />
        </mesh>
        
        <OrbitControls autoRotate autoRotateSpeed={1.5} />
      </Canvas>
      <div className="absolute bottom-4 left-4 right-4 text-white text-sm bg-black/60 px-4 py-3 rounded-lg flex flex-col gap-1 backdrop-blur-md">
        <span className="font-bold text-blue-400">Нақты мысал: Айналу денелері</span>
        <span>Цилиндр (тіктөртбұрышты айналдыру) және Конус (үшбұрышты айналдыру).</span>
      </div>
    </div>
  );
}

function NonLinearSystemGraph() {
  const linePoints = useMemo(() => {
    let pts = "";
    for (let x = -10; x <= 10; x += 0.5) pts += `${x},${x + 1} `;
    return pts;
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        {/* Circle: x^2 + y^2 = 25 (r=5) */}
        <circle cx="0" cy="0" r="5" fill="none" stroke="#10b981" strokeWidth="0.2" />
        
        {/* Line: y = x + 1 */}
        <polyline points={linePoints} fill="none" stroke="#3b82f6" strokeWidth="0.2" />
        
        {/* Intersections: (3, 4) and (-4, -3) */}
        <circle cx="3" cy="4" r="0.3" fill="#ef4444" />
        <text x="3.5" y="-4.5" fontSize="1" fill="#ef4444" transform="scale(1,-1)">(3; 4)</text>

        <circle cx="-4" cy="-3" r="0.3" fill="#ef4444" />
        <text x="-7.5" y="2.5" fontSize="1" fill="#ef4444" transform="scale(1,-1)">(-4; -3)</text>
      </CoordinateSystem>
      <div className="bg-slate-50 text-slate-700 px-6 py-4 rounded-xl text-center shadow-sm w-full max-w-md border border-slate-200">
        <h4 className="font-bold mb-2">Графиктік тәсіл</h4>
        <p className="text-sm opacity-80">
          x² + y² = 25 шеңбері мен y = x + 1 түзуінің қиылысу нүктелері теңдеулер жүйесінің шешімі болады:<br/>
          <span className="font-bold text-red-500">(3; 4) және (-4; -3)</span>
        </p>
      </div>
    </div>
  );
}

function SequenceGraph() {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        {/* Axis Labels */}
        <text x="8" y="-1" fontSize="1" fill="#64748b" transform="scale(1,-1)">n</text>
        <text x="0.5" y="-8" fontSize="1" fill="#64748b" transform="scale(1,-1)">y_n</text>

        {/* Arithmetic: a_n = 1 + 2(n-1) -> (1,1), (2,3), (3,5), (4,7), (5,9) */}
        <polyline points="1,1 2,3 3,5 4,7 5,9" fill="none" stroke="#3b82f6" strokeWidth="0.2" />
        <circle cx="1" cy="1" r="0.3" fill="#3b82f6" />
        <circle cx="2" cy="3" r="0.3" fill="#3b82f6" />
        <circle cx="3" cy="5" r="0.3" fill="#3b82f6" />
        <circle cx="4" cy="7" r="0.3" fill="#3b82f6" />
        <circle cx="5" cy="9" r="0.3" fill="#3b82f6" />

        {/* Geometric: b_n = 1 * 2^(n-1) -> (1,1), (2,2), (3,4), (4,8) */}
        <polyline points="1,1 2,2 3,4 4,8" fill="none" stroke="#10b981" strokeWidth="0.2" />
        <circle cx="1" cy="1" r="0.3" fill="#10b981" />
        <circle cx="2" cy="2" r="0.3" fill="#10b981" />
        <circle cx="3" cy="4" r="0.3" fill="#10b981" />
        <circle cx="4" cy="8" r="0.3" fill="#10b981" />
      </CoordinateSystem>
      <div className="bg-slate-50 text-slate-700 px-6 py-4 rounded-xl text-center shadow-sm w-full max-w-md border border-slate-200">
        <h4 className="font-bold mb-2">Тізбектердің өсу графигі</h4>
        <div className="flex flex-col gap-2 text-sm opacity-80">
          <div className="flex items-center gap-2 justify-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span>Арифметикалық прогрессия (түзу сызықты)</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>Геометриялық прогрессия (экспоненциалды)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TransformationsGraph() {
  const baseParabola = useMemo(() => {
    let pts = "";
    for (let x = -5; x <= 5; x += 0.1) pts += `${x},${x * x} `;
    return pts;
  }, []);

  const upParabola = useMemo(() => {
    let pts = "";
    for (let x = -5; x <= 5; x += 0.1) pts += `${x},${x * x + 4} `;
    return pts;
  }, []);

  const rightParabola = useMemo(() => {
    let pts = "";
    for (let x = -2; x <= 8; x += 0.1) pts += `${x},${(x - 3) * (x - 3)} `;
    return pts;
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        <defs>
          <marker id="arrowBlueTr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6" />
          </marker>
          <marker id="arrowGreenTr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981" />
          </marker>
        </defs>

        {/* Base: y = x^2 */}
        <polyline points={baseParabola} fill="none" stroke="#94a3b8" strokeWidth="0.15" strokeDasharray="0.3,0.3" />
        
        {/* Up: y = x^2 + 4 */}
        <polyline points={upParabola} fill="none" stroke="#3b82f6" strokeWidth="0.2" />
        <line x1="0" y1="0" x2="0" y2="3.8" stroke="#3b82f6" strokeWidth="0.1" strokeDasharray="0.2,0.2" markerEnd="url(#arrowBlueTr)" />

        {/* Right: y = (x-3)^2 */}
        <polyline points={rightParabola} fill="none" stroke="#10b981" strokeWidth="0.2" />
        <line x1="0" y1="0" x2="2.8" y2="0" stroke="#10b981" strokeWidth="0.1" strokeDasharray="0.2,0.2" markerEnd="url(#arrowGreenTr)" />
      </CoordinateSystem>
      <div className="text-sm font-bold bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm w-full max-w-md">
        <h4 className="text-slate-800 mb-2">Нақты мысал: Графиктерді түрлендіру</h4>
        <div className="flex flex-col gap-2 text-left pl-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-slate-400 rounded-full"></div>
            <span className="opacity-80">Негізгі функция: y = x²</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="opacity-80">1-мысал: y = x² + 4 (4 бірлік жоғары)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="opacity-80">2-мысал: y = (x-3)² (3 бірлік оңға)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function EquationsGraph() {
  const quadParabola = useMemo(() => {
    let pts = "";
    for (let x = -1; x <= 3.5; x += 0.1) {
      pts += `${x},${2 * x * x - 5 * x + 3} `;
    }
    return pts;
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        {/* Quadratic: y = 2x^2 - 5x + 3 */}
        <polyline points={quadParabola} fill="none" stroke="#3b82f6" strokeWidth="0.15" />
        {/* Roots for quadratic: x=1, x=1.5 */}
        <circle cx="1" cy="0" r="0.2" fill="#3b82f6" />
        <circle cx="1.5" cy="0" r="0.2" fill="#3b82f6" />
        <text x="0.5" y="-1" fontSize="0.7" fill="#3b82f6" transform="scale(1,-1)">x₁=1</text>
        <text x="1.6" y="-1" fontSize="0.7" fill="#3b82f6" transform="scale(1,-1)">x₂=1.5</text>
        
        {/* Rational line: y = x + 2 (with hole at x=2) */}
        <line x1="-8" y1="-6" x2="1.8" y2="3.8" stroke="#10b981" strokeWidth="0.15" />
        <line x1="2.2" y1="4.2" x2="6" y2="8" stroke="#10b981" strokeWidth="0.15" />
        {/* Root for rational: x=-2 */}
        <circle cx="-2" cy="0" r="0.2" fill="#10b981" />
        <text x="-3.5" y="0.5" fontSize="0.7" fill="#10b981" transform="scale(1,-1)">x=-2</text>
        
        {/* Hole at x=2, y=4 */}
        <circle cx="2" cy="4" r="0.2" fill="white" stroke="#ef4444" strokeWidth="0.1" />
        <text x="2.5" y="4" fontSize="0.7" fill="#ef4444" transform="scale(1,-1)">x≠2 (Бөгде түбір)</text>

      </CoordinateSystem>
      <div className="text-sm font-bold bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm w-full max-w-md">
        <h4 className="text-slate-800 mb-2">Нақты мысал: Теңдеулердің графиктік шешімі</h4>
        <div className="flex flex-col gap-2 text-left pl-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="opacity-80">1-мысал: 2x² - 5x + 3 = 0. Түбірлері: x=1, x=1.5</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="opacity-80">2-мысал: (x² - 4)/(x - 2) = 0. Түбірі: x=-2</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 border-2 border-red-500 rounded-full bg-white"></div>
            <span className="opacity-80">Бөгде түбір: x=2 (Бөлшектің бөлімі 0-ге тең)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function InequalityGraph() {
  const parabola = useMemo(() => {
    let pts = "";
    for (let x = -4; x <= 5; x += 0.1) pts += `${x},${x * x - x - 6} `;
    return pts;
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        {/* Highlighted positive areas */}
        <rect x="-10" y="-10" width="8" height="20" fill="#10b981" fillOpacity="0.1" />
        <rect x="3" y="-10" width="7" height="20" fill="#10b981" fillOpacity="0.1" />

        {/* The parabola y = x^2 - x - 6 */}
        <polyline points={parabola} fill="none" stroke="#3b82f6" strokeWidth="0.15" />
        
        {/* x-axis interval markings */}
        <line x1="-10" y1="0" x2="-2" y2="0" stroke="#10b981" strokeWidth="0.2" />
        <line x1="3" y1="0" x2="10" y2="0" stroke="#10b981" strokeWidth="0.2" />
        <line x1="-2" y1="0" x2="3" y2="0" stroke="#ef4444" strokeWidth="0.2" />

        {/* Roots: x=-2, x=3 */}
        <circle cx="-2" cy="0" r="0.2" fill="white" stroke="#10b981" strokeWidth="0.1" />
        <circle cx="3" cy="0" r="0.2" fill="white" stroke="#10b981" strokeWidth="0.1" />
        
        <text x="-2.5" y="-1" fontSize="0.7" fill="#10b981" transform="scale(1,-1)">-2</text>
        <text x="3" y="-1" fontSize="0.7" fill="#10b981" transform="scale(1,-1)">3</text>

        <text x="-6" y="2" fontSize="0.8" fill="#10b981" transform="scale(1,-1)">+ (оң)</text>
        <text x="0.5" y="-2" fontSize="0.8" fill="#ef4444" transform="scale(1,-1)">- (теріс)</text>
        <text x="4" y="2" fontSize="0.8" fill="#10b981" transform="scale(1,-1)">+ (оң)</text>
      </CoordinateSystem>
      <div className="text-sm font-bold bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm w-full max-w-md">
        <h4 className="text-slate-800 mb-2">Нақты мысал: x² - x - 6 &gt; 0</h4>
        <div className="flex flex-col gap-2 text-left pl-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="opacity-80">Функция графигі: y = x² - x - 6</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="opacity-80">Шешімі (оң аралықтар): (-∞; -2) ∪ (3; +∞)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="opacity-80">Теріс аралық (жауапқа кірмейді): (-2; 3)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpecificUnitCircle() {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        {/* Main Unit Circle (radius 5 for visibility) */}
        <circle cx="0" cy="0" r="5" fill="none" stroke="#3b82f6" strokeWidth="0.1" />
        
        {/* Triangle for sin x = 0.8, cos x = 0.6 -> scale by 5 -> (3, 4) */}
        <line x1="0" y1="0" x2="3" y2="4" stroke="#94a3b8" strokeWidth="0.15" />
        <line x1="0" y1="0" x2="3" y2="0" stroke="#8b5cf6" strokeWidth="0.15" />
        <line x1="3" y1="0" x2="3" y2="4" stroke="#10b981" strokeWidth="0.15" strokeDasharray="0.2,0.2" />
        
        <circle cx="3" cy="4" r="0.2" fill="#ef4444" />
        
        <path d="M 1.5 0 A 1.5 1.5 0 0 1 0.9 1.2" fill="none" stroke="#ef4444" strokeWidth="0.15" />
        <text x="1.8" y="0.5" fontSize="0.8" fill="#ef4444" transform="scale(1,-1)">x</text>

        <text x="1" y="-0.8" fontSize="0.8" fill="#8b5cf6" transform="scale(1,-1)">cos x = 0.6</text>
        <text x="3.2" y="2" fontSize="0.8" fill="#10b981" transform="scale(1,-1)">sin x = 0.8</text>
        <text x="0.8" y="2.5" fontSize="0.8" fill="#94a3b8" transform="scale(1,-1)">R = 1</text>
        <text x="3" y="4.5" fontSize="0.8" fill="#ef4444" transform="scale(1,-1)">A(0.6; 0.8)</text>
      </CoordinateSystem>
      <div className="text-sm font-bold bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm w-full max-w-md">
        <h4 className="text-slate-800 mb-2">Нақты мысал: Негізгі тригонометриялық тепе-теңдік</h4>
        <div className="flex flex-col gap-2 text-left pl-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="opacity-80">Егер <strong>sin x = 0.8</strong> болса, </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="opacity-80"><strong>cos²x = 1 - sin²x</strong> формуласы бойынша:</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="opacity-80">cos x = √(1 - 0.8²) = √(1 - 0.64) = √0.36 = <strong>0.6</strong></span>
          </div>
          <div className="flex items-center gap-2 text-slate-500 mt-1">
            <span>(Сызбада бірлік шеңбер көрнекілік үшін 5 есе үлкейтілген)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpecificFunctionStudyGraph() {
  const parabola = useMemo(() => {
    let pts = "";
    for (let x = -2; x <= 6; x += 0.1) pts += `${x},${x * x - 4 * x} `;
    return pts;
  }, []);

  const derivativeLine = useMemo(() => {
    let pts = "";
    for (let x = -1; x <= 5; x += 0.1) pts += `${x},${2 * x - 4} `;
    return pts;
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        {/* Regions */}
        <rect x="-10" y="-10" width="12" height="20" fill="#ef4444" fillOpacity="0.05" />
        <rect x="2" y="-10" width="8" height="20" fill="#10b981" fillOpacity="0.05" />
        
        <text x="0" y="8" fontSize="0.6" fill="#ef4444" transform="scale(1,-1)">Кему аралығы</text>
        <text x="4" y="8" fontSize="0.6" fill="#10b981" transform="scale(1,-1)">Өсу аралығы</text>

        {/* f(x) = x^2 - 4x */}
        <polyline points={parabola} fill="none" stroke="#3b82f6" strokeWidth="0.2" />
        
        {/* f'(x) = 2x - 4 */}
        <polyline points={derivativeLine} fill="none" stroke="#f59e0b" strokeWidth="0.15" />
        
        {/* Minimum point connection */}
        <line x1="2" y1="-4" x2="2" y2="0" stroke="#10b981" strokeWidth="0.1" strokeDasharray="0.2,0.2" />
        <circle cx="2" cy="-4" r="0.2" fill="#3b82f6" />
        <circle cx="2" cy="0" r="0.2" fill="#f59e0b" />
        
        <text x="2.3" y="-3.5" fontSize="0.7" fill="#3b82f6" transform="scale(1,-1)">min(2; -4)</text>
        <text x="2.3" y="0.5" fontSize="0.7" fill="#f59e0b" transform="scale(1,-1)">f'(2) = 0</text>
        
        {/* Labels */}
        <text x="-1.5" y="4" fontSize="0.8" fill="#3b82f6" transform="scale(1,-1)">f(x) = x² - 4x</text>
        <text x="4" y="5" fontSize="0.8" fill="#f59e0b" transform="scale(1,-1)">f'(x) = 2x - 4</text>
      </CoordinateSystem>
      <div className="text-sm font-bold bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm w-full max-w-md">
        <h4 className="text-slate-800 mb-2">Нақты мысал: Функцияның өсу-кему аралықтары</h4>
        <div className="flex flex-col gap-2 text-left pl-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="opacity-80">Функция: <strong>f(x) = x² - 4x</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
            <span className="opacity-80">Туындысы: <strong>f'(x) = 2x - 4</strong></span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span className="opacity-80 text-red-600">x &lt; 2 аралығында f'(x) &lt; 0 (функция кемиді).</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="opacity-80 text-green-600 font-bold">x &gt; 2 аралығында f'(x) &gt; 0 (функция өседі).</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpecificExtremaGraph() {
  const cubic = useMemo(() => {
    let pts = "";
    for (let x = -3; x <= 4; x += 0.1) {
      const y = 0.5 * x * x * x - 0.75 * x * x - 3 * x;
      pts += `${x},${y} `;
    }
    return pts;
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        {/* The cubic curve */}
        <polyline points={cubic} fill="none" stroke="#3b82f6" strokeWidth="0.15" />
        
        {/* Maximum point at x = -1, y = 7 (scaled to 1.75) */}
        <circle cx="-1" cy="1.75" r="0.2" fill="#ef4444" />
        <line x1="-1" y1="0" x2="-1" y2="1.75" stroke="#ef4444" strokeWidth="0.1" strokeDasharray="0.2,0.2" />
        <text x="-2.5" y="2.2" fontSize="0.7" fill="#ef4444" transform="scale(1,-1)">MAX(-1; 7)</text>

        {/* Minimum point at x = 2, y = -20 (scaled to -5) */}
        <circle cx="2" cy="-5" r="0.2" fill="#10b981" />
        <line x1="2" y1="0" x2="2" y2="-5" stroke="#10b981" strokeWidth="0.1" strokeDasharray="0.2,0.2" />
        <text x="2.5" y="-5.5" fontSize="0.7" fill="#10b981" transform="scale(1,-1)">MIN(2; -20)</text>

        {/* Note on scaling */}
        <text x="4" y="8" fontSize="0.5" fill="#94a3b8" transform="scale(1,-1)">* Y осі 4 есе кішірейтілген</text>
      </CoordinateSystem>
      <div className="text-sm font-bold bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm w-full max-w-md">
        <h4 className="text-slate-800 mb-2">Нақты мысал: Экстремум нүктелерін табу</h4>
        <div className="flex flex-col gap-2 text-left pl-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="opacity-80">Функция: f(x) = 2x³ - 3x² - 12x</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="opacity-80">Туындысы: f'(x) = 6x² - 6x - 12 = 0 ➡ x = -1 (Максимум)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="opacity-80">x = 2 нүктесінде туынды терістен оңға ауысады (Минимум)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpecificProbabilityGraph() {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        {/* Box representing the urn */}
        <rect x="-4" y="-3.5" width="8" height="7" fill="none" stroke="#94a3b8" strokeWidth="0.2" rx="0.5" />
        
        {/* 4 Red balls */}
        <circle cx="-2" cy="1.5" r="0.6" fill="#ef4444" />
        <circle cx="-0.5" cy="2" r="0.6" fill="#ef4444" />
        <circle cx="1" cy="1.5" r="0.6" fill="#ef4444" />
        <circle cx="2.5" cy="1.7" r="0.6" fill="#ef4444" />

        {/* 6 Blue balls */}
        <circle cx="-2.5" cy="-0.5" r="0.6" fill="#3b82f6" />
        <circle cx="-1" cy="-1" r="0.6" fill="#3b82f6" />
        <circle cx="0.5" cy="0" r="0.6" fill="#3b82f6" />
        <circle cx="2" cy="-0.5" r="0.6" fill="#3b82f6" />
        <circle cx="-2" cy="-2.2" r="0.6" fill="#3b82f6" />
        <circle cx="1.5" cy="-2.5" r="0.6" fill="#3b82f6" />

        <text x="-3" y="-5" fontSize="1" fill="#ef4444" transform="scale(1,-1)">m = 4</text>
        <text x="1" y="-5" fontSize="1" fill="#3b82f6" transform="scale(1,-1)">n - m = 6</text>
      </CoordinateSystem>
      <div className="text-sm font-bold bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm w-full max-w-md">
        <h4 className="text-slate-800 mb-2">Нақты мысал: Классикалық ықтималдық</h4>
        <div className="flex flex-col gap-2 text-left pl-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="opacity-80">Қорапта барлығы <strong>10 шар</strong> бар (n = 10).</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="opacity-80">Қызыл шарлар саны (қолайлы оқиғалар): m = 4.</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="opacity-80">Көк шарлар саны: 6.</span>
          </div>
          <div className="flex items-center gap-2 mt-2 font-bold text-blue-600">
            <span>P = m / n = 4 / 10 = 0.4 (немесе 40%)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DiscreteRandomVariableGraph() {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        <defs>
          <marker id="arrowBlueAxis" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
          </marker>
        </defs>
        {/* Axes */}
        <line x1="0" y1="0" x2="8" y2="0" stroke="#94a3b8" strokeWidth="0.1" markerEnd="url(#arrowBlueAxis)" />
        <line x1="0" y1="0" x2="0" y2="8" stroke="#94a3b8" strokeWidth="0.1" markerEnd="url(#arrowBlueAxis)" />

        {/* X values: 0, 1, 2 */}
        <text x="1.4" y="1" fontSize="0.6" fill="#64748b" transform="scale(1,-1)">0 елтаңба</text>
        <text x="3.4" y="1" fontSize="0.6" fill="#64748b" transform="scale(1,-1)">1 елтаңба</text>
        <text x="5.4" y="1" fontSize="0.6" fill="#64748b" transform="scale(1,-1)">2 елтаңба</text>

        {/* Probabilities on Y axis */}
        <text x="-1.5" y="-2" fontSize="0.6" fill="#64748b" transform="scale(1,-1)">1/4</text>
        <text x="-1.5" y="-4" fontSize="0.6" fill="#64748b" transform="scale(1,-1)">2/4</text>
        
        <line x1="-0.2" y1="2" x2="0.2" y2="2" stroke="#94a3b8" strokeWidth="0.1" />
        <line x1="-0.2" y1="4" x2="0.2" y2="4" stroke="#94a3b8" strokeWidth="0.1" />

        {/* Bars (multiplying probabilities by 8 for scale) */}
        {/* P(0) = 1/4 -> height = 2 */}
        <rect x="1.5" y="0" width="1" height="2" fill="#3b82f6" fillOpacity="0.8" />
        <text x="1.6" y="-2.5" fontSize="0.7" fill="#3b82f6" transform="scale(1,-1)">p=0.25</text>

        {/* P(1) = 2/4 -> height = 4 */}
        <rect x="3.5" y="0" width="1" height="4" fill="#10b981" fillOpacity="0.8" />
        <text x="3.6" y="-4.5" fontSize="0.7" fill="#10b981" transform="scale(1,-1)">p=0.5</text>

        {/* P(2) = 1/4 -> height = 2 */}
        <rect x="5.5" y="0" width="1" height="2" fill="#3b82f6" fillOpacity="0.8" />
        <text x="5.6" y="-2.5" fontSize="0.7" fill="#3b82f6" transform="scale(1,-1)">p=0.25</text>

        {/* Mathematical Expectation M(X) = 1 */}
        <line x1="4" y1="0" x2="4" y2="5" stroke="#ef4444" strokeWidth="0.1" strokeDasharray="0.2,0.2" />
        <text x="4.2" y="-5.5" fontSize="0.8" fill="#ef4444" transform="scale(1,-1)">M(X) = 1</text>
      </CoordinateSystem>
      <div className="text-sm font-bold bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm w-full max-w-md">
        <h4 className="text-slate-800 mb-2">Нақты мысал: Тиынды 2 рет лақтыру</h4>
        <div className="flex flex-col gap-2 text-left pl-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="opacity-80">X кездейсоқ шамасы — елтаңба түсу саны (0, 1 немесе 2).</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="opacity-80">P(X=0) = 1/4 (Екеуі де сан). P(X=2) = 1/4 (Екеуі де елтаңба).</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="opacity-80">P(X=1) = 2/4 = 1/2 (Біреуі елтаңба, біреуі сан).</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="opacity-80">Математикалық күтім: M(X) = 0×0.25 + 1×0.5 + 2×0.25 = 1.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpecificTriangleGraph() {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        {/* Triangle vertices: (-3, -2), (4, -2), (1, 3) */}
        <polygon points="-3,-2 4,-2 1,3" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="0.1" />
        
        {/* Height from (1,3) to (1,-2) */}
        <line x1="1" y1="3" x2="1" y2="-2" stroke="#ef4444" strokeWidth="0.1" strokeDasharray="0.2,0.2" />
        {/* Right angle symbol */}
        <polyline points="1,-1.5 1.5,-1.5 1.5,-2" fill="none" stroke="#ef4444" strokeWidth="0.05" />

        <text x="-1" y="-2.5" fontSize="0.7" fill="#3b82f6" transform="scale(1,-1)">a (табаны)</text>
        <text x="1.2" y="0.5" fontSize="0.7" fill="#ef4444" transform="scale(1,-1)">h (биіктігі)</text>
        
        {/* Angles */}
        <text x="-2.5" y="-1.5" fontSize="0.6" fill="#10b981" transform="scale(1,-1)">α=50°</text>
        <text x="2.5" y="-1.5" fontSize="0.6" fill="#10b981" transform="scale(1,-1)">β=60°</text>
        <text x="0.5" y="2" fontSize="0.6" fill="#10b981" transform="scale(1,-1)">γ=70°</text>
      </CoordinateSystem>
      <div className="text-sm font-bold bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm w-full max-w-md">
        <h4 className="text-slate-800 mb-2">Нақты мысал: Үшбұрыш бұрыштары мен ауданы</h4>
        <div className="flex flex-col gap-2 text-left pl-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="opacity-80">Ішкі бұрыштар қосындысы: 50° + 60° + 70° = 180°</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="opacity-80">Ауданы: S = ½ · a · h</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpecificCircleGraph() {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        {/* Circle centered at (0,0) with R=4 (scaled from 5 for fit) */}
        <circle cx="0" cy="0" r="4" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="0.1" />
        
        {/* Radius line */}
        <line x1="0" y1="0" x2="3.2" y2="2.4" stroke="#ef4444" strokeWidth="0.1" />
        <circle cx="0" cy="0" r="0.15" fill="#ef4444" />
        
        <text x="1.5" y="2" fontSize="0.8" fill="#ef4444" transform="scale(1,-1)">R = 5 см</text>
        
        <text x="-2" y="-0.5" fontSize="0.8" fill="#1e293b" transform="scale(1,-1)">S = 25π см²</text>
      </CoordinateSystem>
      <div className="text-sm font-bold bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm w-full max-w-md">
        <h4 className="text-slate-800 mb-2">Нақты мысал: Шеңбер және дөңгелек</h4>
        <div className="flex flex-col gap-2 text-left pl-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="opacity-80">Шеңбер ұзындығы: C = 2πR = 10π см</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="opacity-80">Радиусы: R = 10π / 2π = 5 см</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span className="opacity-80 font-bold text-blue-600">Дөңгелек ауданы: S = πR² = 25π см²</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpecificSimilarTrianglesGraph() {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        {/* Small Triangle */}
        <polygon points="-5,-2 -2,-2 -5,2" fill="#10b981" fillOpacity="0.3" stroke="#10b981" strokeWidth="0.1" />
        <text x="-4" y="-0.5" fontSize="0.8" fill="#10b981" transform="scale(1,-1)">S₁</text>
        <text x="-3.5" y="-2.5" fontSize="0.6" fill="#10b981" transform="scale(1,-1)">a=3</text>
        <text x="-5.8" y="0" fontSize="0.6" fill="#10b981" transform="scale(1,-1)">b=4</text>

        {/* Large Triangle: scale factor 2 */}
        <polygon points="1,-3 7,-3 1,5" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="0.1" />
        <text x="3" y="0" fontSize="0.8" fill="#3b82f6" transform="scale(1,-1)">S₂ = 4 · S₁</text>
        <text x="4" y="-3.5" fontSize="0.6" fill="#3b82f6" transform="scale(1,-1)">a'=6</text>
        <text x="-0.2" y="1" fontSize="0.6" fill="#3b82f6" transform="scale(1,-1)">b'=8</text>
        
      </CoordinateSystem>
      <div className="text-sm font-bold bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm w-full max-w-md">
        <h4 className="text-slate-800 mb-2">Нақты мысал: Үшбұрыштар ұқсастығы</h4>
        <div className="flex flex-col gap-2 text-left pl-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="opacity-80">Кіші үшбұрыш қабырғалары: a=3, b=4</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="opacity-80">Үлкен үшбұрыш (k=2): a'=6, b'=8</span>
          </div>
          <div className="flex items-center gap-2 mt-1 font-bold text-blue-600">
            <span>Аудандар қатынасы: S₂ / S₁ = k² = 2² = 4</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpecificPythagoreanGraph() {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        {/* Right triangle */}
        <polygon points="0,0 4,0 0,3" fill="#8b5cf6" fillOpacity="0.2" stroke="#8b5cf6" strokeWidth="0.1" />
        <polyline points="0.4,0 0.4,0.4 0,0.4" fill="none" stroke="#8b5cf6" strokeWidth="0.05" />
        
        <text x="2" y="-0.8" fontSize="0.8" fill="#1e293b" transform="scale(1,-1)">a = 4</text>
        <text x="-1.2" y="1.5" fontSize="0.8" fill="#1e293b" transform="scale(1,-1)">b = 3</text>
        <text x="2.2" y="2" fontSize="0.8" fill="#ef4444" transform="scale(1,-1)">c = 5</text>
        
        {/* Squares on the sides */}
        <polygon points="0,0 4,0 4,-4 0,-4" fill="#3b82f6" fillOpacity="0.1" stroke="#3b82f6" strokeWidth="0.05" strokeDasharray="0.2,0.2" />
        <text x="1.5" y="-2" fontSize="0.6" fill="#3b82f6" transform="scale(1,-1)">a² = 16</text>

        <polygon points="0,0 0,3 -3,3 -3,0" fill="#3b82f6" fillOpacity="0.1" stroke="#3b82f6" strokeWidth="0.05" strokeDasharray="0.2,0.2" />
        <text x="-2" y="1.5" fontSize="0.6" fill="#3b82f6" transform="scale(1,-1)">b² = 9</text>

        <polygon points="0,3 4,0 7,4 3,7" fill="#ef4444" fillOpacity="0.1" stroke="#ef4444" strokeWidth="0.05" strokeDasharray="0.2,0.2" />
        <text x="3.5" y="3.5" fontSize="0.6" fill="#ef4444" transform="scale(1,-1)">c² = 25</text>
      </CoordinateSystem>
      <div className="text-sm font-bold bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm w-full max-w-md">
        <h4 className="text-slate-800 mb-2">Нақты мысал: Пифагор теоремасы</h4>
        <div className="flex flex-col gap-2 text-left pl-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="opacity-80">Тікбұрышты үшбұрыштың катеттері: <strong>a = 4, b = 3</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="opacity-80">Гипотенузаның квадраты: c² = a² + b²</span>
          </div>
          <div className="flex items-center gap-2 mt-1 font-bold text-red-600">
            <span>c² = 16 + 9 = 25 ➡ c = 5 (Египет үшбұрышы)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpecificGeometryTrigGraph() {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        {/* Right triangle: 30 degree angle */}
        <polygon points="-2,-1.5 5,-1.5 5,2.54" fill="#f59e0b" fillOpacity="0.2" stroke="#f59e0b" strokeWidth="0.1" />
        <polyline points="4.5,-1.5 4.5,-1 5,-1" fill="none" stroke="#f59e0b" strokeWidth="0.05" />
        
        {/* Arc for 30 deg */}
        <path d="M -0.5 -1.5 A 1.5 1.5 0 0 0 -0.8 -0.8" fill="none" stroke="#1e293b" strokeWidth="0.1" />
        <text x="-0.3" y="-1.2" fontSize="0.6" fill="#1e293b" transform="scale(1,-1)">30°</text>

        <text x="1.5" y="-2" fontSize="0.7" fill="#64748b" transform="scale(1,-1)">іргелес катет</text>
        <text x="5.2" y="0.5" fontSize="0.7" fill="#ef4444" transform="scale(1,-1)">қарсы катет (1/2)</text>
        <text x="0.5" y="1.2" fontSize="0.7" fill="#3b82f6" transform="scale(1,-1)">гипотенуза (1)</text>
      </CoordinateSystem>
      <div className="text-sm font-bold bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm w-full max-w-md">
        <h4 className="text-slate-800 mb-2">Нақты мысал: Тригонометриялық қатынастар</h4>
        <div className="flex flex-col gap-2 text-left pl-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="opacity-80">Тікбұрышты үшбұрышта 30° бұрышқа қарсы жатқан катет гипотенузаның жартысына тең.</span>
          </div>
          <div className="flex items-center gap-2 mt-1 font-bold text-red-600">
            <span>sin(30°) = қарсы катет / гипотенуза = 1/2</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpecificVector2DGraph() {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        <defs>
          <marker id="arrowRedVector" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
          </marker>
        </defs>
        
        {/* Vector a(3, 4) */}
        <line x1="0" y1="0" x2="3" y2="4" stroke="#ef4444" strokeWidth="0.15" markerEnd="url(#arrowRedVector)" />
        
        {/* Components */}
        <line x1="0" y1="0" x2="3" y2="0" stroke="#3b82f6" strokeWidth="0.1" strokeDasharray="0.2,0.2" />
        <line x1="3" y1="0" x2="3" y2="4" stroke="#3b82f6" strokeWidth="0.1" strokeDasharray="0.2,0.2" />

        <text x="1.5" y="-0.5" fontSize="0.7" fill="#3b82f6" transform="scale(1,-1)">x = 3</text>
        <text x="3.2" y="2" fontSize="0.7" fill="#3b82f6" transform="scale(1,-1)">y = 4</text>
        <text x="0.5" y="2.5" fontSize="0.8" fill="#ef4444" transform="scale(1,-1)">|a| = 5</text>
        <text x="3.2" y="4.2" fontSize="0.8" fill="#ef4444" transform="scale(1,-1)">ā (3; 4)</text>
      </CoordinateSystem>
      <div className="text-sm font-bold bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm w-full max-w-md">
        <h4 className="text-slate-800 mb-2">Нақты мысал: Вектордың ұзындығы (модулі)</h4>
        <div className="flex flex-col gap-2 text-left pl-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="opacity-80">Берілгені: <strong>ā (3; 4)</strong> векторы.</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="opacity-80">Формула: |ā| = √(x² + y²)</span>
          </div>
          <div className="flex items-center gap-2 mt-1 font-bold text-red-600">
            <span>|ā| = √(3² + 4²) = √(9 + 16) = √25 = 5</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpecificCoordinateDistanceGraph() {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        {/* Point A(1, 2) */}
        <circle cx="1" cy="2" r="0.15" fill="#ef4444" />
        <text x="0.2" y="2.5" fontSize="0.7" fill="#ef4444" transform="scale(1,-1)">A(1; 2)</text>

        {/* Point B(4, 6) */}
        <circle cx="4" cy="6" r="0.15" fill="#3b82f6" />
        <text x="3.2" y="6.5" fontSize="0.7" fill="#3b82f6" transform="scale(1,-1)">B(4; 6)</text>

        {/* Distance line */}
        <line x1="1" y1="2" x2="4" y2="6" stroke="#10b981" strokeWidth="0.15" />
        <text x="1.8" y="4.5" fontSize="0.8" fill="#10b981" transform="scale(1,-1)">d = 5</text>

        {/* Triangle to show coordinates */}
        <line x1="1" y1="2" x2="4" y2="2" stroke="#94a3b8" strokeWidth="0.1" strokeDasharray="0.2,0.2" />
        <line x1="4" y1="2" x2="4" y2="6" stroke="#94a3b8" strokeWidth="0.1" strokeDasharray="0.2,0.2" />
        
        <text x="2.5" y="1.5" fontSize="0.6" fill="#94a3b8" transform="scale(1,-1)">Δx = 4-1 = 3</text>
        <text x="4.2" y="4" fontSize="0.6" fill="#94a3b8" transform="scale(1,-1)">Δy = 6-2 = 4</text>
      </CoordinateSystem>
      <div className="text-sm font-bold bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm w-full max-w-md">
        <h4 className="text-slate-800 mb-2">Нақты мысал: Екі нүкте арасындағы қашықтық</h4>
        <div className="flex flex-col gap-2 text-left pl-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="opacity-80">Берілгені: <strong>A(1; 2)</strong> және <strong>B(4; 6)</strong> нүктелері.</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="opacity-80">Формула: d = √((x₂-x₁)² + (y₂-y₁)²)</span>
          </div>
          <div className="flex items-center gap-2 mt-1 font-bold text-green-600">
            <span>d = √(3² + 4²) = √25 = 5</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpecificTrigFunctionsGraph() {
  const sinPoints = useMemo(() => {
    let pts = "";
    for(let x = -2*Math.PI; x <= 2*Math.PI; x+=0.1) {
      pts += `${x},${Math.sin(x)*2} `;
    }
    return pts;
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        {/* Sin curve */}
        <polyline points={sinPoints} fill="none" stroke="#3b82f6" strokeWidth="0.1" />
        
        {/* Key points on [0, 2pi] */}
        <circle cx="0" cy="0" r="0.15" fill="#ef4444" />
        <circle cx={Math.PI/2} cy="2" r="0.15" fill="#ef4444" />
        <circle cx={Math.PI} cy="0" r="0.15" fill="#ef4444" />
        <circle cx={3*Math.PI/2} cy="-2" r="0.15" fill="#ef4444" />
        <circle cx={2*Math.PI} cy="0" r="0.15" fill="#ef4444" />

        <text x={Math.PI/2 - 0.5} y="2.5" fontSize="0.6" fill="#ef4444" transform="scale(1,-1)">π/2; 1</text>
        <text x={Math.PI - 0.2} y="-0.5" fontSize="0.6" fill="#ef4444" transform="scale(1,-1)">π; 0</text>
        <text x={3*Math.PI/2 - 0.5} y="-2.5" fontSize="0.6" fill="#ef4444" transform="scale(1,-1)">3π/2; -1</text>
        <text x={2*Math.PI - 0.2} y="0.5" fontSize="0.6" fill="#ef4444" transform="scale(1,-1)">2π; 0</text>
        
        <text x="4" y="3" fontSize="0.8" fill="#3b82f6" transform="scale(1,-1)">y = sin(x)</text>
      </CoordinateSystem>
      <div className="text-sm font-bold bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm w-full max-w-md">
        <h4 className="text-slate-800 mb-2">Нақты мысал: Тригонометриялық функция графигі</h4>
        <div className="flex flex-col gap-2 text-left pl-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="opacity-80">y = sin(x) функциясы периодты (T=2π).</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="opacity-80">Ең үлкен мәні: 1 (x = π/2 + 2πn кезінде)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="opacity-80">Ең кіші мәні: -1 (x = 3π/2 + 2πn кезінде)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpecificTrigEquationGraph() {
  const cosPoints = useMemo(() => {
    let pts = "";
    for(let x = -2*Math.PI; x <= 2*Math.PI; x+=0.1) {
      pts += `${x},${Math.cos(x)*3} `; // scale y by 3
    }
    return pts;
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        {/* Cos curve */}
        <polyline points={cosPoints} fill="none" stroke="#10b981" strokeWidth="0.1" />
        
        {/* Horizontal line y = 1.5 (which is 0.5 scaled by 3) */}
        <line x1="-7" y1="1.5" x2="7" y2="1.5" stroke="#ef4444" strokeWidth="0.1" strokeDasharray="0.2,0.2" />
        <text x="5" y="2" fontSize="0.6" fill="#ef4444" transform="scale(1,-1)">y = 1/2</text>

        {/* Intersections near origin */}
        <circle cx={Math.PI/3} cy="1.5" r="0.15" fill="#3b82f6" />
        <circle cx={-Math.PI/3} cy="1.5" r="0.15" fill="#3b82f6" />
        
        <line x1={Math.PI/3} y1="0" x2={Math.PI/3} y2="1.5" stroke="#3b82f6" strokeWidth="0.05" strokeDasharray="0.1,0.1" />
        <line x1={-Math.PI/3} y1="0" x2={-Math.PI/3} y2="1.5" stroke="#3b82f6" strokeWidth="0.05" strokeDasharray="0.1,0.1" />

        <text x={Math.PI/3 - 0.3} y="-0.5" fontSize="0.6" fill="#3b82f6" transform="scale(1,-1)">π/3</text>
        <text x={-Math.PI/3 - 0.5} y="-0.5" fontSize="0.6" fill="#3b82f6" transform="scale(1,-1)">-π/3</text>
      </CoordinateSystem>
      <div className="text-sm font-bold bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm w-full max-w-md">
        <h4 className="text-slate-800 mb-2">Нақты мысал: 2 cos(x) = 1 теңдеуі</h4>
        <div className="flex flex-col gap-2 text-left pl-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="opacity-80">Теңдеуді түрлендіру: <strong>cos(x) = 1/2</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="opacity-80">Жасыл қисық: y = cos(x)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="opacity-80">Қызыл сызық: y = 1/2</span>
          </div>
          <div className="flex items-center gap-2 mt-1 font-bold text-blue-600">
            <span>Қиылысу нүктелері: x = ±π/3 + 2πn</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpecificLimitHoleGraph() {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        {/* Line y = x + 3. (x^2-9)/(x-3). x from -5 to 5. If x=-5, y=-2. If x=5, y=8. Let's shift it down by 3 in UI so it fits */}
        {/* We will just plot points for y = x + 3 */}
        <line x1="-7" y1="-4" x2="6" y2="9" stroke="#3b82f6" strokeWidth="0.1" />
        
        {/* Hole at x = 3, y = 6 */}
        <circle cx="3" cy="6" r="0.2" fill="white" stroke="#ef4444" strokeWidth="0.1" />
        
        {/* Dotted lines to axes */}
        <line x1="3" y1="0" x2="3" y2="6" stroke="#ef4444" strokeWidth="0.05" strokeDasharray="0.2,0.2" />
        <line x1="0" y1="6" x2="3" y2="6" stroke="#ef4444" strokeWidth="0.05" strokeDasharray="0.2,0.2" />
        
        <text x="3.2" y="-0.5" fontSize="0.7" fill="#ef4444" transform="scale(1,-1)">x = 3</text>
        <text x="-1.5" y="6.2" fontSize="0.7" fill="#ef4444" transform="scale(1,-1)">y = 6</text>
        <text x="0.5" y="4" fontSize="0.7" fill="#3b82f6" transform="scale(1,-1)">f(x) = (x²-9)/(x-3)</text>
      </CoordinateSystem>
      <div className="text-sm font-bold bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm w-full max-w-md">
        <h4 className="text-slate-800 mb-2">Нақты мысал: 0/0 анықсыздығы</h4>
        <div className="flex flex-col gap-2 text-left pl-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="opacity-80">Функция: <strong>f(x) = (x² - 9)/(x - 3)</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full border-2 border-slate-200"></div>
            <span className="opacity-80">x = 3 нүктесінде функция анықталмаған (графиктегі тесік).</span>
          </div>
          <div className="flex items-center gap-2 mt-1 font-bold text-blue-600">
            <span>Шегі: lim (x→3) f(x) = 6</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpecificDerivativeTangentGraph() {
  const parabolaPoints = useMemo(() => {
    let pts = "";
    for(let x = -4; x <= 4; x+=0.1) {
      pts += `${x},${x*x} `;
    }
    return pts;
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        {/* Parabola y = x^2 */}
        <polyline points={parabolaPoints} fill="none" stroke="#3b82f6" strokeWidth="0.1" />
        
        {/* Tangent line at x=1: y - 1 = 2(x - 1) => y = 2x - 1 */}
        <line x1="-2" y1="-5" x2="4" y2="7" stroke="#ef4444" strokeWidth="0.1" />
        
        {/* Tangent point (1, 1) */}
        <circle cx="1" cy="1" r="0.15" fill="#ef4444" />
        
        <text x="-2" y="5" fontSize="0.7" fill="#3b82f6" transform="scale(1,-1)">f(x) = x²</text>
        <text x="3" y="2" fontSize="0.7" fill="#ef4444" transform="scale(1,-1)">y = 2x - 1</text>
        
        {/* Triangle to show slope (derivative) */}
        <line x1="1" y1="1" x2="2" y2="1" stroke="#10b981" strokeWidth="0.05" strokeDasharray="0.1,0.1" />
        <line x1="2" y1="1" x2="2" y2="3" stroke="#10b981" strokeWidth="0.05" strokeDasharray="0.1,0.1" />
        <text x="1.5" y="0.5" fontSize="0.6" fill="#10b981" transform="scale(1,-1)">dx=1</text>
        <text x="2.2" y="2" fontSize="0.6" fill="#10b981" transform="scale(1,-1)">dy=2</text>
      </CoordinateSystem>
      <div className="text-sm font-bold bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm w-full max-w-md">
        <h4 className="text-slate-800 mb-2">Нақты мысал: Туындының геометриялық мағынасы</h4>
        <div className="flex flex-col gap-2 text-left pl-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="opacity-80">Функция: <strong>f(x) = x²</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="opacity-80">x = 1 нүктесіндегі жанама түзу.</span>
          </div>
          <div className="flex items-center gap-2 mt-1 font-bold text-green-600">
            <span>Туынды f'(1) = 2 (жанаманың бұрыштық коэффициенті dy/dx)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpecificDerivativeRulesGraph() {
  const cubicPoints = useMemo(() => {
    let pts = "";
    for(let x = -3; x <= 3; x+=0.1) {
      pts += `${x},${Math.pow(x, 3)} `;
    }
    return pts;
  }, []);

  const derivPoints = useMemo(() => {
    let pts = "";
    for(let x = -3; x <= 3; x+=0.1) {
      pts += `${x},${3 * Math.pow(x, 2)} `;
    }
    return pts;
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        {/* Cubic y = x^3 */}
        <polyline points={cubicPoints} fill="none" stroke="#3b82f6" strokeWidth="0.1" />
        
        {/* Derivative y = 3x^2 */}
        <polyline points={derivPoints} fill="none" stroke="#ef4444" strokeWidth="0.1" strokeDasharray="0.2,0.2" />
        
        <text x="1.5" y="5" fontSize="0.7" fill="#3b82f6" transform="scale(1,-1)">f(x) = x³</text>
        <text x="-3" y="8" fontSize="0.7" fill="#ef4444" transform="scale(1,-1)">f'(x) = 3x²</text>
        
        {/* Point x=1 */}
        <line x1="1" y1="0" x2="1" y2="3" stroke="#10b981" strokeWidth="0.05" strokeDasharray="0.1,0.1" />
        <circle cx="1" cy="1" r="0.15" fill="#3b82f6" />
        <circle cx="1" cy="3" r="0.15" fill="#ef4444" />
        <text x="1.2" y="-0.5" fontSize="0.6" fill="#10b981" transform="scale(1,-1)">x=1</text>
      </CoordinateSystem>
      <div className="text-sm font-bold bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm w-full max-w-md">
        <h4 className="text-slate-800 mb-2">Нақты мысал: Дәрежелік функцияның туындысы</h4>
        <div className="flex flex-col gap-2 text-left pl-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="opacity-80">Функция: <strong>f(x) = x³</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="opacity-80">Туындысы (ереже бойынша): <strong>f'(x) = 3x²</strong></span>
          </div>
          <div className="flex items-center gap-2 mt-1 font-bold text-green-600">
            <span>x = 1 болғанда: f(1) = 1³, ал туындысы f'(1) = 3(1)² = 3</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpecificRationalEquationGraph() {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        {/* y = (x^2-4)/(x-2) which simplifies to y = x + 2 */}
        <line x1="-8" y1="-6" x2="6" y2="8" stroke="#3b82f6" strokeWidth="0.1" />
        
        {/* Hole at x = 2, y = 4 */}
        <circle cx="2" cy="4" r="0.2" fill="white" stroke="#ef4444" strokeWidth="0.1" />
        
        {/* Root at x = -2, y = 0 */}
        <circle cx="-2" cy="0" r="0.2" fill="#10b981" />
        
        {/* Dotted lines for x = 2 hole */}
        <line x1="2" y1="0" x2="2" y2="4" stroke="#ef4444" strokeWidth="0.05" strokeDasharray="0.2,0.2" />
        <text x="2.2" y="-0.5" fontSize="0.6" fill="#ef4444" transform="scale(1,-1)">x=2 (түбір емес)</text>
        
        {/* Label for root */}
        <text x="-4" y="0.8" fontSize="0.7" fill="#10b981" transform="scale(1,-1)">x = -2 (түбір)</text>

        <text x="-5" y="2" fontSize="0.8" fill="#3b82f6" transform="scale(1,-1)">y = (x²-4)/(x-2)</text>
      </CoordinateSystem>
      <div className="text-sm font-bold bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm w-full max-w-md">
        <h4 className="text-slate-800 mb-2">Нақты мысал: Бөлшек-рационал теңдеу</h4>
        <div className="flex flex-col gap-2 text-left pl-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="opacity-80">Теңдеу: <strong>(x² - 4)/(x - 2) = 0</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full border-2 border-slate-200"></div>
            <span className="opacity-80">x = 2 нүктесінде бөлім нөлге айналады, сондықтан ол бөгде түбір (графиктегі тесік).</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="font-bold text-green-600">Жалғыз шешім: x = -2 (графиктің x осін қиятын нүктесі).</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpecificIntegralGraph() {
  const curve = useMemo(() => {
    let pts = "";
    for (let x = -2; x <= 4; x += 0.1) pts += `${x},${0.5*x*x + 1} `;
    return pts;
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        {/* Fill area under curve from x=1 to x=3 */}
        <path d="M 1 0 L 1 1.5 Q 2 2.5 3 5.5 L 3 0 Z" fill="#3b82f6" fillOpacity="0.3" />
        
        <polyline points={curve} fill="none" stroke="#ef4444" strokeWidth="0.1" />
        
        <line x1="1" y1="0" x2="1" y2="1.5" stroke="#10b981" strokeWidth="0.05" strokeDasharray="0.1,0.1" />
        <line x1="3" y1="0" x2="3" y2="5.5" stroke="#10b981" strokeWidth="0.05" strokeDasharray="0.1,0.1" />
        
        <text x="1.2" y="-0.5" fontSize="0.6" fill="#10b981" transform="scale(1,-1)">a=1</text>
        <text x="3.2" y="-0.5" fontSize="0.6" fill="#10b981" transform="scale(1,-1)">b=3</text>
        <text x="2" y="1" fontSize="0.8" fill="#3b82f6" transform="scale(1,-1)">S</text>
      </CoordinateSystem>
      <div className="text-sm font-bold bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm w-full max-w-md">
        <h4 className="text-slate-800 mb-2">Нақты мысал: Анықталған интеграл</h4>
        <div className="flex flex-col gap-2 text-left pl-4 text-xs">
          <span className="opacity-80">Интегралдың геометриялық мағынасы: қисық сызықты трапецияның ауданы (S).</span>
        </div>
      </div>
    </div>
  );
}

function SpecificPowerFunctionGraph() {
  const parabola = useMemo(() => {
    let pts = "";
    for (let x = -3; x <= 3; x += 0.1) pts += `${x},${x*x} `;
    return pts;
  }, []);
  const cubic = useMemo(() => {
    let pts = "";
    for (let x = -2; x <= 2; x += 0.1) pts += `${x},${x*x*x} `;
    return pts;
  }, []);
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        <polyline points={parabola} fill="none" stroke="#3b82f6" strokeWidth="0.1" />
        <polyline points={cubic} fill="none" stroke="#ef4444" strokeWidth="0.1" />
        <text x="-2" y="4" fontSize="0.7" fill="#3b82f6" transform="scale(1,-1)">y = x² (Жұп)</text>
        <text x="2" y="6" fontSize="0.7" fill="#ef4444" transform="scale(1,-1)">y = x³ (Тақ)</text>
      </CoordinateSystem>
      <div className="text-sm font-bold bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm w-full max-w-md">
        <h4 className="text-slate-800 mb-2">Дәрежелік функциялар</h4>
      </div>
    </div>
  );
}

function SpecificIrrationalEquationGraph() {
  const sqrtPts = useMemo(() => {
    let pts = "";
    for (let x = 0; x <= 9; x += 0.1) pts += `${x},${Math.sqrt(x)} `;
    return pts;
  }, []);
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        <polyline points={sqrtPts} fill="none" stroke="#3b82f6" strokeWidth="0.1" />
        <line x1="-2" y1="2" x2="9" y2="2" stroke="#ef4444" strokeWidth="0.1" strokeDasharray="0.2,0.2" />
        <circle cx="4" cy="2" r="0.2" fill="#10b981" />
        <line x1="4" y1="0" x2="4" y2="2" stroke="#10b981" strokeWidth="0.05" strokeDasharray="0.1,0.1" />
        <text x="4.2" y="-0.5" fontSize="0.6" fill="#10b981" transform="scale(1,-1)">x=4</text>
      </CoordinateSystem>
      <div className="text-sm font-bold bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm w-full max-w-md">
        <h4 className="text-slate-800 mb-2">Иррационал теңдеу: √x = 2</h4>
      </div>
    </div>
  );
}

function SpecificExpLogGraph() {
  const expPts = useMemo(() => {
    let pts = "";
    for (let x = -5; x <= 3; x += 0.1) pts += `${x},${Math.pow(2, x)} `;
    return pts;
  }, []);
  const logPts = useMemo(() => {
    let pts = "";
    for (let x = 0.1; x <= 8; x += 0.1) pts += `${x},${Math.log2(x)} `;
    return pts;
  }, []);
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        <polyline points={expPts} fill="none" stroke="#ef4444" strokeWidth="0.1" />
        <polyline points={logPts} fill="none" stroke="#3b82f6" strokeWidth="0.1" />
        <line x1="-5" y1="-5" x2="5" y2="5" stroke="#10b981" strokeWidth="0.05" strokeDasharray="0.2,0.2" />
        <text x="-3" y="2" fontSize="0.6" fill="#ef4444" transform="scale(1,-1)">y = 2^x</text>
        <text x="3" y="1" fontSize="0.6" fill="#3b82f6" transform="scale(1,-1)">y = log_2(x)</text>
      </CoordinateSystem>
      <div className="text-sm font-bold bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm w-full max-w-md">
        <h4 className="text-slate-800 mb-2">Көрсеткіштік және логарифмдік функциялар</h4>
      </div>
    </div>
  );
}

function SpecificLogEquationGraph() {
  const logPts = useMemo(() => {
    let pts = "";
    // Domain x > 1
    for (let x = 1.1; x <= 10; x += 0.2) {
      pts += `${x},${Math.log(x-1) / Math.log(3)} `;
    }
    return pts;
  }, []);
  
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        {/* y = log_3(x-1) */}
        <polyline points={logPts} fill="none" stroke="#ef4444" strokeWidth="0.1" />
        
        {/* Vertical Asymptote x = 1 */}
        <line x1="1" y1="-8" x2="1" y2="8" stroke="#f59e0b" strokeWidth="0.05" strokeDasharray="0.2,0.2" />
        <text x="1.5" y="-6" fontSize="0.5" fill="#f59e0b" transform="scale(1,-1)">Асимптота x=1</text>

        {/* y = 2 */}
        <line x1="-1" y1="2" x2="10" y2="2" stroke="#3b82f6" strokeWidth="0.1" strokeDasharray="0.2,0.2" />
        
        {/* Intersection at (10, 2) */}
        <circle cx="10" cy="2" r="0.2" fill="#10b981" />
        <line x1="10" y1="0" x2="10" y2="2" stroke="#10b981" strokeWidth="0.05" strokeDasharray="0.1,0.1" />
        
        <text x="8.5" y="-0.8" fontSize="0.6" fill="#10b981" transform="scale(1,-1)">x=10</text>
        <text x="-0.5" y="2.5" fontSize="0.6" fill="#3b82f6" transform="scale(1,-1)">y=2</text>
        <text x="6" y="1.2" fontSize="0.6" fill="#ef4444" transform="scale(1,-1)">y=log_3(x-1)</text>
      </CoordinateSystem>
      <div className="text-sm font-bold bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm w-full max-w-md">
        <h4 className="text-slate-800 mb-2">Логарифмдік теңдеуді шешу</h4>
        <div className="flex flex-col gap-2 text-left pl-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="opacity-80">Теңдеу: <strong>log₃(x-1) = 2</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="opacity-80">Қызыл қисық: <strong>y = log₃(x-1)</strong> (ММЖ: x &gt; 1).</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="opacity-80">Көк сызық: <strong>y = 2</strong> тұрақтысы.</span>
          </div>
          <div className="flex items-center gap-2 mt-1 font-bold text-green-600">
            <span>Қиылысу нүктесі (10; 2) → Түбірі: x = 10.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

import {
  TrigIdentityGraph,
  TrigRadiansGraph,
  TrigFunctionsGraph,
  TrigPropertiesGraph,
  TrigReductionGraph,
  TrigSumGraph,
  TrigDoubleAngleGraph,
  TrigHalfAngleGraph,
  TrigSumProductGraph,
  TrigProductSumGraph,
  TrigSimplificationGraph
} from "./TrigGraphs";


function InverseFunctionGraph() {
  const parabolaPoints = useMemo(() => {
    let pts = "";
    for (let x = 0; x <= 8; x += 0.1) pts += `${x},${x * x} `;
    return pts;
  }, []);

  const sqrtPoints = useMemo(() => {
    let pts = "";
    for (let x = 0; x <= 8; x += 0.1) pts += `${x},${Math.sqrt(x)} `;
    return pts;
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        {/* y = x symmetry line */}
        <line x1="-10" y1="-10" x2="10" y2="10" stroke="#94a3b8" strokeWidth="0.1" strokeDasharray="0.3, 0.3" />
        <text x="7" y="-8.5" fontSize="0.8" fill="#64748b" transform="scale(1,-1)">y = x</text>
        
        {/* f(x) = x^2 (x >= 0) */}
        <polyline points={parabolaPoints} fill="none" stroke="#3b82f6" strokeWidth="0.2" />
        
        {/* g(x) = sqrt(x) */}
        <polyline points={sqrtPoints} fill="none" stroke="#ef4444" strokeWidth="0.2" />

        {/* Highlight points for symmetry */}
        {/* (2, 4) on f(x) */}
        <circle cx="2" cy="4" r="0.2" fill="#3b82f6" />
        <line x1="2" y1="0" x2="2" y2="4" stroke="#3b82f6" strokeWidth="0.05" strokeDasharray="0.2,0.2" />
        <line x1="0" y1="4" x2="2" y2="4" stroke="#3b82f6" strokeWidth="0.05" strokeDasharray="0.2,0.2" />
        <text x="1.5" y="-4.8" fontSize="0.7" fill="#3b82f6" transform="scale(1,-1)">(2; 4)</text>

        {/* (4, 2) on g(x) */}
        <circle cx="4" cy="2" r="0.2" fill="#ef4444" />
        <line x1="4" y1="0" x2="4" y2="2" stroke="#ef4444" strokeWidth="0.05" strokeDasharray="0.2,0.2" />
        <line x1="0" y1="2" x2="4" y2="2" stroke="#ef4444" strokeWidth="0.05" strokeDasharray="0.2,0.2" />
        <text x="4.5" y="-2.5" fontSize="0.7" fill="#ef4444" transform="scale(1,-1)">(4; 2)</text>
        
        {/* Connection between points showing symmetry */}
        <line x1="2" y1="4" x2="4" y2="2" stroke="#10b981" strokeWidth="0.05" strokeDasharray="0.2,0.2" />

      </CoordinateSystem>
      <div className="bg-slate-50 text-slate-700 px-6 py-4 rounded-xl text-center shadow-sm w-full max-w-md border border-slate-200">
        <h4 className="font-bold mb-2">Кері функция графиктерінің симметриялығы</h4>
        <div className="flex flex-col gap-2 text-sm opacity-80">
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span>Бастапқы функция: f(x) = x² (x ≥ 0)</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span>Кері функция: g(x) = √x</span>
          </div>
          <p className="mt-2 text-xs italic text-slate-500">
            Функция мен оның кері функциясының графиктері <b>y = x</b> түзуіне симметриялы орналасады. Мысалы, (2; 4) нүктесі (4; 2) нүктесіне ауысады.
          </p>
        </div>
      </div>
    </div>
  );
}


function TrigInequalityGraph() {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        {/* Unit Circle (radius 5 for display scale) */}
        <circle cx="0" cy="0" r="5" fill="none" stroke="#94a3b8" strokeWidth="0.1" />
        
        {/* Line y = 2.5 (representing sin x = 0.5) */}
        <line x1="-6" y1="2.5" x2="6" y2="2.5" stroke="#ef4444" strokeWidth="0.15" strokeDasharray="0.2,0.2" />
        <text x="6.5" y="-2.3" fontSize="0.7" fill="#ef4444" transform="scale(1,-1)">y = 1/2</text>

        {/* Highlighted arc for sin x >= 0.5 */}
        {/* from pi/6 to 5pi/6 -> starting at x=4.33, y=2.5 to x=-4.33, y=2.5 */}
        <path d="M 4.33 2.5 A 5 5 0 0 0 -4.33 2.5" fill="none" stroke="#10b981" strokeWidth="0.3" />
        
        {/* Points at pi/6 and 5pi/6 */}
        <circle cx="4.33" cy="2.5" r="0.2" fill="#10b981" />
        <circle cx="-4.33" cy="2.5" r="0.2" fill="#10b981" />
        
        <text x="4.8" y="-2.8" fontSize="0.7" fill="#10b981" transform="scale(1,-1)">π/6</text>
        <text x="-5.5" y="-2.8" fontSize="0.7" fill="#10b981" transform="scale(1,-1)">5π/6</text>

        {/* Shaded area indicator */}
        <path d="M 4.33 2.5 L -4.33 2.5 A 5 5 0 0 1 4.33 2.5 Z" fill="#10b981" fillOpacity="0.1" />

      </CoordinateSystem>
      <div className="bg-slate-50 text-slate-700 px-6 py-4 rounded-xl text-center shadow-sm w-full max-w-md border border-slate-200">
        <h4 className="font-bold mb-2">Нақты мысал: sin(x) ≥ 1/2 теңсіздігі</h4>
        <div className="flex flex-col gap-2 text-sm opacity-80 text-left pl-4">
          <p>
            <b>1-қадам:</b> Бірлік шеңберде y = 1/2 түзуін жүргіземіз (қызыл үзік сызық).
          </p>
          <p>
            <b>2-қадам:</b> Түзу шеңберді π/6 және 5π/6 нүктелерінде қияды.
          </p>
          <p>
            <b>3-қадам:</b> Теңсіздік ≥ болғандықтан, шеңбердің y = 1/2-ден жоғары орналасқан доғасын (<span className="text-green-600 font-bold">жасыл түспен</span>) белгілейміз.
          </p>
          <p className="mt-1 font-bold text-center text-blue-600">
            Жауабы: x ∈ [π/6 + 2πk; 5π/6 + 2πk]
          </p>
        </div>
      </div>
    </div>
  );
}

export default function VisualRenderer({ subjectId, unitId, topicId }: { subjectId: string, unitId: string, topicId?: string }) {
  
  if (subjectId === "algebra") {
    switch (unitId) {
      case "unit-1": return <NonLinearSystemGraph />; // Теңдеулер мен теңсіздіктер
      case "unit-3": return <SequenceGraph />;    // Тізбектер
      case "unit-4": 
        if (topicId === "topic-1") return <TrigIdentityGraph />;
        if (topicId === "topic-2") return <TrigRadiansGraph />;
        if (topicId === "topic-3") return <TrigFunctionsGraph />;
        if (topicId === "topic-4") return <TrigPropertiesGraph />;
        if (topicId === "topic-5") return <TrigReductionGraph />;
        if (topicId === "topic-6") return <TrigSumGraph />;
        if (topicId === "topic-7") return <TrigDoubleAngleGraph />;
        if (topicId === "topic-8") return <TrigHalfAngleGraph />;
        if (topicId === "topic-9") return <TrigSumProductGraph />;
        if (topicId === "topic-10") return <TrigProductSumGraph />;
        if (topicId === "topic-11") return <TrigSimplificationGraph />;
        return <UnitCircle />;    // Тригонометрия fallback
    }
  }

  if (subjectId === "geometry") {
    switch (unitId) {
      case "unit-1": 
        if (topicId === "topic-2") return <ScalarProductScene />;
        return <VectorsAdditionScene />;
      case "unit-3": return <TriangleScene />; // Үшбұрыштарды шешу
      case "unit-9": 
        if (topicId === "topic-2") return <VectorsAdditionScene />;
        if (topicId === "topic-3") return <ScalarProductScene />;
        return <SpecificVector2DGraph />;
    }
  }

  if (subjectId === "algebra10") {
    switch (unitId) {
      case "unit-3": return <SpecificRationalEquationGraph />; // Рационал өрнектер
      case "unit-5": return <InequalityGraph />;
      case "unit-6": return <SpecificTrigFunctionsGraph />;
      case "unit-7": return <SpecificUnitCircle />;
      case "unit-8": return <SpecificTrigEquationGraph />;
      case "unit-9": return <LimitsGraph />;
      case "unit-10": return <SpecificLimitHoleGraph />;
      case "unit-11": return <SpecificDerivativeTangentGraph />;
      case "unit-12": return <SpecificDerivativeRulesGraph />;
      case "unit-13": return <SpecificFunctionStudyGraph />;
      case "unit-14": return <SpecificExtremaGraph />;
      case "unit-15":
      case "unit-16": return <SpecificProbabilityGraph />;
      case "unit-17": return <DiscreteRandomVariableGraph />;
      case "unit-2": return <TransformationsGraph />;
      case "unit-4": return <EquationsGraph />;
      case "unit-inverse-func": return <InverseFunctionGraph />;
      case "unit-trig-ineq": return <TrigInequalityGraph />;
      default: return <FunctionGraph />; // covers unit-1
    }
  }
// --- Geometry 10 Visuals (2D SVG) ---

function StereometryAxioms2D() {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        <polygon points="-4,-2 4,-2 6,4 -2,4" fill="#3b82f6" fillOpacity="0.1" stroke="#3b82f6" strokeWidth="0.1" />
        <text x="4" y="3" fontSize="1" fill="#3b82f6" transform="scale(1,-1)">α</text>
        <line x1="-3" y1="5" x2="1" y2="1" stroke="#ef4444" strokeWidth="0.15" />
        <line x1="1" y1="1" x2="3" y2="-1" stroke="#ef4444" strokeWidth="0.15" strokeDasharray="0.2,0.2" />
        <line x1="3" y1="-1" x2="6" y2="-4" stroke="#ef4444" strokeWidth="0.15" />
        <circle cx="1" cy="1" r="0.2" fill="#ef4444" />
        <text x="1.5" y="-1.5" fontSize="1" fill="#ef4444" transform="scale(1,-1)">A</text>
      </CoordinateSystem>
      <div className="bg-slate-50 text-slate-700 px-6 py-4 rounded-xl text-center shadow-sm w-full max-w-md border border-slate-200">
        <h4 className="font-bold mb-2">Аксиома 1: Нүкте, түзу, жазықтық</h4>
        <p className="text-sm opacity-80">Жазықтықты қиып өтетін түзу және ортақ А нүктесі.</p>
      </div>
    </div>
  );
}

function ParallelPlanes2D() {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        <polygon points="-4,-4 4,-4 6,0 -2,0" fill="#10b981" fillOpacity="0.2" stroke="#10b981" strokeWidth="0.1" />
        <text x="4" y="-1" fontSize="1" fill="#10b981" transform="scale(1,-1)">β</text>
        <polygon points="-4,2 4,2 6,6 -2,6" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="0.1" />
        <text x="4" y="5" fontSize="1" fill="#3b82f6" transform="scale(1,-1)">α</text>
      </CoordinateSystem>
      <div className="bg-slate-50 text-slate-700 px-6 py-4 rounded-xl text-center shadow-sm w-full max-w-md border border-slate-200">
        <h4 className="font-bold mb-2">Параллель жазықтықтар</h4>
        <p className="text-sm opacity-80">α және β жазықтықтары ешқашан қиылыспайды.</p>
      </div>
    </div>
  );
}

function Perpendicularity2D() {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        <line x1="-6" y1="-2" x2="6" y2="-2" stroke="#3b82f6" strokeWidth="0.2" />
        <text x="5" y="-1" fontSize="1" fill="#3b82f6" transform="scale(1,-1)">α</text>
        <line x1="-2" y1="-2" x2="-2" y2="4" stroke="#ef4444" strokeWidth="0.15" />
        <text x="-3.5" y="-1" fontSize="1" fill="#ef4444" transform="scale(1,-1)">h</text>
        <line x1="-2" y1="4" x2="4" y2="-2" stroke="#10b981" strokeWidth="0.15" />
        <text x="1" y="-1.5" fontSize="1" fill="#10b981" transform="scale(1,-1)">L (көлбеу)</text>
        <line x1="-2" y1="-2" x2="4" y2="-2" stroke="#f59e0b" strokeWidth="0.3" />
        <text x="0" y="3" fontSize="1" fill="#f59e0b" transform="scale(1,-1)">p (проекция)</text>
        <polyline points="-2,-1.5 -1.5,-1.5 -1.5,-2" fill="none" stroke="#ef4444" strokeWidth="0.1" />
      </CoordinateSystem>
      <div className="bg-slate-50 text-slate-700 px-6 py-4 rounded-xl text-center shadow-sm w-full max-w-md border border-slate-200">
        <h4 className="font-bold mb-2">Перпендикуляр, көлбеу және проекция</h4>
        <p className="text-sm opacity-80">Пифагор теоремасы: L² = h² + p²</p>
      </div>
    </div>
  );
}

function DihedralAngle2D() {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        <circle cx="0" cy="0" r="0.2" fill="#94a3b8" />
        <line x1="0" y1="0" x2="5" y2="0" stroke="#3b82f6" strokeWidth="0.2" />
        <line x1="0" y1="0" x2="3" y2="4" stroke="#10b981" strokeWidth="0.2" />
        <path d="M 2 0 A 2 2 0 0 1 1.2 1.6" fill="none" stroke="#ef4444" strokeWidth="0.1" />
        <text x="2.5" y="-1" fontSize="1" fill="#ef4444" transform="scale(1,-1)">φ</text>
      </CoordinateSystem>
      <div className="bg-slate-50 text-slate-700 px-6 py-4 rounded-xl text-center shadow-sm w-full max-w-md border border-slate-200">
        <h4 className="font-bold mb-2">Екіжақты бұрыш (Сызықтық бұрыш)</h4>
        <p className="text-sm opacity-80">Қырына перпендикуляр түсірілген екі түзу арасындағы бұрыш.</p>
      </div>
    </div>
  );
}

function Prism2D() {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        <rect x="-2" y="-2" width="4" height="4" fill="none" stroke="#94a3b8" strokeWidth="0.1" strokeDasharray="0.2,0.2" />
        <rect x="-4" y="-4" width="4" height="4" fill="none" stroke="#3b82f6" strokeWidth="0.15" />
        <line x1="-4" y1="-4" x2="-2" y2="-2" stroke="#94a3b8" strokeWidth="0.1" strokeDasharray="0.2,0.2" />
        <line x1="-4" y1="0" x2="-2" y2="2" stroke="#3b82f6" strokeWidth="0.15" />
        <line x1="0" y1="-4" x2="2" y2="-2" stroke="#3b82f6" strokeWidth="0.15" />
        <line x1="0" y1="0" x2="2" y2="2" stroke="#3b82f6" strokeWidth="0.15" />
      </CoordinateSystem>
      <div className="bg-slate-50 text-slate-700 px-6 py-4 rounded-xl text-center shadow-sm w-full max-w-md border border-slate-200">
        <h4 className="font-bold mb-2">Тікбұрышты параллелепипед</h4>
        <p className="text-sm opacity-80">Кеңістіктік диагональ: d² = a² + b² + c²</p>
      </div>
    </div>
  );
}

function Pyramid2D() {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        <polygon points="-4,-2 4,-2 6,1 -2,1" fill="none" stroke="#94a3b8" strokeWidth="0.15" />
        <line x1="-4" y1="-2" x2="-2" y2="1" stroke="#94a3b8" strokeWidth="0.1" strokeDasharray="0.2,0.2" />
        <line x1="-2" y1="1" x2="6" y2="1" stroke="#94a3b8" strokeWidth="0.1" strokeDasharray="0.2,0.2" />
        <line x1="-4" y1="-2" x2="6" y2="1" stroke="#94a3b8" strokeWidth="0.05" strokeDasharray="0.2,0.2" />
        <line x1="4" y1="-2" x2="-2" y2="1" stroke="#94a3b8" strokeWidth="0.05" strokeDasharray="0.2,0.2" />
        <line x1="1" y1="-0.5" x2="1" y2="6" stroke="#ef4444" strokeWidth="0.15" strokeDasharray="0.2,0.2" />
        <text x="1.5" y="-3" fontSize="1" fill="#ef4444" transform="scale(1,-1)">H</text>
        <line x1="1" y1="6" x2="0" y2="-2" stroke="#10b981" strokeWidth="0.15" />
        <text x="-0.5" y="-2.5" fontSize="1" fill="#10b981" transform="scale(1,-1)">l (апофема)</text>
        <line x1="1" y1="6" x2="-4" y2="-2" stroke="#3b82f6" strokeWidth="0.15" />
        <line x1="1" y1="6" x2="4" y2="-2" stroke="#3b82f6" strokeWidth="0.15" />
        <line x1="1" y1="6" x2="6" y2="1" stroke="#3b82f6" strokeWidth="0.15" />
        <line x1="1" y1="6" x2="-2" y2="1" stroke="#94a3b8" strokeWidth="0.1" strokeDasharray="0.2,0.2" />
      </CoordinateSystem>
      <div className="bg-slate-50 text-slate-700 px-6 py-4 rounded-xl text-center shadow-sm w-full max-w-md border border-slate-200">
        <h4 className="font-bold mb-2">Дұрыс пирамида және апофема</h4>
        <p className="text-sm opacity-80">Биіктік (H) центріне түседі, апофема (l) — бүйір жағының биіктігі.</p>
      </div>
    </div>
  );
}

function PlatonicSolids2D() {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        <polygon points="-4,0 0,-2 4,0 0,2" fill="none" stroke="#3b82f6" strokeWidth="0.15" />
        <line x1="-4" y1="0" x2="0" y2="2" stroke="#94a3b8" strokeWidth="0.1" strokeDasharray="0.2,0.2" />
        <line x1="0" y1="2" x2="4" y2="0" stroke="#94a3b8" strokeWidth="0.1" strokeDasharray="0.2,0.2" />
        <circle cx="0" cy="5" r="0.15" fill="#ef4444" />
        <line x1="0" y1="5" x2="-4" y2="0" stroke="#ef4444" strokeWidth="0.15" />
        <line x1="0" y1="5" x2="0" y2="-2" stroke="#ef4444" strokeWidth="0.15" />
        <line x1="0" y1="5" x2="4" y2="0" stroke="#ef4444" strokeWidth="0.15" />
        <line x1="0" y1="5" x2="0" y2="2" stroke="#94a3b8" strokeWidth="0.1" strokeDasharray="0.2,0.2" />
        <circle cx="0" cy="-5" r="0.15" fill="#10b981" />
        <line x1="0" y1="-5" x2="-4" y2="0" stroke="#10b981" strokeWidth="0.15" />
        <line x1="0" y1="-5" x2="0" y2="-2" stroke="#10b981" strokeWidth="0.15" />
        <line x1="0" y1="-5" x2="4" y2="0" stroke="#10b981" strokeWidth="0.15" />
        <line x1="0" y1="-5" x2="0" y2="2" stroke="#94a3b8" strokeWidth="0.1" strokeDasharray="0.2,0.2" />
      </CoordinateSystem>
      <div className="bg-slate-50 text-slate-700 px-6 py-4 rounded-xl text-center shadow-sm w-full max-w-md border border-slate-200">
        <h4 className="font-bold mb-2">Октаэдр (Платон денесі)</h4>
        <p className="text-sm opacity-80">8 тең қабырғалы үшбұрыштан тұратын дұрыс көпжақ.</p>
      </div>
    </div>
  );
}

function Volumes2D() {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        <rect x="-6" y="-4" width="4" height="6" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="0.15" />
        <text x="-4" y="-2" fontSize="1" fill="#3b82f6" transform="scale(1,-1)" textAnchor="middle">V = SH</text>
        <polygon points="2,-4 6,-4 4,2" fill="#ef4444" fillOpacity="0.3" stroke="#ef4444" strokeWidth="0.15" />
        <text x="4" y="1" fontSize="0.8" fill="#ef4444" transform="scale(1,-1)" textAnchor="middle">V = 1/3 SH</text>
        <line x1="-2" y1="-4" x2="2" y2="-4" stroke="#94a3b8" strokeWidth="0.05" strokeDasharray="0.2,0.2" />
        <line x1="-2" y1="2" x2="4" y2="2" stroke="#94a3b8" strokeWidth="0.05" strokeDasharray="0.2,0.2" />
        <line x1="0" y1="-4" x2="0" y2="2" stroke="#10b981" strokeWidth="0.15" />
        <text x="-0.5" y="1" fontSize="1" fill="#10b981" transform="scale(1,-1)">H</text>
      </CoordinateSystem>
      <div className="bg-slate-50 text-slate-700 px-6 py-4 rounded-xl text-center shadow-sm w-full max-w-md border border-slate-200">
        <h4 className="font-bold mb-2">Көлемдердің арақатынасы</h4>
        <p className="text-sm opacity-80">Табаны мен биіктігі бірдей болғанда, пирамида көлемі призмадан 3 есе кіші.</p>
      </div>
    </div>
  );
}

function RevolutionBodies2D() {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        <line x1="0" y1="-6" x2="0" y2="6" stroke="#94a3b8" strokeWidth="0.15" strokeDasharray="0.3,0.3" />
        <rect x="-4" y="-4" width="4" height="6" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="0.15" />
        <path d="M -4 2 A 4 1 0 0 1 4 2" fill="none" stroke="#3b82f6" strokeWidth="0.1" strokeDasharray="0.2,0.2" />
        <path d="M -4 -4 A 4 1 0 0 0 4 -4" fill="none" stroke="#3b82f6" strokeWidth="0.1" strokeDasharray="0.2,0.2" />
        <line x1="4" y1="-4" x2="4" y2="2" stroke="#3b82f6" strokeWidth="0.1" strokeDasharray="0.2,0.2" />
        <polygon points="0,2 6,-4 0,-4" fill="#ef4444" fillOpacity="0.5" stroke="#ef4444" strokeWidth="0.15" />
        <path d="M 0 -4 A 6 1.5 0 0 0 6 -4" fill="none" stroke="#ef4444" strokeWidth="0.1" strokeDasharray="0.2,0.2" />
        <line x1="-6" y1="-4" x2="0" y2="2" stroke="#ef4444" strokeWidth="0.1" strokeDasharray="0.2,0.2" />
      </CoordinateSystem>
      <div className="bg-slate-50 text-slate-700 px-6 py-4 rounded-xl text-center shadow-sm w-full max-w-md border border-slate-200">
        <h4 className="font-bold mb-2">Айналу денелері</h4>
        <p className="text-sm opacity-80">Тіктөртбұрышты айналдыру — цилиндр, тікбұрышты үшбұрышты айналдыру — конус береді.</p>
      </div>
    </div>
  );
}

function Sphere2D() {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        <circle cx="0" cy="0" r="5" fill="#3b82f6" fillOpacity="0.1" stroke="#3b82f6" strokeWidth="0.2" />
        <ellipse cx="0" cy="0" rx="5" ry="1.5" fill="none" stroke="#3b82f6" strokeWidth="0.15" strokeDasharray="0.2,0.2" />
        <path d="M -5 0 A 5 1.5 0 0 0 5 0" fill="none" stroke="#3b82f6" strokeWidth="0.15" />
        <circle cx="0" cy="0" r="0.15" fill="#ef4444" />
        <line x1="0" y1="0" x2="5" y2="0" stroke="#ef4444" strokeWidth="0.15" />
        <text x="2.5" y="-0.5" fontSize="1" fill="#ef4444" transform="scale(1,-1)">R</text>
        <line x1="0" y1="-5" x2="0" y2="5" stroke="#10b981" strokeWidth="0.1" strokeDasharray="0.2,0.2" />
      </CoordinateSystem>
      <div className="bg-slate-50 text-slate-700 px-6 py-4 rounded-xl text-center shadow-sm w-full max-w-md border border-slate-200">
        <h4 className="font-bold mb-2">Сфера және Шар</h4>
        <p className="text-sm opacity-80">Үлкен дөңгелек ауданы S = πR², сфераның толық беті S = 4πR².</p>
      </div>
    </div>
  );
}

  
  if (subjectId === "geometry10") {
    switch (unitId) {
      case "unit-1": return <StereometryAxioms2D />;
      case "unit-2": return <ParallelPlanes2D />;
      case "unit-3": return <Perpendicularity2D />;
      case "unit-4": return <DihedralAngle2D />;
      case "unit-5": return <Prism2D />;
      case "unit-6": return <Pyramid2D />;
      case "unit-7": return <PlatonicSolids2D />;
      case "unit-8": return <Volumes2D />;
      
      // Fallbacks for older mapped units if they exist
      case "unit-18": return <SpecificTriangleGraph />;
      case "unit-19": return <SpecificCircleGraph />;
      case "unit-20": return <SpecificSimilarTrianglesGraph />;
      case "unit-21": return <SpecificPythagoreanGraph />;
      case "unit-22": return <SpecificGeometryTrigGraph />;
      case "unit-23": return <SpecificVector2DGraph />;
      case "unit-24": return <SpecificCoordinateDistanceGraph />;
      default: return <StereometryAxioms2D />;
    }
  }

  if (subjectId === "algebra11") {
    switch (unitId) {
      case "unit-11-1": return <SpecificIntegralGraph />; // Интеграл
      case "unit-11-2": return <SpecificStatisticsHistogramGraph />;   // Статистика
      case "unit-11-3": return <SpecificPowerFunctionGraph />; // Дәрежелік функция
      case "unit-11-4": return <SpecificIrrationalEquationGraph />; // Иррационал теңдеулер
      case "unit-11-5": return <ComplexPlaneScene />; // Комплекс сандар (2D жазықтық)
      case "unit-11-6": return <SpecificExpLogGraph />;   // Көрсеткіштік және логарифмдік функциялар
      case "unit-11-7": return <SpecificLogEquationGraph />; // Логарифмдік теңдеулер
      case "unit-11-8": return <SpecificIntegralGraph />;  // Интеграл және оның қолданылуы
      default: return <SpecificIntegralGraph />;
    }
  }

  if (subjectId === "geometry11") {
    switch (unitId) {
      case "unit-11g-1": 
        if (topicId === "topic-11g-1-2") return <SpecificPyramidScene />;
        return <SpecificPrismScene />;
      case "unit-11g-2": 
        if (topicId === "topic-11g-2-2") return <SpecificSphereAreaScene />;
        return <SpecificConeScene />;
      case "unit-11g-3": return <SpecificAllVolumesScene />;
      case "unit-9": return <RevolutionBodies2D />;
      case "unit-10": return <Sphere2D />;
    }
  }

  return null;
}
