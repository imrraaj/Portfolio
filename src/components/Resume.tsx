import styled from "styled-components"
const ResumeBanner = styled.div`
  background-color: black;
  margin-top: 5rem;
  padding: 4rem 2rem;
  display: flex;
  gap: 3rem;
  justify-content: space-evenly;
  align-items: center;
`;
const ResumeCard = styled.div`
  background-color: white;
  display: flex;
  padding: 2rem;
  gap: 0.875rem;
  flex-direction: column;
`;

const Resume = () => {
  return (
    <ResumeBanner>
      <ResumeCard>
        icon
        <h1>Title</h1>
        <p>
          We use Figma to create everything from user flows, wireframes, UI
          mockups and prototyping.
        </p>
      </ResumeCard>
      <ResumeCard>
        icon
        <h1>Title</h1>
        <p>
          We use Figma to create everything from user flows, wireframes, UI
          mockups and prototyping.
        </p>
      </ResumeCard>
      <ResumeCard>
        icon
        <h1>Title</h1>
        <p>
          We use Figma to create everything from user flows, wireframes, UI
          mockups and prototyping.
        </p>
      </ResumeCard>
    </ResumeBanner>
  );
};
export default Resume;
