import React from "react";
import { StyledBanner } from "./styled/Banner.styled";
import { StyledButton } from "./styled/Button.styled";
import Container from "./styled/Container.styled";
import { MdOutlineEmail } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Resume from "./Resume";
import Project from "./Project";
import About from "./About";
import Contact from "./Contact";
const Home = () => {
  return (
    <>
      <Container>
        <StyledBanner>
          <span>Hey, I'm</span>
          <h1>Raj Patel</h1>
          <p>
            I'm a software engineer based in Toronto, Canada and also a
            communication and journalism student. I enjoy creating things that
            live on the internet, whether that be websites, applications, or
            anything in between. I have been freelancing for a year now while
            studying at the university and I've manage to gain a decent amount
            of experience and valuable knowledge from all different kinds of
            fields throughout my projects/work.
          </p>
        </StyledBanner>

        <StyledButton color="blue">
          <MdOutlineEmail />
          Send an Email
        </StyledButton>
        <StyledButton>
          <BsGithub />
          Github
        </StyledButton>
        <StyledButton>
          <BsLinkedin />
          LinkedIn
        </StyledButton>
      </Container>

      <Resume />
      <Container>
        <About />
        <Project />
      </Container>
      <Contact />
    </>
  );
};
export default Home;
