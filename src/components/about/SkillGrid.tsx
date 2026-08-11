"use client";

import { motion } from "framer-motion";
import {
  Atom,
  Triangle,
  Braces,
  Palette,
  Server,
  Database,
  Sparkles,
  Container,
  Cloud,
  PenTool,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { skills } from "@/data/skills";

const iconMap: Record<string, LucideIcon> = {
  atom: Atom,
  triangle: Triangle,
  braces: Braces,
  palette: Palette,
  server: Server,
  database: Database,
  sparkles: Sparkles,
  container: Container,
  cloud: Cloud,
  "pen-tool": PenTool,
};

export default function SkillGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {skills.map((skill, index) => {
        const Icon = iconMap[skill.icon] || Atom;
        return (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="flex flex-col items-center gap-3 rounded-apple border border-border bg-card p-6 text-center transition-all duration-300 ease-apple hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bg-secondary">
              <Icon size={24} className="text-accent" />
            </div>
            <div>
              <p className="text-sm font-semibold text-text-primary">
                {skill.name}
              </p>
              <p className="mt-0.5 text-xs text-text-secondary">{skill.level}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
