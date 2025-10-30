export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            SmaSell — 소상공인을 위한 AI 경영 비서
          </h1>
          <p className="text-gray-600 mb-6">매출과 재고를 한 번에. 자동 예측, 발주 추천, 맞춤 리포트로 더 쉽게 운영하세요.</p>

          <div className="flex gap-3 flex-wrap">
            <button className="bg-blue-600 text-white px-5 py-3 rounded-md font-semibold hover:bg-blue-700">무료로 시작하기</button>
            <button className="border border-gray-200 px-5 py-3 rounded-md text-gray-700 hover:bg-gray-50">데모 신청</button>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-blue-50 rounded">📊</div>
              <div>
                <div className="font-medium">AI 매출 예측</div>
                <div className="text-xs text-gray-500">다음 주/월 예측</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="p-2 bg-blue-50 rounded">📦</div>
              <div>
                <div className="font-medium">재고 최적화</div>
                <div className="text-xs text-gray-500">자동 발주 권장</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="p-2 bg-blue-50 rounded">💬</div>
              <div>
                <div className="font-medium">인사이트 리포트</div>
                <div className="text-xs text-gray-500">요약 리포트 제공</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="p-2 bg-blue-50 rounded">🤖</div>
              <div>
                <div className="font-medium">AI 어시스턴트</div>
                <div className="text-xs text-gray-500">대화형 경영 조언</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full max-w-md">
          <div className="bg-white border rounded-lg p-4 shadow-sm">
            <div className="h-64 bg-gradient-to-b from-gray-50 to-white rounded flex items-center justify-center text-gray-400">
              앱 스크린샷 미리보기
            </div>

            <div className="mt-4 text-sm text-gray-600">
              <div className="flex items-center justify-between">
                <div>이번주 예상 매출</div>
                <div className="font-semibold">₩1,240,000</div>
              </div>
              <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                <div>재고 건전성</div>
                <div className="text-green-600 font-medium">안정</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
