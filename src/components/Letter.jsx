import React from 'react';
import { motion } from 'framer-motion';

const Letter = () => {
    return (
        <section className="py-24 px-4 flex justify-center bg-soft-pink/20">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative w-full max-w-2xl bg-[#FFF9F0] p-8 md:p-12 shadow-2xl skew-x-1 rotate-1"
                style={{
                    backgroundImage: 'linear-gradient(#E8E8E8 1px, transparent 1px)',
                    backgroundSize: '100% 2em',
                    lineHeight: '2em'
                }}
            >
                {/* Wax Seal */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-red-800 rounded-full flex items-center justify-center shadow-lg border-4 border-red-700/50">
                    <span className="text-2xl text-red-950 font-serif font-bold">❤️</span>
                </div>

                <div className="mt-8 font-serif text-lg md:text-xl text-text-dark text-justify">
                    <p className="indent-8 mb-4">
                        Mi amor,
                    </p>
                    <p className="mb-4">
                        Si estás leyendo esto, significa que has recorrido nuestra historia una vez más.
                        Cada momento plasmado aquí es solo un fragmento de todo lo que significas para mí.
                    </p>
                    <p className="mb-4">
                        Eres mi magia en un mundo muggle, mi canción favorita de BTS en repeat y
                        la protagonista de mi drama favorito. Gracias por coincidir conmigo en esta vida.
                    </p>
                    <p className="text-right mt-12 font-bold italic">
                        Siempre tuyo, <br />
                        Cristopher
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default Letter;
