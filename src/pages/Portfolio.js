import Project from "../components/Project";
import "./Portfolio.css";

const projects = [
  {
    title: "Note Taker",
    url: "",
    githubUrl: "https://github.com/Natasa00/Note_Taker",
    description: "Simple note app with local storage",
    image: "/project1.png",
  },
  {
    title: "Virtual Adventures",
    url: "",
    githubUrl: "https://github.com/Natasa00/Virtual_Adventures",
    description: "HTML, CSS, JavaScript, Google Maps API",
    image: "/project1.png",
  },
  {
    title: "Virtual Adventures",
    url: "",
    githubUrl: "https://github.com/Natasa00/Virtual_Adventures",
    description: "HTML, CSS, JavaScript, Google Maps API",
    image: "/project1.png",
  },
  {
    title: "Virtual Adventures",
    url: "",
    githubUrl: "https://github.com/Natasa00/Virtual_Adventures",
    description: "HTML, CSS, JavaScript, Google Maps API",
    image: "/project1.png",
  },
];

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="container">
        {projects.map((project) => {
          return <Project {...project} />;
        })}
      </div>
    </div>
  );
}
