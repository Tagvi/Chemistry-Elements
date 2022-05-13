import styled from "styled-components";

type styleProps = { isUsingCalc: boolean };
export const Main = styled.header`
  display: flex;
  justify-content: space-between;
  svg {
    font-size: 2rem;
    border-radius: 10px;
    box-sizing: content-box;
    cursor: pointer;
    border: 3px solid currentColor;
    color: ${(props: styleProps) =>
      props.isUsingCalc ? "white" : "var(--primary)"};
  }
  button {
    background-color: transparent;
    border: none;
  }
  input {
    background: transparent;
    border: none;
    outline: none;
    color: white;
    font-size: 1rem;
  }
`;
