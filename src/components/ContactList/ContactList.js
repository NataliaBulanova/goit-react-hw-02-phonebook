import PropTypes from "prop-types";
import { List } from "./ContactList.styled";
import ContactItem from "../ContactItem/ContactItem";
import { Button } from "../ContactForm/ContactForm.styled";

const ContactList = ({ contacts, handleClick }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <ContactItem name={name} number={number} />
            <Button type="button" onClick={() => handleClick(id)}>
              Delete
            </Button>
          </li>
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
