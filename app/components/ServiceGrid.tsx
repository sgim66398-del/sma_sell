export default function ServiceGrid() {
  const services = [
    { title: 'POS 연동', desc: '기존 POS/카드 매출과 자동 동기화', badge: '연동' },
    { title: '날씨·이벤트 데이터', desc: '지역 날씨와 행사 정보를 자동 반영', badge: '데이터' },
    { title: '프리미엄 리포트', desc: '월간 심층 리포트 및 추천 액션', badge: '유료' },
    { title: 'API & 통계', desc: '프랜차이즈용 데이터 패키지 제공', badge: 'B2B' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {services.map((s) => (
        <div key={s.title} className="p-4 bg-gray-50 rounded-lg border">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-gray-800">{s.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{s.desc}</p>
            </div>
            <div className="text-xs text-white bg-blue-600 px-2 py-1 rounded">{s.badge}</div>
          </div>
          <div className="mt-3 flex gap-2">
            <button className="text-sm px-3 py-1 bg-white border rounded">자세히</button>
            <button className="text-sm px-3 py-1 bg-blue-600 text-white rounded">연동 신청</button>
          </div>
        </div>
      ))}
    </div>
  );
}
