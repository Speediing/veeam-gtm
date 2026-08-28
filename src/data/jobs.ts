import type { Artifact, CroJob, SlideCard } from "./types";

export const SAMPLE_ACCOUNT = "Northstar Health";

export const RECOVERY_BRIEF_SLIDES: SlideCard[] = [
  {
    n: 1,
    kicker: "Sample discovery note",
    voice: "them",
    title: "Name the recovery owner",
    body: "Confirm who owns restore readiness across the workloads in scope.",
  },
  {
    n: 2,
    kicker: "Agent mapping",
    voice: "us",
    title: "Build the restore path",
    body: "Turn the workload list into a draft plan with owners and open questions.",
  },
  {
    n: 3,
    kicker: "Sample discovery note",
    voice: "them",
    title: "Keep the next meeting focused",
    body: "Bring the recovery owner and the person who can approve the test plan.",
  },
  {
    n: 4,
    kicker: "Agent mapping",
    voice: "us",
    title: "Leave with a reviewable brief",
    body: "Give the account team a clear draft they can check before anything is shared.",
  },
];

export const SAMPLE_QUESTIONS: Extract<Artifact, { kind: "redlines" }> = {
  kind: "redlines",
  title: "Sample customer questions",
  paperTitle: "Questions to check",
  from: "Sample customer email",
  marks: [
    {
      text: "Which workloads are covered by this proposal?",
      note: "Use the approved product matrix and link the source in the draft.",
      take: true,
    },
    {
      text: "What restore path applies to the workloads in scope?",
      note: "Use the current runbook, then ask the solution owner to review it.",
      take: true,
    },
    {
      text: "Can the retention policy change after deployment?",
      note: "Leave this open for the solution owner. Do not guess.",
      take: false,
    },
  ],
  reply: {
    to: "Sample customer contact",
    subject: "Recovery questions and source links",
    body: "Hi there,\n\nI pulled the approved sources for the workload and restore questions. The draft includes those links so your team can check the details.\n\nI left the retention-policy question open for our solution owner. I will send that answer after review.\n\nBest,",
  },
};

export const SAMPLE_OUTBOUND: Extract<Artifact, { kind: "outbound" }> = {
  kind: "outbound",
  title: "Sample account brief",
  account: SAMPLE_ACCOUNT,
  hypothesis: [
    {
      k: "Why Veeam",
      body: "The sample account is reviewing recovery readiness. Start with the workloads and restore process already in scope.",
    },
    {
      k: "Why now",
      body: "A public continuity update and an open recovery role give the rep a reason to research the account.",
    },
    {
      k: "Who to contact",
      body: "Start with the leaders who own infrastructure recovery and business continuity.",
    },
  ],
  evidence: [
    {
      source: "Sample continuity update",
      finding: "The account is reviewing recovery ownership across core systems.",
    },
    {
      source: "Sample open role",
      finding: "The role covers backup operations and recovery planning.",
    },
  ],
  targets: [
    {
      name: "Recovery leader",
      role: "Sample buyer",
      why: "Owns the recovery plan and the people who will review it.",
    },
  ],
  page: {
    headline: "A recovery-readiness brief for Northstar Health",
    body: "Start with the workloads in scope, the current restore process, and the owner of the next test. Keep every claim tied to a public or approved source.",
  },
};

