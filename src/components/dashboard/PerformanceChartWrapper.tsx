"use client";
import dynamic from 'next/dynamic';

const PerformanceChart = dynamic(
  () => import('./PerformanceChart').then((mod) => mod.PerformanceChart),
  {
    ssr: false, // Prevents hydration errors with ResponsiveContainer
    loading: () => (
      <div className="w-full h-[500px] flex items-center justify-center bg-[#050505] text-white/20 font-mono border border-white/5 rounded-lg">
        INITIALIZING ANALYTICS ENGINE...
      </div>
    ),
  }
);

export function PerformanceChartWrapper() {
  return <PerformanceChart />;
}
