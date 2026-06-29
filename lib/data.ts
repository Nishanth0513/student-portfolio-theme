import type {
  Certification,
  ContactInfo,
  EducationItem,
  ExperienceItem,
  NavLink,
  Project,
  SkillCategory,
} from "@/types";

export const siteConfig = {
  name: "G. Nishanth Reddy",
  title: "G. Nishanth Reddy | Full Stack Developer",
  description:
    "Information Technology undergraduate and Full Stack Developer building scalable web applications with React, Node.js, and modern web technologies.",
  url: "https://nishanthreddy.dev",
  ogImage: "/og-image.png",
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const heroRoles = [
  "Information Technology Undergraduate",
  "Full Stack Developer",
];

export const floatingTechIcons = [
  { name: "React", color: "#61DAFB" },
  { name: "Node.js", color: "#339933" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Git", color: "#F05032" },
  { name: "Tailwind", color: "#06B6D4" },
  { name: "Framer Motion", color: "#7C3AED" },
];

export const aboutSummary = [
  "Information Technology undergraduate at Vasavi College of Engineering with hands-on experience in Full Stack Web Development using React.js, Node.js, Express.js, JavaScript, MongoDB, and SQL.",
  "Built scalable applications during a professional internship and developed real-world projects applying Data Structures & Algorithms.",
  "Passionate about solving engineering problems, learning modern technologies, and building impactful software products.",
];

export const education: EducationItem[] = [
  {
    institution: "Vasavi College of Engineering",
    degree: "Bachelor of Technology",
    field: "Information Technology",
    score: "CGPA: 8.49",
    period: "2023 – Present",
    coursework: [
      "Data Structures",
      "Algorithms",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
  {
    institution: "Sri Chaitanya Junior College",
    degree: "Intermediate",
    field: "96.6%",
    period: "2021 – 2023",
  },
  {
    institution: "Sri Chaitanya Techno Curriculum",
    degree: "SSC",
    field: "GPA: 10",
    period: "2020 – 2021",
  },
];

export const experience: ExperienceItem[] = [
  {
    title: "Web Development Intern",
    company: "Nirvaha",
    period: "April 2025 – May 2025",
    responsibilities: [
      "Built responsive web applications using React.js and Node.js",
      "Developed reusable frontend components",
      "Optimized backend APIs",
      "Worked in Agile teams",
      "Used Git and REST APIs",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "ez-toll",
    title: "EZ-TOLL",
    subtitle: "Smart Traffic Management System",
    description:
      "A traffic management system that prioritizes emergency vehicles and optimizes route calculations using graph algorithms.",
    features: [
      "Emergency vehicle prioritization",
      "Dijkstra Algorithm",
      "Merge Sort",
      "Graph Theory",
      "Reduced commute time by 15%",
    ],
    tech: ["C", "Data Structures", "Algorithms", "Graph Theory"],
    github: "https://github.com/Nishanth0513",
    gradient: "from-blue-600 via-cyan-500 to-violet-600",
  },
  {
    id: "farmflow",
    title: "FarmFlow",
    subtitle: "Dairy Farmer Marketplace",
    description:
      "Marketplace connecting dairy farmers and consumers with authentication, CRUD operations, and responsive UI.",
    features: [
      "MERN Stack",
      "Authentication",
      "CRUD",
      "REST APIs",
      "Responsive UI",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "JavaScript"],
    github: "https://github.com/Nishanth0513",
    live: "https://github.com/Nishanth0513",
    gradient: "from-emerald-600 via-teal-500 to-cyan-600",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "JavaScript", "HTML5", "CSS3"],
    level: 85,
  },
  {
    title: "Frontend",
    skills: ["React", "Tailwind CSS", "Framer Motion"],
    level: 90,
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js"],
    level: 82,
  },
  {
    title: "Database",
    skills: ["MongoDB", "SQL"],
    level: 78,
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code"],
    level: 88,
  },
  {
    title: "Core Concepts",
    skills: [
      "Data Structures",
      "Algorithms",
      "Graph Theory",
      "REST APIs",
      "OOP",
    ],
    level: 86,
  },
];

export const certifications: Certification[] = [
  {
    provider: "Cisco Networking Academy",
    courses: ["Introduction to Cybersecurity", "Introduction to Networks"],
  },
];

export const contactInfo: ContactInfo = {
  email: "nishanthreddy0513@gmail.com",
  phone: "+91 98765 43210",
  linkedin: "https://www.linkedin.com/in/g-nishanthreddy",
  github: "https://github.com/Nishanth0513",
  resumeUrl: "/resume.pdf",
  portfolioRepo: "https://github.com/Nishanth0513/student-portfolio-theme",
};
