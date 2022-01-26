import styled from "styled-components";

const AboutContainer = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: 4rem;
  grid-row-gap: 3rem;
  grid-template-columns: 0.5fr 1fr 1fr;
  grid-template-rows: auto;
  h2 {
    color: red;
    grid-row: 1/4;
  }
`;
const AboutCard = styled.div`
  background-color: white;
  display: flex;
  padding: 2rem;
  gap: 0.875rem;
  flex-direction: column;
`;
const About = () => {
  return (
    <>
      <AboutContainer>
        <h2>Title</h2>
        <AboutCard>
          <span>01.</span>
          <h4>We create things quick.</h4>
          <p>
            What would usually take months of development can be done within a
            matter of weeks.
          </p>
        </AboutCard>
        <AboutCard>
          <span>01.</span>
          <h4>We create things quick.</h4>
          <p>
            What would usually take months of development can be done within a
            matter of weeks.
          </p>
        </AboutCard>
        <AboutCard>
          <span>01.</span>
          <h4>We create things quick.</h4>
          <p>
            What would usually take months of development can be done within a
            matter of weeks.
          </p>
        </AboutCard>
        <AboutCard>
          <span>01.</span>
          <h4>We create things quick.</h4>
          <p>
            What would usually take months of development can be done within a
            matter of weeks.
          </p>
        </AboutCard>
      </AboutContainer>
    </>
  );
};

export default About;
