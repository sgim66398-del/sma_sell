"use client";

export default function TimeframeTabs({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const options = ["7일", "30일", "90일"];
  return (
    <div className="flex gap-2">
      {options.map((op) => (
        <button
          key={op}
          onClick={() => onChange(op)}
          className={`px-3 py-1 rounded-full text-sm ${value === op ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
        >
          {op}
        </button>
      ))}
    </div>
  );
}
