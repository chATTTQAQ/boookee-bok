import { Github, Twitter, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-text-secondary">
          © {year} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <a
            href={`mailto:${profile.social.email}`}
            className="text-text-secondary transition-colors hover:text-text-primary"
            aria-label="邮箱"
          >
            <Mail size={18} />
          </a>
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary transition-colors hover:text-text-primary"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary transition-colors hover:text-text-primary"
            aria-label="Twitter"
          >
            <Twitter size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
