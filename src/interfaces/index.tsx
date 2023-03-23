export interface IProvider {
  children: React.ReactNode;
}

export interface IContext {
  getHQs: () => void;
  comicBooks: IComicBook[];
  addCartItem: (cartItem: IComicBook) => void;
  cartItens: IComicBook[];
  removeCartItem: (id: string) => void;
  removeAllCart: (comicBooks: any) => void;
  calculateTotalPrice: number;
}

export interface IComicBook {
  id?: string;
  title: string;
  description?: string;
  prices: [
    {
      price: number;
    }
  ];

  thumbnail: {
    path: string;
    extension: string;
  };
}
