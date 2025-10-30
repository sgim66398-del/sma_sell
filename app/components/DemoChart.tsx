"use client";

import { useMemo } from "react";

export default function DemoChart({ timeframe = "30일", title = "매출 추이" }: { timeframe?: string; title?: string }) {
  // generate mock points based on timeframe
  const points = useMemo(() => {
    const len = timeframe === "7일" ? 7 : timeframe === "90일" ? 30 : 14; // small mapping for visual
    const step = 300 / Math.max(1, len - 1);
    let y = 60;
    const pts: string[] = [];
    for (let i = 0; i < len; i++) {
      y = Math.max(10, Math.min(80, y + (Math.random() * 20 - 10)));
      pts.push(`${Math.round(i * step)},${Math.round(y)}`);
    }
    return pts.join(" ");
  }, [timeframe]);

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-medium text-gray-800">{title}</h3>
        <div className="text-xs text-gray-500">{timeframe}</div>
      </div>

      <div className="w-full h-44">
        {/* Simple SVG line chart mock */}
        <svg viewBox="0 0 300 100" className="w-full h-full">
          <defs>
            <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#bfdbfe" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polyline fill="none" stroke="#2563eb" strokeWidth="2" points={points} />
          {/* area fill approximation: duplicate points to close polygon */}
          <polygon points={`${points} 300,100 0,100`} fill="url(#g1)" />
        </svg>
      </div>

      <div className="mt-3 text-sm text-gray-600">전월 대비 +12.5% — 주말 수요 상승</div>
    </div>
  );
}
