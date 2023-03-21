import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  max-width: 100vw;
  height: 6rem;
  background-color: var(--colors-grey-9);
  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 6px 19px 6px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: -1px 6px 19px 6px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: -1px 6px 19px 6px rgba(0, 0, 0, 0.3);
  h1 {
    background: var(--colors-red);
    color: var(--colors-grey-10);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 137px;
    margin-right: 5px;
    font-family: var(--font-sans);
  }
  h2 {
    font-family: var(--font-bangers);
  }
`;
