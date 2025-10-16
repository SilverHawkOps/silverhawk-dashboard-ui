"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "../ui/button/Button";
// import Button from "../ui/button/Button";
// import { track } from "@/lib/analytics";

export default function HeroSection() {
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

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-10 flex flex-wrap gap-4 justify-center"
      >
        <Button onClick={() => console.log("hello")} className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700">
          Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <Button onClick={() => alert("helo")}
        variant="outline"
          className="text-lg px-8 py-6 border-gray-600 text-gray-200 hover:bg-gray-800"
        >
          View Live Demo
        </Button>
      </motion.div>

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

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-2xl md:text-3xl font-semibold text-white">{number}</span>
      <span className="text-gray-400 mt-1">{label}</span>
    </div>
  );
}
