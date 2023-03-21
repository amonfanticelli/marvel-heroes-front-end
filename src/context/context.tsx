import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { api } from "../services";
import { IProvider, IContext } from "../interfaces";

export const Context = createContext({} as IContext);

export const Provider = ({ children }: IProvider) => {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
};
