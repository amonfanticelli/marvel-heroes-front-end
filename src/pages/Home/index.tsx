import { Header } from "../../components/Header";
import { Main, AllContent, LoadingBox } from "./style";
import { CardList } from "../../components/CardList";
import { Cart } from "../../components/Cart";
import { useEffect, useContext } from "react";
import { Context } from "../../context/context";
import { Footer } from "../../components/Footer";

export const Home = () => {
  const { getHQs, isLoading, comicBooks } = useContext(Context);

  useEffect(() => {
    if (!comicBooks.length) {
      getHQs();
    }
  }, [comicBooks]);
  return (
    <>
      <Header />

      <AllContent>
        <Main>{isLoading ? <LoadingBox /> : <CardList />}</Main>
        <Cart />
      </AllContent>
      <Footer />
    </>
  );
};
