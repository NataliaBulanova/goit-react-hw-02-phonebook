import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import { Container } from "./Filter.styled";

const Filter = ({ value, onChange }) => {
  const filterInputId = nanoid();
  return (
    <Container>
      <label htmlFor={filterInputId}>Find contacts by name</label>
      <input
        id={filterInputId}
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </Container>
  );
};

Filter.propType = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
