import styled from "styled-components";

export const CardElement = styled.li`
  width: 23%;
  min-width: 300px;
  height: 23rem;
  border: 1px solid black;
  display: flex;
  flex-direction: column;

  figure {
    width: 100%;
    height: 12rem;
  }
  img {
    width: 100%;
    height: 100%;
    transition: transform 0.2s;
  }
  img:hover {
    transform: scale(1.1);
  }
  h6 {
    display: flex;
    align-self: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-family: var(--font-bangers);
    font-weight: 400;
    font-size: 26px;
    align-self: center;
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
    border: var(--colors-red);
    max-width: 100px;
    border-radius: 4px;
    padding: 9px;
    cursor: pointer;
    font-family: var(--font-inter);
    font-size: 1rem;
  }
`;
