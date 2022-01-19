import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border: 1px solid;
  max-width: fit-content;
  padding: 20px;
  height: 145px;
  justify-content: space-between;
  align-items: start;
`;

export const Button = styled.button`
  border-radius: 4px;
  cursor: pointer;
  padding: 4px;

  &:hover {
    background-color: #b4dfd0;
  }
`;
