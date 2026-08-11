"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export default function Timeline() {
  return (
    <div className="relative">
      {/* 竖线 */}
      <div className="absolute left-[7px] top-2 h-full w-px bg-border" />

      <div className="space-y-10">
        {profile.experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="relative pl-10"
          >
            {/* 节点 */}
            <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-accent bg-white" />

            <p className="text-sm font-medium text-accent">{exp.year}</p>
            <h4 className="mt-1 text-lg font-semibold text-text-primary">
              {exp.title}
            </h4>
            <p className="text-sm text-text-secondary">{exp.organization}</p>
            <p className="mt-2 text-base text-text-secondary">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
