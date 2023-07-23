import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Add = () => {
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (contact.name == "" && contact.phone == "") {
      setErrorMsg("Name and Phone No. are mandatory!");
    } else if (contact.name == "") {
      setErrorMsg("Name is mandatory!");
    } else if (contact.phone == "") {
      setErrorMsg("Phone No. is mandatory!");
    } else {
      setErrorMsg("");
      axios.post("http://localhost:3000/add", contact).then((res) => {
        navigate("/");
        alert("The contact was added successfully!");
      });
    }
  };
  return (
    <div className="container">
      <div className="form-box">
        <h1>Create Contact</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            value={contact.name}
            onChange={changeHandler}
            type="text"
            name="name"
            id="name"
            placeholder="e.g., John Doe"
          />
          <label htmlFor="phone">Phone No.</label>
          <input
            value={contact.phone}
            onChange={changeHandler}
            type="number"
            name="phone"
            id="phone"
            placeholder="9876543210"
          />
          <label htmlFor="email">Email</label>
          <input
            value={contact.email}
            onChange={changeHandler}
            type="email"
            name="email"
            id="email"
            placeholder="name@example.com"
          />
          <button type="submit">
            Save Contact <i className="fa-solid fa-floppy-disk"></i>
          </button>
        </form>
      </div>
      <p className="errorMsg">{errorMsg}</p>
    </div>
  );
};
