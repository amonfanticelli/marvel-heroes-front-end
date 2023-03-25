import { List, ArrowButtonBox } from "./style";
import { Card } from "../Card";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useContext } from "react";
import { Context } from "../../context/context";

export const CardList = () => {
  const { getHQs, page } = useContext(Context);
  const callPreviousPage = () => {
    getHQs(page - 1);
  };
  const callNextPage = () => {
    getHQs(page + 1);
  };
  return (
    <>
      <List>
        <Card />
      </List>
      <ArrowButtonBox>
        <button onClick={callPreviousPage} disabled={page === 1}>
          <BsArrowLeft className="iconArrowLeft" />
        </button>
        <button onClick={callNextPage}>
          <BsArrowRight className="iconArrowRight" />
        </button>
      </ArrowButtonBox>
    </>
  );
};
