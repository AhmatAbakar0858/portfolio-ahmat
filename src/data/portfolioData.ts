// Portfolio data - In production, this would come from the database via Lovable Cloud
import projectNetwork from "@/assets/project-network.jpg";
import projectMaintenance from "@/assets/project-maintenance.jpg";

export const profileData = {
  name: "AHMAT ABAKAR BEGUELE",
  title: "Administrateur Systèmes & Réseaux Junior",
  bio: "Passionné par l'administration des systèmes et réseaux, je suis un professionnel motivé et rigoureux, toujours prêt à relever de nouveaux défis. Fort de mon expérience en support informatique et de ma formation à l'ENASTIC, je m'investis pleinement dans chaque projet pour apporter des solutions efficaces et innovantes.",
  email: "ahmatabakar0858@gmail.com",
  phone1: "(00235) 68 74 86 74",
  phone2: "(00235) 93 52 75 59",
  location: "Tchad",
  cvUrl: "#",
  profileImage: "",
};

export const skillCategories = [
  {
    id: "bureautique",
    name: "Bureautique",
    icon: "FileText",
    skills: [
      { name: "Microsoft Word", level: 90 },
      { name: "Microsoft Excel", level: 85 },
      { name: "Microsoft PowerPoint", level: 90 },
      { name: "Microsoft Publisher", level: 80 },
      { name: "Microsoft Access", level: 70 },
      { name: "Microsoft Outlook", level: 85 },
    ],
  },
  {
    id: "systemes",
    name: "Systèmes d'exploitation",
    icon: "Monitor",
    skills: [
      { name: "Windows", level: 85 },
      { name: "Linux", level: 80 },
      { name: "MacOS", level: 50 },
    ],
  },
  {
    id: "programmation",
    name: "Programmation",
    icon: "Code",
    skills: [
      { name: "HTML/CSS", level: 60 },
      { name: "Python", level: 45 },
      { name: "C/C++", level: 40 },
    ],
  },
  {
    id: "infographie",
    name: "Infographie",
    icon: "Palette",
    skills: [
      { name: "Adobe Photoshop", level: 80 },
    ],
  },
];

export const languages = [
  { name: "Français", level: "Bien parlé", proficiency: 85 },
  { name: "Arabe tchadien", level: "Bien parlé", proficiency: 90 },
  { name: "Anglais", level: "Débutant", proficiency: 30 },
];

export const education = [
  {
    id: 1,
    type: "education",
    title: "Étudiant en Administration Systèmes & Réseaux",
    institution: "ENASTIC (Antenne d'Amdjarass)",
    period: "2023 - Présent",
    description: "Formation approfondie en administration des systèmes informatiques, réseaux et sécurité.",
  },
  {
    id: 2,
    type: "education",
    title: "Baccalauréat Série D",
    institution: "Enseignement secondaire",
    period: "2023",
    description: "Diplôme de fin d'études secondaires, série scientifique.",
  },
  {
    id: 3,
    type: "education",
    title: "BEF (Brevet d'Études du Premier Cycle)",
    institution: "Enseignement secondaire",
    period: "2020",
    description: "Brevet de fin du premier cycle de l'enseignement secondaire.",
  },
];

export const certifications = [
  {
    id: 1,
    title: "Formation en Informatique Bureautique",
    institution: "Cyber Altamira Informatique",
    year: "2020-2022",
    description: "Formation complète sur les outils bureautiques Microsoft Office.",
  },
  {
    id: 2,
    title: "Attestation Bureautique & Infographie",
    institution: "Altamira Informatique",
    year: "2022",
    description: "Certification des compétences en bureautique et création graphique.",
  },
];

export const experiences = [
  {
    id: 1,
    title: "Technicien Informatique",
    company: "Cyber Altamira Informatique",
    period: "11/12/2020 - 23/11/2022",
    location: "Tchad",
    tasks: [
      "Gestion des postes informatiques",
      "Assistance technique aux clients",
      "Maintenance logicielle de base",
      "Services d'impression et de saisie",
      "Formation des utilisateurs aux outils bureautiques",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Configuration Réseau Local",
    summary: "Mise en place d'un réseau local pour un cybercafé",
    image: projectNetwork,
    technologies: ["Windows Server", "Active Directory", "TCP/IP"],
    context: "Dans le cadre de mon travail au cyber Altamira, j'ai participé à la configuration et maintenance du réseau local.",
    objectives: [
      "Configurer un réseau stable et performant",
      "Assurer la connectivité de tous les postes",
      "Mettre en place un système de partage de fichiers",
    ],
    tasks: [
      "Installation et configuration du routeur",
      "Configuration des adresses IP statiques",
      "Mise en place du partage de fichiers et d'imprimantes",
      "Tests de connectivité et dépannage",
    ],
    results: "Réseau opérationnel permettant le partage de ressources entre 10 postes avec une connexion Internet stable.",
  },
  {
    id: 2,
    title: "Maintenance Système",
    summary: "Maintenance préventive et corrective des postes clients",
    image: projectMaintenance,
    technologies: ["Windows 10", "Antivirus", "Outils de diagnostic"],
    context: "Maintenance régulière des ordinateurs du cybercafé pour garantir leur bon fonctionnement.",
    objectives: [
      "Assurer la disponibilité des postes",
      "Prévenir les pannes et dysfonctionnements",
      "Optimiser les performances",
    ],
    tasks: [
      "Nettoyage système et suppression des fichiers temporaires",
      "Mise à jour des logiciels et de l'antivirus",
      "Vérification de l'intégrité du disque dur",
      "Sauvegarde des données importantes",
    ],
    results: "Réduction des pannes de 70% et amélioration notable des performances des postes.",
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "Introduction à l'administration Linux",
    excerpt: "Découvrez les bases de l'administration système sous Linux : commandes essentielles, gestion des utilisateurs et permissions.",
    category: "Linux & Windows",
    date: "2024-01-15",
    content: "",
    image: "",
  },
  {
    id: 2,
    title: "Les fondamentaux des réseaux TCP/IP",
    excerpt: "Comprendre le modèle TCP/IP, les adresses IP, le routage et les protocoles de communication.",
    category: "Réseaux & Systèmes",
    date: "2024-01-10",
    content: "",
    image: "",
  },
  {
    id: 3,
    title: "Optimiser son workflow avec Excel",
    excerpt: "Astuces et formules avancées pour améliorer votre productivité avec Microsoft Excel.",
    category: "Bureautique",
    date: "2024-01-05",
    content: "",
    image: "",
  },
];

export const blogCategories = [
  "Réseaux & Systèmes",
  "Linux & Windows",
  "Programmation",
  "Bureautique",
  "Infographie",
  "Vie d'étudiant",
];

export const socialLinks = [
  { id: 1, platform: "LinkedIn", url: "#", icon: "Linkedin" },
  { id: 2, platform: "GitHub", url: "#", icon: "Github" },
  { id: 3, platform: "Facebook", url: "#", icon: "Facebook" },
  { id: 4, platform: "X (Twitter)", url: "#", icon: "Twitter" },
];

export const keySkillsBadges = [
  { name: "Bureautique", icon: "FileSpreadsheet" },
  { name: "Systèmes", icon: "Server" },
  { name: "Réseaux", icon: "Network" },
  { name: "Programmation", icon: "Code" },
  { name: "Infographie", icon: "Palette" },
];
