import Navigation from "./Navigation";

export default function Header(props) {
  return (
    <div>
      <div>Logo</div>
      <Navigation handlePageChange={props.handlePageChange} />
    </div>
  );
}
