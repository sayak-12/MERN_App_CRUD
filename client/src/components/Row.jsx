import { Link } from "react-router-dom";

export const Row = ({ contact, index }) => {
  const linkStyle = {
    color: "#1d3684",
    fontWeight: "700",
    textDecoration: "none",
  };

  return (
    <div className="row">
      <div className="rowIndex">
        <p className="rowdata">{index}</p>
      </div>
      <div className="rowName">
        <p className="rowdata">{contact.name}</p>
      </div>
      <div className="rowPhone">
        <p className="rowdata">{contact.phone}</p>
      </div>
      <div className="rowLink">
        <p className="rowData">
          <Link style={linkStyle} to={`/details/${contact._id}`}>
            <i
              className="fa-solid fa-arrow-up-right-from-square"
              title="View details of this person"
            ></i>
          </Link>
        </p>
      </div>
    </div>
  );
};
