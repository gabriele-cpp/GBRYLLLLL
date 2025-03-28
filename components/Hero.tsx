'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Aurora from "./Aurora";

const Hero = () => {
    return (
        <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gray-950">

            {/* Aurora Background */}
            <Aurora
                colorStops={["#00c7a9", "#2ec4b6", "#007cf0"]}
                blend={0.5}
                amplitude={1.0}
            />

            <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">

                {/* Foto di Kiri */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <Image
                        src="/profile.png"
                        alt="Hero Sprite"
                        width={400}
                        height={400}
                        className="rounded-2xl object-cover opacity-90"
                    />
                    {/* Fade-out bawah */}
                    <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-gray-950 to-transparent pointer-events-none rounded-xl" />
                </motion.div>

                {/* Bagian Teks Profesional */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-left"
                >
                    <h1 className="text-6xl md:text-8xl font-extrabold text-gray-100 leading-none tracking-tight">
                        DIGITAL<br />
                        EXPERIENCE.<br />
                        DESIGNER<br />
                        & DEVELOPER
                    </h1>

                    <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-lg">
                        Mahasiswa Informatika, Gamer & Future Computer Scientist
                    </p>

                    <div className="mt-6 flex items-center gap-2">
                        <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <p className="text-sm md:text-base font-semibold text-green-400">Available Now</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
