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
  title: `Welcome to my Portfolio, I'm Peichun`,
  subTitle:  "A dedicated Full Stack Software Developer with expertise in building Web and Mobile applications using Python, SQL, JavaScript, Reactjs, Nodejs, React Native, and machine learning with libraries like TensorFlow and sklearn. Passionate about transforming ideas into innovative solutions."
,
  resumeLink:
    "https://resume.creddle.io/resume/bz7ld2ytfvw", // Set to empty to hide the button
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
  subTitle: "FULL STACK DEVELOPER EXPLORING EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
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
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
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
      subHeader: "Master of Science in Information Technology - Information Security",
      desc: "Participated in the research of designing encryption mechanisms for enhancing Security and Privacy of Network.",
      descBullets: [
        "Awarded the scholarship for full tuition based on academic merit.",
      ]
    },
    // {
    //   schoolName: "National Taiwan Normal University",
    //   logo: require("./assets/images/TaiwanUniLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science and Information Engineering",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Network Security, Operating Systems, ...",
    //   descBullets: [
    //     "Conference Paper: Comparison of Different Retrieval Models in Content-Based Music Retrieval, International Workshop on Computer Music and Audio, 2006."]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [,
    {
      Stack: "Programming",
      progressPercentage: "82%"
    },
    {
      Stack: "Backend",
      progressPercentage: "82%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Software Developer",
      company: "Freelancer ",
      companylogo: require("./assets/images/freeLancerLogo.png"),
      date: "Jan 2024 – Present",
      desc: "Developed and maintained web applications with a focus on React, Redux, and React Native.. Worked with clients to identify and define project requirements, scope, and objectives. "
    },
    {
      role: "IT Assurance",
      company: "PricewaterhouseCoopers",
      companylogo: require("./assets/images/pwcLogo.png"),
      date: "Jan 2022 – Nov 2023",
      desc: "Conducted testing for the accounting business applications, identified key reports and provide assurance over key IT controls to helping businesses mitigate regulatory and compliance risks, optimize control activities."
    },
    {
      role: "Data Scientist",
      company: "Metis",
      companylogo: require("./assets/images/metisLogo.png"),
      date: "Sep 2021 – Dec 2021",
      desc: "Successfully completed Metis' Data Science and Engineering Bootcamp, where I gained expertise in Python programming, statistical modeling, machine learning, data visualization, project design, and effective communication."
    },
    {
      role: "Technical Project Manager",
      company: "Industrial Research Institute of Technology",
      companylogo: require("./assets/images/itriLogo.png"),
      date: "May 2016 – Oct 2018",
      desc: "Led cross-functional teams in supporting small businesses in Taiwan through digital transformation initiatives. Our efforts resulted in the successful acquisition of 52 million in national funding over a four-year period."
    },
    // {
    //   role: "Test Engineer",
    //   company: "SAWTEST",
    //   companylogo: require("./assets/images/sawtestLogo.png"),
    //   date: "May 2016 – Oct 2018",
    //   desc: "Conducted comprehensive 2G, 3G, and 4G tests using 3GPP global standards and utilized script languages to parse logs and identify standard compliance issues, detecting major bugs before release."
    // },
    // {
    //   role: "System Engineer",
    //   company: "TSMC",
    //   companylogo: require("./assets/images/tsmcLogo.png"),
    //   date: "May 2012 – Aug 2015",
    //   desc: "Leveraged my expertise in scripting to develop automated tools for analyzing process data and implemented statistical process control techniques to proactively monitor equipment downtime. This initiative successfully led to a 10-15% annual reduction in wafer defect rates."
    // },
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
    {
      image: require("./assets/images/socialAppLogo.webp"),
      projectName: "Social App Clone",
      projectDesc: "Built social app webpage With React, Firebase && Chakra UI",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://social-app-codebycindy.vercel.app/"
        }
        //  you can add extra buttons here.
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
    "Hello! I am excited to be part of a team who share the same dedication to create impactful solutions and to learn from various perspectives. I'm looking forward to do creative projects with you! Feel free to contact me!", 
  email_address: "cindy.psu.h@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
