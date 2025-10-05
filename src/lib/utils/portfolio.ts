import { author, socialLinks } from '@/lib/content/portfolio';
import {
  AboutSectionType,
  ContactSectionType,
  ExperienceSectionType,
  FooterSectionType,
  HeroSectionType,
  NavbarSectionType,
  ProjectsSectionType,
  ScolarShipType,
  SkillsSectionType,
  SocialSectionType,
} from '@/lib/types/sections';

import { resumeFileName } from './config';
import { getId } from './helper';

/*
 * =========================
 * SECTIONS
 * =========================
 */

// Navbar Section

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: 'about', url: '/#about' },
    { name: 'skills', url: '/#skills' },
    { name: 'experience', url: '/#experience' },
    { name: 'projects', url: '/#projects' },
    { name: 'scolarship', url: '/#scholarships' },
    { name: 'contact', url: '/#contact' },
    
  ],
  cta: {
    title: 'resume',
    url: `/${resumeFileName}`,
  },
};

// * Hero Section

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: ' Mohamed Amine Sidhom .',
  tagline: "DevOps & Cloud Engineer | Software Engineering Student",
  description:
    "Passionate about cloud computing, DevOps automation, and scalable architectures. Experienced in designing CI/CD pipelines, cloud infrastructure, and containerized deployments.",
  specialText: 'I am currently seeking new job / internship opportunities',
  cta: {
    title: 'check my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};

// * About Section

export const aboutSection: AboutSectionType = {
  title: 'about me',
  // Paragraphs need to be changed from containers/About.tsx
  // Because it wasn't possible to insert anchor tags like this
  list: {
    title: 'Here are some of the technologies I’ve been actively using recently',
    items: [
      'AWS & Azure – Deploying scalable cloud applications',

      'Docker & Kubernetes – Containerization and orchestration for microservices.',

      'Terraform & Ansible – Infrastructure as Code (IaC) for automated provisioning.',
      'Jenkins & GitLab CI/CD – Automating deployments and improving development workflows.',
      'Prometheus & Grafana – Real-time monitoring and observability.',
      'Java, JavaScript, TypeScript, C, C++ – Core languages for backend and scripting.',
      'Symfony ,Spring Boot, Node.js, ExpressJs, React.js, Angular – Developing modern web applications.',
      
      'MySQL, PostgreSQL, MongoDB – Database management and optimization.',
      'Git & GitHub/GitLab – Version control and collaborative development.',
      
    ],
  },
  img: '/ena2-removebg-preview.png',
};

// * Skills Section

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: '💻 Full-Stack Development',
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
        //light: '/lotties/designing.json',
        //dark: '/lotties/designing-dark.json',
      },
      points: [

        'Developing modern web applications with Spring Boot, React.js, Angular, and Node.js.',
        'Building RESTful APIs and microservices with Java, TypeScript, and Python.',
        'Database management using MySQL, PostgreSQL, and MongoDB.',
        'Delivering user-friendly design solutions',
      ],
      softwareSkills: [
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'sass', icon: 'vscode-icons:file-type-sass' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        {
          name: 'typeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        { name: 'angularjs', icon: 'logos:angular-icon' },
       
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'database', icon: 'vscode-icons:file-type-sql' },
        { name: 'Spring Boot', icon: 'logos:spring' },
  { name: 'Symfony', icon: 'logos:symfony' },
  { name: 'MongoDB', icon: 'logos:mongodb' } ,
  { name: 'Postman', icon: 'logos:postman' }

       
      ],
    },
    {
      id: getId(),
      title: '☁️ DevOps & Cloud Engineering',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/ethereum.json',
        dark: '/lotties/ethereum-dark.json',
      },
      points: [
        'Automating deployments with CI/CD pipelines (Jenkins, GitLab CI/CD, GitHub Actions).',
        'Managing cloud infrastructure on AWS & Azure using Terraform & Ansible.',
        'Containerizing applications with Docker & Kubernetes for scalable deployments.',
        'Ensuring system reliability through monitoring & logging (Prometheus, Grafana).',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'AWS', icon: 'logos:aws' },
  { name: 'Azure', icon: 'logos:azure' },
  { name: 'Jenkins', icon: 'logos:jenkins' },
  { name: 'GitLab', icon: 'logos:gitlab' },
  { name: 'Docker', icon: 'logos:docker' },
  { name: 'Kubernetes', icon: 'logos:kubernetes' },
  
  { name: 'Grafana', icon: 'logos:grafana' },
  { name: 'Prometheus', icon: 'logos:prometheus' },
  { name: 'GitHub', icon: 'logos:github' },
        { name: 'docker', icon: 'logos:docker-icon' },         // Docker
        { name: 'kubernetes', icon: 'logos:kubernetes' },      // Kubernetes
        // Terraform
     
      ],
    },
    {
      id: getId(),
      title: '🔍 Infrastructure as Code (IaC) & Automation',
      lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
      },
      points: [

        'Managing cloud resources with Terraform & Ansible.',
        'Automating workflows and system administration with Bash  scripting.',
        'Optimizing application performance with load balancing & auto-scaling.',
        
      ],
      softwareSkills: [
        { name: 'Ansible', icon: 'logos:ansible' },
        { name: 'Terraform', icon: 'logos:terraform' },
        { name: 'Shell Scripting', icon: 'logos:bash' }
      ],
    },

   
  ],
};


