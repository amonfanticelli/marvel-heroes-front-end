import styled from "styled-components";

export const FooterComponent = styled.footer`
  width: 100%;
  height: 90px;
  max-width: 100vw;
  background-color: #0b0d0d;
  display: flex;
  align-items: center;
  justify-content: center;

  /* position: fixed; */
  bottom: 0;
  margin-top: 100px;

  p {
    font-family: var(--font-inter);
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: white;
  }
`;
