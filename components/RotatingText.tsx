'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface RotatingTextProps {
    texts: string[];
    rotationInterval?: number;
    mainClassName?: string;
    staggerFrom?: 'first' | 'last';
    initial?: any;
    animate?: any;
    exit?: any;
    staggerDuration?: number;
    splitLevelClassName?: string;
    transition?: any;
}

export default function RotatingText({
                                         texts,
                                         rotationInterval = 2000,
                                         mainClassName = '',
                                         staggerFrom = 'first',
                                         initial = { y: '100%' },
                                         animate = { y: 0 },
                                         exit = { y: '-100%' },
                                         staggerDuration = 0.025,
                                         splitLevelClassName = '',
                                         transition = { type: 'spring', damping: 30, stiffness: 50 },
                                     }: RotatingTextProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % texts.length);
        }, rotationInterval);

        return () => clearInterval(interval);
    }, [currentIndex, texts.length, rotationInterval]);

    return (
        <span className={mainClassName} style={{ display: 'inline-block', overflow: 'hidden' }}>
      <AnimatePresence initial={false} mode="wait">
        <motion.span
            key={texts[currentIndex]}
            initial={initial}
            animate={animate}
            exit={exit}
            transition={transition}
            className={splitLevelClassName}
            style={{ display: 'inline-block' }}
        >
          {texts[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
    );
}
