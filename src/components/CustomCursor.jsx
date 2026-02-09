import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <div className="pointer-events-none fixed left-0 top-0 z-50 h-screen w-screen overflow-hidden">
            {/* Wand Tip (Main Cursor) */}
            <motion.div
                className="absolute h-3 w-3 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,1),0_0_10px_rgba(0,191,255,0.8)] mix-blend-screen"
                animate={{
                    x: mousePosition.x - 6,
                    y: mousePosition.y - 6,
                    scale: isHovering ? 2 : 1,
                }}
                transition={{ type: "spring", stiffness: 800, damping: 20 }}
            />

            {/* Magical Sparkles Trail */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute h-1 w-1 bg-gold rounded-full"
                    animate={{
                        x: mousePosition.x - 2 + (Math.random() * 10 - 5),
                        y: mousePosition.y - 2 + (Math.random() * 10 - 5),
                        opacity: [1, 0],
                        scale: [1, 0]
                    }}
                    transition={{
                        duration: 0.8,
                        delay: i * 0.05,
                        repeat: Infinity
                    }}
                />
            ))}
        </div>
    );
};

export default CustomCursor;
