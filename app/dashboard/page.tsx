export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">대시보드</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* 주요 지표 카드 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-gray-500 mb-2">이번 달 예상 매출</h3>
          <p className="text-2xl font-bold">₩15,240,000</p>
          <span className="text-green-500 text-sm">+12.5% 전월 대비</span>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-gray-500 mb-2">재고 건전성</h3>
          <p className="text-2xl font-bold">85%</p>
          <span className="text-yellow-500 text-sm">주의 필요 항목 2개</span>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-gray-500 mb-2">고객 만족도</h3>
          <p className="text-2xl font-bold">4.8/5.0</p>
          <span className="text-green-500 text-sm">상위 10% 달성</span>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-gray-500 mb-2">AI 추천 액션</h3>
          <p className="text-2xl font-bold">3건</p>
          <span className="text-blue-500 text-sm">클릭하여 확인</span>
        </div>
      </div>

      {/* 매출 그래프 섹션 */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold mb-4">매출 트렌드</h2>
        <div className="h-64 bg-gray-100 rounded">
          {/* 차트 컴포넌트가 들어갈 자리 */}
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            차트 컴포넌트 추가 예정
          </div>
        </div>
      </div>

      {/* AI 인사이트 섹션 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">AI 인사이트</h2>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <span className="text-blue-500">📈</span>
              <p>주말 매출이 평균 대비 25% 상승 중. 직원 배치 강화 추천</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-yellow-500">⚠️</span>
              <p>다음 주 날씨 영향으로 음료 수요 증가 예상. 재고 보충 필요</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-500">💡</span>
              <p>신메뉴 3개 항목 판매 호조. 프로모션 확대 고려</p>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">재고 알림</h2>
          <ul className="space-y-4">
            <li className="flex items-center justify-between">
              <span>원두 (아라비카)</span>
              <span className="text-red-500">부족 예상</span>
            </li>
            <li className="flex items-center justify-between">
              <span>우유</span>
              <span className="text-green-500">적정</span>
            </li>
            <li className="flex items-center justify-between">
              <span>시럽</span>
              <span className="text-yellow-500">주문 필요</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}