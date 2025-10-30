import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              SmaSell
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
              대시보드
            </Link>
            <Link href="/inventory" className="text-gray-600 hover:text-gray-900">
              재고관리
            </Link>
            <Link href="/analytics" className="text-gray-600 hover:text-gray-900">
              매출분석
            </Link>
            <Link href="/ai-assistant" className="text-gray-600 hover:text-gray-900">
              AI 어시스턴트
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}