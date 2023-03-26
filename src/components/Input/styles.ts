import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 60%;
  margin-right: 1rem;

  input {
    width: 100%;
    height: 40px;
    padding-left: 1rem;
    background-color: var(--colors-grey-10);
    border: 1.5px solid var(--colors-grey-7);
    border-radius: 4px;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.625rem;
    transition: 0.2s;

    &:hover {
      background-color: var(--colors-grey-8);
      outline-color: var(--colors-grey-8);
    }

    &::placeholder {
      font-weight: 400;
      font-size: 16px;
      color: var(--colors-grey-3);
    }

    &:focus {
      background-color: var(--colors-grey-9);
      outline-color: var(--colors-brand-2);
    }
  }

  svg {
    position: absolute;
    color: red;
    right: 30%;
    color: #f10;
    width: 20px;
    height: 20px;
    bottom: -2px;
    right: 5px;
  }
`;

export const Error = styled.div`
  position: relative;
  display: flex;

  &:hover span {
    opacity: 1;
  }

  span {
    width: 155px;
    position: absolute;
    background-color: #f10;
    padding: 4px 15px;
    border-radius: 3px;
    right: 6.6px;
    top: 5px;
    opacity: 0;
    transition: opacity 0.4s;

    &::before {
      content: "";
      border-style: solid;
      border-width: 10px 7px 0 7px;
      transform: rotate(60deg);
      border-color: #f10 transparent;
      position: absolute;
      top: -5px;
      right: 3px;
    }
  }
`;