export const experienceSection: ExperienceSectionType = {
  title: "where i've worked",
  experiences: [
    {
      company: ' Qodexia',
      companyUrl: 'https://www.linkedin.com/company/qodexia/posts/?feedView=all',
      role: 'Cloud & DevOps Engineer Intern',
      started: 'Oct 2024',
      upto: 'Jan 2025',
      tasks: [
        '✅ Deployed a full-stack web application on AWS with EC2 Auto Scaling & Load Balancer for high availability.',
        '✅ Managed AWS RDS (PostgreSQL), S3 storage, and automated CI/CD pipelines using GitHub Actions & AWS CodeDeploy.',
        '✅ Used Terraform to implement Infrastructure as Code (IaC) for scalable cloud resources.',
        '🛠️ Tech Stack: AWS (EC2, RDS, S3, Load Balancer), Terraform, GitHub Actions, AWS CodeDeploy, Scrum.'
      ],
    },
    {
      company: '🛠️ BIAT IT',
      companyUrl: 'https://www.linkedin.com/company/biat-innovation-technology/',
      role: 'Web development & DevOps Engineer Intern',
      started: 'July 2024 ',
      upto: ' Aug 2024',
      tasks: [
        '✅ Designed and implemented a CI/CD pipeline for a Spring Boot & Angular application using GitLab CI/CD, improving deployment efficiency.',
        '✅ Built containerized environments with Docker and deployed applications on Azure Kubernetes Service (AKS).',
        '✅ Automated deployments and improved cloud infrastructure management.',
        '🛠️ Tech Stack: GitLab CI/CD, Docker, Kubernetes, Spring Boot, Angular, Azure, Scrum.'
        
      ],
    },
    {
      company: 'BIAT ',
      companyUrl: 'https://www.linkedin.com/company/biat/posts/?feedView=all',
      role: 'Web Development Engineer Intern',
      started: 'June 2023',
      upto: ' Aug 2023',
      tasks: [
        '✅ Developed a web-based backup tape and cabinet management system, improving operational workflow.',
        '✅ Integrated Continuous Integration (CI) workflows for automated code testing and version control with Git.',
        '🛠️ Tech Stack: Symfony, HTML, Css ,Bootstrap , MySQL, Git, Scrum.'
      ],
    },
    {
      company: 'BIAT Labs',
      companyUrl: '',
      role: 'IoT Engineer Intern',
      started: 'Jan 2022',
      upto: 'Jul 2022',
      tasks: [
        '✅ Developed an IoT-based IT asset management system, enhancing real-time monitoring capabilities.',
        '✅ Created a real-time equipment tracking web application using React.js & Node.js.',
        '✅ Integrated Arduino & RFID hardware for real-time data collection and automated alerts.',

        '🛠️ Tech Stack: React.js, Node.js, Express, MongoDB,RFID , Arduino, Git, Scrum.',
      ],
    },
  
  
  ],
};

