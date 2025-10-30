import Hero from "./components/Hero";
import FeatureCard from "./components/FeatureCard";
import ServiceGrid from "./components/ServiceGrid";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6">주요 메뉴</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <FeatureCard title="대시보드" description="한눈에 보는 매출·재고 상태" icon="📊" href="/dashboard" />
          <FeatureCard title="재고관리" description="자동 발주 추천 및 알림" icon="📦" href="/inventory" />
          <FeatureCard title="매출분석" description="시간대·요일별 분석 차트" icon="📈" href="/analytics" />
          <FeatureCard title="AI 어시스턴트" description="대화로 묻고 바로 실행" icon="🤖" href="/ai-assistant" />
        </div>
      </section>

      <section className="bg-white border-t py-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">부가 서비스</h2>
          <ServiceGrid />
        </div>
      </section>

      <Footer />
    </main>
  );
}
