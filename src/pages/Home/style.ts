import styled from "styled-components";

export const AllContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 20px;
    padding-bottom: 20px;
    padding-right: 20px;
  }
`;

export const Main = styled.main`
  display: flex;
  width: 60%;

  max-width: 1300px;
  margin-top: 2rem;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;
