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
            {/* Main Cursor */}
            <motion.div
                className="absolute h-4 w-4 bg-gold rounded-full shadow-[0_0_15px_rgba(255,215,0,0.8)]"
                animate={{
                    x: mousePosition.x - 8,
                    y: mousePosition.y - 8,
                    scale: isHovering ? 1.5 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5
                }}
            />

            {/* Trailing Sparkle */}
            <motion.div
                className="absolute h-2 w-2 bg-gold-light rounded-full opacity-60"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    delay: 0.05
                }}
            />
        </div>
    );
};

export default CustomCursor;
