const skillData = {
    frontend: {
      title: "Frontend Development",
      description: "Technologies and tools for creating user interfaces.",
      technologies: [
        { name: "HTML", proficiency: 85 },
        { name: "CSS", proficiency: 80 },
        { name: "Tailwind CSS", proficiency: 65 },
        { name: "JavaScript", proficiency: 70 },
        { name: "Python", proficiency: 70 },
        { name: "React", proficiency: 65 },
      ],
      icon: "FaHtml5", // Icon name from React Icons or similar library
    },
    backend: {
      title: "Back-end  Development",
      description: "Technologies and tools for server-side development.",
      technologies: [
        { name: "Laravel", proficiency: 50 },
        { name: "Django", proficiency: 70 },
      ],
      icon: "FaNodeJs", // Icon name
    },

    Design: {
        title: "Tools & UX/UI",
        description: "Tools and skills for designing user-friendly interfaces.",
        technologies: [
        { name: "Figma", proficiency: 85 },
        { name: "GitHub", proficiency: 80 },
        { name: "GitLab", proficiency: 80 },
        { name: "Postman", proficiency: 65 },
        { name : "Unity " , proficiency: 60},
        ],
        icon: "FaReact", 
      },
      Database: {
        title: "Database Management",
        description: "Technologies and tools for server-side development.",
        technologies: [
            { name: "MySQL", proficiency: 85 },
            { name: "PostgreSQL", proficiency: 80 },
        ],
        icon: "FaDatabase", // Icon name
      },
    // Add more skills here
  };
  
  export default skillData;
  