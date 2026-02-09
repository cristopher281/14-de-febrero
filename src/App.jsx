import React, { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import MagicAccess from './components/MagicAccess';
import HeroSection from './components/HeroSection';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import MusicPlayer from './components/MusicPlayer';
import Letter from './components/Letter';
import { motion } from 'framer-motion';

function App() {
    const [isUnlocked, setIsUnlocked] = useState(false);

    return (
        <div className="min-h-screen bg-soft-pink cursor-none overflow-x-hidden text-text-dark">

            {/* Custom Cursor always active */}
            <CustomCursor />

            {/* Login Screen */}
            {!isUnlocked && (
                <MagicAccess onUnlock={() => setIsUnlocked(true)} />
            )}

            {/* Main Content */}
            {isUnlocked && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="relative min-h-screen"
                >
                    <HeroSection />

                    <div className="relative z-10">
                        <Timeline />
                        <Gallery />
                        <Letter />
                    </div>

                    <MusicPlayer />

                    {/* Minimal Footer */}
                    <footer className="py-8 text-center text-xs text-text-dark/50 font-sans tracking-widest uppercase relative z-10">
                        Hecho con magia y amor
                    </footer>
                </motion.div>
            )}
        </div>
    );
}

export default App;
