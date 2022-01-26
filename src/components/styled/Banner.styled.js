import styled from "styled-components"


export const StyledBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 3rem;
  flex-direction: column;
  min-height: 80vh;

  h1 {
    font-size: 8rem;
    background-image: linear-gradient(
      45deg,
      rgb(107, 41, 176) 0%,
      rgb(107, 41, 176) 26%,
      rgb(201, 24, 187) 26%,
      rgb(201, 24, 187) 45%,
      rgb(224, 20, 189) 45%,
      rgb(224, 20, 189) 53%,
      rgb(83, 45, 173) 53%,
      rgb(83, 45, 173) 59%,
      rgb(154, 33, 181) 59%,
      rgb(154, 33, 181) 62%,
      rgb(130, 37, 178) 62%,
      rgb(130, 37, 178) 66%,
      rgb(177, 28, 184) 66%,
      rgb(177, 28, 184) 77%,
      rgb(248, 16, 192) 77%,
      rgb(248, 16, 192) 100%
    );
    -webkit-background-clip: text;
    /* background-clip: border-box; */
    -webkit-text-fill-color: transparent;
  }
`;