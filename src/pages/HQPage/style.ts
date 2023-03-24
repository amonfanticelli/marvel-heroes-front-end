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

  section {
    display: flex;
    flex-direction: column;
    border: 1px solid red;
    width: 40%;
    h4 {
      margin-bottom: 1rem;
    }
  }
`;

export const CreatorsBox = styled.div`
  border: 1px solid red;
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

export const ImagesSection = styled.section``;
