export default function AnalyticsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">매출 분석</h1>

      {/* 기간 선택 필터 */}
      <div className="flex gap-4 mb-8">
        <button className="px-4 py-2 bg-blue-600 text-white rounded">오늘</button>
        <button className="px-4 py-2 bg-white text-gray-600 rounded">이번 주</button>
        <button className="px-4 py-2 bg-white text-gray-600 rounded">이번 달</button>
        <button className="px-4 py-2 bg-white text-gray-600 rounded">3개월</button>
        <button className="px-4 py-2 bg-white text-gray-600 rounded">연간</button>
        <button className="px-4 py-2 bg-white text-gray-600 rounded">직접 설정</button>
      </div>

      {/* 주요 지표 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-gray-500 mb-2">총 매출</h3>
          <p className="text-2xl font-bold">₩15,240,000</p>
          <span className="text-green-500 text-sm">+12.5% 전월 대비</span>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-gray-500 mb-2">거래 건수</h3>
          <p className="text-2xl font-bold">1,234건</p>
          <span className="text-green-500 text-sm">+5.2% 전월 대비</span>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-gray-500 mb-2">평균 객단가</h3>
          <p className="text-2xl font-bold">₩12,350</p>
          <span className="text-green-500 text-sm">+7.3% 전월 대비</span>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-gray-500 mb-2">순이익률</h3>
          <p className="text-2xl font-bold">32.5%</p>
          <span className="text-yellow-500 text-sm">-2.1% 전월 대비</span>
        </div>
      </div>

      {/* 매출 그래프 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">시간대별 매출</h2>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center text-gray-400">
            시간대별 매출 차트 영역
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">요일별 매출</h2>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center text-gray-400">
            요일별 매출 차트 영역
          </div>
        </div>
      </div>

      {/* 인기 상품 & AI 인사이트 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">인기 상품 TOP 5</h2>
          <ul className="space-y-4">
            <li className="flex items-center justify-between">
              <div>
                <span className="font-medium">1. 아메리카노</span>
                <p className="text-sm text-gray-500">2,345잔 판매</p>
              </div>
              <span className="text-green-500">+15%</span>
            </li>
            <li className="flex items-center justify-between">
              <div>
                <span className="font-medium">2. 카페라떼</span>
                <p className="text-sm text-gray-500">1,234잔 판매</p>
              </div>
              <span className="text-green-500">+8%</span>
            </li>
            <li className="flex items-center justify-between">
              <div>
                <span className="font-medium">3. 바닐라라떼</span>
                <p className="text-sm text-gray-500">987잔 판매</p>
              </div>
              <span className="text-red-500">-3%</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">AI 매출 인사이트</h2>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <span className="text-blue-500">📈</span>
              <div>
                <p className="font-medium">매출 상승 요인 분석</p>
                <p className="text-sm text-gray-500">인근 대학교 개강으로 인한 유동인구 증가가 주 요인</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-yellow-500">🌤</span>
              <div>
                <p className="font-medium">날씨 영향도</p>
                <p className="text-sm text-gray-500">기온 상승으로 아이스 음료 판매 20% 증가</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-500">💡</span>
              <div>
                <p className="font-medium">개선 추천</p>
                <p className="text-sm text-gray-500">오후 3-5시 매출 부진, 해피아워 프로모션 검토 필요</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}