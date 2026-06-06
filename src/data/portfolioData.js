// ==========================================
// PORTFOLIO DATA — Edit this file to customize your entire portfolio
// ==========================================

export const personalInfo = {
  name: "Smruti Ranjan Parhi",
  firstName: "Smruti",
  roles: [
    "Full Stack Developer",
    "Software Developer",
    "ML Enthusiast",
    "Problem Solver",
  ],
  tagline: "Building digital experiences that make a difference",
  bio: `I'm a passionate Full Stack Developer and Computer Science student at KL University, 
        Hyderabad. With a strong foundation in modern web technologies and machine learning, 
        I love turning ideas into elegant, functional applications. From AI-powered farmer 
        advisory systems to gamified learning platforms — I build solutions that matter.`,
  aboutDetailed: `My journey in tech started with curiosity and has evolved into a deep passion 
        for building impactful digital solutions. I've built and deployed 10+ web and ML projects, 
        from full-stack applications using React and Node.js to intelligent systems powered by 
        Python and Scikit-learn.
        
        I believe in writing clean, maintainable code and continuously learning new technologies 
        to stay at the cutting edge. When I'm not coding, you'll find me exploring AI/ML concepts, 
        designing responsive UI/UX in Figma, or solving DSA problems on competitive platforms.`,
  email: "smrutiparhi81@gmail.com",
  phone: "+91 7735074703",
  location: "Hyderabad, India",
  resumeUrl: "/Smruti_Ranjan_Parhi_CV (4).pdf",
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
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const stats = [
  { number: "10+", label: "Projects Deployed" },
  { number: "20+", label: "Mini Projects" },
  { number: "8.91", label: "CGPA" },
  { number: "500+", label: "CodeChef Rating" },
];

export const skillCategories = [
  {
    title: "Frontend",
    icon: "FaCode",
    skills: [
      { name: "HTML5", icon: "FaHtml5", color: "#E34F26" },
      { name: "CSS3", icon: "FaCss3Alt", color: "#1572B6" },
      { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" },
      { name: "React.js", icon: "FaReact", color: "#61DAFB" },
    ],
  },
  {
    title: "Backend & Languages",
    icon: "FaServer",
    skills: [
      { name: "Node.js", icon: "FaNodeJs", color: "#339933" },
      { name: "Java", icon: "FaJava", color: "#ED8B00" },
      { name: "Python", icon: "FaPython", color: "#3776AB" },
      { name: "C/C++", icon: "SiCplusplus", color: "#00599C" },
    ],
  },
  {
    title: "Concepts & CS",
    icon: "FaDatabase",
    skills: [
      { name: "DSA", icon: "FaPlug", color: "#FF6C37" },
      { name: "OOP", icon: "FaCubes", color: "#8b5cf6" },
      { name: "DBMS", icon: "FaDatabase", color: "#4479A1" },
      { name: "Operating Systems", icon: "FaServer", color: "#47A248" },
    ],
  },
  {
    title: "Tools & Design",
    icon: "FaTools",
    skills: [
      { name: "Git & GitHub", icon: "FaGitAlt", color: "#F05032" },
      { name: "Figma", icon: "FaFigma", color: "#F24E1E" },
      { name: "VS Code", icon: "SiVisualstudiocode", color: "#007ACC" },
      { name: "Canva", icon: "FaPaintBrush", color: "#00C4CC" },
      { name: "Adobe Premiere", icon: "FaFilm", color: "#9999FF" },
    ],
  },
];

export const projects = [
  {
    id: 2,
    number: "01",
    category: "Academic • Gamified Web",
    name: "Arcade Learn",
    title: "Arcade Learn — Gamified Learning",
    description:
      "An interactive gamified learning web platform with responsive UI, progress tracking, and engaging educational content designed to make learning fun.",
    liveUrl: "https://github.com/smrutiparhi/arcade-learn",
    github: "https://github.com/smrutiparhi/arcade-learn",
    col1Image1: "/arcade_learn.png",
    col1Image2: "/arcade_learn.png",
    col2Image: "/arcade_learn.png",
    tags: ["React", "JavaScript", "CSS", "HTML"],
    featured: true,
  },
  {
    id: 1,
    number: "02",
    category: "Academic • AI & Web",
    name: "KrishiMitra",
    title: "KrishiMitra — AI Farmer Support",
    description:
      "An AI-based farmer advisory platform with crop recommendation, disease alerts, and market price prediction powered by machine learning algorithms.",
    liveUrl: "https://github.com/smrutiparhi/krishimitra",
    github: "https://github.com/smrutiparhi/krishimitra",
    col1Image1: "/krishi_dashboard.png",
    col1Image2: "/krishi_disease.png",
    col2Image: "/krishi_dashboard.png",
    tags: ["Python", "ML", "Scikit-learn", "React"],
    featured: true,
  },
  {
    id: 3,
    number: "03",
    category: "Academic • Health & ML",
    name: "Heart Risk AI",
    title: "Heart Disease Prediction System",
    description:
      "Machine learning-based health risk prediction system using Python and Scikit-learn. Analyzes patient data to predict heart disease probability with high accuracy.",
    liveUrl: "https://github.com/smrutiparhi/heart-disease-prediction",
    github: "https://github.com/smrutiparhi/heart-disease-prediction",
    col1Image1: "/heart_disease.png",
    col1Image2: "/heart_disease.png",
    col2Image: "/heart_disease.png",
    tags: ["Python", "Scikit-learn", "ML", "Data Science"],
    featured: true,
  },
  {
    id: 4,
    number: "04",
    category: "Academic • NLP & AI",
    name: "News Summarizer",
    title: "60-Second AI News Summarizer",
    description:
      "An AI-powered tool that converts long news articles into concise 60-second summaries, making it easy to stay informed on the go.",
    liveUrl: "https://github.com/smrutiparhi/news-summarizer",
    github: "https://github.com/smrutiparhi/news-summarizer",
    col1Image1: "/news_summarizer.png",
    col1Image2: "/news_summarizer.png",
    col2Image: "/news_summarizer.png",
    tags: ["Python", "AI", "NLP", "API"],
    featured: true,
  },
];

export const experience = [
  {
    id: 1,
    type: "work",
    title: "Full Stack Web Development Intern",
    organization: "Future Interns",
    duration: "2026 – Present",
    description:
      "Working on real-world web development projects including professional portfolio websites, full-stack applications, and collaborative tools using modern tech stack.",
    skills: ["React", "Node.js", "JavaScript", "Git"],
  },
  {
    id: 2,
    type: "work",
    title: "Software Developer — Projects & Contributions",
    organization: "Freelance / Academic Projects",
    duration: "2024 – Present",
    description:
      "Built full-stack and frontend apps using HTML, CSS, JavaScript, React, and Node.js. Developed KrishiMitra (AI farmer advisory) and Arcade Learn (gamified learning platform).",
    skills: ["React", "Python", "ML", "Node.js"],
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    institution: "Koneru Lakshmaiah University, Hyderabad",
    duration: "2022 – 2026",
    description:
      "CGPA: 8.91 — Focused on DSA, OOP, DBMS, Operating Systems, and modern web development.",
  },
  {
    id: 2,
    degree: "Class XII",
    field: "Science Stream",
    institution: "ODM International School, Bhubaneswar",
    duration: "2020 – 2022",
    description: "Scored 71.2% — Strong foundation in Mathematics and Science.",
  },
  {
    id: 3,
    degree: "Class X",
    field: "General Education",
    institution: "St. Xavier's High School, Bhadrak",
    duration: "2018 – 2020",
    description: "Scored 78.2% — Developed early interest in computers and problem-solving.",
  },
];

export const certifications = [
  "Operating Systems Basics",
  "Git & GitHub",
  "Responsive Web Design",
  "HTML Tutorial",
  "Java (Basic)",
  "Advance Automation Professional",
];

export const contactConfig = {
  // EmailJS configuration — replace with your own keys
  serviceId: "YOUR_EMAILJS_SERVICE_ID",
  templateId: "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: "YOUR_EMAILJS_PUBLIC_KEY",
};
