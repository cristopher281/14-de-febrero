import React from 'react';
import { motion } from 'framer-motion';

const timelineEvents = [
    {
        id: 1,
        date: "El Comienzo",
        title: "El Primer Encuentro",
        desc: "Aquel día donde el tiempo se detuvo por un instante. ¿Recuerdas los nervios?",
        img: "https://placehold.co/400x300/e6b2c0/white?text=Primer+Encuentro"
    },
    {
        id: 2,
        date: "Primer Viaje",
        title: "Escapada Mágica",
        desc: "Nuestro primer viaje juntos. Risas, música y carreteras infinitas.",
        img: "https://placehold.co/400x300/ffcc00/white?text=Viaje"
    },
    {
        id: 3,
        date: "Momentos Difíciles",
        title: "Siempre Juntos",
        desc: "Incluso cuando la lluvia caía fuerte, tú eras mi paraguas amarillo.",
        img: "https://placehold.co/400x300/3d3d3d/white?text=Apoyo"
    },
    {
        id: 4,
        date: "Hoy",
        title: "14 de Febrero",
        desc: "Y aquí estamos, escribiendo una nueva página en nuestra historia.",
        img: "https://placehold.co/400x300/ff9999/white?text=San+Valentin"
    }
];

const TimelineItem = ({ event, index }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`mb-32 relative flex w-full items-center justify-between ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
        >
            {/* Footprints Decoration (Marauder's Map Style) */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                className={`absolute pointer-events-none top-[-50px] ${isEven ? 'left-[45%]' : 'right-[45%]'}`}
            >
                <span className="text-2xl opacity-40 rotate-12 inline-block">👣</span>
            </motion.div>

            {/* Content Side */}
            <div className={`w-5/12 ${isEven ? 'text-right' : 'text-left'}`}>
                <span className="mb-2 inline-block rounded border border-hogwarts-ink/30 bg-[#fdfbf7] px-3 py-1 font-magic text-xs tracking-wider text-hogwarts-ink shadow-sm">
                    {event.date}
                </span>
                <h3 className="mb-2 font-serif text-2xl font-bold text-text-dark">{event.title}</h3>
                <p className="font-sans text-text-dark/70 italic opacity-90">{event.desc}</p>
            </div>

            {/* Center Line Point */}
            <div className="relative flex w-2/12 justify-center">
                <div className="h-6 w-6 rounded-full bg-[url('https://cdn-icons-png.flaticon.com/512/1041/1041383.png')] bg-cover border-2 border-gold z-10 shadow-[0_0_15px_rgba(255,215,0,0.5)]"></div>
            </div>

            {/* Image Side */}
            <div className="w-5/12">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="overflow-hidden rounded-lg shadow-xl border-4 border-[#fdfbf7] rotate-1"
                >
                    <img
                        src={event.img}
                        alt={event.title}
                        className="h-48 w-full object-cover sepia-[0.2]"
                    />
                </motion.div>
            </div>
        </motion.div>
    );
};

const Timeline = () => {
    return (
        <section className="relative py-20 px-4 md:px-0 bg-white/30 backdrop-blur-sm">
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-transparent via-gold to-transparent opacity-50"></div>

            <div className="container mx-auto max-w-4xl">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mb-16 text-center font-serif text-3xl italic text-text-dark"
                >
                    Nuestra Línea del Tiempo
                </motion.h2>

                {timelineEvents.map((event, index) => (
                    <TimelineItem key={event.id} event={event} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Timeline;
