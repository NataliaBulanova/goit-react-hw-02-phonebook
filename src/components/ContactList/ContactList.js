import PropTypes from "prop-types";
import { List, ContactText } from "./ContactList.styled";
import { Button } from "../ContactForm/ContactForm.styled";

const ContactList = ({ contacts, handleClick }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <ContactText>
              {name}: {number}
            </ContactText>
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
  ),
  handleClick: PropTypes.func.isRequired,
};

export default ContactList;
