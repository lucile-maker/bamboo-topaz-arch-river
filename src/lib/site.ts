import { photos } from "@/lib/photos";

export const APP_NAME = "George";
export const THEME_COLOR = "#24332C";
export const TAGLINE = "Your home, looked after.";
export const PRICE_MONTH = 299;
export const PRICE_YEAR = 3588;

export const nav = [
  { to: "/membership", label: "Membership" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/neighbourhoods", label: "Neighbourhoods" },
  { to: "/private", label: "Private" },
  { to: "/about", label: "About" },
] as const;

export const neighbourhoods = [
  {
    slug: "leaside",
    name: "Leaside",
    image: photos.leaside,
    kicker: "Where we begin",
    line: "Tree streets, 1920s brick, and households who already hire the work.",
    body: "Leaside is full of capable people with better uses for their evenings than comparing HVAC quotes. Recent buyers inherit unfamiliar systems. Long-time owners have a list they never quite get to. George is built for both.",
  },
  {
    slug: "the-beaches",
    name: "The Beaches",
    image: photos.winter,
    kicker: "Lake streets",
    line: "Porches, weather, and houses that ask for attention through every season.",
    body: "Salt air, freeze-thaw, and a house that is lived in hard — the Beaches rewards someone who notices before a small thing becomes a January problem. George keeps a plan for the year, not a reaction to the last storm.",
  },
  {
    slug: "riverdale",
    name: "Riverdale",
    image: photos.riverdale,
    kicker: "Victorian streets",
    line: "Painted doors, bay windows, and homes with a past that needs looking after.",
    body: "Riverdale houses are particular. Original millwork, old plumbing, and owners who care how the work is done. George brings trades who will treat the house as a house, not a job number.",
  },
  {
    slug: "rosedale",
    name: "Rosedale",
    image: photos.private,
    kicker: "Established homes",
    line: "Larger lots, older systems, and households that expect discretion.",
    body: "Some Rosedale homes already have a roster. Others have a gap where an estate manager would be. George is the accountable person in between — present enough to be trusted with keys, light enough not to be a staffed household.",
  },
] as const;

export const included = [
  {
    title: "The record of the house",
    body: "A digital inventory of appliances and systems by make and model, built from an existing inspection or a professional partner inspection, then kept current.",
  },
  {
    title: "A plan for the year",
    body: "Seasonal work, manufacturer guidance, and the things the house has already told us. Refreshing the plan is part of the membership.",
  },
  {
    title: "Trusted trades, with judgement",
    body: "The right person for the job, quotes that can be compared, and a recommendation — not a directory.",
  },
  {
    title: "Coordination, access, follow-up",
    body: "Scheduling, keys, being there when it matters, and calling back when the work is unfinished. This is the job you are handing over.",
  },
  {
    title: "A handyman allowance",
    body: "Small jobs — a sticking door, a dripping tap, a smoke-alarm battery — done on the next visit, without a separate booking.",
  },
  {
    title: "Agreed work on autopilot",
    body: "Recurring jobs can run within a budget you set. New scope, or spending beyond those limits, comes back for approval.",
  },
] as const;

export const notIncluded = [
  "Trade labour and materials — at launch, you pay providers directly.",
  "Major projects, extensive on-site supervision, and sustained disputes, which need their own scope.",
  "Emergency board-up or 24-hour estate staffing.",
] as const;

export const steps = [
  {
    n: "01",
    title: "We learn the house",
    body: "We review an existing inspection or arrange a professional partner inspection, then build a digital inventory of appliances and systems. You set priorities. George learns what ‘looked after’ means in this home.",
  },
  {
    n: "02",
    title: "We watch for what it needs",
    body: "Inspection findings, owner notes, service history and manufacturer guidance help identify likely issues and the right trade. Recommendations are reviewed by George before they reach you. Members buy a dependable person, not software.",
  },
  {
    n: "03",
    title: "You approve the work",
    body: "New scope and spending come back for a decision. Recurring jobs you have already agreed can run on autopilot, inside a budget. Nothing material happens in the house without a clear yes.",
  },
  {
    n: "04",
    title: "George sees it through",
    body: "We arrange access, manage the visit, and follow up. Completed work and upcoming care are recorded, so the next season starts from knowledge rather than memory.",
  },
] as const;

export const homeRecord = {
  title: "A 1928 detached in Leaside",
  updated: "Record current as of October",
  rows: [
    { item: "Boiler", detail: "Viessmann Vitodens · installed 2019" },
    { item: "Roof", detail: "Last replaced 2014 · inspection due 2027" },
    { item: "Filter", detail: "Aprilaire 16 × 25 · autumn change" },
    { item: "Water heater", detail: "Bradford White · 2021" },
    { item: "Gutters", detail: "Twice yearly · April and November" },
    { item: "Smoke alarms", detail: "10-year sealed · kitchen replaced 2025" },
  ],
} as const;

export const situations = [
  "I live here now",
  "We bought in the last two years",
  "Helping family with a home",
  "We have more than one home",
] as const;

export const neighbourhoodOptions = [
  "Leaside",
  "The Beaches",
  "Riverdale",
  "Rosedale",
  "Leslieville",
  "Elsewhere in Toronto",
] as const;
