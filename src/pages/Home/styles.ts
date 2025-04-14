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

export const BtnCountDown = styled.button`
  background: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme["gray-100"]};
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
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    background: ${(props) => props.theme["green-700"]};
  }
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin: 0 auto;
  font-size: 1rem;
  /* & input {
    padding: 0.5rem;
    border-radius: 8px;
    border: none;
    background: ${(props) => props.theme["gray-800"]};
    color: ${(props) => props.theme["gray-100"]};
    
  } */
`;

const BaseInput = styled.input`
  background-color: transparent;
  padding: 0.5rem;
  border: none;
  border-radius: none;
  border-bottom: 2px solid ${(props) => props.theme["gray-500"]};
  color: ${(props) => props.theme["gray-100"]};
  font-size: inherit;
  &:focus {
      outline: none;
      border-color: ${(props) => props.theme["green-500"]};
      box-shadow: none;
    }
    &::placeholder{
      color: ${(props) => props.theme["gray-500"]}; 
    }
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;
  &::-webkit-calendar-picker-indicator {
    display: none !important;   
    }
`;

export const MinuteInput = styled(BaseInput)`
  width: 4rem;
`;

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
