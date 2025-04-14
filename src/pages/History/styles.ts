import styled from "styled-components";

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem 3rem;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2rem;
    color: ${(props) => props.theme["gray-100"]};
    margin-bottom: 2rem;
  }
`;
export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
    th {
      background-color: ${(props) => props.theme["gray-600"]};
      padding: 1rem;
      text-align: left;
      font-size: 0.875rem;
      color: ${(props) => props.theme["gray-100"]};
      line-height: 1.6;
      &:first-child {
        border-top-left-radius: 8px;
      }
      &:last-child {
        border-top-right-radius: 8px;
      }
    }
    tr {
      td {
        background-color: ${(props) => props.theme["gray-700"]};
        padding: 1rem;
        border-top: 4px solid ${(props) => props.theme["gray-800"]};
        font-size: 0.875rem;
        color: ${(props) => props.theme["gray-300"]};
        line-height: 1.6;
        border-bottom: none;
        &:first-child {
          border-bottom-left-radius: 8px;
          width: 50%;
        }
        &:last-child {
          border-bottom-right-radius: 8px;
        }
      }
    }
  }
`;

const STATUS_COLORS = {
  yellow: "yellow-500",
  green: "green-500",
  red: "red-500",
} as const;

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS;
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: bold;
  padding: 0.5rem;
  border-radius: 8px;
  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
  }
`;
