import styled, { keyframes, css } from "styled-components";

const pulse = keyframes`
	0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
	}

	70% {
		transform: scale(1);
		box-shadow: 0 0 0 10px var(--colors-yellow);
	}

	100% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 var(--colors-yellow);
	}
`;

export const CardElement = styled.li<{ rare: boolean }>`
  width: 20%;
  min-width: 250px;
  background: var(--colors-grey-9);
  border: ${({ rare }) =>
    rare === false
      ? "1px solid ${var(--colors-grey-9)}"
      : "1px solid var(--colors-yellow)"};
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
  transform: scale(1);
  animation: ${({ rare }) =>
    rare === false
      ? ""
      : css`
          ${pulse} 2s infinite
        `};

  .linkToHQ {
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
    /* display: flex;
    align-items: center;
    justify-content: center; */
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3; /* start showing ellipsis when 3rd line is reached */
    white-space: pre-wrap; /* let the text wrap preserving spaces */
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

export const BlankBox = styled.div`
  height: 1.5rem;
`;

export const RareTag = styled.span`
  font-family: var(--font-inter);
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.75rem;
  color: var(--colors-gold);
  height: 1.5rem;
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
