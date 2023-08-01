export default function Navigation(props) {
  return (
    <div>
      <button onClick={() => props.handlePageChange("About")}>About me</button>
      <button onClick={() => props.handlePageChange("Portfolio")}>
        Portfolio
      </button>
      <button onClick={() => props.handlePageChange("Contact")}>Contact</button>
      <button onClick={() => props.handlePageChange("Resume")}>Resume</button>
    </div>
  );
}
