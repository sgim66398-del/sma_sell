import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SmaSell - AI 기반 소상공인 경영 지원 플랫폼",
  description: "소상공인을 위한 AI 기반 매출·재고 예측 및 경영 지원 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >        
          <div className="min-h-screen bg-gray-50">
            <nav className="bg-white shadow-lg">
              <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16">
                  <div className="flex items-center">
                    <a href="/" className="text-xl font-bold text-gray-800">
                      SmaSell
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <a href="/dashboard" className="text-gray-600 hover:text-gray-900">
                      대시보드
                    </a>
                    <a href="/inventory" className="text-gray-600 hover:text-gray-900">
                      재고관리
                    </a>
                    <a href="/analytics" className="text-gray-600 hover:text-gray-900">
                      매출분석
                    </a>
                    <a href="/ai-assistant" className="text-gray-600 hover:text-gray-900">
                      AI 어시스턴트
                    </a>
                  </div>
                </div>
              </div>
            </nav>
            {children}
          </div>
      </body>
    </html>
  );
}
