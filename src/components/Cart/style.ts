import styled, { keyframes } from "styled-components";

const appear = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }

  20% {
    opacity: 0;
    transform: scale(0);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Aside = styled.aside`
  width: 25%;
  min-width: 23.438rem;
  height: 29rem;
  background: var(--colors-grey-6);
  margin-top: 2rem;
  box-shadow: 2px 1px 47px -11px rgba(0, 0, 0, 0.51);
  -webkit-box-shadow: 2px 1px 47px -11px rgba(0, 0, 0, 0.51);
  -moz-box-shadow: 2px 1px 47px -11px rgba(0, 0, 0, 0.51);
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const CartSection = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TitleBox = styled.div`
  background: var(--colors-grey-10);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  h3 {
    font-weight: 400;
    font-family: var(--font-bangers);
    color: var(--colors-red);
  }
  .titleCartIcon {
    color: var(--colors-grey-1);
    width: 25px;
    height: 30px;
  }
`;

export const CartList = styled.ul`
  overflow: auto;
  overflow-x: hidden;
  width: 100%;
  height: 24.4rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 20px;
  ::-webkit-scrollbar {
    width: 14px;
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 14px 14px var(--colors-red);
    border: solid 4px transparent;
    border-radius: 14px;
  }

  ::-webkit-scrollbar-button {
    display: none;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    box-shadow: inset 0 0 14px 14px var(--colors-red);
  }

  ::-webkit-scrollbar-track {
    display: none;
  }
`;

export const EmptyCartBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  .emptyCartIcon {
    width: 100px;
    height: 100px;
    display: flex;
    align-self: center;
    justify-self: center;
  }
  p {
    font-family: var(--font-inter);
    align-self: center;
  }
`;

export const CardElementCart = styled.li`
  display: flex;
  gap: 10px;
  justify-content: space-evenly;
  animation: ${appear} 0.4s ease-out;
  figure {
    min-width: 100px;
    max-width: 100px;

    min-height: 100px;
    max-height: 100px;
    width: 100px;
    height: 100px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  button {
    border: none;
    cursor: pointer;
    height: 20px;
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    align-self: center;
    .trashcanCartItem {
      color: black;
      &:hover {
        color: var(--colors-red);
        transition: 0.4s;
      }
    }
  }
`;

export const TitleBoxCartItem = styled.div`
  width: 30%;
`;

export const ComicTitleCart = styled.span`
  font-family: var(--font-bangers);
  font-weight: 400;
  font-size: 1rem;
`;

export const ComicBoxInfoCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;

export const PriceCart = styled.span`
  font-family: var(--font-inter);
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.75rem;
  color: var(--colors-grey-2);
`;

export const RareTagCart = styled.span`
  font-family: var(--font-inter);
  font-style: normal;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1.75rem;
  color: var(--colors-gold);
`;

export const TotalPriceSession = styled.section`
  width: 100%;
  min-width: 23.438rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-bottom: 15px;

  background: var(--colors-grey-6);

  span {
    font-family: var(--font-inter);
    font-weight: 500;
  }
  button {
    /* margin-top: 1rem; */
    color: var(--colors-white);
    background: var(--colors-red);
    border: 1px solid transparent;
    width: 85%;
    border-radius: 4px;
    padding: 9px;
    cursor: pointer;
    font-family: var(--font-inter);
    font-size: 1rem;
    &:hover {
      background: var(--colors-white);
      color: var(--colors-red);
      border: 1px solid var(--colors-red);
      transition: 0.4s;
    }
  }
`;
