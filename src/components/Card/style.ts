import styled from "styled-components";

export const CardElement = styled.li`
  width: 20%;
  min-width: 250px;
  background: var(--colors-grey-9);
  border: 1px solid var(--colors-grey-9);
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;

  figure {
    width: 100%;
    height: 15rem;
  }
  img {
    width: 100%;
    height: 100%;
    transition: transform 0.2s;
  }
  img:hover {
    transform: scale(1.1);
  }
`;

export const TitleBox = styled.div`
  display: flex;
  align-self: center;
  width: 90%;
  display: flex;
  min-height: 5rem;
  justify-content: center;

  margin-top: 1rem;
  margin-bottom: 1rem;
  h6 {
    font-family: var(--font-bangers);
    font-weight: 400;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Price = styled.span`
  font-family: var(--font-inter);
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.75rem;
  color: var(--colors-grey-2);
`;

export const RareTag = styled.span`
  font-family: var(--font-inter);
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.75rem;
  color: var(--colors-gold);
`;

export const ComicBoxInfo = styled.div`
  width: 100%;

  padding-left: 20px;
  padding-right: 20px;
  gap: 5px;
  display: flex;
  align-self: center;
  flex-direction: column;
  button {
    color: var(--colors-white);
    background: var(--colors-red);
    border: 1px solid transparent;
    max-width: 100px;
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
