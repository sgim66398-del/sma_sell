export default function AiAssistantPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">AI 경영 어시스턴트</h1>

      {/* 챗봇 인터페이스 */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* 채팅 영역 */}
          <div className="h-[600px] overflow-y-auto p-6 space-y-4">
            {/* AI 메시지 */}
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">AI</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-gray-100 rounded-lg p-4">
                  <p className="text-gray-800">
                    안녕하세요! 저는 SmaSell의 AI 경영 어시스턴트입니다. 
                    매출, 재고, 경영 전략에 대해 무엇이든 물어보세요.
                  </p>
                </div>
              </div>
            </div>

            {/* 사용자 메시지 */}
            <div className="flex items-start space-x-3 justify-end">
              <div className="flex-1">
                <div className="bg-blue-600 rounded-lg p-4">
                  <p className="text-white">
                    이번 주 매출이 어떤가요?
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 text-sm">나</span>
                </div>
              </div>
            </div>

            {/* AI 응답 */}
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">AI</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-gray-100 rounded-lg p-4">
                  <p className="text-gray-800 mb-3">
                    이번 주 매출은 전주 대비 15% 증가했습니다. 주요 변동 사항을 분석해드리겠습니다:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>신메뉴 '카라멜 마키아토' 출시 효과 (+8%)</li>
                    <li>주말 날씨 호전으로 인한 방문객 증가 (+5%)</li>
                    <li>인근 대학가 개강 시즌 영향 (+2%)</li>
                  </ul>
                  <div className="mt-4 p-3 bg-blue-50 rounded">
                    <p className="text-blue-800 font-medium">💡 추천 액션</p>
                    <p className="text-blue-600 text-sm">
                      현재 트렌드를 고려할 때, 카라멜 마키아토 관련 프로모션을 
                      학생 타겟으로 확대하면 추가 매출 증대가 기대됩니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 입력 영역 */}
          <div className="border-t p-4">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="질문을 입력하세요..."
                className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                전송
              </button>
            </div>
            {/* 추천 질문 */}
            <div className="mt-4 flex space-x-2 text-sm">
              <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-200">
                재고 발주 추천
              </button>
              <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-200">
                매출 개선 방안
              </button>
              <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-200">
                경쟁사 분석
              </button>
            </div>
          </div>
        </div>

        {/* 기능 설명 */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">💬 자연스러운 대화</h3>
            <p className="text-gray-600">
              복잡한 데이터를 쉽게 이해할 수 있도록 자연어로 설명해드립니다.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">📊 실시간 분석</h3>
            <p className="text-gray-600">
              매출, 재고, 고객 데이터를 실시간으로 분석하여 인사이트를 제공합니다.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">🎯 맞춤형 제안</h3>
            <p className="text-gray-600">
              비즈니스 상황에 맞는 구체적인 개선 방안을 제시합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}