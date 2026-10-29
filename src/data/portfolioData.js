// ============================================
// PORTFOLIO DATA — Edit this file to customize
// ============================================

export const siteConfig = {
  brand: "雷默",
  heroHeading: "Welcome to My Portfolio",
  heroName: "I'm Reshallyn Mortel",
  heroSubtitle: "Creative Artist • Designer • Developer",
  description:
    "Welcome to my creative space, where art, design, and technology come together. Discover my artworks, digital projects, creative experiments, and the stories behind them.",

  established: "EST. 2026",
};

export const navLinks = [
  { label: "Home", href: "#home", icon: "fi fi-rr-home" },
  { label: "About", href: "#about", icon: "fi fi-rr-user" },
  { label: "Skills", href: "#skills", icon: "fi fi-rr-star" },
  { label: "Projects", href: "#projects", icon: "fi fi-rr-layers" },
  { label: "Gallery", href: "#gallery", icon: "fi fi-rr-picture" },
  { label: "Experience", href: "#experience", icon: "fi fi-rr-briefcase" },
  { label: "Process", href: "#process", icon: "fi fi-rr-bulb" },
  { label: "Contact", href: "#contact", icon: "fi fi-rr-envelope" },
];

export const aboutData = {
  heading: "Meet the Artist Behind the Archive.",
  name: "Reshallyn Mortel",
  bio: [
    "I'm Reshallyn Mortel — a creative soul passionate about bringing ideas to life through art and technology. My interests span across digital art, traditional drawing, sculpting, crafting, and the worlds of realism and semi-realism.",
    "I believe in the beauty of handmade and digital creation alike. Whether I'm sketching with pencil on paper, sculpting a figure, crafting something tangible, or building a digital experience with code — every project is an opportunity to explore, learn, and grow.",
    "This archive is my personal creative space — a place to share my journey, experiments, and the stories behind each piece.",
  ],
  interests: [
    { label: "Digital Art", icon: "fi fi-rr-palette" },
    { label: "Traditional Drawing", icon: "fi fi-rr-pencil" },
    { label: "Sculpting", icon: "fi fi-rr-cube" },
    { label: "Crafting", icon: "fi fi-rr-scissors" },
    { label: "Realism", icon: "fi fi-rr-eye" },
    { label: "Semi-Realism", icon: "fi fi-rr-paint-brush" },
  ],
  portrait: "/images/portrait-placeholder.jpg",
};

export const skillsData = {
  creative: [
    { name: "Digital Art", icon: "fi fi-rr-palette", level: 85 },
    { name: "Traditional Drawing", icon: "fi fi-rr-pencil", level: 90 },
    { name: "Sculpting", icon: "fi fi-rr-cube", level: 75 },
    { name: "Crafting", icon: "fi fi-rr-scissors", level: 80 },
    { name: "Realism", icon: "fi fi-rr-eye", level: 82 },
    { name: "Semi-Realism", icon: "fi fi-rr-paint-brush", level: 88 },
  ],
  technical: [
    { name: "HTML", icon: "fi fi-rr-code", level: 90 },
    { name: "CSS", icon: "fi fi-rr-layout-fluid", level: 88 },
    { name: "JavaScript", icon: "fi fi-rr-globe", level: 82 },
    { name: "React", icon: "fi fi-rr-rocket", level: 78 },
    { name: "Java 21", icon: "fi fi-rr-coffee", level: 75 },
    { name: "UI/UX Design", icon: "fi fi-rr-picture", level: 80 },
  ],
};

export const projectsData = [
  {
    id: 1,
    title: "Sample Project One",
    description: "This is a placeholder project. Replace with your actual project details, description, and thumbnail image.",
    tags: ["React", "CSS", "JavaScript"],
    category: "web",
    image: "/images/project-placeholder-1.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Sample Project Two",
    description: "This is a placeholder project. Replace with your actual project details, description, and thumbnail image.",
    tags: ["Java 21", "Spring Boot", "REST API"],
    category: "web",
    image: "/images/project-placeholder-2.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Sample Project Three",
    description: "This is a placeholder project. Replace with your actual project details, description, and thumbnail image.",
    tags: ["UI/UX", "Figma", "Prototyping"],
    category: "design",
    image: "/images/project-placeholder-3.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "Sample Project Four",
    description: "This is a placeholder project. Replace with your actual project details, description, and thumbnail image.",
    tags: ["Digital Art", "Illustration"],
    category: "art",
    image: "/images/project-placeholder-4.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "Sample Project Five",
    description: "This is a placeholder project. Replace with your actual project details, description, and thumbnail image.",
    tags: ["HTML", "CSS", "Responsive"],
    category: "web",
    image: "/images/project-placeholder-5.jpg",
    link: "#",
  },
  {
    id: 6,
    title: "Sample Project Six",
    description: "This is a placeholder project. Replace with your actual project details, description, and thumbnail image.",
    tags: ["Branding", "Typography"],
    category: "design",
    image: "/images/project-placeholder-6.jpg",
    link: "#",
  },
];

