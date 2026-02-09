import React from 'react';
import { motion } from 'framer-motion';

const Letter = () => {
    return (
        <section className="py-24 px-4 flex justify-center bg-transparent">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative w-full max-w-2xl bg-[#fdfbf7] p-8 md:p-16 shadow-2xl rotate-1 border-2 border-[#e0c097]"
                style={{
                    backgroundImage: 'url("https://www.transparenttextures.com/patterns/aged-paper.png")',
                }}
            >
                {/* Hogwarts Crest Header */}
                <div className="text-center mb-8">
                    <div className="inline-block w-20 h-24 bg-[url('https://upload.wikimedia.org/wikipedia/commons/b/b4/Hogwarts-Crest.png')] bg-contain bg-no-repeat bg-center opacity-80 mb-2 filter sepia-[0.3]"></div>
                    <h3 className="font-serif text-lg text-hogwarts-ink tracking-widest font-bold uppercase">
                        Escuela de Magia y Amor
                    </h3>
                </div>

                {/* Letter Body */}
                <div className="font-serif text-lg md:text-xl text-hogwarts-ink text-justify leading-relaxed">
                    <p className="mb-6">
                        Estimada <span className="font-bold">Srta. Amor de mi Vida</span>,
                    </p>
                    <p className="indent-8 mb-4">
                        Nos complace informarle que ha robado mi corazón de manera permanente e irrevocable.
                    </p>
                    <p className="mb-4">
                        Tras revisar su expediente mágico, hemos notado que posee una habilidad excepcional para iluminar mis días
                        con un simple <i>Lumos</i> en forma de sonrisa. Su patronus (que sospecho es adorable) coincide perfectamente con el mío.
                    </p>
                    <p className="mb-4">
                        Por favor, encuentre adjunto todo mi cariño y la promesa de aventuras mágicas,
                        desde Hogsmeade hasta el fin del mundo.
                    </p>
                    <p className="mt-8 font-serif text-right">
                        Con todo mi amor,
                    </p>
                    <div className="mt-4 text-right">
                        <span className="font-handwriting text-3xl text-black rotate-[-5deg] inline-block mr-4">
                            Cristopher
                        </span>
                    </div>
                </div>

                {/* Wax Seal */}
                <div className="absolute bottom-8 left-8 w-24 h-24">
                    <div className="w-full h-full bg-red-900/80 rounded-full flex items-center justify-center shadow-lg border-4 border-red-800/50 backdrop-blur-sm">
                        <span className="text-4xl text-red-950 font-serif font-bold">H</span>
                    </div>
                </div>

            </motion.div>
        </section>
    );
};

export default Letter;
