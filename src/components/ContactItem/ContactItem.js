import PropTypes from "prop-types";
import { ContactText } from "./ContactItem.styled";
// import { Button } from "../ContactForm/ContactForm.styled";

const ContactItem = function ({ name, number }) {
  return (
    <ContactText>
      {name}: {number}
    </ContactText>
  );
};

ContactItem.propType = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ContactItem;
