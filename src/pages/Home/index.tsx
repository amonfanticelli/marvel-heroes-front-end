import { HeaderHome } from "../../components/Header";
import { Main, AllContent } from "./style";
import { CardList } from "../../components/CardList";
import { Cart } from "../../components/Cart";
import { useEffect, useContext } from "react";
import { Context } from "../../context/context";

export const Home = () => {
  const { getHQs } = useContext(Context);

  useEffect(() => {
    getHQs();
  }, []);
  return (
    <>
      <HeaderHome />
      <AllContent>
        <Main>
          <CardList />
        </Main>
        <Cart />
      </AllContent>
    </>
  );
};
