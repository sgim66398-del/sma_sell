export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          SmaSell - 소상공인을 위한 AI 기반 경영 지원 플랫폼
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">📊 AI 매출 예측</h2>
            <p>과거 매출 데이터와 외부 요인을 분석하여 미래 매출을 정확하게 예측합니다.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">📦 재고 최적화</h2>
            <p>AI가 판매 트렌드를 분석하여 최적의 재고 수준을 유지하도록 도와드립니다.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">💬 매출 인사이트</h2>
            <p>주요 매출 변동 요인과 트렌드를 쉽게 이해할 수 있는 리포트를 제공합니다.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">🤖 AI 챗봇 경영비서</h2>
            <p>24시간 언제든 물어보세요. 데이터 기반의 경영 조언을 제공합니다.</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            무료로 시작하기
          </button>
        </div>
      </div>
    </main>
  );
}
