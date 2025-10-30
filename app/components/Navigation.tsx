"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="w-9 h-9 bg-blue-600 rounded flex items-center justify-center text-white font-bold">S</div>
              <span className="text-lg font-semibold text-gray-800">SmaSell</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-2">
              <Link href="/dashboard" className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900 rounded-md">
                대시보드
              </Link>
              <Link href="/inventory" className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900 rounded-md">
                재고관리
              </Link>
              <Link href="/analytics" className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900 rounded-md">
                매출분석
              </Link>
              <Link href="/ai-assistant" className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900 rounded-md">
                AI 어시스턴트
              </Link>
            </nav>
          </div>

          <div className="flex-1 px-4 hidden md:block">
            <div className="max-w-md mx-auto">
              <label className="relative block">
                <span className="sr-only">Search</span>
                <input
                  className="placeholder:italic placeholder:text-slate-400 block bg-gray-100 w-full border border-transparent rounded-md py-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="매장, 상품, 리포트 검색..."
                  type="text"
                  name="search"
                />
                <button className="absolute right-1 top-1/2 -translate-y-1/2 p-1 text-gray-500 hover:text-gray-700">
                  🔎
                </button>
              </label>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden md:inline-flex items-center px-3 py-2 bg-white border border-gray-200 rounded text-sm text-gray-700 hover:bg-gray-50">업그레이드</button>
            <button className="hidden md:inline-flex items-center p-2 text-gray-600 hover:text-gray-900" aria-label="notifications">🔔</button>
            <div className="hidden md:flex items-center gap-3">
              <img src="/avatar-placeholder.svg" alt="profile" className="w-8 h-8 rounded-full object-cover" />
              <span className="text-sm text-gray-700">사장님</span>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
              onClick={() => setOpen(!open)}
              aria-label="menu"
            >
              {open ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-3 space-y-2">
            <Link href="/dashboard" className="block px-2 py-2 rounded text-gray-700">대시보드</Link>
            <Link href="/inventory" className="block px-2 py-2 rounded text-gray-700">재고관리</Link>
            <Link href="/analytics" className="block px-2 py-2 rounded text-gray-700">매출분석</Link>
            <Link href="/ai-assistant" className="block px-2 py-2 rounded text-gray-700">AI 어시스턴트</Link>
            <Link href="/settings" className="block px-2 py-2 rounded text-gray-700">설정</Link>
          </div>
        </div>
      )}
    </header>
  );
}