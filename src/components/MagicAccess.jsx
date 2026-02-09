import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Key } from 'lucide-react';

const MagicAccess = ({ onUnlock }) => {
    const [keyword, setKeyword] = useState('');
    const [error, setError] = useState(false);
    const [isUnlocking, setIsUnlocking] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (keyword.toLowerCase().trim() === 'alohomora') {
            setIsUnlocking(true);
            setTimeout(onUnlock, 1500); // Wait for animation
        } else {
            setError(true);
            setTimeout(() => setError(false), 500);
        }
    };

    return (
        <AnimatePresence>
            {!isUnlocking && (
                <motion.div
                    className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-soft-pink text-text-dark"
                    exit={{ opacity: 0, transition: { duration: 1 } }}
                >
                    <div className="relative w-full max-w-md p-8 text-center">

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="mb-8 flex justify-center"
                        >
                            <Sparkles className="h-12 w-12 text-gold animate-spin-slow" />
                        </motion.div>

                        <h1 className="mb-6 font-serif text-3xl font-bold tracking-wider text-text-dark">
                            Acceso Mágico
                        </h1>

                        <p className="mb-8 text-text-dark/70 font-sans">
                            Pronuncia (o escribe) el encantamiento para entrar...
                        </p>

                        <form onSubmit={handleSubmit} className="relative mx-auto max-w-xs">
                            <input
                                type="text"
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                                placeholder="..."
                                className="w-full rounded-full border-2 border-gold/50 bg-white/50 px-6 py-3 text-center font-magic text-lg tracking-widest outline-none transition-all focus:border-gold focus:bg-white focus:shadow-[0_0_20px_rgba(255,215,0,0.3)]"
                                autoFocus
                            />

                            <button
                                type="submit"
                                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-gold hover:bg-gold/10 transition-colors"
                            >
                                <Key className="h-5 w-5" />
                            </button>
                        </form>

                        {/* Error Message */}
                        <AnimatePresence>
                            {error && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="mt-4 text-red-400 font-serif"
                                >
                                    Ese no es el hechizo correcto... ✨
                                </motion.p>
                            )}
                        </AnimatePresence>

                    </div>

                    {/* Background Decorative Circles */}
                    <div className="absolute top-0 left-0 -ml-20 -mt-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
                    <div className="absolute bottom-0 right-0 -mr-20 -mb-20 h-64 w-64 rounded-full bg-soft-pink-dark/20 blur-3xl" />
                </motion.div>
            )}

            {/* Ink Transition Effect overlay */}
            {isUnlocking && (
                <motion.div
                    className="fixed inset-0 z-50 pointer-events-none"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 30, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "circIn" }}
                    style={{
                        background: 'radial-gradient(circle, rgba(255,209,220,1) 0%, rgba(255,255,255,0) 70%)',
                        backgroundBlendMode: 'multiply'
                    }}
                />
            )}
        </AnimatePresence>
    );
};

export default MagicAccess;
