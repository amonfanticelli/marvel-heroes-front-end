import { HeaderHome } from "../../components/Header";
import { Main, AllContent } from "./style";
import { CartList } from "../../components/CardList";
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
          <CartList />
        </Main>
        <Cart />
      </AllContent>
    </>
  );
};
