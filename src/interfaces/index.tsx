export interface IProvider {
  children: React.ReactNode;
}

export interface IContext {
  getHQs: (pageCall?: number) => void;
  comicBooks: IComicBook[];
  addCartItem: (cartItem: IComicBook) => void;
  cartItens: IComicBook[];
  removeCartItem: (id: string) => void;
  removeAllCart: () => void;
  calculateTotalPrice: number;
  totalPriceDiscount: number;
  showNext: () => void;
  isLoading: boolean;
  nextPageTest: () => void;
  page: number;
  setCumpomType: React.Dispatch<"rare" | "notRare" | null>;
}

export interface IComicBook {
  id: string;
  title: string;
  textObjects: {
    text: string;
  }[];
  rare?: boolean;
  prices: {
    price: number;
  }[];
  thumbnail: {
    path: string;
    extension: string;
  };
  images: {
    path: string;
    extension: string;
  }[];
  creators: {
    items: {
      name: string;
      role: string;
    }[];
  };
}
