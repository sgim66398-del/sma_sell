export default function InventoryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">재고 관리</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          + 새 품목 추가
        </button>
      </div>

      {/* 재고 상태 요약 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-gray-500 mb-2">총 재고 가치</h3>
          <p className="text-2xl font-bold">₩4,580,000</p>
          <span className="text-gray-500 text-sm">56개 품목</span>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-gray-500 mb-2">위험 재고</h3>
          <p className="text-2xl font-bold text-red-500">3개</p>
          <span className="text-gray-500 text-sm">즉시 조치 필요</span>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-gray-500 mb-2">이번 주 발주 예정</h3>
          <p className="text-2xl font-bold text-blue-500">8개</p>
          <span className="text-gray-500 text-sm">예상 비용: ₩850,000</span>
        </div>
      </div>

      {/* 재고 목록 테이블 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                품목명
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                현재 수량
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                적정 수량
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                상태
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                예측 소진일
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                작업
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">아라비카 원두</div>
                <div className="text-sm text-gray-500">SKU: #12345</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                5kg
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                15kg
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                  부족
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                3일 후
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button className="text-blue-600 hover:text-blue-900 mr-4">발주</button>
                <button className="text-gray-600 hover:text-gray-900">수정</button>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">우유</div>
                <div className="text-sm text-gray-500">SKU: #12346</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                24L
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                20L
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  적정
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                7일 후
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button className="text-blue-600 hover:text-blue-900 mr-4">발주</button>
                <button className="text-gray-600 hover:text-gray-900">수정</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* AI 추천 섹션 */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">AI 재고 관리 추천</h2>
        <ul className="space-y-4">
          <li className="flex items-start space-x-3">
            <span className="text-red-500">🚨</span>
            <div>
              <p className="font-medium">아라비카 원두 긴급 발주 필요</p>
              <p className="text-sm text-gray-500">현재 소비 패턴 기준 3일 내 소진 예상. 15kg 발주 권장</p>
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-yellow-500">⚠️</span>
            <div>
              <p className="font-medium">바닐라 시럽 재고 조정 권장</p>
              <p className="text-sm text-gray-500">최근 3개월 판매량 감소. 다음 발주량 20% 감축 추천</p>
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-blue-500">💡</span>
            <div>
              <p className="font-medium">신규 공급업체 검토</p>
              <p className="text-sm text-gray-500">현재 원두 공급가 대비 15% 저렴한 대체 공급업체 발견</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}