'use client';

import { motion, useSpring } from 'framer-motion';
import { useRef, useState, type ReactNode } from 'react';

const Magnetic = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const springConfig = { damping: 15, stiffness: 200, mass: 0.5 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const xPos = clientX - (left + width / 2);
    const yPos = clientY - (top + height / 2);
    setPosition({ x: xPos, y: yPos });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  x.set(position.x * 0.2);
  y.set(position.y * 0.2);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className="relative z-10"
      suppressHydrationWarning
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
