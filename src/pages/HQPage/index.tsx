import { useLocation } from "react-router-dom";
import { IComicBook } from "../../interfaces";
import { HeaderHome } from "../../components/Header";
import { Main, AllContent, DescriptionBox } from "./style";

export const HQPage = () => {
  const location = useLocation() as { state?: { comic: IComicBook } };
  return (
    <AllContent>
      <HeaderHome />

      <Main>
        <img src={location.state?.comic.thumbnail.path + ".jpg"} alt="" />
        <section>
          <h4>{location.state?.comic.title}</h4>

          <span>Escritor: Junim </span>

          <span>Publicado: 2019</span>

          <DescriptionBox>
            <h5>Descrição:</h5>
            <p>{location.state?.comic.description}</p>
          </DescriptionBox>
        </section>
      </Main>
    </AllContent>
  );
};
