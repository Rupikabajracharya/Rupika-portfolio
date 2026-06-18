const portfolioData = {
  owner: {
    name: 'Rupika Bajracharya',
    initials: 'RB',
    title: 'Designer & Creator',
    tagline: 'Designing experiences, solving problems & creating impact.',
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
      { emoji: '🎨', label: 'Art & Design' },
      { emoji: '📸', label: 'Photography' },
      { emoji: '🎵', label: 'Music' },
      { emoji: '✈️', label: 'Travel' },
      { emoji: '📚', label: 'Reading' },
      { emoji: '💻', label: 'Tech' },
    ],
    languages: ['English', 'Nepali', 'Hindi', 'Newari'],
  },

  skills: [
    {
      title: 'Design',
      iconKey: 'design',
      items: ['UI / UX Design', 'Graphic Design', 'Wireframing & Prototyping', 'Visual Design'],
    },
    {
      title: 'Development',
      iconKey: 'dev',
      items: ['HTML & CSS', 'JavaScript', 'React'],
    },
    {
      title: 'Tools',
      iconKey: 'tools',
      items: ['Figma', 'VS Code', 'Adobe XD', 'Git / GitHub'],
    },
  ],

  experience: [
    {
      logoLetter: 'H',
      tag: 'Design',
      org: 'Hackerverse',
      role: 'UI / UX Designer',
      description: 'Designed and prototyped user interfaces for hackathon event platforms, creating engaging and intuitive experiences for participants and organizers alike.',
      isLast: false,
    },
    {
      logoLetter: 'J',
      tag: 'Visual',
      org: 'Job Fair',
      role: 'Visual Designer',
      description: 'Created digital assets, print materials, and branding collateral for career fair events, enhancing brand presence and participant engagement.',
      isLast: false,
    },
    {
      logoLetter: 'I',
      tag: 'Graphic',
      org: 'ICT Meetup',
      role: 'Graphic Designer',
      description: 'Designed promotional materials and social media content for ICT community meetups, increasing event visibility and attendee reach.',
      isLast: true,
    },
  ],

  projects: [
    {
      thumbVariant: 'uiux',
      tag: 'UI/UX Design',
      title: 'Personal UI/UX Design Project',
      description: 'Designed a comprehensive user interface focusing on simplicity and user-centered design principles, creating an intuitive and visually cohesive experience.',
      link: '#',
    },
    {
      thumbVariant: 'web',
      tag: 'Web Design',
      title: 'Website',
      description: 'Developed and designed a fully responsive website with modern aesthetics, clean typography, and seamless user interaction patterns.',
      link: '#',
    },
  ],

  socials: [
    { platform: 'Instagram', href: '#', ariaLabel: 'Instagram', iconKey: 'instagram' },
    { platform: 'LinkedIn',  href: '#', ariaLabel: 'LinkedIn',  iconKey: 'linkedin' },
    { platform: 'Behance',   href: '#', ariaLabel: 'Behance',   iconKey: 'behance' },
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
