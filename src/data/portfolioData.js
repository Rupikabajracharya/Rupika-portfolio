const portfolioData = {
  owner: {
    name: 'Rupika Bajracharya',
    initials: 'RB',
    title: 'Designer & Creator',
    badge: '+ IT STUDENT · UI/UX DESIGN',
    tagline: 'Designing experiences, solving problems & creating impact',
    subtitle: 'Turning ideas into simple, user-friendly interfaces with creativity and purpose.',
    availabilityBadge: 'Currently Available',
  },

  nav: {
    logo: 'Rupika',
    links: [
      { label: 'Home',       href: '#home' },
      { label: 'About',      href: '#about' },
      { label: 'Skills',     href: '#skills' },
      { label: 'Experience', href: '#experience' },
      { label: 'Projects',   href: '#projects' },
      { label: 'Contact',    href: '#contact' },
    ],
  },

  about: {
    quote: 'Exploring design through simplicity and creativity',
    bio: "I'm a passionate UI/UX designer who believes that great design is not just about how things look — it's about how they feel and work. I strive to create meaningful experiences that connect with people on a deeper level, blending aesthetics with functionality to craft interfaces that are both beautiful and purposeful.",
    interests: [
      { icon: 'Palette', label: 'Art & sketching' },
      { icon: 'BookOpen', label: 'Reading' },
      { icon: 'Music',   label: 'Music' },
      { icon: 'Plane',   label: 'Travel' },
    ],
    languages: [
      { name: 'English', note: 'Fluent' },
      { name: 'Nepali',  note: 'Fluent' },
      { name: 'Newari',  note: 'Fluent' },
      { name: 'Hindi',   note: 'Basic' },
    ],
  },

  skills: [
    {
      title: 'Design',
      iconKey: 'design',
      items: ['UI/UX Design (Figma)', 'Canva', 'Wireframing', 'Visual Design'],
    },
    {
      title: 'Development',
      iconKey: 'dev',
      items: ['C', 'HTML & CSS', 'JavaScript', 'Java'],
    },
    {
      title: 'Tools',
      iconKey: 'tools',
      items: ['Figma', 'VS Code', 'IntelliJ IDEA', 'Apache NetBeans', 'Dev C++'],
    },
  ],

  experience: [
    {
      org: 'Hackaverse',
      role: 'Design Team Member',
      bullets: [
        'Designed posters and social media graphics',
        'Contributed to event visual branding',
      ],
    },
    {
      org: 'Job Fair',
      role: 'Design Team Member',
      bullets: [
        'Created promotional posters and social media content',
        'Maintained consistency in visuals across all materials',
      ],
    },
    {
      org: 'ICT Meetup',
      role: 'Design Team Member',
      bullets: [
        'Assisted in building and designing website interface',
        'Collaborated on layout and structure decisions',
      ],
    },
  ],

  projects: [
    {
      thumbVariant: 'java',
      category: 'code',
      tag: 'Java · Code',
      title: 'Pustakalaya – Library Management System',
      description: 'A Java Swing-based Library Management System developed in NetBeans. It allows users to manage books, members, and book transactions through an intuitive graphical interface.',
      techStack: ['Java', 'Java Swing', 'NetBeans', 'OOP'],
      github: 'https://github.com/Rupikabajracharya/Pustakalaya-management-system-GUI-.git',
      demo: '/gui.mp4',
    },
    {
      thumbVariant: 'console',
      category: 'code',
      tag: 'Java · Code',
      title: 'Library Management System – Console',
      description: 'A console-based Library Management System built with Java and Object-Oriented Programming. Handles book records, member registration, and transactions through a clean terminal interface.',
      techStack: ['Java', 'OOP'],
      github: 'https://github.com/Rupikabajracharya/Library-Management-System',
    },
    {
      thumbVariant: 'wip',
      category: 'design',
      tag: 'Design · Coming Soon',
      title: 'New Design Project',
      description: 'A UI/UX design project currently in the works — exploring new ideas around user flows, visual identity, and interaction design. Stay tuned!',
      wip: true,
    },
  ],

  socials: [
    { platform: 'LinkedIn', href: 'https://www.linkedin.com/in/rupika-bajracharya', ariaLabel: 'LinkedIn', iconKey: 'linkedin' },
    { platform: 'GitHub',   href: 'https://github.com/Rupikabajracharya',           ariaLabel: 'GitHub',   iconKey: 'github'   },
  ],

  contact: {
    heading: 'Have an idea or opportunity?',
    subheading: "I'd love to hear from you.",
    subtext: "Whether it's a project collaboration, job opportunity, or just a hello — my inbox is always open.",
  },

  footer: {
    year: 2024,
    name: 'Rupika Bajracharya',
  },
}

export default portfolioData
 
