import styled from "styled-components";

const SelectedMenuBlockTemplate = styled.div`
  display: flex;
  div {
    font-size: 1.2rem;
  }
  div:first-child {
    width: 300px;
  }
  div:nth-child(2) {
    width: 60px;
  }
  div:nth-child(5) {
    margin-left: 10px;
    width: 80px;
  }
  button {
    font-weight: bold;
    outline: none;
    border: none;
    border-radius: 4px;
    margin: 0.2rem;
    cursor: pointer;
    height: 1.4rem;
    font-size: 1rem;
    background: #ced4da;
  }
  button:nth-child(3) {
    width: 25px;
  }
  button:nth-child(4) {
    width: 25px;
  }
`;

export default function SelectedMenuBlock({ children }) {
  return <SelectedMenuBlockTemplate>{children}</SelectedMenuBlockTemplate>;
}
