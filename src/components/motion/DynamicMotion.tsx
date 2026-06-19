"use client";
import dynamic from 'next/dynamic';

// Shared loading state to minimize boilerplate
const loading = () => <div className="opacity-0" />;

const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  { ssr: true, loading }
);

const MotionMain = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.main),
  { ssr: true, loading }
);

// Exports
export const DynamicMotionDiv = (props: any) => <MotionDiv {...props} />;
export const DynamicMotionMain = (props: any) => <MotionMain {...props} />;