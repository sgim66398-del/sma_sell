"use client";

import { useState } from "react";

export default function TrialModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div className="relative bg-white rounded-lg max-w-md w-full p-6 shadow-lg">
        <button className="absolute top-3 right-3 text-gray-500" onClick={onClose}>
          ✖
        </button>

        {!submitted ? (
          <>
            <h3 className="text-lg font-semibold mb-2">무료 체험 신청</h3>
            <p className="text-sm text-gray-600 mb-4">이메일을 입력하시면 14일 무료 체험 링크를 보내드립니다.</p>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@store.com"
              className="w-full border rounded-md px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex gap-2 justify-end">
              <button className="px-4 py-2 rounded border" onClick={onClose}>
                취소
              </button>
              <button
                className="px-4 py-2 rounded bg-blue-600 text-white"
                onClick={() => {
                  // mock submit
                  setSubmitted(true);
                }}
                disabled={!email}
              >
                신청하기
              </button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <div className="text-green-600 font-semibold mb-2">신청 완료!</div>
            <div className="text-sm text-gray-600 mb-4">곧 이메일로 안내 드리겠습니다.</div>
            <button className="px-4 py-2 rounded bg-blue-600 text-white" onClick={onClose}>
              닫기
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
