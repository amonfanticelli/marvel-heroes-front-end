import { createContext, useMemo, useState } from "react";
import { toast } from "react-hot-toast";
import { api } from "../services";
import { IProvider, IContext, IComicBook } from "../interfaces";
import md5 from "md5";

export const Context = createContext({} as IContext);

export const Provider = ({ children }: IProvider) => {
  const [comicBooks, setComicBooks] = useState<IComicBook[]>([]);
  const [cartItens, setCartItens] = useState<IComicBook[]>([]);
  const [couponType, setCouponType] = useState<"rare5" | "notRare10" | null>(
    null
  );
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const calculateTotalPrice = useMemo(
    () =>
      cartItens.reduce(
        (acc, currentValue) => acc + currentValue.prices[0].price,
        0
      ),
    [cartItens]
  );
  const totalPriceDiscount = useMemo(
    () =>
      cartItens.reduce((acc, currentValue) => {
        if (couponType === "rare5" && currentValue.rare) {
          return acc + currentValue.prices[0].price * 0.95;
        }
        if (couponType === "notRare10" && !currentValue.rare) {
          return acc + currentValue.prices[0].price * 0.9;
        }

        return acc + currentValue.prices[0].price;
      }, 0),
    [cartItens, couponType]
  );

  const getHQs = async (pageCall = 1) => {
    setLoading(true);
    const timeStamp = Math.floor(Date.now() / 1000).toString();
    const privateKey = import.meta.env.VITE_PRIVATE_KEY;
    const apiKey = import.meta.env.VITE_API_KEY;
    const hash = md5(timeStamp + privateKey + apiKey);

    const limit = 20;
    const results = await api
      .get<{ data: { results: IComicBook[] } }>(
        `v1/public/comics?apikey=${apiKey}&hash=${hash}&ts=${timeStamp}&offset=${
          (pageCall - 1) * limit
        }`
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

    setPage(pageCall);
    setComicBooks(
      results.map((comic, index) => ({
        ...comic,
        rare: rareIndexes.includes(index),
      }))
    );
    setLoading(false);
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
    setCouponType(null);
    toast.success("Todos os Quadrinhos foram removidos!");
  };

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
        totalPriceDiscount,
        isLoading,
        page,
        setCouponType,
      }}
    >
      {children}
    </Context.Provider>
  );
};
