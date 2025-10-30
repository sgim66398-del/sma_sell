import Link from "next/link";

export default function FeatureCard({ title, description, icon, href }: any) {
  return (
    <Link href={href || '#'} className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition">
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-md text-2xl">{icon}</div>
        <div>
          <div className="font-medium text-gray-800">{title}</div>
          <div className="text-sm text-gray-500">{description}</div>
        </div>
      </div>
    </Link>
  );
}
