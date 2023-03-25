import styled, { keyframes } from "styled-components";

const moveArrow = keyframes`
  0% {
      margin-right: 0px;
  }

  50% {
      margin-right: 7px;
  }

  100% {
      margin-right: 0px;
  }
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1090px;
  gap: 1rem;

  @media screen and (max-width: 930px) {
    display: flex;
    justify-content: start;
    flex-wrap: unset;
    max-width: none;
    overflow-x: scroll;
    width: 100%;
  }
`;

export const ArrowButtonBox = styled.div`
  width: 100%;
  max-width: 1090px;
  display: flex;
  justify-content: space-between;

  .iconArrowLeft {
    height: 30px;
    width: 40px;
    cursor: pointer;
    &:hover {
      animation: ${moveArrow} 1s infinite;
    }
  }

  .iconArrowRight {
    height: 30px;
    width: 40px;
    cursor: pointer;
  }
`;
