import styled from "styled-components";
import backgroundImg from "../../assets/great-power-comes.jpg";
import backgroundMobile from "../../assets/thanos2.jpg";

export const AllContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 500;
  /* background: #00003e; */
  justify-content: flex-end;
`;

// export const BackgroundImgBox = styled.div`
//   background-image: url(${backgroundImg});

//   filter: blur(11px);
//   -webkit-filter: blur(11px);
//   z-index: -1;
//   height: 100%;
//   position: absolute;
//   width: 100%;
//   background-position: center top;
//   background-repeat: no-repeat;
//   background-size: 100% 100%;

//   @media screen and (max-width: 1340px) {
//     background-image: url(${backgroundMobile});
//     filter: blur(9px);
//     -webkit-filter: blur(9px);
//   }
// `;

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
    height: 500px;
    margin-right: 1rem;

    @media screen and (max-width: 910px) {
      width: 90%;
      min-width: 375;
      margin-bottom: 1rem;
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
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.75rem;
    color: black;
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
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.75rem;
    color: black;
    text-align: justify;
    text-justify: inter-word;
  }
`;

export const ImagesList = styled.ul`
  min-height: 200px;
  width: 70%;
  display: flex;
  justify-content: start;
  gap: 25.4px;
  overflow-x: auto;
  overflow-y: hidden;
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

  @media screen and (max-width: 910px) {
    width: 100%;
    justify-content: start;
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
