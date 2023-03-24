import { useLocation } from "react-router-dom";
import { IComicBook } from "../../interfaces";
import { Header } from "../../components/Header";
import {
  Main,
  AllContent,
  DescriptionBox,
  CreatorsBox,
  ImagesSection,
  MiscellaneousImgs,
} from "./style";

export const HQPage = () => {
  const location = useLocation() as { state?: { comic: IComicBook } };

  const comic = location.state?.comic;

  let creators = comic?.creators?.items;
  const creatorsName = [];
  for (let i = 0; i < creators!.length; i++) {
    creatorsName.push(`${creators![i].name}, `);
  }

  let comicImages = comic?.images;
  const onlyImagePaths = [];
  for (let i = 0; i < comicImages!.length; i++) {
    onlyImagePaths.push(
      `${comicImages![i].path + "." + comicImages![i].extension}`
    );
  }

  return (
    <>
      <Header />
      <AllContent>
        <Main>
          <img
            src={comic?.thumbnail.path! + "." + comic?.thumbnail.extension}
            alt=""
          />
          <section>
            <h4>{comic?.title}</h4>
            <CreatorsBox>
              <h5>Criadores:</h5>
              <span>
                {" "}
                {creatorsName.map((text) => <span key={text}>{text}</span>) || (
                  <p>"No creators have been found"</p>
                )}
              </span>
            </CreatorsBox>
            <DescriptionBox>
              <h5>Descrição:</h5>

              {comic?.textObjects[0]?.text
                .split("<br>")
                .map((text) => <p key={text}>{text}</p>) || (
                <p>"This comic does not have a description"</p>
              )}
            </DescriptionBox>
          </section>
        </Main>

        <ImagesSection>
          {onlyImagePaths.map((img) => (
            <MiscellaneousImgs key={img} src={img}></MiscellaneousImgs>
          )) || ""}
        </ImagesSection>
      </AllContent>
    </>
  );
};
