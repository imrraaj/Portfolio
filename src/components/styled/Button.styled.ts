import styled from "styled-components";


type StyledButtonType = {
    color?: string,
    background?:string
}
export const StyledButton = styled.button<StyledButtonType>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0.875rem 1rem;
  margin-right: 1rem;
  cursor: pointer;
  border-radius: 4px;
  position: relative;
  border: 4px solid transparent;
  background-clip: padding-box;
  background-color: white;
  font-size: 1rem;
  font-weight:bold;

  &:after {
    content: "";
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    z-index: -1;
    border-radius: 4px;
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
  }
`;