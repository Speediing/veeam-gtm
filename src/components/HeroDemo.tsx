"use client";

import { useState, type ReactNode } from "react";
import { HERO_JOBS, type HeroJobIcon } from "@/data/hero-jobs";

const JOB_ICONS: Record<HeroJobIcon, ReactNode> = {
  research: (
    <>
      <circle cx="10.5" cy="10.5" r="5.5" />
      <path d="m15 15 4 4" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="5.5" width="16" height="14" rx="2" />
      <path d="M8 3.5v4M16 3.5v4M4 9.5h16" />
    </>
  ),
  "follow-up": (
    <>
      <path d="M5 7h7a5 5 0 0 1 5 5v5" />
      <path d="m13 13 4 4 4-4" />
    </>
  ),
  opportunity: (
    <>
      <rect x="3.5" y="7" width="17" height="12" rx="2" />
      <path d="M9 7V4.5h6V7M3.5 12h17M10 12v2h4v-2" />
    </>
  ),
  answer: (
    <>
      <path d="M5 18.5 6.2 15A7.5 7.5 0 1 1 19 9.7 7.5 7.5 0 0 1 8.5 16.5Z" />
      <path d="M9.2 9a2.8 2.8 0 0 1 5.3 1.2c0 1.8-2 2-2.4 3M12 16h.01" />
    </>
  ),
  partner: (
    <>
      <circle cx="8" cy="8" r="3" />
      <circle cx="16.5" cy="9" r="2.5" />
      <path d="M3.5 19a4.5 4.5 0 0 1 9 0M13 18.5a3.5 3.5 0 0 1 7 0" />
    </>
  ),
  renewal: (
    <>
      <path d="M18.5 8A7.5 7.5 0 0 0 6 5.5L4 8" />
      <path d="M4 4v4h4M5.5 16A7.5 7.5 0 0 0 18 18.5l2-2.5" />
      <path d="M20 20v-4h-4" />
    </>
  ),
  forecast: (
    <>
      <path d="M4 19V5M4 19h16" />
      <path d="m7 15 3.5-4 3 2 5-6" />
      <path d="M15.5 7h3v3" />
    </>
  ),
};

function JobIcon({ icon }: { icon: HeroJobIcon }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {JOB_ICONS[icon]}
    </svg>
  );
}

function BackIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="m14.5 5-7 7 7 7" />
    </svg>
  );
}

function AgentIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden
    >
      <path d="m4 11.5 15-7-5.8 15-2.6-5.5Z" />
      <path d="m10.6 14 3.2-3.2" />
    </svg>
  );
}

function DesktopIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden
    >
      <rect x="3.5" y="4.5" width="17" height="12" rx="2" />
      <path d="M9 20h6M12 16.5V20" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden
    >
      <rect x="8.5" y="3" width="7" height="12" rx="3.5" />
      <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3M9 21h6" />
    </svg>
  );
}

export function HeroDemo() {
  const [activeJobIndex, setActiveJobIndex] = useState(0);
  const activeJob = HERO_JOBS[activeJobIndex];

  return (
    <>
      <div className="hero-copy">
        <p className="eyebrow">Grok Bot for Veeam GTM</p>
        <h1>A fleet of agents that keeps working.</h1>
        <p className="hero-intro">
          Each agent has its own computer. It can follow a customer call, check
          approved sources, and prepare the next piece of work. Your rep reviews
          what it makes.
        </p>

        <div
          className="hero-phone-jobs"
          aria-label="Choose an illustrative agent job"
        >
          {HERO_JOBS.map((job, index) => {
            const isActive = index === activeJobIndex;

            return (
              <button
                key={job.id}
                type="button"
                className={isActive ? "is-active" : undefined}
                aria-pressed={isActive}
                onClick={() => setActiveJobIndex(index)}
              >
                {isActive ? (
                  <span>
                    <JobIcon icon={job.icon} />
                  </span>
                ) : null}
                {job.name}
              </button>
            );
          })}
        </div>
      </div>

      <div className="hero-bot-demo">
        <div
          className="hero-phone"
          role="region"
          aria-label={`Illustrative Grok Bot thread for ${activeJob.name}`}
        >
          <span className="hero-phone-notch" aria-hidden />

          <header className="hero-phone-header">
            <span className="hero-phone-back">
              <BackIcon />
            </span>
            <span className="hero-phone-agent">
              <AgentIcon />
            </span>
            <p>
              <strong>{activeJob.name} Agent</strong>
              <small>
                <span aria-hidden />
                Sample workflow
              </small>
            </p>
            <span className="hero-phone-desktop">
              <DesktopIcon />
            </span>
          </header>

          <div
            key={activeJob.id}
            className="hero-phone-thread"
            aria-live="polite"
          >
            <article className="hero-phone-work">
              <p className="hero-phone-work-label">
                <span aria-hidden />
                Illustrative job
              </p>
              <p className="hero-phone-work-meta">
                <span>Account</span>
                {activeJob.account}
              </p>
              <p className="hero-phone-work-meta">
                <span>Trigger</span>
                {activeJob.signal}
              </p>
              <p className="hero-phone-work-copy">{activeJob.work}</p>
              <strong>{activeJob.result}</strong>
            </article>

            <p className="hero-phone-message is-user">{activeJob.user}</p>
            <p className="hero-phone-message is-bot">{activeJob.bot}</p>
          </div>

          <div className="hero-phone-composer" aria-hidden>
            <span>
              <PlusIcon />
            </span>
            <p>Message {activeJob.name} Agent</p>
            <span>
              <MicIcon />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
