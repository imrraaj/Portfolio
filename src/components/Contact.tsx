import React from "react";
import styled from "styled-components";
import { StyledButton } from "./styled/Button.styled";
const ContactBanner = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  gap:1rem;
  justify-content: center;
  align-items: center;
  padding: 5rem;
  color: white;
  font-size: large;
  `;
const Contact = () => {
  return <ContactBanner>Interested in working with us?
    <StyledButton>Contact Us</StyledButton>
  </ContactBanner>;
};
export default Contact;
