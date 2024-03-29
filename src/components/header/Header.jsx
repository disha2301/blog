import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">
          Obtain answers from leading experts.
        </span>
        <span className="headerTitleLg">FarmGuru</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
    </div>
  );
}
