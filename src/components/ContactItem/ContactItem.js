import PropTypes from "prop-types";
import { ContactText } from "./ContactItem.styled";
import { Button } from "../ContactForm/ContactForm.styled";

const ContactItem = function ({ id, name, number, handleClick }) {
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
};

ContactItem.propType = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ContactItem;
