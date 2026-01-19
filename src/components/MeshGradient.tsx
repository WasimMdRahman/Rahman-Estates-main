"use client";

import { motion } from "framer-motion";

const MeshGradient = () => {
  return (
    <div className="fixed inset-0 -z-50" suppressHydrationWarning>
      <div className="absolute inset-0 h-full w-full bg-background" suppressHydrationWarning>
        <motion.div
          animate={{
            x: ["-50%", "100%", "50%", "-50%"],
            y: ["-50%", "-50%", "100%", "100%"],
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          className="absolute h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0f172a] to-transparent opacity-30 blur-[100px]"
        />
        <motion.div
          animate={{
            x: ["100%", "0%", "-50%", "100%"],
            y: ["100%", "-50%", "100%", "100%"],
          }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
            delay: 5,
          }}
          className="absolute h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1e1b4b] to-transparent opacity-30 blur-[100px]"
        />
        <motion.div
          animate={{
            x: ["0%", "50%", "-50%", "0%"],
            y: ["100%", "0%", "50%", "100%"],
          }}
          transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity,
            delay: 10,
          }}
          className="absolute h-[550px] w-[550px] rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#312e81] to-transparent opacity-20 blur-[100px]"
        />
      </div>
    </div>
  );
};

export default MeshGradient;
