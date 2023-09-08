/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const ContactCard = ({ contact, onDelete }) => {
  const handleClick = () => {
    let confirmDelete = confirm(
      "Are you sure you want to delete this contact?"
    );
    if (!confirmDelete) {
      return;
    } else {
      onDelete(contact._id);
    }
  };

  return (
    <div className="card">
      <h1 title="Name">{contact.name}</h1>
      <p title="Phone No.">
        <i className="fa-solid fa-phone"></i> {contact.phone}
      </p>
      <p title="Email Address">
        <i className="fa-solid fa-envelope"></i> {contact.email ? contact.email : "--"}
      </p>
      <div className="actions">
        <Link to={`/edit/${contact._id}`}>
          <i className="fa-solid fa-pen" title="Edit Contact"></i>
        </Link>
        <i
          onClick={handleClick}
          className="fa-solid fa-trash"
          title="Delete Contact"
        ></i>
      </div>
    </div>
  );
};
