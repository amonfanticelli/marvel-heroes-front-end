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
  Form,
} from "./style";
import { RiShoppingCartFill } from "react-icons/ri";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { IoTrashBinOutline } from "react-icons/io5";
import { Context } from "../../context/context";
import { useContext } from "react";
import { Input } from "../Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { cupomSchema } from "../schemas/cupom";

export const Cart = () => {
  const {
    cartItens,
    removeCartItem,
    removeAllCart,
    calculateTotalPrice,
    totalPriceDiscount,
    setCumpomType,
  } = useContext(Context);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(cupomSchema),
  });

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
                    <img
                      src={
                        comicBookCart.thumbnail.path +
                        "." +
                        comicBookCart.thumbnail.extension
                      }
                      alt=""
                    />
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
                    <IoTrashBinOutline
                      id="trashCan"
                      className="trashcanCartItem"
                    />
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
            <Form onSubmit={handleSubmit(({ cupom }) => setCumpomType(cupom))}>
              <Input
                {...register("cupom")}
                id="cupom"
                placeholder="Insira seu cupom"
                type="text"
                error={errors?.cupom}
              />
              <button className="cupomButton" type="submit">
                Aplicar
              </button>
            </Form>
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
