import { createContext, useState } from "react";
import { toast } from "react-hot-toast";
import { api } from "../services";
import { IProvider, IContext, IComicBook } from "../interfaces";
import md5 from "md5";

export const Context = createContext({} as IContext);

export const Provider = ({ children }: IProvider) => {
  const [comicBooks, setComicBooks] = useState<IComicBook[]>([]);
  const [cartItens, setCartItens] = useState<IComicBook[]>([]);

  const getHQs = async () => {
    const timeStamp = Math.floor(Date.now() / 1000).toString();
    const privateKey = "949d93578a185a51b0d371610caff60cdc763355";
    const apiKey = "ad7ff4bdd1b22a69f4bc0eb5e76580c4";
    let hash = md5(timeStamp + privateKey + apiKey);

    const results = await api
      .get<{ data: { results: IComicBook[] } }>(
        `v1/public/comics?apikey=${apiKey}&hash=${hash}&ts=${timeStamp}`
      )
      .then((res) => res.data.data.results)
      .catch((err) => {
        toast.error(`${err.response.data.message}`);
        return [];
      });
    const rareIndexes: number[] = [];
    const rarePercentage = 10;
    const rareCounts = results.length / rarePercentage;

    while (rareIndexes.length !== rareCounts) {
      const randomIndex = Math.floor(Math.random() * results.length - 1) + 1;
      if (!rareIndexes.includes(randomIndex)) {
        rareIndexes.push(randomIndex);
      }
    }

    setComicBooks(
      results.map((comic, index) => ({
        ...comic,
        rare: rareIndexes.includes(index),
      }))
    );
  };

  const addCartItem = (cartItem: IComicBook) => {
    const find = cartItens.find((item) => {
      return item.id === cartItem.id;
    });

    if (!find) {
      setCartItens((oldCartItens) => [...oldCartItens, cartItem]);
      toast.success("Quadrinho adicionado ao carrinho!");
    } else {
      toast.error("Este Quadrinho já se encontra no carrinho!");
    }
  };

  const removeCartItem = (id: string) => {
    const newList = cartItens.filter((item) => item.id !== id);

    setCartItens(newList);
    toast.success("Quadrinho removido do carrinho!");
  };

  const removeAllCart = () => {
    setCartItens([]);
    toast.success("Todos os Quadrinhos foram removidos!");
  };

  const calculateTotalPrice = cartItens.reduce(
    (acc, inicialValue) => acc + inicialValue.prices[0].price,
    0
  );
  return (
    <Context.Provider
      value={{
        getHQs,
        comicBooks,
        addCartItem,
        cartItens,
        removeCartItem,
        removeAllCart,
        calculateTotalPrice,
      }}
    >
      {children}
    </Context.Provider>
  );
};
