export interface IProvider {
  children: React.ReactNode;
}

export interface IContext {
  getHQs: () => void;
  comicBooks: IComicBook[];
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
