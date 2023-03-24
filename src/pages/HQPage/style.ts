import styled from "styled-components";

export const AllContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Main = styled.main`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 2rem;

  width: 70%;
  @media screen and (max-width: 910px) {
    width: 95%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  img {
    width: 35%;
    min-width: 375px;
    height: 600px;
    margin-right: 1rem;
    @media screen and (max-width: 910px) {
      width: 90%;
      min-width: 375;
    }
  }

  section {
    display: flex;
    flex-direction: column;

    width: 65%;
    @media screen and (max-width: 910px) {
      width: 100%;
    }
    h4 {
      margin-bottom: 1rem;
    }
  }
`;

export const CreatorsBox = styled.div`
  margin-bottom: 1rem;
  span {
    font-family: var(--font-inter);
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.75rem;
    color: var(--colors-grey-2);
    text-align: justify;
    text-justify: inter-word;
  }
`;

export const DescriptionBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  h5 {
  }
  p {
    font-family: var(--font-inter);
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.75rem;
    color: var(--colors-grey-2);
    text-align: justify;
    text-justify: inter-word;
  }
`;

export const ImagesList = styled.ul`
  width: 70%;
  display: flex;
  justify-content: center;
  gap: 25.4px;
  flex-wrap: wrap;

  @media screen and (max-width: 910px) {
    width: 100%;
  }
  li {
    width: 23%;
    min-width: 200px;

    height: 350px;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