// * Projects Section

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'Storage Management',
      url: 'https://www.linkedin.com/feed/update/urn:li:activity:7296844051142639616/',
      repo: 'https://github.com/amine00366/Storage_Managmenttt',
      img: '/login.png',
      year: 2024,
      tags: ['Angular', 'Spring Boot', 'MySql', 'Kubernetes', 'Docker', 'Jenkins' ,'Git'],
    },
    {
      id: getId(),
      name: 'UniEase',
      url: 'https://github.com/amine00366/PiPersonnelUniEase',
      repo: 'https://github.com/amine00366/PiPersonnelUniEase',
      img: '/UniEase.png',
      year: 2024,
      tags: ['SpringBoot', 'Angular' , 'Docker' , 'Ansible' , 'OpenStack infrastructure ', 'TailwindCss'],
    },
    {
      id: getId(),
      name: 'Material_Tracking',
      url: 'https://www.linkedin.com/feed/update/urn:li:activity:7295016587235897344/',
      repo: 'https://github.com/amine00366/Gestion-Materiel-Informatique-basee-sur-l-iot',
      img: '/tracking.jpeg',
      year: 2024,
      tags: ['React', 'NodeJs', 'ExpressJs, MongoDB', 'RFID', 'Arduino', 'Git'],
    },
    {
      id: getId(),
      name: 'Doctor_Connect',
      url: 'https://github.com/amine00366/Doctor-Connect-symfony5.4',
      repo: 'https://github.com/amine00366/Doctor-Connect-symfony5.4',
      img: '/doctor.png',
      year: 2023,
      tags: ['Symfony', 'MySql', 'TailwindCss'],
    },
    {
      id: getId(),
      name: 'Pure_Devops',
      url: 'https://github.com/salmaKs/5ARCTIC1-G4-StationSKI',
      repo: 'https://github.com/salmaKs/5ARCTIC1-G4-StationSKI',
      img: '/jennnn.webp',
      year: 2024,
      tags: ['Jenkins', 'SonarQube', 'Git', 'Prometheus', 'Grafana'],
    },
    {
      id: getId(),
      name: 'Doctor_Desktop',
      url: 'https://github.com/amine00366/Java-JavaFx-Doctor-Connect-',
      repo: 'https://github.com/amine00366/Java-JavaFx-Doctor-Connect-',
      img: '/javafx.png',
      year: 2023,
      tags: ['JavaFx', 'Mapbox', 'Dynamic Routing', 'Géolocation'],
    },
    {
      id: getId(),
      name: 'Storage_Status',
      url: 'https://github.com/amine00366/Stage',
      repo: 'https://github.com/amine00366/Stage',
      img: '/stage3.png',
      year: 2023,
      tags: ['Symfony', 'Sql','Git' ,'css' ,'TailwindCss'],
    },
  ],
};

// * Contact Section

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "what's next",
  paragraphs: [
    'I’m presently in search of remote employment or internship and exploring new career prospects',
    'Whether you’d like to discuss a project or simply drop a friendly greeting, my inbox welcomes all!',
  ],
  link: `mailto:${author.email}`,
};

// Social Links Section

export const socialSection: SocialSectionType = {
  socialLinks: [
    {
      icon: 'tabler:brand-github',
      url: socialLinks.github,
    },
    {
      icon: 'mdi:instagram',
      url: socialLinks.instagram,
    },
    {
      icon: 'lucide:twitter',
      url: socialLinks.twitter,
    },
    {
      icon: 'lucide:linkedin',
      url: socialLinks.linkedin,
    },
    {
      icon: 'lucide:facebook',
      url: socialLinks.facebook,
    },
  ],
};

// Footer Section

export const footerSection: FooterSectionType = {
  title: 'Design & Built by Mohamed Amine Sidhom',
  link: 'https://github.com/amine00366',
};


/////////////// scolar //////////////// 

export const scholarshipsection = [
  {
    Title: " Student at Hochschule Schmalkalden - University of Applied Sciences, Germany",
    scolarShip: ["Pursuing Engineer Diploma in Software Engineering"],
    from: "October 2024",
    to: "October 2025",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Uni_Marburg_Logo.svg/960px-Uni_Marburg_Logo.svg.png"
  },
  {
    Title: "Student at ESPRIT, Ariana, Tunisia",
    scolarShip: ["Pursuing Engineer Diploma in Software Engineering"],
    field:[" Field of Study: Architecture IT and Cloud Computing"],
    from: "September 2022",
    to: "June 2025" ,
    image:"/Logo_ESPRIT.png"
  },
  {
    Title: "Bachelor's in Computer Engineering at ISIMA, Mahdia, Tunisia",
    scolarShip: ["Field of Study: IoT and Embedded Systems"],
    from: "September 2019",
    to: "June 2022",
    image:"/logoisima.png"
  }
];

