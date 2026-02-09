import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Star, Heart } from 'lucide-react';

const HeroSection = () => {
    // Generate random particles
    const particles = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 10 + 5,
        duration: Math.random() * 5 + 5,
        delay: Math.random() * 2,
        type: Math.random() > 0.5 ? 'star' : 'heart'
    }));

    return (
        <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden text-center">

            {/* Floating Particles Background */}
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute text-gold-light/40"
                    initial={{ x: `${p.x}vw`, y: '110vh', opacity: 0 }}
                    animate={{
                        y: '-10vh',
                        opacity: [0, 0.8, 0],
                        rotate: 360
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "linear"
                    }}
                    style={{ fontSize: `${p.size}px` }}
                >
                    {p.type === 'star' ? <Star fill="currentColor" /> : <Heart fill="currentColor" />}
                </motion.div>
            ))}

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="z-10 px-4"
            >
                <h2 className="mb-4 font-magic text-xl tracking-[0.2em] text-gold">
                    CAPÍTULO UNO
                </h2>
                <h1 className="mb-6 font-serif text-5xl md:text-7xl font-bold text-text-dark drop-shadow-sm">
                    Nuestra Historia <br />
                    <span className="italic text-soft-pink-dark">en Todas las Vidas</span>
                </h1>
                <p className="mx-auto max-w-lg font-sans text-lg text-text-dark/80">
                    "Si tuviera que elegir de nuevo, te elegiría a ti. En esta vida, en la anterior y en todas las que sigan."
                </p>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 z-10"
            >
                <ChevronDown className="h-8 w-8 text-gold" />
            </motion.div>

            {/* Decorative Gradient Overlay at bottom */}
            <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-soft-pink to-transparent" />
        </section>
    );
};

export default HeroSection;
