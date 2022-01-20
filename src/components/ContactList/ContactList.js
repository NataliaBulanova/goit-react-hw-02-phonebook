import PropTypes from "prop-types";
import { List } from "./ContactList.styled";
import ContactItem from "../ContactItem/ContactItem";

const ContactList = ({ contacts, handleClick }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            name={name}
            number={number}
            handleClick={handleClick}
          />
        );
      })}
    </List>
  );
};

ContactList.propType = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ContactList;
