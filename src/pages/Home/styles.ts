import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${(props) => props.theme["gray-800"]};
  color: ${(props) => props.theme["gray-100"]};
  text-align: center;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  gap: 2rem;
`;

const BaseBtnCountDown = styled.button`
padding: 1rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
`;

export const BtnCountDown = styled(BaseBtnCountDown)`   
  background: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme["gray-100"]};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    background: ${(props) => props.theme["green-700"]};
  }
`;

export const BtnStopCountDown = styled(BaseBtnCountDown)`   
  background: ${(props) => props.theme["red-500"]};
  color: ${(props) => props.theme["gray-100"]};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    background: ${(props) => props.theme["green-700"]};
  }
`;
