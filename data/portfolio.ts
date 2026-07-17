export type Project = {
  title: string;
  src: string;
  tags: string[];
  description: string;
  format: string;
  accent: "cyan" | "gold" | "rose" | "green";
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export const filters = ["All", "Reels", "Hype", "Events", "Motion", "Corporate", "Long Form"];

export const projects: Project[] = [
  {
    title: "College Fest Edit",
    src: "https://drive.google.com/file/d/1PbSCv4zSKKE27cFUhEFq3Z8QT9DhOVHx/preview",
    tags: ["Hype", "Reels", "Motion"],
    description: "A high-energy campus cut built around fast hooks, crowd rhythm, and impact frames.",
    format: "Social Hype Cut",
    accent: "cyan",
  },
  {
    title: "Corporate Edit",
    src: "https://drive.google.com/file/d/1oypuBG6Cmrf2A6dd4eiq3IV5QqIj24s6/preview",
    tags: ["Corporate", "Reels"],
    description: "A clean brand-safe reel with polished pacing and a sharp commercial finish.",
    format: "Brand Reel",
    accent: "gold",
  },
  {
    title: "TEDx Event",
    src: "https://drive.google.com/file/d/1_wPUuv3KTPE0dwxbXagYP6W1eiOitZkn/preview",
    tags: ["Events", "Speakers"],
    description: "Speaker-led event coverage shaped for clarity, momentum, and recall.",
    format: "Event Film",
    accent: "rose",
  },
  {
    title: "LLA Edit",
    src: "https://drive.google.com/file/d/1TfI5ZG5f5m6LWTh7whTJhkKFnZqQFoSc/preview",
    tags: ["Events", "Intro"],
    description: "An event intro with restrained motion, clean beats, and a crisp reveal structure.",
    format: "Intro Sequence",
    accent: "green",
  },
  {
    title: "Mark Bhatia Edit",
    src: "https://drive.google.com/file/d/1-uhnAQy5ifntAPoPm7ykb9CYECx476ll/preview",
    tags: ["Reels", "Lyrical"],
    description: "A lyrical short edit with timing-led transitions and smooth emotional pacing.",
    format: "Lyrical Reel",
    accent: "rose",
  },
  {
    title: "Seedhe Maut Motion Edit",
    src: "https://drive.google.com/file/d/11QIsPMVLI7B_8DjI_IxyE_tYYKHIadLW/preview",
    tags: ["Reels", "Motion"],
    description: "A motion-led creator cut with sharper beats, kinetic graphics, and punchy movement.",
    format: "Motion Reel",
    accent: "cyan",
  },
  {
    title: "Go Karting Vlog",
    src: "https://drive.google.com/file/d/1TeEZGHzzfuo7kvuyn-bMG5-lc_EVTjLR/preview",
    tags: ["Long Form", "Vlog"],
    description: "Long-form pacing that keeps action readable without losing the rush.",
    format: "Long Form",
    accent: "gold",
  },
];

export const stats = [
  { value: "7", label: "selected edits" },
  { value: "4", label: "editing lanes" },
  { value: "3", label: "core tools" },
  { value: "1", label: "sharp visual language" },
];

export const strengths = [
  {
    number: "01",
    title: "Hook architecture",
    text: "The first seconds are treated like the trailer for the whole edit.",
  },
  {
    number: "02",
    title: "3D rhythm",
    text: "Motion, depth, overlays, and timeline pacing built around energy, not clutter.",
  },
  {
    number: "03",
    title: "Platform-native delivery",
    text: "Reels, promos, event recaps, trailers, creator edits, and longer stories.",
  },
  {
    number: "04",
    title: "Clean revision flow",
    text: "Organized feedback, tidy versions, and polished final exports.",
  },
];

export const techWork = [
  {
    title: "Portfolio V2",
    type: "Next.js / 3D UI",
    text: "A routed portfolio system with a cinematic landing page, work gallery, and interactive presentation layer.",
  },
  {
    title: "Motion Interface Concepts",
    type: "UI / Creative Tech",
    text: "Space reserved for editing tools, visual experiments, web animations, dashboards, or case-study builds.",
  },
  {
    title: "Automation & Workflow",
    type: "Tech Process",
    text: "Space for scripts, editing workflow systems, content pipelines, or any technical work you want to showcase.",
  },
];

export const editSteps = [
  {
    label: "01",
    title: "Footage map",
    text: "Sort the strongest moments, audio peaks, faces, crowd movement, and hook frames before the edit begins.",
  },
  {
    label: "02",
    title: "Hook cut",
    text: "Build a first pass around attention: opening beat, rhythm, pacing, and the reason someone keeps watching.",
  },
  {
    label: "03",
    title: "Motion layer",
    text: "Add speed ramps, tracked text, scene transitions, overlays, sound hits, and graphics only where they help.",
  },
  {
    label: "04",
    title: "Polish export",
    text: "Color, audio balance, revision pass, captions if needed, and delivery for reel, event, or long-form format.",
  },
];
