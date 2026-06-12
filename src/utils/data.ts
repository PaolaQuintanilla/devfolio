import {
  Code2,
  // GraduationCap,
  // Briefcase,
  // Award,
  // Rocket,
  // Heart,
  // Coffee,
  // BookOpen,
  // Zap,
  Database,
  Server,
  Cloud,
  // Mail,
  // MapPin,
  // Phone,
} from "lucide-react";

// import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

// import PROJECT_IMG_1 from "../assets/images/project-1.png";
// import PROJECT_IMG_2 from "../assets/images/project-2.png";
// import PROJECT_IMG_3 from "../assets/images/project-3.png";
// import PROJECT_IMG_4 from "../assets/images/project-4.png";
// import PROJECT_IMG_5 from "../assets/images/project-5.png";
// import PROJECT_IMG_6 from "../assets/images/schoolManagement.png";
// import PROJECT_IMG_7 from "../assets/images/project-7.png";

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  category: string;
};

export const SKILLS_CATEGORY = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Crafting beautiful, responsive user interfaces",
    skills: [
      { name: "React", level: 60, color: "bg-blue-500" },
      { name: "TypeScript", level: 60, color: "bg-blue-600" },
      { name: "Formik", level: 50, color: "bg-gray-700" },
      { name: "Tailwind CSS", level: 50, color: "bg-cyan-500" },
      { name: "Framer Motion", level: 30, color: "bg-pink-500" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Building robust server-side solutions",
    skills: [
      { name: "C#", level: 60, color: "bg-gray-700" },
      { name: ".NET Core", level: 60, color: "bg-purple-700" },
      { name: "NestJS", level: 40, color: "bg-red-600" },
      { name: "GraphQL", level: 40, color: "bg-pink-600" },
      { name: "REST APIs", level: 60, color: "bg-orange-500" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    description: "Managing and optimizing data storage",
    skills: [
      { name: "SQL Server", level: 60, color: "bg-red-500" },
      { name: "MySQL", level: 60, color: "bg-blue-700" },
      { name: "MongoDB", level: 50, color: "bg-green-600" },
      { name: "Entity Framework", level: 55, color: "bg-violet-600" },
      { name: "Prisma", level: 30, color: "bg-indigo-600" },
    ],
  },
  {
    title: "DevOps",
    icon: Cloud,
    description: "Deploying and scaling applications",
    skills: [
      {
        name: "AWS",
        level: 45,
        color: "bg-amber-600",
      },
      {
        name: "Git",
        level: 60,
        color: "bg-orange-700",
      },
      {
        name: "Docker",
        level: 30,
        color: "bg-blue-600",
      },
      {
        name: "CI/CD",
        level: 40,
        color: "bg-purple-600",
      },
    ],
  },
];

export const TECH_STACK = [
  "C#",
  ".NET",
  "ASP.NET Core",
  "TypeScript",
  "React",
  "Next.js",
  "Redux",
  "tRPC",
  "Prisma",
  "Entity Framework",
  "GraphQL",
  "Vitest",
  "Playwright",
  "Jest",
  "XUnit",
  "Crystal Reports",
  "Swagger",
  "Figma",
  "Jira",
  "Git",
];

export const STATS = [
  { number: "5+", label: "Years Experience" },
  { number: "5+", label: "Projects Delivered" },
  { number: "28+", label: "Technologies" },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Church Info & Admin Portal",
    description:
      "Web app providing certificate generation, book catalog, and church leader directory. Deployed with Vercel for reliability and speed.",
    image: "PROJECT_IMG_1",
    tags: ["React", "Tailwind", "Formik", "Vercel"],
    liveUrl: "https://mission-bolivia.vercel.app/",
    githubUrl: "#",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 2,
    title: "MT ERP System",
    description:
      "ERP-style system for a tech import company, featuring complex forms, filters, routing, and integrated backend with GraphQL.",
    image: "PROJECT_IMG_2",
    tags: [
      "React",
      "TypeScript",
      "Formik",
      "Redux",
      "NestJS",
      "GraphQL",
      "MongoDB",
      "AWS",
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 4,
    title: "Check Management System (Jalasoft)",
    description:
      "Managed and printed PDF checks using Crystal Reports. Developed data processing and reporting systems for client financials.",
    image: "PROJECT_IMG_4",
    tags: [
      ".NET",
      "ASP.NET",
      "React.js",
      "SQL Server",
      "C#",
      "Crystal Reports",
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Backend",
  },
  {
    id: 5,
    title: "TeamUp Resume Microservice",
    description:
      "Microservice for engineers to showcase skills and connect with companies. Built with layered .NET architecture and React frontend.",
    image: "PROJECT_IMG_5",
    tags: [".NET", "C#", "SQL Server", "React", "Jest", "Material UI"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 6,
    title: "School Genesis Platform",
    description:
      "Educational management platform for schools, featuring teacher, student, and parent modules, designed with .NET microservices.",
    image: "",
    tags: [
      ".NET",
      "C#",
      "SQL Server",
      "Rest API",
      "Swagger",
      "AdobeXD",
      "Verdaccio",
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Full Stack",
  },
  // {
  //   id: 1,
  //   title: "E-Commerce Platform",
  //   description:
  //     "A full-stack e-commerce solution with advanced filtering, payment integration, and real-time inventory",
  //   image: "PROJECT_IMG_1",
  //   tags: ["React", "Tailwind", "Framer motion"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   featured: false,
  //   category: "Full Stack",
  // },
  // {
  //   id: 2,
  //   title: "Blog App with AI Post Generator",
  //   description:
  //     "A full-stack blog app using the MERN stack - with full Markdown support, tag filtering, and an integrated AI generator",
  //   image: "PROJECT_IMG_2",
  //   tags: ["React", "Node.js", "MongoDB", "Tailwind"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   featured: false,
  //   category: "Full Stack",
  // },
  // {
  //   id: 3,
  //   title: "Task Management App",
  //   description:
  //     "Collaborative project management tool with real-time updates, team chat, and advanced analytics dashboard",
  //   image: "PROJECT_IMG_3",
  //   tags: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
  //   liveUrl: "https://youtu.be/fZK57PxKC-8",
  //   githubUrl: "#",
  //   featured: true,
  //   category: "Web App",
  // },
  // {
  //   id: 4,
  //   title: "AI-Powered Interview Prep App",
  //   description:
  //     "A smart AI-powered Interview Preparation App using the MERN stack - along with the Gemini API for interactive interaction",
  //   image: "PROJECT_IMG_4",
  //   tags: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
  //   liveUrl: "https://youtu.be/yKB90yM-a0d",
  //   githubUrl: "#",
  //   featured: false,
  //   category: "Web App",
  // },
  // {
  //   id: 5,
  //   title: "Resume Builder App",
  //   description:
  //     "A fully functional Resume Builder App using the MERN stack along with Tailwind CSS for a clean, modern interface",
  //   image: "PROJECT_IMG_5",
  //   tags: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
  //   liveUrl: "https://youtu.be/q3u_fpkjLk8",
  //   githubUrl: "#",
  //   featured: false,
  //   category: "Web App",
  // },
  // {
  //   id: 6,
  //   title: "Expense Tracker App",
  //   description:
  //     "This app includes user authentication with JWT, income and expense tracking, interactive charts, and data visualization",
  //   image: "PROJECT_IMG_6",
  //   tags: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
  //   liveUrl: "https://youtu.be/PQmbtnsYUh0",
  //   githubUrl: "#",
  //   featured: true,
  //   category: "Web App",
  // },
];

export const JOURNEY_STEPS = [
  {
    year: "2018",
    title: "Computer Engineering Degree",
    company: "San Simón University",
    description:
      "Graduated in Computer Engineering, building a strong foundation in software design, databases, and object-oriented programming.",
    icon: "GraduationCap",
    color: "bg-purple-500",
  },
  {
    year: "2019",
    title: "Full Stack Developer",
    company: "JHorizon",
    description:
      "Built School Genesis, a school management platform, using a .NET microservice architecture with C#, Entity Framework, and ASP.NET Core Web APIs documented with Swagger.",
    icon: "Code2",
    color: "bg-blue-500",
  },
  {
    year: "2021",
    title: "Backend & Frontend Developer",
    company: "Jalasoft",
    description:
      "Developed and maintained web applications with .NET, C#, and React.js. Built check-generation systems with Crystal Reports and optimized SQL Server stored procedures.",
    icon: "Briefcase",
    color: "bg-green-500",
  },
  {
    year: "2023",
    title: "Freelance Software Developer",
    company: "Independent",
    description:
      "Designed and delivered a pharmacy management application with React, C#, and MySQL, enabling real-time inventory and sales tracking.",
    icon: "Rocket",
    color: "bg-orange-500",
  },
  {
    year: "2024",
    title: "Frontend Developer",
    company: "MagicTechnology",
    description:
      "Built the MT ERP system for a tech-import company using React, TypeScript, Formik, and Redux, with a NestJS + GraphQL backend over MongoDB.",
    icon: "Award",
    color: "bg-pink-500",
  },
  {
    year: "2025",
    title: "Backend & Frontend Developer",
    company: "PostReminder",
    description:
      "Building scalable, type-safe web applications with Next.js, tRPC, and Prisma, backed by MySQL and tested end-to-end with Vitest and Playwright.",
    icon: "Zap",
    color: "bg-cyan-500",
  },
];

export const CONTACT_INFO = {
  email: "paola.quintanilla001@gmail.com",
  location: "Bolivia",
};

export const SOCIAL_LINKS = {
  github: "https://github.com/PaolaQuintanilla",
  linkedin: "https://www.linkedin.com/in/paola-q-910032207/",
};

export const PASSIONS = [
  {
    icon: "Heart",
    title: "User Experience",
    description: "Crafting intuitive interfaces that users love",
  },
  {
    icon: "Coffee",
    title: "Problem Solving",
    description: "Turning complex challenges into elegant solutions",
  },
  {
    icon: "BookOpen",
    title: "Continuous Learning",
    description: "Always exploring new technologies and best practices",
  },
];
