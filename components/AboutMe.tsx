'use client';

import { motion } from "framer-motion";
import { User, Gamepad2, Code2 } from "lucide-react";
import RotatingText from "./RotatingText";

const AboutMe = () => {
    return (
        <section className="py-24 bg-gray-950">
            <div className="container mx-auto px-6 md:px-12">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center text-4xl md:text-5xl font-extrabold text-gray-100 flex justify-center items-center gap-2"
                >
                    About{' '}
                    <RotatingText
                        texts={['Me', 'Emil', 'Gabriel']}
                        mainClassName="px-3 bg-cyan-300 text-black overflow-hidden py-0 mt-3 justify-center items-center rounded-lg inline-block"
                        staggerFrom="last"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={2000}
                    />
                </motion.h2>

                {/* Konten sebelumnya tetap sama */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {/* Informatika */}
                    <div className="flex flex-col items-center bg-gray-900 rounded-xl shadow-xl p-8 hover:scale-105 transition-transform duration-300">
                        <User size={40} className="text-teal-400 mb-4" />
                        <h3 className="text-2xl font-bold text-white">Mahasiswa Informatika</h3>
                        <p className="mt-3 text-gray-400 text-center">
                            Aku mahasiswa Informatika yang selalu tertarik mengeksplorasi teknologi baru, terutama dalam bidang software development dan artificial intelligence.
                        </p>
                    </div>

                    {/* Gamer */}
                    <div className="flex flex-col items-center bg-gray-900 rounded-xl shadow-xl p-8 hover:scale-105 transition-transform duration-300">
                        <Gamepad2 size={40} className="text-purple-400 mb-4" />
                        <h3 className="text-2xl font-bold text-white">Passionate Gamer</h3>
                        <p className="mt-3 text-gray-400 text-center">
                            Gaming adalah passion-ku, mulai dari eksplorasi cerita menarik hingga strategi kompetitif yang melatih ketangkasan dan teamwork.
                        </p>
                    </div>

                    {/* Computer Scientist */}
                    <div className="flex flex-col items-center bg-gray-900 rounded-xl shadow-xl p-8 hover:scale-105 transition-transform duration-300">
                        <Code2 size={40} className="text-blue-400 mb-4" />
                        <h3 className="text-2xl font-bold text-white">Future Computer Scientist</h3>
                        <p className="mt-3 text-gray-400 text-center">
                            Aku terus mempelajari berbagai konsep dalam bidang computer science, mulai dari algoritma, struktur data, hingga pengembangan aplikasi yang kompleks.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutMe;
