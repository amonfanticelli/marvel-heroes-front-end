import styled from "styled-components";

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  @media screen and (max-width: 900px) {
    display: flex;
    overflow-x: scroll;
    flex-wrap: unset;
  }
`;
