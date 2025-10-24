"use client";

import { motion } from "framer-motion";


const Stat = ({ number, label }: { number: string; label: string }) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-2xl md:text-3xl font-semibold text-white">{number}</span>
      <span className="text-gray-400 mt-1">{label}</span>
    </div>
  );
}



const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-[85vh] px-6 overflow-hidden bg-gradient-to-b from-[#0a0f14] via-[#0f1620] to-[#0a0f14]">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(59,130,246,0.1),transparent_60%)]" />

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mt-20"
      >
        Observability for <span className="text-blue-400">Modern Systems</span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl"
      >
        SilverHawk APM gives you deep visibility into APIs, infrastructure, and user experience — all in one place.
      </motion.p>

      {/* Animated Stats */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-16 flex flex-wrap justify-center gap-10 text-gray-400 text-sm md:text-base"
      >
        <Stat number="3.2B+" label="Requests / day" />
        <Stat number="<150ms" label="Avg. Latency" />
        <Stat number="99.99%" label="Uptime" />
      </motion.div> 

    </section>
  );
}

export default HeroSection;
