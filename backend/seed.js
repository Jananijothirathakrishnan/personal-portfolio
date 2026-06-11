const mongoose = require('mongoose');
const connectDB = require('./config/db');

// Load Models
const Project = require('./models/Project');
const Skill = require('./models/Skill');
const Experience = require('./models/Experience');
const Certification = require('./models/Certification');
const Achievement = require('./models/Achievement');

const seedData = async () => {
  try {
    await connectDB();

    // Clear existing data
    await Project.deleteMany({});
    await Skill.deleteMany({});
    await Experience.deleteMany({});
    await Certification.deleteMany({});
    await Achievement.deleteMany({});

    console.log('Database cleared.');

    // Seed Projects
    const projects = [
      {
        title: 'Blood Bank Management System',
        description: 'Developed a database-driven system for donor management, blood inventory tracking, and CRUD operations.',
        techStack: ['Java', 'JDBC', 'MySQL'],
        features: ['Donor Search', 'Inventory Tracking', 'Secure Database Management'],
        githubUrl: 'https://github.com/Jananijothirathakrishnan',
        liveUrl: '',
        featured: true
      },
      {
        title: 'E-Commerce Return Fraud Detection System',
        description: 'Built an intelligent return fraud prevention solution capable of detecting counterfeit product swaps and verifying product authenticity.',
        techStack: ['Firebase', 'NFC Technology', 'Real-Time Verification'],
        features: ['NFC Verification', 'Real-Time Validation', 'Fraud Detection', 'Security Monitoring'],
        githubUrl: 'https://github.com/Jananijothirathakrishnan',
        liveUrl: '',
        featured: true
      }
    ];
    await Project.insertMany(projects);
    console.log('Projects seeded.');

    // Seed Skills
    const skills = [
      // Programming
      { name: 'Java', category: 'Programming', proficiency: 90 },
      { name: 'C++', category: 'Programming', proficiency: 85 },
      { name: 'SQL', category: 'Programming', proficiency: 88 },
      { name: 'JavaScript', category: 'Programming', proficiency: 85 },
      // Frontend
      { name: 'React', category: 'Frontend', proficiency: 85 },
      { name: 'HTML', category: 'Frontend', proficiency: 92 },
      { name: 'CSS', category: 'Frontend', proficiency: 88 },
      { name: 'Tailwind CSS', category: 'Frontend', proficiency: 85 },
      // Backend
      { name: 'Node.js', category: 'Backend', proficiency: 80 },
      { name: 'Express.js', category: 'Backend', proficiency: 80 },
      { name: 'REST APIs', category: 'Backend', proficiency: 85 },
      // Databases
      { name: 'MySQL', category: 'Databases', proficiency: 88 },
      { name: 'MongoDB', category: 'Databases', proficiency: 82 },
      { name: 'Firebase', category: 'Databases', proficiency: 80 },
      // Tools
      { name: 'Git', category: 'Tools', proficiency: 85 },
      { name: 'GitHub', category: 'Tools', proficiency: 88 },
      { name: 'VS Code', category: 'Tools', proficiency: 90 },
      { name: 'Postman', category: 'Tools', proficiency: 85 },
      // Cloud
      { name: 'Snowflake', category: 'Cloud', proficiency: 75 },
      { name: 'Cloud Fundamentals', category: 'Cloud', proficiency: 80 }
    ];
    await Skill.insertMany(skills);
    console.log('Skills seeded.');

    // Seed Experience
    const experiences = [
      {
        title: 'Team Lead',
        company: 'Younder Botz',
        period: 'Jan 2026 - Present',
        description: [
          'Led a team of four developers to coordinate project execution.',
          'Built HRMS and EMR frontend modules for internal management.',
          'Developed highly responsive and performant React.js user interfaces.'
        ]
      },
      {
        title: 'Web Development Intern',
        company: 'Pinnacle Labs',
        period: 'Jun 2025 - Aug 2025',
        description: [
          'Developed responsive web applications for client deployments.',
          'Improved overall UI/UX through refactoring design components.',
          'Conducted manual and automated testing and debugging sessions.'
        ]
      },
      {
        title: 'C++ Programming Intern',
        company: 'CodSoft',
        period: 'Jan 2025 - Mar 2025',
        description: [
          'Developed terminal and system applications using Object-Oriented Programming principles.',
          'Collaborated on code testing, profiling, and runtime optimization.'
        ]
      }
    ];
    await Experience.insertMany(experiences);
    console.log('Experience seeded.');

    // Seed Certifications
    const certifications = [
      { name: 'SnowPro Associate Platform Certification', issuer: 'Snowflake', date: '2025', link: '' },
      { name: 'MongoDB Basics for Students', issuer: 'MongoDB University', date: '2024', link: '' },
      { name: 'Network Addressing & Troubleshooting', issuer: 'Cisco', date: '2024', link: '' },
      { name: 'TCS CodeVita Certification', issuer: 'TCS', date: '2025', link: '' }
    ];
    await Certification.insertMany(certifications);
    console.log('Certifications seeded.');

    // Seed Achievements
    const achievements = [
      { title: 'Code Relay Competition', description: '2nd Place among 50+ participants.', context: 'College Technical Symposium' },
      { title: 'Best Readers Club Member Award', description: 'Awarded by SALIS.', context: 'Library Association' }
    ];
    await Achievement.insertMany(achievements);
    console.log('Achievements seeded.');

    console.log('Database seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error(`Error seeding database: ${error.message}`);
    process.exit(1);
  }
};

seedData();
