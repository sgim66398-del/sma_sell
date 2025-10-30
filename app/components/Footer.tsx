export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-gray-600">
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          <div>
            <div className="font-semibold text-gray-800">SmaSell</div>
            <div className="mt-2">AI 기반 소상공인 경영 지원 플랫폼 • © {new Date().getFullYear()}</div>
          </div>

          <div className="flex gap-6">
            <div>
              <div className="font-medium text-gray-700">제품</div>
              <div className="mt-2 text-gray-500">대시보드 · 재고관리 · AI 어시스턴트</div>
            </div>
            <div>
              <div className="font-medium text-gray-700">회사</div>
              <div className="mt-2 text-gray-500">소개 · 이용약관 · 개인정보처리방침</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
