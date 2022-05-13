import styled, { css } from "styled-components";
type styleProps = { isUsingCalc: boolean };
const darkmode = css`
  color: white;
  background-color: var(--primary);
  *::selection {
    color: var(--primary);
    background-color: white;
  }
`;
export const Main = styled.section`
  width: 100%;
  max-width: 800px;
  background-color: white;
  color: var(--primary);
  padding: min(5%, 2rem);
  border-radius: 20px;
  transition: all 0.3s linear;
  overflow: hidden;
  & > * + * {
    margin-top: 0.5rem;
  }
  ${(props: styleProps) => (props.isUsingCalc ? darkmode : "")}
`;
export const Container = styled.main`
  padding: 1rem;
  min-height: 100vh;
  display: grid;
  place-items: center;
`;
