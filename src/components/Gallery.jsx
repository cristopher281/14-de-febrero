import React from 'react';
import { motion } from 'framer-motion';

const moments = [
    { id: 1, img: "https://placehold.co/300x400/FFE4E1/333?text=Vida+1", caption: "Vida #1: El Encuentro" },
    { id: 2, img: "https://placehold.co/300x400/E6E6FA/333?text=Vida+2", caption: "Vida #2: Risas Infinitas" },
    { id: 3, img: "https://placehold.co/300x400/FAFAD2/333?text=Vida+3", caption: "Vida #3: Aventuras" },
    { id: 4, img: "https://placehold.co/300x400/FFB6C1/333?text=Vida+4", caption: "Vida #4: Complicidad" },
    { id: 5, img: "https://placehold.co/300x400/E0FFFF/333?text=Vida+5", caption: "Vida #5: Sueños" },
    { id: 6, img: "https://placehold.co/300x400/F0FFF0/333?text=Vida+6", caption: "Vida #6: Futuro" },
    // Add more as needed
];

const Gallery = () => {
    return (
        <section className="py-20 px-4 mb-20">
            <div className="container mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mb-12 text-center font-serif text-3xl italic text-text-dark"
                >
                    19 Vidas Contigo
                </motion.h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                    {moments.map((moment, index) => (
                        <motion.div
                            key={moment.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10, transition: { duration: 0.2 } }}
                            className="relative group overflow-hidden rounded-xl shadow-md bg-white p-2"
                        >
                            <div className="overflow-hidden rounded-lg aspect-[3/4]">
                                <img
                                    src={moment.img}
                                    alt={moment.caption}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 sepia-[0.3]"
                                />
                            </div>
                            <div className="mt-3 text-center">
                                <p className="font-magic text-sm tracking-wide text-text-dark/80">
                                    {moment.caption}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
