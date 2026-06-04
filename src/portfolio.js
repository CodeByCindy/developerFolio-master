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
  username: "Peichun Huang - Cindy",
  title: `Welcome to my Portfolio, I'm Peichun (Cindy)`,
  subTitle:  "Systems Test and Automation Engineer with 8+ years of experience spanning semiconductor manufacturing, wireless communications, and AI server platforms. I build Python automation tools, monitoring systems, and internal web applications that support high-volume production and manufacturing test operations — with hands-on expertise in Linux-based system validation, hardware-software integration, root-cause analysis, and cross-functional engineering collaboration. Now targeting systems integration, systems engineering, and system test roles in the robotics and AI industry."
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
      "⚡ Build Python automation tools, monitoring systems, and watchdogs for high-volume production and test operations"
    ),
    emoji(
      "⚡ Perform server-level and rack-level testing, hardware-software integration, and Linux-based system validation"
    ),
    emoji(
      "⚡ Drive root-cause analysis and log analysis to improve test coverage, reliability, and manufacturing stability"
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
      subHeader: "M.S. in Information Technology (Information Security)",
      desc: "Focused on network security, system validation, and secure infrastructure.",
      descBullets: [
        "Awarded a Full-Tuition Merit Scholarship based on academic merit.",
      ]
    },
    {
      schoolName: "National Taiwan Normal University",
      logo: require("./assets/images/TaiwanUniLogo.png"),
      subHeader: "B.S. in Information and Computer Education",
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
      role: "Test Engineer",
      company: "Hyve Solutions",
      companylogo: require("./assets/images/hyveLogo.png"),
      date: "Jun 2025 – Present",
      desc: "Server- and rack-level testing for data center / AI server platforms — diagnosing failures across hardware, software, and Linux systems.",
      descBullets: [
        "Execute server- and rack-level testing for data center platforms, diagnosing failures across hardware, software, Linux systems, and test environments.",
        "Analyze test logs, telemetry, and production data to identify root causes, strengthen test coverage, and improve manufacturing test stability.",
        "Develop Python automation tools and internal web applications that streamline operator workflows and increase production efficiency.",
        "Proposed adding system build information to test records, reducing troubleshooting time for repair technicians by ~50%.",
        "Partner with Product Engineering, Failure Analysis, and Manufacturing teams to resolve complex system-level issues, support NPI, and drive corrective actions."
      ]
    },
    {
      role: "Cellular Test Engineer",
      company: "Sawtest Solution",
      companylogo: require("./assets/images/sawtestLogo.png"),
      date: "2014 – 2015",
      desc: "System-level wireless validation and 3GPP conformance testing in Germany.",
      descBullets: [
        "Performed system-level 2G/3G/4G wireless validation and 3GPP conformance testing for product reliability and pre-release verification.",
        "Conducted deep log analysis of wireless communication failures, identifying root causes across protocol, connectivity, and system-level interactions."
      ]
    },
    {
      role: "System Test Engineer",
      company: "Taiwan Semiconductor Manufacturing Company (TSMC)",
      companylogo: require("./assets/images/tsmcLogo.png"),
      date: "2012 – 2014",
      desc: "Automation and monitoring for 24/7 semiconductor manufacturing operations.",
      descBullets: [
        "Developed Python automation tools for equipment monitoring and data collection, improving manufacturing visibility and reducing defect rates.",
        "Created watchdog and monitoring systems supporting 24/7 production operations, improving infrastructure reliability from 97% to 99.7%.",
        "Performed validation and troubleshooting of manufacturing systems, analyzing operational data to improve system reliability and process stability."
      ]
    },
    {
      role: "Software Engineer in Test",
      company: "Ubiquiti Networks",
      companylogo: require("./assets/images/ubiquitiLogo.png"),
      date: "2010 – 2012",
      desc: "Backend monitoring and automation for wireless networking products.",
      descBullets: [
        "Developed backend monitoring systems, network configuration tools, and automation frameworks for wireless networking products.",
        "Built software tools supporting system diagnostics, reliability testing, and production troubleshooting.",
        "Collaborated with hardware and software teams to investigate complex networking and system integration issues."
      ]
    },
    {
      role: "Project Manager",
      company: "Industrial Technology Research Institute (ITRI)",
      companylogo: require("./assets/images/itriLogo.png"),
      date: "",
      desc: "Cross-functional technology project coordination.",
      descBullets: [
        "Coordinated cross-functional technology projects, supporting system planning, requirements definition, and CI/CD implementation across engineering teams."
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
  subtitle:
    "Hello! I'm exploring systems integration, systems engineering, and system test roles in the robotics and AI space, and I'd love to connect with teams building impactful hardware-software systems. Feel free to reach out!",
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
