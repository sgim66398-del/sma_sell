export default function RecentActivity() {
  const items = [
    { time: '방금', text: "아메리카노 재고 30개 추가" },
    { time: '1시간 전', text: "AI: 다음주 발주 15kg 권장(원두)" },
    { time: '오늘 오전', text: "판매 리포트: 오전 11시 매출 급증" },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
      <h3 className="font-medium text-gray-800 mb-3">최근 활동</h3>
      <ul className="space-y-3 text-sm text-gray-700">
        {items.map((it, idx) => (
          <li key={idx} className="flex items-start justify-between">
            <div>{it.text}</div>
            <div className="text-xs text-gray-400">{it.time}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
