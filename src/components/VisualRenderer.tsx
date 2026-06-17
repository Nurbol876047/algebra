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

function StatsGraph() {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CoordinateSystem>
        {/* Bell curve (Normal distribution) */}
        <path d="M -9 0 C -4 0, -2 8, 0 8 C 2 8, 4 0, 9 0" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" strokeWidth="0.2" />
        <line x1="0" y1="0" x2="0" y2="8" stroke="#ef4444" strokeWidth="0.1" strokeDasharray="0.2,0.2" />
        <text x="0" y="-1" fontSize="1" fill="#ef4444" textAnchor="middle" transform="scale(1,-1)">M(X)</text>
      </CoordinateSystem>
      <div className="text-sm font-bold bg-white p-4 rounded-xl border border-slate-200">
        Қалыпты үлестірім: Математикалық күтім M(X) және дисперсия
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


function PolyhedronScene() {
  return (
    <div className="w-full aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-inner relative">
      <Canvas camera={{ position: [6, 6, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        {/* Cube (Prism) */}
        <Box args={[2, 2, 2]} position={[-2, 1, 0]}>
          <meshStandardMaterial color="#10b981" transparent opacity={0.8} wireframe={true} />
        </Box>
        
        {/* Pyramid (Cone with 4 radial segments) */}
        <Cylinder args={[0, 1.5, 2.5, 4]} position={[2, 1.25, 0]}>
          <meshStandardMaterial color="#f59e0b" transparent opacity={0.8} wireframe={true} />
        </Cylinder>
        
        <OrbitControls autoRotate autoRotateSpeed={1.5} />
      </Canvas>
      <div className="absolute bottom-4 left-4 text-white text-sm font-bold bg-black/50 px-4 py-2 rounded-lg">
        Стереометрия: Призма және Пирамида
      </div>
    </div>
  );
}

function RevolutionBodiesScene() {
  return (
    <div className="w-full aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-inner relative">
      <Canvas camera={{ position: [6, 6, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        {/* Cylinder */}
        <Cylinder args={[1.5, 1.5, 3, 32]} position={[-2, 1.5, 0]}>
          <meshStandardMaterial color="#3b82f6" transparent opacity={0.6} wireframe={true} />
        </Cylinder>
        
        {/* Cone */}
        <Cylinder args={[0, 1.5, 3, 32]} position={[2, 1.5, 0]}>
          <meshStandardMaterial color="#ef4444" transparent opacity={0.6} wireframe={true} />
        </Cylinder>
        
        <OrbitControls autoRotate autoRotateSpeed={1.5} />
      </Canvas>
      <div className="absolute bottom-4 left-4 text-white text-sm font-bold bg-black/50 px-4 py-2 rounded-lg">
        Айналу денелері: Цилиндр және Конус
      </div>
    </div>
  );
}

function SphereScene() {
  return (
    <div className="w-full aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-inner relative">
      <Canvas camera={{ position: [5, 5, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        {/* Solid inner sphere */}
        <Sphere args={[2, 32, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#8b5cf6" transparent opacity={0.3} />
        </Sphere>
        {/* Wireframe outer sphere */}
        <Sphere args={[2.01, 16, 16]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#c4b5fd" wireframe={true} opacity={0.5} transparent />
        </Sphere>
        
        {/* Radius line */}
        <Line points={[[0,0,0], [2,0,0]]} color="#f59e0b" lineWidth={2} />
        
        {/* Center dot */}
        <Sphere args={[0.1, 8, 8]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#ef4444" />
        </Sphere>
        
        <OrbitControls autoRotate autoRotateSpeed={1} />
      </Canvas>
      <div className="absolute bottom-4 left-4 text-white text-sm font-bold bg-black/50 px-4 py-2 rounded-lg">
        Айналу денелері: Сфера және Шар
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

function SpecificDerivativeGraph() {
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
        {/* f(x) = x^2 - 4x */}
        <polyline points={parabola} fill="none" stroke="#3b82f6" strokeWidth="0.2" />
        
        {/* f'(x) = 2x - 4 */}
        <polyline points={derivativeLine} fill="none" stroke="#ef4444" strokeWidth="0.15" />
        
        {/* Minimum point connection */}
        <line x1="2" y1="-4" x2="2" y2="0" stroke="#10b981" strokeWidth="0.1" strokeDasharray="0.2,0.2" />
        <circle cx="2" cy="-4" r="0.2" fill="#3b82f6" />
        <circle cx="2" cy="0" r="0.2" fill="#ef4444" />
        
        <text x="2.3" y="-3.5" fontSize="0.7" fill="#3b82f6" transform="scale(1,-1)">min(2; -4)</text>
        <text x="0.5" y="0.5" fontSize="0.7" fill="#ef4444" transform="scale(1,-1)">f'(2) = 0</text>
        
        {/* Labels */}
        <text x="4" y="2" fontSize="0.8" fill="#3b82f6" transform="scale(1,-1)">f(x) = x² - 4x</text>
        <text x="4" y="5" fontSize="0.8" fill="#ef4444" transform="scale(1,-1)">f'(x) = 2x - 4</text>
      </CoordinateSystem>
      <div className="text-sm font-bold bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm w-full max-w-md">
        <h4 className="text-slate-800 mb-2">Нақты мысал: Функция және оның туындысы</h4>
        <div className="flex flex-col gap-2 text-left pl-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="opacity-80">Функция: f(x) = x² - 4x</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="opacity-80">Туындысы: f'(x) = 2x - 4</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="opacity-80">f'(x) = 0 болғанда (x=2), негізгі функция минимумға жетеді.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Main Switcher ---

export default function VisualRenderer({ subjectId, unitId, topicId }: { subjectId: string, unitId: string, topicId?: string }) {
  
  if (subjectId === "algebra") {
    switch (unitId) {
      case "unit-1": return <NonLinearSystemGraph />; // Теңдеулер мен теңсіздіктер
      case "unit-3": return <SequenceGraph />;    // Тізбектер
      case "unit-4": return <UnitCircle />;    // Тригонометрия
    }
  }

  if (subjectId === "geometry") {
    switch (unitId) {
      case "unit-1": 
        if (topicId === "topic-2") return <ScalarProductScene />;
        return <VectorsAdditionScene />;
      case "unit-3": return <TriangleScene />; // Үшбұрыштарды шешу
    }
  }

  if (subjectId === "algebra10") {
    switch (unitId) {
      case "unit-3": return <FunctionGraph />; // Рационал өрнектер
      case "unit-5": return <InequalityGraph />;
      case "unit-6":
      case "unit-7":
      case "unit-8": return <SpecificUnitCircle />;
      case "unit-9": return <LimitsGraph />;
      case "unit-10":
      case "unit-11":
      case "unit-12":
      case "unit-13":
      case "unit-14": return <SpecificDerivativeGraph />;
      case "unit-15":
      case "unit-16": return <StatsGraph />;
      case "unit-2": return <TransformationsGraph />;
      case "unit-4": return <EquationsGraph />;
      default: return <FunctionGraph />; // covers unit-1, 17
    }
  }
  
  if (subjectId === "geometry10") {
    switch (unitId) {
      case "unit-19": return <AnalyticGeometryScene />;
      case "unit-21":
      case "unit-22": return <PerpendicularityScene />;
      case "unit-23":
      case "unit-24": return <VectorsScene />;
      default: return <ParallelismScene />; // covers unit-18, 20
    }
  }

  if (subjectId === "algebra11") {
    switch (unitId) {
      case "unit-11-1": return <ExtremaGraph />; // Интеграл (using extrema graph to show area/curves)
      case "unit-11-2": return <StatsGraph />;   // Статистика
      case "unit-11-3": return <FunctionGraph />; // Дәрежелік функция
      case "unit-11-4": return <FunctionGraph />; // Иррационал теңдеулер
      case "unit-11-5": return <ComplexPlaneScene />; // Комплекс сандар (2D жазықтық)
      case "unit-11-6": return <LimitsGraph />;  // Экспонента/Логарифм (асимптоталары бар графиктер)
      case "unit-11-7": return <FunctionGraph />; // Логарифмдік теңдеулер
      case "unit-11-8": return <DerivativeGraph />; // Дифференциалдық теңдеулер
    }
  }

  if (subjectId === "geometry11") {
    switch (unitId) {
      case "unit-11g-1": return <PolyhedronScene />;
      case "unit-11g-2": 
        if (topicId === "topic-11g-2-2") return <SphereScene />;
        return <RevolutionBodiesScene />;
      case "unit-11g-3": return <RevolutionBodiesScene />;
    }
  }

  return null;
}
