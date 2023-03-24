import {
  Aside,
  TitleBox,
  CartSection,
  CartList,
  EmptyCartBox,
  CardElementCart,
  TitleBoxCartItem,
  ComicBoxInfoCart,
  PriceCart,
  ComicTitleCart,
  RareTagCart,
  TotalPriceSession,
} from "./style";
import { RiShoppingCartFill } from "react-icons/ri";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { IoTrashBinOutline } from "react-icons/io5";
import { Context } from "../../context/context";
import { useContext } from "react";

export const Cart = () => {
  const {
    cartItens,
    removeCartItem,
    removeAllCart,
    calculateTotalPrice,
    totalPriceDiscount,
  } = useContext(Context);
  return (
    <>
      <Aside>
        <CartSection>
          <TitleBox>
            <h3>CARRINHO</h3>
            <RiShoppingCartFill className="titleCartIcon" />
          </TitleBox>
          {!cartItens.length ? (
            <EmptyCartBox>
              <TfiShoppingCartFull className="emptyCartIcon" />
              <p>Adicione quadrinhos ao seu carrinho!</p>
            </EmptyCartBox>
          ) : (
            <CartList>
              {cartItens.map((comicBookCart) => (
                <CardElementCart key={comicBookCart.id}>
                  <figure>
                    <img src={comicBookCart.thumbnail.path + ".jpg"} alt="" />
                  </figure>
                  <TitleBoxCartItem>
                    <ComicTitleCart>{comicBookCart.title}</ComicTitleCart>
                  </TitleBoxCartItem>
                  <ComicBoxInfoCart>
                    <PriceCart>
                      {" "}
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(comicBookCart.prices[0].price)}
                    </PriceCart>
                    {!comicBookCart.rare ? (
                      <></>
                    ) : (
                      <RareTagCart>Rare!</RareTagCart>
                    )}
                  </ComicBoxInfoCart>
                  <button onClick={() => removeCartItem(comicBookCart.id!)}>
                    <IoTrashBinOutline className="trashcanCartItem" />
                  </button>
                </CardElementCart>
              ))}
            </CartList>
          )}
        </CartSection>
        {!cartItens.length ? (
          <></>
        ) : (
          <TotalPriceSession>
            <span>
              Valor total:{" "}
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(calculateTotalPrice)}
            </span>
            <span>
              Valor do desconto:{" "}
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(calculateTotalPrice - totalPriceDiscount)}
            </span>
            <span>
              Valor com desconto:{" "}
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(totalPriceDiscount)}
            </span>

            <button onClick={() => removeAllCart()}>Limpar carrinho</button>
          </TotalPriceSession>
        )}
      </Aside>
    </>
  );
};
