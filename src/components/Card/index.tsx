import { CardElement, ComicBoxInfo, RareTag, Price, TitleBox } from "./style";
import { useContext } from "react";
import { Context } from "../../context/context";

export const Card = () => {
  const { comicBooks, addCartItem } = useContext(Context);

  return (
    <>
      {comicBooks.map((comic) => (
        <CardElement key={comic.id}>
          <figure>
            <img src={comic.thumbnail.path + ".jpg"} alt="" />
          </figure>
          <TitleBox>
            <h6>{comic.title}</h6>
          </TitleBox>

          <ComicBoxInfo>
            <Price>
              {" "}
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(comic.prices[0].price)}
            </Price>
            <RareTag>Rare!</RareTag>
            <button onClick={() => addCartItem(comic)}>Comprar</button>
          </ComicBoxInfo>
        </CardElement>
      ))}
    </>
  );
};
