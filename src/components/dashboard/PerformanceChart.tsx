"use client";
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { performanceData } from '@/data/chartData';

export const PerformanceChart = () => {
  return (
    <div className="w-full h-[500px] bg-[#050505] p-8 border border-white/10 rounded-lg shadow-2xl">
      {/* Header with High Visibility */}
      <div className="flex justify-between items-start mb-12 border-b border-white/5 pb-6">
        <div>
          <p className="text-[12px] uppercase tracking-[0.5em] text-gold font-black mb-2">Institutional Growth</p>
          <h2 className="text-[32px] font-bold text-white tracking-tighter leading-none">
            Asset <span className="text-white/40">Performance</span>
          </h2>
        </div>
        
        <div className="flex gap-8 text-[11px] font-mono uppercase tracking-widest pt-4">
          <div className="flex items-center gap-3 text-white">
            <div className="w-3 h-3 bg-gold rounded-full shadow-[0_0_12px_#D4AF37]"/> GFA Performance
          </div>
          <div className="flex items-center gap-3 text-zinc-400">
            <div className="w-3 h-3 bg-zinc-700 rounded-full"/> Market Benchmark
          </div>
        </div>
      </div>

      <div className="h-[340px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={performanceData} margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
            <defs>
              <linearGradient id="colorAssets" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
              </linearGradient>
            </defs>
            
            {/* Brighter Grid Lines */}
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
            
            <XAxis 
              dataKey="date" 
              stroke="#a1a1aa" // Light Zinc for visibility
              fontSize={12} 
              tickLine={true} 
              axisLine={{ stroke: '#3f3f46' }}
              dy={15}
              fontFamily="monospace"
            />
            
            <YAxis 
              domain={[9.4, 10]} 
              stroke="#a1a1aa" // Brighter labels so they don't disappear
              fontSize={12} 
              tickLine={true} 
              axisLine={{ stroke: '#3f3f46' }}
              tickFormatter={(val) => `$${val}B`}
              fontFamily="monospace"
              dx={-10}
            />
            
            {/* Modern Tooltip with high contrast */}
            <Tooltip 
               contentStyle={{ 
                 backgroundColor: '#111', 
                 border: '1px solid #D4AF37', 
                 borderRadius: '0px',
                 padding: '12px'
               }} 
               itemStyle={{ color: '#fff', fontSize: '12px', fontWeight: 'bold' }}
            />
            
            <ReferenceLine 
              x="NOV 25" 
              stroke="#ff4d4d" 
              strokeWidth={2}
              strokeDasharray="5 5" 
              label={{ position: 'top', value: 'S&P WATCH', fill: '#ff4d4d', fontSize: 11, fontWeight: '900', letterSpacing: '2px' }} 
            />
            
            <Area 
              type="monotone" 
              dataKey="benchmark" 
              stroke="#52525b" // Lighter grey for benchmark
              fill="transparent" 
              strokeWidth={2} 
              strokeDasharray="8 8"
            />
            
            <Area 
              type="monotone" 
              dataKey="gfaAssets" 
              stroke="#D4AF37" 
              fillOpacity={1} 
              fill="url(#colorAssets)" 
              strokeWidth={4} // Thicker, bolder line
              activeDot={{ r: 6, fill: '#D4AF37', stroke: '#fff', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};