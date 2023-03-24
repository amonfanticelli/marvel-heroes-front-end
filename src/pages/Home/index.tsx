import { Header } from "../../components/Header";
import {
  Main,
  AllContent,
  ArrowButtonRight,
  ArrowButtonBox,
  ArrowButtonLeft,
  LoadingBox,
} from "./style";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { CardList } from "../../components/CardList";
import { Cart } from "../../components/Cart";
import { useEffect, useContext } from "react";
import { Context } from "../../context/context";

export const Home = () => {
  const { getHQs, showNext, isLoading } = useContext(Context);

  useEffect(() => {
    getHQs();
    // showNext();
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
              <ArrowButtonBox>
                <BsArrowLeft className="iconArrowLeft" />

                <BsArrowRight className="iconArrowRight" />
              </ArrowButtonBox>
            </>
          )}
        </Main>
        <Cart />
      </AllContent>
    </>
  );
};
