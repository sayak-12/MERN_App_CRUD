import { useParams, useNavigate } from "react-router-dom";
import { ContactCard } from "../components/ContactCard";
import { useState, useEffect } from "react";
import axios from "axios";

export const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [contact, setContact] = useState({});

  const deleteContact = (id) => {
    axios
      .delete(`http://localhost:3000/delete/${id}`)
      .then((res) => navigate("/"));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/details/${id}`)
      .then((res) => setContact(res.data.content));
  }, [id]);

  return (
    <div className="container">
      <ContactCard contact={contact} onDelete={deleteContact} />
    </div>
  );
};
