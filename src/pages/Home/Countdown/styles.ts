import styled from "styled-components";

export const CountdownContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  font-family: "Roboto-Mono", monospace;
  font-size: 10rem;
  font-weight: bold;
  line-height: 8rem;
  margin: 2rem 0;
  & span {
    background: ${(props) => props.theme["gray-700"]};
    padding: 1rem;
    border-radius: 8px;
    color: ${(props) => props.theme["gray-100"]};
  }
  & .separator {
    padding: 2rem 0;
    font-family: "Roboto-Mono", monospace;
    font-size: 10rem;
    color: ${(props) => props.theme["green-500"]};
    background-color: transparent;
  }
`;