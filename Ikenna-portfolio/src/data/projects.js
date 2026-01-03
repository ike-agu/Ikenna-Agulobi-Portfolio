import tvShowsImg from "../assets/images/tv-show.png"
import spacedImg from "../assets/images/spaced-repetition.png"
import calendarImg from "../assets/images/calendar-app.png"
import bookmarkImg from "../assets/images/shared-bookmark.png"
import graceImg from "../assets/images/grace-assembly.png"

export const projects = [
  {
    title: "Tv Shows Listing",
    type: "Vanilla JavaScript",
    image: tvShowsImg,
    liveUrl: "https://cyf-ikenna-agulobi-tv-show.netlify.app/",
    bullets: [
      "Built a responsive web application using HTML, CSS, and Vanilla JavaScript",
      "Consumed data from a public API to display TV shows and episode information",
      "Implemented DOM manipulation, event handling, and dynamic rendering",
      "Focused on clean UI, usability, and readable code structure",
    ],
    tech: ["HTML", "CSS", "JavaScript", "API"],
  },
  {
    title: "Spaced Repetition Tracker",
    type: "Vanilla JavaScript",
    image: spacedImg,
    liveUrl: "https://learncycle.netlify.app/",
    bullets: [
      "Developed a web app to help users track topics over increasing review intervals",
      "Implemented custom scheduling logic (1 week, 1 month, 3 months, 1 year)",
      "Managed application state using JavaScript objects and arrays",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Calendar App",
    type: "Vanilla JavaScript",
    image: calendarImg,
    liveUrl: "https://cyf-project-days-calendar.netlify.app/",
    bullets: [
      "Built a calendar application to calculate and display annual events with non-fixed dates",
      "Implemented date logic to handle recurring patterns (e.g. second Tuesday of October)",
      "Strengthened problem-solving and date manipulation skills",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Dates"],
  },
  {
    title: "Shared Bookmark",
    type: "Vanilla JavaScript",
    image: bookmarkImg,
    liveUrl: "https://cyf-shared-bookmark-project.netlify.app/",
    bullets: [
      "Created a bookmarking web app to save and share links with descriptions",
      "Implemented form handling, validation, and dynamic UI updates",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Forms"],
  },
  {
    title: "Grace Empowerment Assembly Website",
    type: "React",
    image: graceImg,
    liveUrl: "https://www.graceempowermentassembly.com/",
    bullets: [
      "Built a production-ready website using React, JavaScript, HTML, and CSS",
      "Implemented reusable components and structured layout for content pages",
      "Collaborated with stakeholders to deliver a live website",
    ],
    tech: ["React", "JavaScript", "HTML", "CSS"],
  },
]
