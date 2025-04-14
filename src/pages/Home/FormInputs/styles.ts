import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin: 0 auto;
  font-size: 1rem;
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