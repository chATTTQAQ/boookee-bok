import type { Metadata } from "next";
import { Github, Twitter, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import Reveal from "@/components/ui/Reveal";
import SkillGrid from "@/components/about/SkillGrid";
import Timeline from "@/components/about/Timeline";

export const metadata: Metadata = {
  title: "关于 — boookee",
  description: profile.tagline,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-bg-secondary">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-secondary to-white" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          {/* Avatar */}
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-accent to-blue-400 text-3xl font-bold text-white">
            {profile.name.charAt(0)}
          </div>
          <h1 className="text-display tracking-tight text-text-primary">
            {profile.name}
          </h1>
          <p className="mt-4 text-xl text-text-secondary">{profile.title}</p>
        </div>
      </section>

      {/* About Me */}
      <section className="mx-auto max-w-3xl px-6 py-section">
        <Reveal>
          <h2 className="text-heading tracking-tight text-text-primary">
            关于我
          </h2>
        </Reveal>
        <div className="mt-8 space-y-5">
          {profile.bio.map((paragraph, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <p className="text-lg leading-relaxed text-text-secondary">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="bg-bg-secondary py-section">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-heading tracking-tight text-text-primary">
              技能栈
            </h2>
            <p className="mt-3 text-lg text-text-secondary">
              我日常使用的工具和技术。
            </p>
          </Reveal>
          <div className="mt-12">
            <SkillGrid />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-3xl px-6 py-section">
        <Reveal>
          <h2 className="text-heading tracking-tight text-text-primary">
            经历
          </h2>
          <p className="mt-3 text-lg text-text-secondary">
            一些重要的时间节点。
          </p>
        </Reveal>
        <div className="mt-12">
          <Timeline />
        </div>
      </section>

      {/* Contact */}
      <section className="bg-bg-secondary py-section">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <h2 className="text-heading tracking-tight text-text-primary">
              联系我
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              想聊聊？随时找我。
            </p>
            <div className="mt-8 flex items-center justify-center gap-6">
              <a
                href={`mailto:${profile.social.email}`}
                className="flex items-center gap-2 text-text-secondary transition-colors hover:text-text-primary"
              >
                <Mail size={20} />
                <span className="text-sm font-medium">Email</span>
              </a>
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text-secondary transition-colors hover:text-text-primary"
              >
                <Github size={20} />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href={profile.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text-secondary transition-colors hover:text-text-primary"
              >
                <Twitter size={20} />
                <span className="text-sm font-medium">Twitter</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