export const galleryData = [
  { id: 1, title: "Digital Artwork Sample", category: "digital", image: "/images/gallery-placeholder-1.jpg" },
  { id: 2, title: "Pencil Portrait Study", category: "traditional", image: "/images/gallery-placeholder-2.jpg" },
  { id: 3, title: "Clay Sculpture", category: "sculpture", image: "/images/gallery-placeholder-3.jpg" },
  { id: 4, title: "Handmade Craft Piece", category: "craft", image: "/images/gallery-placeholder-4.jpg" },
  { id: 5, title: "Realism Portrait", category: "portrait", image: "/images/gallery-placeholder-5.jpg" },
  { id: 6, title: "Character Sketch", category: "sketch", image: "/images/gallery-placeholder-6.jpg" },
  { id: 7, title: "Digital Illustration", category: "digital", image: "/images/gallery-placeholder-7.jpg" },
  { id: 8, title: "Figure Drawing", category: "traditional", image: "/images/gallery-placeholder-8.jpg" },
  { id: 9, title: "Mixed Media Craft", category: "craft", image: "/images/gallery-placeholder-9.jpg" },
];

export const experienceData = [
  {
    year: "Present",
    title: "Education Milestone",
    company: "Your School / University",
    description: "Add your current education details here — degree, major, relevant coursework, or academic achievements.",
    type: "education",
    icon: "fi fi-rr-graduation-cap",
  },
  {
    year: "2024",
    title: "Certification or Course",
    company: "Platform / Institution",
    description: "Add any certifications, online courses, workshops, or training programs you've completed.",
    type: "certification",
    icon: "fi fi-rr-diploma",
  },
  {
    year: "2023",
    title: "Relevant Experience",
    company: "Organization / Self-Directed",
    description: "Add internships, volunteer work, freelance projects, school projects, or any relevant creative experience.",
    type: "experience",
    icon: "fi fi-rr-briefcase",
  },
  {
    year: "2022",
    title: "Achievement or Milestone",
    company: "Context",
    description: "Add competitions, exhibitions, published work, awards, or other noteworthy achievements.",
    type: "achievement",
    icon: "fi fi-rr-trophy",
  },
];

export const processSteps = [
  { step: "01", title: "Inspiration", description: "Every creation begins with a spark — a reference photo, a feeling, a story, or a concept that captures my imagination.", icon: "fi fi-rr-lightbulb" },
  { step: "02", title: "Sketching", description: "Rough sketches and thumbnails help me explore compositions, proportions, and ideas before committing to details.", icon: "fi fi-rr-pencil" },
  { step: "03", title: "Drafting", description: "Refining the sketch into a cleaner draft — establishing linework, structure, values, and the foundation for the final piece.", icon: "fi fi-rr-marker" },
  { step: "04", title: "Rendering", description: "Adding color, shading, texture, and depth — whether digitally or with traditional media — to bring the piece to life.", icon: "fi fi-rr-palette" },
  { step: "05", title: "Final Touches", description: "Polishing details, adjusting contrasts, and making final refinements until the piece feels complete and ready to share.", icon: "fi fi-rr-star" },
];

// ============================================
// SOCIAL LINKS
// Update the URLs below with your actual profiles.
// Use mailto: for email. Leave as placeholders until ready.
// ============================================
export const socialLinks = [
  { name: "Instagram", url: "https://www.instagram.com/aniwata_/", icon: "instagram-icon", uicon: "fi fi-brands-instagram" },
  { name: "Facebook", url: "https://www.facebook.com/aniwatashang", icon: "facebook-icon", uicon: "fi fi-brands-facebook" },
  { name: "Email", url: "reshangmortel@gmail.com", icon: "email-icon", uicon: "fi fi-rr-envelope" },
  { name: "GitHub", url: "https://github.com/reshang-shalalayohoo", icon: "github-icon", uicon: "fi fi-brands-github" },
];
