import { Header } from "../../components/Header";
import { Main, AllContent, LoadingBox } from "./style";
import { CardList } from "../../components/CardList";
import { Cart } from "../../components/Cart";
import { useEffect, useContext } from "react";
import { Context } from "../../context/context";
import { Footer } from "../../Footer";

export const Home = () => {
  const { getHQs, nextPageTest, isLoading } = useContext(Context);

  useEffect(() => {
    getHQs();
  }, []);
  return (
    <>
      <Header />

      <AllContent>
        <Main>
          {isLoading ? (
            <LoadingBox></LoadingBox>
          ) : (
            <>
              <CardList />
            </>
          )}
        </Main>
        <Cart />
      </AllContent>
      <Footer />
    </>
  );
};
