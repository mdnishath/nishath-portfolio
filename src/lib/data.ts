export interface Service {
  iconPaths: string[];
  title: string;
  desc: string;
}

export interface JourneyItem {
  year: string;
  title: string;
  desc: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface Project {
  slotId: string;
  title: string;
  placeholder: string;
  tags: string[];
}

export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

export const services: Service[] = [
  {
    iconPaths: ["M4 17l6-6-6-6", "M12 19h8"],
    title: "Web Development",
    desc: "MERN, Next.js & WordPress. Any stack, pixel-perfect.",
  },
  {
    iconPaths: ["M3 5h18v11H3z", "M8 21h8", "M12 16v5"],
    title: "Desktop Apps",
    desc: "Cross-platform desktop software with Electron.",
  },
  {
    iconPaths: [
      "M7 2h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z",
      "M11 18h2",
    ],
    title: "Mobile Apps",
    desc: "Native-feel Android & iOS applications.",
  },
  {
    iconPaths: ["M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L4.2 7.7l5.4-.8z"],
    title: "UI/UX & Figma",
    desc: "Clean, modern interfaces designed pixel-perfect.",
  },
  {
    iconPaths: ["M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z", "M21 21l-4.3-4.3"],
    title: "SEO",
    desc: "On-page, technical SEO & indexing that ranks.",
  },
  {
    iconPaths: [
      "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
      "M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.9 2.9l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.9-2.9l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.9-2.9l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.9 2.9l-.1.1a1.7 1.7 0 0 0-.3 1.9V9c.3.6.9 1 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z",
    ],
    title: "Automation",
    desc: "Custom scripts & workflow automation.",
  },
  {
    iconPaths: ["M22 2L11 13", "M22 2l-7 20-4-9-9-4z"],
    title: "Telegram Bots",
    desc: "Smart Telegram bot development.",
  },
  {
    iconPaths: [
      "M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z",
      "M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    ],
    title: "Google Business (GMB)",
    desc: "GMB setup, reviews & reputation management.",
  },
  {
    iconPaths: [
      "M12 3l1.9 4.6L18.5 9l-4.6 1.4L12 15l-1.9-4.6L5.5 9l4.6-1.4z",
      "M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z",
    ],
    title: "AI-Powered Development",
    desc: "Shipping faster with Claude Code as my co-builder.",
  },
];

export const journey: JourneyItem[] = [
  {
    year: "2019",
    title: "First client websites",
    desc: "Started freelancing — WordPress and custom sites for local businesses.",
  },
  {
    year: "2021",
    title: "Full-stack development",
    desc: "Went deep on MERN and Next.js — end-to-end web platforms for clients.",
  },
  {
    year: "2022",
    title: "Desktop & mobile apps",
    desc: "Expanded to Electron desktop software and native-feel mobile apps.",
  },
  {
    year: "2023",
    title: "Automation & bots",
    desc: "Custom scripts, workflow automation and smart Telegram bots.",
  },
  {
    year: "2024",
    title: "SEO & Google Business",
    desc: "Technical SEO, indexing and GMB reputation management added to the toolkit.",
  },
  {
    year: "2025",
    title: "AI-native workflow",
    desc: "Adopted Claude Code as co-builder — faster delivery, no stack limits.",
  },
  {
    year: "2026",
    title: "Full team output, solo",
    desc: "One developer shipping agency-grade products — single point of contact.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Nishath delivered our entire platform — design to deployment — faster than the agency we almost hired. One person, full team output.",
    name: "Client Name",
    role: "SaaS Founder",
  },
  {
    quote:
      "Pixel-perfect work and constant communication. He handled the site, the SEO, and the automation. Everything just works.",
    name: "Client Name",
    role: "Agency Owner",
  },
  {
    quote:
      "The best developer we have worked with. Brief in the morning, working build by evening. The AI-powered workflow is real.",
    name: "Client Name",
    role: "E-commerce Director",
  },
];

export const projects: Project[] = [
  {
    slotId: "work-saas",
    title: "SaaS Platform",
    placeholder: "Drop project screenshot",
    tags: ["Next.js", "PostgreSQL", "Stripe"],
  },
  {
    slotId: "work-wp",
    title: "WordPress Plugin",
    placeholder: "Drop project screenshot",
    tags: ["WordPress", "PHP", "React"],
  },
  {
    slotId: "work-bot",
    title: "Automation Bot",
    placeholder: "Drop project screenshot",
    tags: ["Telegram", "Python", "API"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Understand",
    desc: "Deep-dive on your goals, users and constraints before a single line of code.",
  },
  {
    num: "02",
    title: "Design",
    desc: "Pixel-perfect interfaces in Figma — approved by you before the build starts.",
  },
  {
    num: "03",
    title: "Build with AI",
    desc: "Claude Code as co-builder: production-grade code on any stack, at speed.",
  },
  {
    num: "04",
    title: "Ship & Support",
    desc: "Launch, monitor and iterate. One point of contact, end to end.",
  },
];

export const site = {
  name: "Md Nishath Khandakar",
  brand: "NISHATH",
  tagline: "FULL-STACK DEVELOPER",
  email: "nishath.khandakar@gmail.com",
  whatsapp: [
    { label: "+880 1797-691159", href: "https://wa.me/8801797691159" },
    { label: "+880 1767-591988", href: "https://wa.me/8801767591988" },
  ],
  github: "https://github.com/mdnishath",
  facebook: "https://www.facebook.com/nishath.khandakar",
  freelancerId: "F126326715879",
  idCardPdf: "/uploads/id-card.pdf",
  photo: "/uploads/nishath-photo-transparent.png",
};

export const navLinks = [
  { key: "home", label: "Home", href: "/" },
  { key: "services", label: "Services", href: "/services" },
  { key: "work", label: "Work", href: "/work" },
  { key: "contact", label: "Contact", href: "/contact" },
] as const;

export type NavKey = (typeof navLinks)[number]["key"];
