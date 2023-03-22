import { createContext, useState } from "react";
import { toast } from "react-hot-toast";
import { api } from "../services";
import { IProvider, IContext, IComicBook } from "../interfaces";
import { Md5 } from "ts-md5";
import md5 from "md5";

export const Context = createContext({} as IContext);

export const Provider = ({ children }: IProvider) => {
  const [comicBooks, setComicBooks] = useState<IComicBook[]>([]);

  const getHQs = () => {
    const timeStamp = Math.floor(Date.now() / 1000).toString();
    const privateKey = "949d93578a185a51b0d371610caff60cdc763355";
    const apiKey = "ad7ff4bdd1b22a69f4bc0eb5e76580c4";
    let hash = md5(timeStamp + privateKey + apiKey);

    api
      .get(`v1/public/comics?apikey=${apiKey}&hash=${hash}&ts=${timeStamp}`)
      .then((res) => {
        setComicBooks(res.data.data.results);
        console.log(res.data.data.results);
      })
      .catch((err) => toast.error(`${err.response.data.message}`));
  };

  return (
    <Context.Provider
      value={{
        getHQs,
        comicBooks,
      }}
    >
      {children}
    </Context.Provider>
  );
};
