import "./Project.css";

export default function Project(props) {
  return (
    <div className="project">
      <img src={props.image} />
      <a href={props.url}>{props.title}</a>
      <a href={props.githubUrl}>Github</a>
      <p>{props.description}</p>
    </div>
  );
}
