// ==========================================
// PORTFOLIO DATA — Edit this file to customize your entire portfolio
// ==========================================

export const personalInfo = {
  name: "Smruti Ranjan Parhi",
  firstName: "Smruti",
  roles: [
    "Full-Stack Developer",
    "Software Engineer",
    "TypeScript Developer",
    "Machine Learning Enthusiast",
  ],
  tagline: "Building production-grade, user-facing systems",
  bio: `Full-Stack Developer specializing in TypeScript, React.js, Node.js, and Express.js, with applied machine learning experience across 8+ shipped projects. I build production-grade, user-facing systems spanning REST APIs, real-time applications, and predictive modeling. Beyond development, I enjoy photography as a creative hobby, occasionally capturing interesting moments, people, and perspectives through my lens.`,
  aboutDetailed: `I work across the full development lifecycle, from responsive interfaces to secure APIs, databases, testing, and deployment. My recent work includes full-stack TypeScript systems, real-time applications, and machine learning products built for practical use cases.

        I bring a strong foundation in data structures and algorithms, object-oriented programming, DBMS, and operating systems. I am PCAP-certified in Python and enjoy turning complex requirements into reliable, maintainable software.`,
  email: "smrutiparhi81@gmail.com",
  phone: "+91 7735074703",
  location: "Hyderabad, India",
  resumeUrl: "./Smruti_Ranjan_Parhi_Resume.pdf",
  avatarUrl: null,
};

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/smrutiparhi",
    icon: "FaGithub",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/smruti-parhi",
    icon: "FaLinkedin",
  },
  {
    name: "Email",
    url: "mailto:smrutiparhi81@gmail.com",
    icon: "FaEnvelope",
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#experience" },
  { name: "Photography", href: "#photography" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const stats = [
  { number: "8+", label: "Projects Shipped" },
  { number: "5+", label: "Full-Stack Apps" },
  { number: "8.95", label: "CGPA" },
  { number: "102", label: "RecoverAI Tests" },
];

export const skillCategories = [
  {
    title: "Languages & Frontend",
    icon: "FaCode",
    skills: [
      { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
      { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" },
      { name: "React.js", icon: "FaReact", color: "#61DAFB" },
      { name: "HTML & CSS", icon: "FaHtml5", color: "#E34F26" },
    ],
  },
  {
    title: "Backend & Data",
    icon: "FaServer",
    skills: [
      { name: "Node.js", icon: "FaNodeJs", color: "#339933" },
      { name: "Express.js", icon: "SiExpress", color: "#FFFFFF" },
      { name: "PostgreSQL", icon: "SiPostgresql", color: "#4169E1" },
      { name: "SQLite", icon: "SiSqlite", color: "#003B57" },
    ],
  },
  {
    title: "Programming & ML",
    icon: "FaDatabase",
    skills: [
      { name: "Python", icon: "FaPython", color: "#3776AB" },
      { name: "Java", icon: "FaJava", color: "#ED8B00" },
      { name: "C", icon: "SiC", color: "#A8B9CC" },
      { name: "Scikit-learn", icon: "SiScikitlearn", color: "#F7931E" },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "FaTools",
    skills: [
      { name: "Git & GitHub", icon: "FaGitAlt", color: "#F05032" },
      { name: "Supabase", icon: "SiSupabase", color: "#3FCF8E" },
      { name: "WebSockets", icon: "FaPlug", color: "#8B5CF6" },
      { name: "GitHub Actions", icon: "FaGithub", color: "#FFFFFF" },
    ],
  },
];

export const projects = [
  {
    id: 1,
    number: "01",
    category: "Full Stack • AI Safety",
    name: "RecoverAI",
    title: "AI Recovery Coordinator for Lost or Stolen Phones",
    description:
      "A full-stack TypeScript recovery coordinator with a deterministic 17-input decision engine, dependency-aware actions, and a safety-constrained LLM agent. Built with React, Vite, Tailwind, Node.js, Express, and Supabase Postgres, and verified by 62 integration tests plus 40 engine scenarios.",
    github: "https://github.com/smrutiparhi",
    tags: ["TypeScript", "React", "Express", "Supabase", "LLM Safety"],
    accent: "#8B5CF6",
    featured: true,
  },
  {
    id: 2,
    number: "02",
    category: "AI • Machine Learning",
    name: "KrishiMitra",
    title: "KrishiMitra — AI Farmer Support",
    description:
      "An AI advisory system in Python with three machine-learning modules for crop recommendation, disease detection, and market price prediction.",
    github: "https://github.com/smrutiparhi/krishimitra",
    col1Image1: "./krishi_dashboard.png",
    col1Image2: "./krishi_disease.png",
    col2Image: "./krishi_dashboard.png",
    tags: ["Python", "Machine Learning", "Scikit-learn", "React"],
    featured: true,
  },
  {
    id: 3,
    number: "03",
    category: "Gamified Web",
    name: "Arcade Learn",
    title: "Interactive Learning Platform",
    description:
      "A gamified learning platform built with React.js, featuring a responsive user interface and interactive learning modules.",
    github: "https://github.com/smrutiparhi/arcade-learn",
    col1Image1: "./arcade_learn.png",
    col1Image2: "./arcade_learn.png",
    col2Image: "./arcade_learn.png",
    tags: ["React", "JavaScript", "CSS", "HTML"],
    featured: true,
  },
  {
    id: 4,
    number: "04",
    category: "Health • Machine Learning",
    name: "Heart Disease Prediction",
    title: "Cardiovascular Risk Classification",
    description:
      "A Scikit-learn classification project covering the full machine-learning pipeline from data cleaning and feature selection through model evaluation.",
    github: "https://github.com/smrutiparhi/heart-disease-prediction",
    col1Image1: "./heart_disease.png",
    col1Image2: "./heart_disease.png",
    col2Image: "./heart_disease.png",
    tags: ["Python", "Scikit-learn", "Predictive Modeling", "Data Analysis"],
    featured: true,
  },
  {
    id: 5,
    number: "05",
    category: "NLP • AI",
    name: "60-Second News Summarizer",
    title: "AI News Summarization",
    description:
      "An AI tool that condenses long-form news articles into a focused 60-second read using LLM-based text processing.",
    github: "https://github.com/smrutiparhi/news-summarizer",
    col1Image1: "./news_summarizer.png",
    col1Image2: "./news_summarizer.png",
    col2Image: "./news_summarizer.png",
    tags: ["Python", "LLM", "NLP", "API"],
    featured: true,
  },
  {
    id: 6,
    number: "06",
    category: "Full Stack • Real Time",
    name: "TaskFlow",
    title: "Task Management Application",
    description:
      "A full-stack task manager with JWT-secured authentication, complete CRUD workflows, and real-time multi-user synchronization through WebSockets.",
    github: "https://github.com/smrutiparhi",
    tags: ["React", "Node.js", "Express", "SQLite", "WebSockets"],
    accent: "#06B6D4",
    featured: true,
  },
  {
    id: 7,
    number: "07",
    category: "Full Stack • E-Commerce",
    name: "ShopNest",
    title: "E-Commerce Web Application",
    description:
      "A full-stack commerce platform spanning authentication, shopping cart, order management, and an administrative dashboard.",
    github: "https://github.com/smrutiparhi",
    tags: ["React", "Node.js", "Express", "JWT", "SQLite"],
    accent: "#EC4899",
    featured: true,
  },
  {
    id: 8,
    number: "08",
    category: "Full Stack • Publishing",
    name: "Blogosphere",
    title: "Full-Stack Blogging Platform",
    description:
      "A blogging platform with live Markdown preview, SQLite-backed engagement tracking, and automated deployment through GitHub Actions.",
    github: "https://github.com/smrutiparhi",
    tags: ["React", "Markdown", "SQLite", "CI/CD", "GitHub Actions"],
    accent: "#F59E0B",
    featured: true,
  },
];

export const experience = [
  {
    id: 1,
    type: "work",
    title: "Software Developer",
    organization: "Independent Projects",
    duration: "2024 - Present",
    description:
      "Engineered 5+ full-stack web applications using React.js, Node.js, and Express.js, including products integrated with machine-learning models. Owned the development lifecycle from design to deployment using REST APIs, responsive UI principles, and Git-based version control.",
    skills: ["React", "Node.js", "Express.js", "REST APIs", "Machine Learning"],
  },
  {
    id: 2,
    type: "work",
    title: "Full Stack Development Intern",
    organization: "Thiranex",
    duration: "Jun 2026 - Jul 2026",
    description:
      "Delivered production web application features across the frontend and backend of an active codebase within an Agile team. Applied Git-based version control, code review, and sprint workflows in a professional engineering environment.",
    skills: ["Full Stack", "Agile", "Git", "Code Review", "Sprint Workflows"],
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    institution: "Koneru Lakshmaiah University, Hyderabad",
    duration: "2022 - 2026",
    description:
      "CGPA: 8.95 - Focused on DSA, OOP, DBMS, operating systems, and modern full-stack development.",
  },
  {
    id: 2,
    degree: "Class XII",
    field: "Science Stream",
    institution: "ODM International School, Bhubaneswar",
    duration: "2020 - 2022",
    description: "Scored 71.2%.",
  },
  {
    id: 3,
    degree: "Class X",
    field: "General Education",
    institution: "St. Xavier's High School, Bhadrak",
    duration: "2018 - 2020",
    description: "Scored 78.2%.",
  },
];

export const certifications = [
  "PCAP - Certified Associate Python Programmer (PCAP-31-03)",
  "NVIDIA: Adding Knowledge to LLMs",
  "Automation Anywhere Certification",
  "AI Tools and ChatGPT Workshop - Be10x",
  "Introduction to Cybersecurity",
  "Operating Systems, Git and GitHub, and Web Development",
];

export const contactConfig = {
  // EmailJS configuration — replace with your own keys
  serviceId: "YOUR_EMAILJS_SERVICE_ID",
  templateId: "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: "YOUR_EMAILJS_PUBLIC_KEY",
};
