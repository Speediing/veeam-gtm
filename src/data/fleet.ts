import type { JobId } from "./types";

export type FleetBot = {
  id: string;
  name: string;
  blurb: string;
  color: string;
  jobId?: JobId;
  mark?: string;
  seat?: boolean;
};

export const FLEET: FleetBot[] = [
  {
    id: "rep",
    name: "Every Veeam rep",
    blurb: "The rep stays in control. Their agents keep the work around each deal moving.",
    color: "#E8E8ED",
    mark: "AE",
    seat: true,
  },
  {
    id: "room",
    name: "Room",
    blurb: "Uses its computer to follow the call and update the open customer brief.",
    jobId: "standardize-room",
    color: "#00D15F",
  },
  {
    id: "answers",
    name: "Answers",
    blurb: "Checks approved product and internal sources, then drafts a reply for review.",
    jobId: "legal-redlines",
    color: "#22A968",
  },
  {
    id: "scout",
    name: "Scout",
    blurb: "Researches a sample account and prepares personal outreach without sending it.",
    jobId: "attach-engine",
    color: "#68D391",
  },
];
