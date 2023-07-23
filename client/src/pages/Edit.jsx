import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/details/${id}`)
      .then((res) => setContact(res.data.content));
  }, [id]);

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const updateContact = (e) => {
    e.preventDefault();
    if (contact.name == "" && contact.phone == "") {
      setErrorMsg("Name and Phone No. are mandatory!");
    } else if (contact.name == "") {
      setErrorMsg("Name is mandatory!");
    } else if (contact.phone == "") {
      setErrorMsg("Phone No. is mandatory!");
    } else {
      setErrorMsg("");
      const updatedContact = {
        name: contact.name,
        phone: contact.phone,
        email: contact.email,
      };
      axios
        .patch(`http://localhost:3000/edit/${id}`, updatedContact)
        .then((res) => {
          navigate("/");
          alert("The contact was updated successfully!");
        });
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h1>Edit Contact</h1>
        <form onSubmit={updateContact}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={contact.name}
            onChange={changeHandler}
            placeholder="e.g., John Doe"
          />
          <label htmlFor="phone">Phone No.</label>
          <input
            type="number"
            name="phone"
            id="phone"
            value={contact.phone}
            onChange={changeHandler}
            placeholder="9876543210"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={contact.email}
            onChange={changeHandler}
            placeholder="name@example.com"
          />
          <button type="submit">
            Save <i className="fa-solid fa-floppy-disk"></i>
          </button>
        </form>
      </div>
      <p className="errorMsg">{errorMsg}</p>
    </div>
  );
};
