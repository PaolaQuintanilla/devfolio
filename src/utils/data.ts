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
// import PROJECT_IMG_6 from "../assets/images/project-6.png";
// import PROJECT_IMG_7 from "../assets/images/project-7.png";

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
      { name: "Node.js", level: 40, color: "bg-green-500" },
      { name: "C#", level: 60, color: "bg-gray-700" },
      { name: "Python", level: 30, color: "bg-yellow-500" },
      { name: "GraphQL", level: 40, color: "bg-pink-600" },
      { name: "REST APIs", level: 60, color: "bg-orange-500" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    description: "Managing and optimizing data storage",
    skills: [
      { name: "MongoDB", level: 50, color: "bg-green-600" },
      { name: "MySql", level: 60, color: "bg-blue-700" },
      { name: "Sql Server", level: 50, color: "bg-red-500" },
      { name: "Prisma", level: 30, color: "bg-indigo-600" },
      { name: "Firebase", level: 20, color: "bg-yellow-600" },
    ],
  },
  {
    title: "DevOps",
    icon: Cloud,
    description: "Deploying and scaling applications",
    skills: [
      {
        name: "Docker",
        level: 30,
        color: "bg-blue-600",
      },
      {
        name: "Vercel",
        level: 30,
        color: "bg-gray-900",
      },
      {
        name: "Git",
        level: 50,
        color: "bg-orange-700",
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
  "JavaScript",
  "Typescript",
  "HTML5",
  "CSS3",
  "Tailwind",
  "Webpack",
  "Vite",
  "Jest",
  "Figma",
  "Adobe XD",
  "Github",
  "Slack",
  "Sql",
  ".Net",
  "C#",
];

export const STATS = [
  // { number: "+", label: "Projects Completed" },
  { number: "4+", label: "Years Experience" },
  { number: "28+", label: "Technologies" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Church Info & Admin Portal",
    description:
      "Web app providing certificate generation, book catalog, and church leader directory. Deployed with Vercel for reliability and speed.",
    image: "PROJECT_IMG_1",
    tags: ["React", "Tailwind", "Formik", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
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
    id: 3,
    title: "Pharmacy Management System",
    description:
      "Application for managing pharmacy inventory and sales, built with React and C# for real-time product updates.",
    image: "PROJECT_IMG_3",
    tags: [".NET", "React", "C#", "MySQL"],
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
    image: "PROJECT_IMG_6",
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
    year: "2021",
    title: "Started Coding Journey",
    company: "Self-taught",
    description:
      "Began learning web development with HTML, CSS, and JavaScript. Built my first website and fell in love with coding",
    icon: "Code2",
    color: "bg-blue-500",
  },
  {
    year: "2022",
    title: "First Internship",
    company: "TechStart Inc.",
    description:
      "Joined as a frontend intern, working with React and learning modern development practices. Contributed to multiple client projects",
    icon: "Briefcase",
    color: "bg-green-500",
  },
  {
    year: "2022",
    title: "Computer Science Degree",
    company: "University of Technology",
    description:
      "Graduated with honors, specializing in web technologies and software engineering. Led the final year capstone project",
    icon: "GraduationCap",
    color: "bg-purple-500",
  },
  {
    year: "2023",
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    description:
      "Promoted to full-time developer role. Built end-to-end applications using MERN stack and led junior developers",
    icon: "Rocket",
    color: "bg-orange-500",
  },
  {
    year: "2024",
    title: "Freelance & Open Source",
    company: "Independent",
    description:
      "Started freelancing and contributing to open source projects. Launched 3 successful web applications",
    icon: "Award",
    color: "bg-pink-500",
  },
  {
    year: "2025",
    title: "Senior Developer",
    company: "Present",
    description:
      "Currently building innovative solutions and exploring new technologies like AI integration and advanced web architectures",
    icon: "Zap",
    color: "bg-cyan-500",
  },
];

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
