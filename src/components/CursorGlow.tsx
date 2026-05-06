'use client';

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorGlow() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springX = useSpring(cursorX, { stiffness: 400, damping: 40 });
  const springY = useSpring(cursorY, { stiffness: 400, damping: 40 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30"
      aria-hidden="true"
    >
      {/* Large ambient glow */}
      <motion.div
        style={{
          position: 'fixed',
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(0,229,255,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
    </motion.div>
  );
}
