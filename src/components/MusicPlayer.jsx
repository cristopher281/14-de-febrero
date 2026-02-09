import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Disc } from 'lucide-react';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    // In a real scenario, use an audio ref
    // const audioRef = useRef(new Audio('/assets/dynamite.mp3'));

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
        // if (isPlaying) audioRef.current.pause();
        // else audioRef.current.play();
    };

    return (
        <div className="fixed bottom-6 right-6 z-40">
            <motion.div
                className="flex items-center gap-4 rounded-full bg-white/80 backdrop-blur-md p-2 pl-4 shadow-xl border border-white/50"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <div className="text-right hidden md:block">
                    <p className="text-xs font-bold text-text-dark">Dynamite</p>
                    <p className="text-[10px] text-text-dark/60">BTS</p>
                </div>

                <motion.div
                    className="relative h-12 w-12 cursor-pointer flex items-center justify-center rounded-full bg-gradient-to-tr from-soft-pink-dark to-gold shadow-md overflow-hidden"
                    onClick={togglePlay}
                    animate={{ rotate: isPlaying ? 360 : 0 }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                    }}
                >
                    {/* Vinyl Grooves Effect */}
                    <div className="absolute inset-[10%] rounded-full border border-white/20"></div>
                    <div className="absolute inset-[30%] rounded-full border border-white/20"></div>
                    <div className="absolute inset-[50%] rounded-full bg-black"></div>

                    {/* Play/Pause Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition-colors">
                        {isPlaying ? (
                            <Pause className="h-4 w-4 text-white" fill="currentColor" />
                        ) : (
                            <Play className="h-4 w-4 text-white ml-0.5" fill="currentColor" />
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default MusicPlayer;
