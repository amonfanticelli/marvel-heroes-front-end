import styled from "styled-components";

export const AllContent = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Main = styled.main`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 2rem;
  justify-content: center;

  img {
    margin-right: 2rem;
    width: 25%;
    min-width: 375px;
    height: 600px;
  }

  div {
    border: 1px solid red;
    width: 40%;
    h4 {
    }
  }
`;

export const DescriptionBox = styled.div`
  border: 1px solid red;
  width: 66.7%;
  display: flex;
  align-self: center;
`;
