import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
  flex-direction: column;

  & > li {
    margin-bottom: 10px;
  }
`;

export const ContactText = styled.span`
  padding-right: 10px;
`;
