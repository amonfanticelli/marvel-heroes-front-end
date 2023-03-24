import styled from "styled-components";

export const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1090px;
  gap: 1rem;
  @media screen and (max-width: 910px) {
    display: flex;
    overflow-x: scroll;
    flex-wrap: unset;
  }
`;
