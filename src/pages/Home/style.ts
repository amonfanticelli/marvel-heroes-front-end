import styled, { keyframes } from "styled-components";

const infiniteCicle = keyframes`


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
  flex-direction: column;
  width: 60%;

  max-width: 1300px;
  margin-top: 2rem;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const LoadingBox = styled.div`
  margin: auto;

  border: 20px solid #eaf0f6;

  border-radius: 50%;

  border-top: 20px solid #ff7a59;

  width: 200px;

  height: 200px;

  animation: ${infiniteCicle} 4s linear infinite;
`;
export const ArrowButtonBox = styled.div`
  width: 94.7%;
  border: 1px solid red;
  display: flex;
  justify-content: space-between;

  .iconArrowLeft {
    height: 30px;
    width: 40px;
    cursor: pointer;
  }

  .iconArrowRight {
    height: 30px;
    width: 40px;
    cursor: pointer;
  }
`;

export const ArrowButtonRight = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;
export const ArrowButtonLeft = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;
