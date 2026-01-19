'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, type ReactNode, useEffect, useState } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
}

const Reveal = ({ children, delay = 0 }: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div ref={ref} style={{ position: 'relative', overflow: 'hidden' }} suppressHydrationWarning>
      <motion.div
        variants={{
          hidden: { opacity: 0, clipPath: 'inset(100% 0 0 0)' },
          visible: { opacity: 1, clipPath: 'inset(0% 0 0 0)' },
        }}
        initial="hidden"
        animate={isMounted && isInView ? 'visible' : 'hidden'}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
        style={{ paddingTop: '0.2em', paddingBottom: '0.2em' }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
