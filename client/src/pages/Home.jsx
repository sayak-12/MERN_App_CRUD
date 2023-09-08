/* eslint-disable react/jsx-no-target-blank */
import ReactLogo from "../assets/react.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row } from "../components/Row";
import { RowHead } from "../components/RowHead";
import axios from "axios";

export const Home = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "#1d3684",
    fontWeight: "700",
  };

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((res) => {
        setContacts(res.data.content);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container home-grid">
      <div className="wrapper">
        <h1>List of Contacts:</h1>
        {contacts.length > 0 ? (
          <div className="contact-box">
            <RowHead />
            {contacts.map((contact, index) => (
              <Row contact={contact} key={index} index={index + 1} />
            ))}
          </div>
        ) : (
          <p>
            No contacts to show.{" "}
            <Link style={linkStyle} to={"/add"}>
              Add some!
            </Link>
          </p>
        )}
      </div>
      <div className="home-graphic">
        <img src={ReactLogo} alt="React Logo" title="React Logo" />
        <p>
          This{" "}
          <a
            href="https://github.com/noobchirag69/MERN_App_CRUD"
            target="_blank"
            title="Visit the GitHub repository of this project"
          >
            web application
          </a>{" "}
          has been built in MERN stack by{" "}
          <a
            href="https://github.com/noobchirag69"
            target="_blank"
            title="Visit the GitHub profile of the developer"
          >
            Sayak Raha
          </a>
          . Please visit the GitHub repository if you like this and it would be
          nice of you to give it a star. Thank you!
        </p>
      </div>
    </div>
  );
};
