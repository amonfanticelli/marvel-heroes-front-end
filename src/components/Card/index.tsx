import {
  CardElement,
  ComicBoxInfo,
  RareTag,
  Price,
  TitleBox,
  BlankBox,
} from "./style";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/context";

export const Card = () => {
  const { comicBooks, addCartItem } = useContext(Context);

  return (
    <>
      {comicBooks.map((comic) => (
        <CardElement rare={comic.rare!} key={comic.id}>
          <Link className="linkToHQ" state={{ comic }} to="/hq">
            <img
              src={comic.thumbnail.path + "." + comic.thumbnail.extension}
              alt=""
            />
          </Link>
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
            {!comic.rare ? <BlankBox /> : <RareTag>Rare!</RareTag>}

            <button onClick={() => addCartItem(comic)}>Comprar</button>
          </ComicBoxInfo>
        </CardElement>
      ))}
    </>
  );
};
