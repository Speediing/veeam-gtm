import type { ClipId, JobId } from "./types";

export type SiteKind =
  | "granola"
  | "figma"
  | "gong"
  | "sfdc-account"
  | "sfdc-opp"
  | "sheets"
  | "gmail"
  | "slack"
  | "gdoc"
  | "linkedin"
  | "research"
  | "page"
  | "clip";

export type ChromeTab = {
  id: string;
  host: string;
  label: string;
};

export type ComputerBeat = {
  pill: string;
  host: string;
  path?: string;
  title: string;
  site: SiteKind;
  clip?: ClipId;
  tabs: ChromeTab[];
};

const granola = { id: "granola", host: "granola.app", label: "Granola" };
const figma = { id: "figma", host: "figma.com", label: "Figma" };
const gmail = { id: "gmail", host: "mail.google.com", label: "Gmail" };
const docs = { id: "docs", host: "docs.google.com", label: "Docs" };
const linkedin = {
  id: "linkedin",
  host: "www.linkedin.com",
  label: "LinkedIn",
};
const sampleWeb = {
  id: "web",
  host: "northstar-health.example",
  label: "Sample site",
};

export const SCREENS: Record<JobId, Record<string, ComputerBeat>> = {
  "standardize-room": {
    m1: {
      pill: "Following the sample call",
      host: "granola.app",
      path: "/notes/sample-recovery-call",
      title: "Sample recovery call",
      site: "granola",
      tabs: [granola, figma, gmail],
    },
    m2: {
      pill: "Reading the live notes",
      host: "granola.app",
      path: "/notes/sample-recovery-call",
      title: "Sample recovery call",
      site: "granola",
      tabs: [granola, figma, gmail],
    },
    m3: {
      pill: "Updating the customer brief",
      host: "figma.com",
      path: "/file/sample-recovery-brief",
      title: "Sample recovery brief",
      site: "figma",
      tabs: [granola, figma, gmail],
    },
    m4: {
      pill: "Draft parked for review",
      host: "figma.com",
      path: "/file/sample-recovery-brief",
      title: "Sample recovery brief",
      site: "figma",
      tabs: [granola, figma, gmail],
    },
  },
  "legal-redlines": {
    m1: {
      pill: "Opening the sample question",
      host: "mail.google.com",
      path: "/mail/u/0/#inbox",
      title: "Inbox",
      site: "gmail",
      tabs: [gmail, docs],
    },
    m2: {
      pill: "Checking approved sources",
      host: "docs.google.com",
      path: "/document/d/approved-recovery-sources",
      title: "Approved recovery sources",
      site: "gdoc",
      tabs: [gmail, docs],
    },
    m3: {
      pill: "Drafting the sourced reply",
      host: "docs.google.com",
      path: "/document/d/sample-recovery-reply",
      title: "Sample recovery reply",
      site: "gdoc",
      tabs: [gmail, docs],
    },
    m4: {
      pill: "Draft parked for review",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [gmail, docs],
    },
  },
  "attach-engine": {
    m1: {
      pill: "Researching the sample account",
      host: "northstar-health.example",
      path: "/continuity",
      title: "Sample continuity update",
      site: "research",
      tabs: [sampleWeb, docs, linkedin, gmail],
    },
    m2: {
      pill: "Writing the account point of view",
      host: "docs.google.com",
      path: "/document/d/sample-account-brief",
      title: "Sample account brief",
      site: "gdoc",
      tabs: [sampleWeb, docs, linkedin, gmail],
    },
    m3: {
      pill: "Building personal drafts",
      host: "www.linkedin.com",
      path: "/messaging/compose",
      title: "Message",
      site: "linkedin",
      tabs: [sampleWeb, docs, linkedin, gmail],
    },
    m4: {
      pill: "Drafts parked. Nothing sent.",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [sampleWeb, docs, linkedin, gmail],
    },
  },
};

export function beatFor(
  jobId: JobId,
  messageId: string | undefined,
): ComputerBeat | undefined {
  if (!messageId) return undefined;
  return SCREENS[jobId]?.[messageId];
}
