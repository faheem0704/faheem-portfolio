import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Muhammed Faheem Azeez — UI/UX Designer & Frontend Developer",
  author: "Muhammed Faheem Azeez",
  description:
    "Portfolio of Muhammed Faheem Azeez — UI/UX designer and frontend developer who designs in Figma and builds in Next.js. Final-year AI & ML engineering student at SRMIST Chennai.",
  lang: "en",
  siteLogo: "/faheem.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "Skills", href: "#skills" },
    { text: "Education", href: "#education" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "GitHub", href: "https://github.com/faheem0704" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/muhammed-faheem-azeez-3a6467242/" },
    // TODO: Replace with your Figma or Behance profile URL
    { text: "Figma", href: "[FIGMA_OR_BEHANCE_URL_HERE]" },
  ],
  socialImage: "/zen-og.png",
  // TODO: Update to your live domain once deployed
  canonicalURL: "https://faheem-portfolio.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Muhammed Faheem",
    specialty: "UI/UX Designer & Frontend Developer",
    summary:
      "UI/UX Designer and AI & ML graduate who designs in Figma and ships the real product in Next.js — with an eye for motion, visual hierarchy, and the small details that make a product feel good to use.",
    email: "muhammedf0704@gmail.com",
  },
  experience: [
    {
      company: "Azalea by Zehra",
      position: "Freelance UI/UX Designer & Frontend Developer",
      startDate: "2026",
      endDate: "2026",
      summary: [
        "Sole designer and developer for a women's ethnic wear e-commerce brand. Took the project from initial brief to a live, shippable product — handling UX research, Figma wireframes, high-fidelity mockups, interactive prototype, and full frontend build in Next.js.",
        "Built a fully responsive storefront with scroll-driven parallax sections, smooth page transitions, and custom hover-effect product cards. Maintained a consistent design system (typography, colour tokens, spacing) across all screen sizes.",
        "Worked directly with the client through multiple feedback rounds, translating requests into design decisions while keeping the visual identity cohesive and the experience intuitive.",
      ],
    },
  ],
  projects: [
    {
      name: "Azalea by Zehra — E-Commerce Website",
      summary:
        "Designed the complete interface in Figma — wireframes, mockups, and an interactive prototype — then built it as a full-stack store in Next.js for a clothing brand. Fully responsive across mobile, tablet, and desktop, with scroll-driven parallax sections, smooth page transitions, and custom hover-effect product cards.",
      // TODO: Replace with a real screenshot of the Azalea by Zehra site
      image: "/shopify-clon.png",
      linkPreview: "https://azaleabyzehra.com",
      linkSource: "https://github.com/faheem0704/azaleabyzehra",
    },
    {
      name: "Responsive Web UI Design",
      summary:
        "Designed a multi-section responsive website end-to-end in Figma, from low-fidelity wireframes to a high-fidelity interactive prototype. Crafted parallax scroll effects, animated section reveals, and custom hover states, applying core UI/UX principles — visual hierarchy, consistency, and user-flow mapping.",
      // TODO: Replace with a real screenshot or export from the Figma prototype
      image: "/spotifu.png",
      // TODO: Replace with your Figma prototype URL
      linkPreview: "[FIGMA_PROTOTYPE_URL_HERE]",
      linkSource: "[FIGMA_PROTOTYPE_URL_HERE]",
    },
    {
      name: "AI-Driven Urban Safety Monitoring System",
      summary:
        "Designed and built a real-time React dashboard — live camera grid, alert toasts, incident export, and analytics — with a clear, usable layout for fast decision-making. Behind it, an end-to-end CCTV anomaly detection engine using YOLOv8 (rule-based scoring + Random Forest) cut false positives from 96% to 12% at 98% accuracy, served via a FastAPI + WebSocket backend.",
      // TODO: Replace with a real screenshot of the dashboard UI
      image: "/clone-ig.png",
      linkPreview: "https://urban-safety-ai.vercel.app",
      linkSource: "https://github.com/faheem0704/urban-safety-ai",
    },
  ],
  education: [
    {
      degree: "B.Tech in CSE — AI & ML Specialization",
      institution: "SRM Institute of Science and Technology",
      location: "Chennai, India",
      year: "2026",
      detail: "CGPA 7.2 / 10",
    },
    {
      degree: "Class XII — Kerala Board of Secondary Education",
      institution: "GOV HSS Koothuparamba",
      location: "Kerala, India",
      year: "2022",
    },
    {
      degree: "Class X — Kerala Board of Secondary Education",
      institution: "Rani Jai HSS, Nirmalagiri",
      location: "Kerala, India",
      year: "2020",
    },
  ],
  skills: [
    {
      category: "Design & Prototyping",
      icon: "✎",
      skills: ["Figma", "Wireframing", "Prototyping", "User Flows", "Responsive Design", "Design Systems", "UI/UX Principles", "Micro-interactions", "Usability Testing"],
    },
    {
      category: "Frontend",
      icon: "{ }",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS", "Framer Motion", "GSAP"],
    },
    {
      category: "Programming",
      icon: "⚙",
      skills: ["Python", "C/C++", "Java"],
    },
    {
      category: "AI & ML",
      icon: "⚡",
      skills: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "YOLOv8", "OpenCV", "CNN", "NumPy", "Pandas"],
    },
    {
      category: "Databases & Tools",
      icon: "▦",
      skills: ["SQL", "PostgreSQL", "MongoDB", "SQLite", "Git", "GitHub", "FastAPI"],
    },
  ],
  about: {
    description: `UI/UX Designer and AI & Machine Learning graduate who designs in Figma and ships the real product in Next.js. Comfortable taking an interface from wireframes and user flows to high-fidelity, interactive prototypes, then building responsive, animation-rich frontends with parallax effects, smooth transitions, and custom hover-state components.

Strong grasp of core UI/UX principles, design consistency across web and mobile, and developer handoff — combining a designer’s eye for clean, intuitive interfaces with an engineer’s ability to actually build them. Seeking a UI/UX Designer role where design thinking and frontend execution meet.`,
    image: "/faheem.jpg",
  },
};
