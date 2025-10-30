export default function QuickStats() {
  const stats = [
    { label: '이번 주 매출(예상)', value: '₩1,240,000', delta: '+15%' },
    { label: '재고 건전성', value: '85%', delta: '보통' },
    { label: '거래 건수', value: '1,234건', delta: '+5%' },
    { label: 'AI 권장 액션', value: '3건', delta: '확인' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="text-xs text-gray-500">{s.label}</div>
            <div className="mt-2 flex items-end justify-between">
              <div className="text-lg font-semibold text-gray-900">{s.value}</div>
              <div className="text-sm text-gray-500">{s.delta}</div>
            </div>
            <div className="mt-3 h-6">
              {/* tiny sparkline mock */}
              <svg viewBox="0 0 100 20" className="w-full h-6">
                <polyline
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  points="0,15 20,10 40,12 60,6 80,8 100,4"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