export const JOBS: CroJob[] = [
  {
    id: "standardize-room",
    number: 1,
    title: "Room turns a live call into the next customer brief",
    trigger: "A customer call starts",
    backgroundAction: "Following the call and updating the open brief",
    problem:
      "A rep should not spend the next hour turning notes into another generic deck.",
    botJob:
      "Room follows the call on its own computer. It captures the sample recovery need and updates the open brief while the conversation is still fresh.",
    storyboard: [
      {
        when: "Call starts",
        label: "Room follows the sample call. No extra prompt is needed.",
        scene: "call",
        visual: {
          kind: "live-call",
          title: "Sample recovery call",
          people: [
            { initials: "AE", name: "Veeam AE" },
            { initials: "CU", name: "Customer" },
            { initials: "SE", name: "Solutions engineer" },
          ],
        },
      },
      {
        when: "Need captured",
        label: "The recovery question lands in the call notes.",
        scene: "notes",
        visual: {
          kind: "live-transcript",
          timestamp: "Live",
          speaker: "Sample discovery note",
          quote: "Confirm the recovery owner, workloads in scope, and the next restore test.",
          signals: ["Recovery owner", "Workloads", "Restore test"],
        },
      },
      {
        when: "Brief updates",
        label: "Room maps the note into a clear plan for the next meeting.",
        scene: "deck",
        visual: {
          kind: "deck-update",
          eyebrow: "Sample account brief",
          headline: "Recovery owner and restore path",
          product: "Draft for review",
          status: "Brief updated",
        },
      },
      {
        when: "Artifact ready",
        label: "The last frame is a customer brief the rep can review.",
        scene: "deck",
        slides: RECOVERY_BRIEF_SLIDES,
      },
    ],
    unlock: "A live call becomes a reviewable customer brief.",
    outcome:
      "The rep leaves the call with a draft that names the recovery owner, open questions, and next step.",
    clips: [],
    demo: {
      title: "Room",
      subtitle: "Sample call to customer brief",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "room",
          name: "Room",
          role: "bot",
          persona: "Turns a live call into a clear customer brief",
          color: "#00D15F",
        },
        {
          id: "brief",
          name: "Brief",
          role: "bot",
          persona: "Updates the artifact on its own computer",
          color: "#22A968",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "room",
          kind: "routine",
          body: "Illustrative scene. The sample customer call started. I am following the notes and watching for the recovery owner, workloads, and next test.",
        },
        {
          id: "m2",
          from: "room",
          kind: "text",
          body: "The recovery question is clear. I am updating the open brief now.",
        },
        {
          id: "m3",
          from: "brief",
          kind: "draft",
          draftLabel: "Customer brief",
          artifact: {
            kind: "slides",
            title: "Sample recovery brief",
            cards: RECOVERY_BRIEF_SLIDES,
          },
        },
        {
          id: "m4",
          from: "room",
          kind: "system",
          body: "Nothing shared. The brief stays a draft until the rep reviews it.",
        },
      ],
    },
  },
  {
    id: "legal-redlines",
    number: 2,
    title: "Answers turns a customer question into a sourced draft",
    trigger: "A customer question lands",
    backgroundAction: "Checking approved sources and drafting the reply",
    problem:
      "A product question can send a rep through several internal channels before the customer gets an answer.",
    botJob:
      "Answers checks approved product and internal sources on its own computer. It drafts what is supported and leaves open questions with the right owner.",
    storyboard: [
      {
        when: "Email arrives",
        label: "Answers picks up the sample customer questions.",
        scene: "notes",
        visual: {
          kind: "procurement-email",
          sender: "Sample customer contact",
          subject: "Recovery questions",
          questions: 3,
        },
      },
      {
        when: "Sources checked",
        label: "The agent separates supported answers from the open item.",
        scene: "inspect",
        visual: {
          kind: "answers-found",
          sources: [
            { name: "Product matrix", answer: "Workload question sourced" },
            { name: "Restore runbook", answer: "Recovery path sourced" },
            { name: "Solution owner", answer: "Open item routed" },
          ],
          status: "Review complete",
        },
      },
      {
        when: "Draft ready",
        label: "The reply is ready for the rep to review.",
        scene: "send",
        visual: {
          kind: "reply-ready",
          to: "Sample customer contact",
          subject: "Recovery questions",
          status: "Ready to review",
        },
      },
      {
        when: "Artifact ready",
        label: "The last frame shows the sourced reply and the item still on hold.",
        scene: "send",
        artifact: SAMPLE_QUESTIONS,
      },
    ],
    unlock: "A customer question becomes a sourced draft with a clear open item.",
    outcome:
      "The rep reviews one draft instead of chasing several teams for the same answer.",
    clips: [],
    demo: {
      title: "Answers",
      subtitle: "Sample question to sourced draft",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "answers",
          name: "Answers",
          role: "bot",
          persona: "Checks approved sources and prepares a reviewable reply",
          color: "#22A968",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "answers",
          kind: "routine",
          body: "Illustrative scene. A sample customer email arrived. I am checking the approved product matrix and restore runbook.",
        },
        {
          id: "m2",
          from: "answers",
          kind: "text",
          body: "Two answers have sources. One question needs the solution owner, so I left it open.",
        },
        {
          id: "m3",
          from: "answers",
          kind: "draft",
          draftLabel: "Questions and sourced reply",
          artifact: SAMPLE_QUESTIONS,
        },
        {
          id: "m4",
          from: "answers",
          kind: "system",
          body: "Nothing sent. The rep reviews the draft and the open item first.",
        },
      ],
    },
  },
  {
    id: "attach-engine",
    number: 3,
    title: "Scout turns public signals into personal drafts",
    trigger: "A sample account enters the target list",
    backgroundAction: "Researching public signals and preparing outreach",
    problem:
      "A list of accounts is not a reason to call. The rep still needs a useful point of view.",
    botJob:
      "Scout uses its computer to research a sample account, write a simple why, and prepare outreach. It keeps every claim tied to a source and sends nothing.",
    storyboard: [
      {
        when: "Account added",
        label: "Scout starts research without waiting for another prompt.",
        scene: "inspect",
        visual: {
          kind: "account-research",
          account: SAMPLE_ACCOUNT,
          sources: ["Continuity update", "Open role", "Company news"],
          signal: "Recovery-readiness review",
        },
      },
      {
        when: "Point of view ready",
        label: "The agent turns sample public signals into a plain account brief.",
        scene: "notes",
        visual: {
          kind: "three-why",
          items: [
            { label: "Why Veeam", answer: "Recovery readiness" },
            { label: "Why now", answer: "Public continuity work" },
            { label: "Who", answer: "Recovery owner" },
          ],
        },
      },
      {
        when: "Drafts ready",
        label: "The rep gets personal drafts to review, not a generic sequence.",
        scene: "map",
        visual: {
          kind: "outreach-ready",
          person: "Sample recovery leader",
          channels: ["Email", "LinkedIn", "Account page"],
          status: "Drafts ready. Nothing sent.",
        },
      },
      {
        when: "Artifact ready",
        label: "The last frame is the account brief behind every draft.",
        scene: "send",
        artifact: SAMPLE_OUTBOUND,
      },
    ],
    unlock: "A target account becomes a sourced point of view and personal drafts.",
    outcome:
      "The rep starts with a reason to reach out and can check every source before sending.",
    clips: [],
    demo: {
      title: "Scout",
      subtitle: "Sample account research to outreach",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "scout",
          name: "Scout",
          role: "bot",
          persona: "Researches public signals and prepares personal drafts",
          color: "#68D391",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "scout",
          kind: "routine",
          body: "Illustrative scene. Northstar Health entered the sample account list. I am checking public continuity and recovery signals.",
        },
        {
          id: "m2",
          from: "scout",
          kind: "text",
          body: "The sample signals support a recovery-readiness point of view. I am building the brief before I draft outreach.",
        },
        {
          id: "m3",
          from: "scout",
          kind: "draft",
          draftLabel: "Sample account brief",
          artifact: SAMPLE_OUTBOUND,
        },
        {
          id: "m4",
          from: "scout",
          kind: "system",
          body: "Nothing sent. The rep checks the sources and approves each draft.",
        },
      ],
    },
  },
];

export function getJob(id: string): CroJob | undefined {
  return JOBS.find((job) => job.id === id);
}
