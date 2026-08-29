export type HeroJobIcon =
  | "research"
  | "calendar"
  | "follow-up"
  | "opportunity"
  | "answer"
  | "partner"
  | "renewal"
  | "forecast";

export type HeroJob = {
  id: string;
  name: string;
  icon: HeroJobIcon;
  account: string;
  signal: string;
  work: string;
  result: string;
  user: string;
  bot: string;
};

export const HERO_JOBS = [
  {
    id: "account-research",
    name: "Account Research",
    icon: "research",
    account: "Illustrative Veeam account",
    signal: "Public context is ready to review",
    work:
      "I checked approved public sources and the sample account notes. I made a short brief with open questions for the rep to verify.",
    result: "Sample account brief ready",
    user: "show me the open questions before I use it",
    bot: "done. the brief stays in this sample thread for your review.",
  },
  {
    id: "call-prep",
    name: "Call Prep",
    icon: "calendar",
    account: "Illustrative Veeam account",
    signal: "A sample discovery call is on the calendar",
    work:
      "I organized the approved account notes into a call plan. It has a short agenda, discovery questions, and product topics for the rep to check.",
    result: "Sample call plan ready",
    user: "add the product questions to my call plan",
    bot: "added. they are marked as questions, not customer facts.",
  },
  {
    id: "call-follow-up",
    name: "Call Follow-up",
    icon: "follow-up",
    account: "Illustrative Veeam account",
    signal: "Sample call notes are ready",
    work:
      "I turned the sample notes into a follow-up email. It lists draft next steps and flags product details for review.",
    result: "Sample follow-up draft ready",
    user: "keep the product details marked for review",
    bot: "done. the draft will wait for your check.",
  },
  {
    id: "opportunity-update",
    name: "Opportunity Update",
    icon: "opportunity",
    account: "Illustrative Veeam account",
    signal: "Sample opportunity notes changed",
    work:
      "I drafted the CRM update from the sample notes. I kept the next step, timing, and open questions separate so the rep can confirm each one.",
    result: "Sample CRM update ready",
    user: "save the draft, I want to check it first",
    bot: "saved as a sample. nothing has been submitted.",
  },
  {
    id: "technical-answer",
    name: "Technical Answer",
    icon: "answer",
    account: "Illustrative Veeam account",
    signal: "A sample product question is open",
    work:
      "I found related sections in approved Veeam product material and drafted a plain answer. I marked it for an SE to check.",
    result: "Sample answer ready for review",
    user: "send this to the SE for a check",
    bot: "prepared. you can review the note before sharing it.",
  },
  {
    id: "partner-plan",
    name: "Partner Plan",
    icon: "partner",
    account: "Illustrative Veeam account",
    signal: "Sample partner notes are ready",
    work:
      "I organized the sample partner notes into a simple joint plan. It shows draft owners, open questions, and the next meeting to confirm.",
    result: "Sample partner plan ready",
    user: "keep this as a sample plan for now",
    bot: "done. it stays in draft until you approve it.",
  },
  {
    id: "renewal-prep",
    name: "Renewal Prep",
    icon: "renewal",
    account: "Illustrative Veeam account",
    signal: "A sample renewal review is coming up",
    work:
      "I made a renewal prep page from the sample account records. It separates known details from the items the rep still needs to confirm.",
    result: "Sample renewal prep ready",
    user: "show me what still needs a rep check",
    bot: "highlighted. no missing detail was filled in as a fact.",
  },
  {
    id: "forecast-check",
    name: "Forecast Check",
    icon: "forecast",
    account: "Illustrative Veeam pipeline",
    signal: "A sample pipeline review is on the calendar",
    work:
      "I reviewed the sample pipeline records and listed the deals with missing next steps or review notes. I did not change any forecast field.",
    result: "Sample forecast check ready",
    user: "leave the forecast as a draft",
    bot: "done. all changes still need your review.",
  },
] as const satisfies readonly HeroJob[];
