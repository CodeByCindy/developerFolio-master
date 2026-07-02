/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Cindy Huang",
  title: `Welcome to my Portfolio, I'm Cindy`,
  subTitle:  "Systems test engineer with 8+ years developing test, automation, and failure-analysis solutions across AI server, semiconductor, and wireless manufacturing environments. Tests AI server platforms in high-volume production at Hyve across new product introduction (NPI) and sustaining phases, and built manufacturing-systems automation and monitoring at TSMC. Strong in manufacturing test development, hardware and software integration testing, failure analysis, and Python test automation."
,
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/CodeByCindy",
  gmail: "cindy.psu.h@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SYSTEMS TEST & AUTOMATION ENGINEER BRIDGING HARDWARE, SOFTWARE, AND TEST",
  skills: [
    emoji(
      "⚡ Manufacturing and system-level test — test development, automated test programs, and hardware/software integration testing across AI & GPU server platforms"
    ),
    emoji(
      "⚡ Validate AI & GPU server platforms at PCBA and system level, with BMC/IPMI/ILOM, fault management, and Linux in high-volume production"
    ),
    emoji(
      "⚡ Build Python automation, Node.js dashboards, and monitoring tools, driving failure analysis and root cause across test workflows"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "bash scripting",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "git/github",
      fontAwesomeClassname: "fab fa-git-alt"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Carnegie Mellon University",
      logo: require("./assets/images/CarnegieMellonLogo.png"),
      subHeader: "M.S. in Information Technology & Information Security",
      desc: "Focused on network security, system validation, and secure infrastructure.",
      descBullets: [
        "Awarded a Full-Tuition Merit Scholarship based on academic merit.",
      ]
    },
    {
      schoolName: "National Taiwan Normal University",
      logo: require("./assets/images/TaiwanUniLogo.png"),
      subHeader: "B.S. in Computer Science & Education",
      desc: "Built a foundation in software engineering, systems, and computer science.",
      descBullets: [
        "Co-author, BMC Genomics (journal publication).",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python & Test Automation",
      progressPercentage: "90%"
    },
    {
      Stack: "System Validation & Integration",
      progressPercentage: "85%"
    },
    {
      Stack: "Web / Internal Tools (React, JS)", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Test Engineer, AI Server & Systems Validation",
      company: "Hyve Solutions",
      companylogo: require("./assets/images/hyveLogo.png"),
      date: "Jun 2025 – Present",
      desc: "AI server platform test in high-volume production — across NPI and sustaining phases, in Fremont, CA.",
      descBullets: [
        "Test AI server platforms in high-volume production across new product introduction (NPI) and sustaining phases, diagnosing issues across hardware, GPUs, Linux, and BMC/IPMI interfaces.",
        "Perform failure analysis and root cause on system logs, production data, and failure patterns to improve test coverage and platform reliability.",
        "Develop Python automation and Node.js dashboards for test data collection and visualization, reducing manual steps and errors in test workflows.",
        "Identified a repair workflow gap and implemented system build and configuration tracking within test records, reducing troubleshooting time by approximately 50%."
      ]
    },
    {
      role: "Software Engineer (Freelance)",
      company: "Freelance",
      companylogo: require("./assets/images/freeLancerLogo.png"),
      date: "2024 – 2025",
      desc: "Full-stack web development for a greentech business.",
      descBullets: [
        "Designed, built, and deployed a full-stack web application for a greentech business end to end using React and Node.js — owning requirements, development, and launch."
      ]
    },
    {
      role: "IT Audit Associate",
      company: "PricewaterhouseCoopers (PwC)",
      companylogo: require("./assets/images/pwcLogo.png"),
      date: "2021 – 2023",
      desc: "IT control testing and system audits in San Jose, CA.",
      descBullets: [
        "Conducted IT control testing and system audits, ensuring operational integrity, compliance, and reliability of critical business applications."
      ]
    },
    {
      role: "Technical Project Manager",
      company: "Industrial Technology Research Institute (ITRI)",
      companylogo: require("./assets/images/itriLogo.png"),
      date: "2016 – 2018",
      desc: "Technology program planning and delivery in Taiwan.",
      descBullets: [
        "Led project planning and proposals for AI detection programs across 8 departments and multiple sites, securing $52M in program funding.",
        "Established CI/CD automation with JIRA, Jenkins, and Docker, cutting development time 10-15%."
      ]
    },
    {
      role: "Test Engineer",
      company: "Sawtest Solution",
      companylogo: require("./assets/images/sawtestLogo.png"),
      date: "2014 – 2015",
      desc: "Cellular and wireless conformance testing in Germany.",
      descBullets: [
        "Designed test flows to 3GPP standards for 2G/3G/4G devices; performed protocol log analysis and debug using Qualcomm QXDM."
      ]
    },
    {
      role: "Systems Engineer, Manufacturing Systems",
      company: "Taiwan Semiconductor Manufacturing Company (TSMC)",
      companylogo: require("./assets/images/tsmcLogo.png"),
      date: "2012 – 2014",
      desc: "Automation and monitoring for semiconductor manufacturing systems in Taiwan.",
      descBullets: [
        "Developed Python automation for manufacturing process data analysis, applying statistical process control to reduce defect rates by 10-15% through proactive monitoring.",
        "Improved system reliability from 97% to 99.7% through proactive monitoring and hands-on troubleshooting of Linux server infrastructure.",
        "Built Python watchdog and health monitoring tools tracking CPU, memory, disk, and SQL performance across manufacturing systems."
      ]
    },
    {
      role: "Software Engineer in Test",
      company: "Ubiquiti Networks",
      companylogo: require("./assets/images/ubiquitiLogo.png"),
      date: "2010 – 2012",
      desc: "Backend services and test automation for wireless networking products in Taiwan.",
      descBullets: [
        "Built Java and C++ backend services and CI unit testing for WiFi access points, automating data analysis and monitoring.",
        "Designed software and hardware test plans and validation frameworks supporting hardware and software integration and product reliability."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",  projects: [
    {
      image: require("./assets/images/tea-discovery.webp"),
      projectName: "Tea-discoveries",
      projectDesc: "A web application built using React, Redux, React Router, Redux Thunk, Formik for form management with input validation feature, and a JSON server for data storage. It allows users to browse a variety of teas, read and write comments and feedback from other users, and share their own experiences. The application was deployed on Netlify. ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://tea-discoveries.netlify.app/"
        }, 
        {
          name: "GitHub",
          url: "https://github.com/CodeByCindy/teaDiscoveries-react"
        }
      ]
    }, 
    {
      image: require("./assets/images/R-squared.webp"),
      projectName: "R-Squared shopping site",
      projectDesc: "An online shopping site with a shopping cart, user registration, and Stripe payments, built with React, Bootstrap, and Firestore backend for a seamless shopping experience.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://r-squared-elegant.netlify.app/"
        }, 
        {
          name: "GitHub",
          url: "https://github.com/CodeByCindy/eShop"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Journal Paper - BMC Genomics",
      subtitle:
        "BMC Genomics, 8: 352, 2007 · Co-Expression of Adjacent Genes in Yeast Cannot Simply Attribute to Shared Regulatory System",
      image: require("./assets/images/bmcLogo.webp"),
      imageAlt: "BMC Genomics Logo",
      footerLink: [
        {
          name: "Paper",
          url: "https://bmcgenomics.biomedcentral.com/articles/10.1186/1471-2164-8-352"
        }, 
      ]
    },
    {
      title: "Conference Paper - International Workshop on Computer Music and Audio Technology",
      subtitle: "Comparison of Different Retrieval Models in Content-Based Music Retrieval",
      image: require("./assets/images/musicLogo.webp"),
      imageAlt: "conf Paper Logo",
      footerLink: [
        {name: "Paper", url: "https://www.researchgate.net/publication/236586441_Comparison_of_Different_Retrieval_Models_in_Content-Based_Music_Retrieval"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Feel free to reach out — I'm always happy to connect.",
  email_address: "cindy.psu.h@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
