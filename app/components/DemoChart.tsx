export default function DemoChart({ title = '매출 추이' }: { title?: string }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-medium text-gray-800">{title}</h3>
        <div className="text-xs text-gray-500">최근 30일</div>
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
          <polyline
            fill="none"
            stroke="#2563eb"
            strokeWidth="2"
            points="0,70 30,60 60,50 90,40 120,35 150,30 180,25 210,28 240,22 270,18 300,12"
          />
          <polygon points="0,70 30,60 60,50 90,40 120,35 150,30 180,25 210,28 240,22 270,18 300,12 300,100 0,100" fill="url(#g1)" />
        </svg>
      </div>

      <div className="mt-3 text-sm text-gray-600">전월 대비 +12.5% — 주말 수요 상승</div>
    </div>
  );
}
