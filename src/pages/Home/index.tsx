import { HeaderHome } from "../../components/Header";
import { Main, Body } from "./style";
import { CartList } from "../../components/CardList";
import { Cart } from "../../components/Cart";

export const Home = () => {
  return (
    <>
      <HeaderHome />
      <Body>
        <Main>
          <CartList />
        </Main>
        <Cart />
      </Body>
    </>
  );
};
