import { Link } from "react-router-dom";

export const Header = () => {
  const style = {
    fontFamily: "'Russo One', sans-serif",
    color: "#fff",
    letterSpacing: "1px",
    textShadow: "2px 2px rgba(200, 200, 200, 0.6)",
    textDecoration: "none",
  };

  return (
    <header>
      <div>
        <Link to={"/"} style={style}>
          <h1 title="Home">Easy Contacts <i className="fa-solid fa-phone"></i></h1>
        </Link>
        <p>Your one-stop destination for storing contacts.</p>
      </div>
      <div>
        <Link to={"/add"}>
          <i title="Add New Contact" className="fa-solid fa-circle-plus fa-3x"></i>
        </Link>
      </div>
    </header>
  );
};
