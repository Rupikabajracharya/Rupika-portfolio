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
    logo: 'rupika',
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
      { icon: 'Palette', label: 'Art & Design' },
      { icon: 'Camera',  label: 'Photography' },
      { icon: 'Music',   label: 'Music' },
      { icon: 'Plane',   label: 'Travel' },
      { icon: 'Monitor', label: 'Tech' },
    ],
    languages: [
      { name: 'English', level: 80, note: 'Fluent' },
      { name: 'Nepali',  level: 80, note: 'Fluent' },
      { name: 'Newari',  level: 60, note: 'Fluent' },
      { name: 'Hindi',   level: 45, note: 'Basic' },
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
      thumbVariant: 'uiux',
      category: 'design',
      tag: 'UI/UX Design',
      title: 'Personal UI/UX Design Project',
      description: 'Designed a comprehensive user interface focusing on simplicity and user-centered design principles, creating an intuitive and visually cohesive experience.',
      link: '#',
    },
    {
      thumbVariant: 'web',
      category: 'code',
      tag: 'Web Design',
      title: 'Website',
      description: 'Developed and designed a fully responsive website with modern aesthetics, clean typography, and seamless user interaction patterns.',
      link: '#',
    },
    {
      thumbVariant: 'graphic',
      category: 'design',
      tag: 'Graphic Design',
      title: 'Brand Identity Design',
      description: 'Crafted a cohesive brand identity system including logo, colour palette, and typography guidelines to build a consistent and memorable visual presence.',
      link: '#',
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
