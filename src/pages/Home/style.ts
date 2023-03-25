import styled, { keyframes } from "styled-components";

const endlessCicle = keyframes`


  0% { 
    transform: rotate(0deg); 
  }


  100% { 
    transform: rotate(360deg); 
  }


`;

export const AllContent = styled.div`
  display: flex;
  justify-content: center;
  min-height: 900px;

  @media screen and (max-width: 930px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-left: 20px;
    padding-bottom: 20px;
    padding-right: 20px;
    min-height: 1200px;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 60%;

  max-width: 1300px;
  margin-top: 2rem;
  @media screen and (max-width: 930px) {
    width: 100%;
  }
`;

export const LoadingBox = styled.div`
  margin: auto;

  border: 20px solid var(--colors-grey-8);

  border-radius: 50%;

  border-top: 20px solid var(--colors-red);

  width: 200px;

  height: 200px;

  animation: ${endlessCicle} 4s linear infinite;
`;
