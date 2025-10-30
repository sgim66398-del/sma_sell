"use client";

import { useState } from "react";
import TimeframeTabs from "./TimeframeTabs";
import DemoChart from "./DemoChart";

export default function ChartPanel() {
  const [tf, setTf] = useState("30일");

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">매출 요약</h2>
        <TimeframeTabs value={tf} onChange={setTf} />
      </div>
      <DemoChart timeframe={tf} />
    </div>
  );
}
