import { List, ArrowButtonBox } from "./style";
import { Card } from "../Card";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export const CardList = () => {
  return (
    <>
      <List>
        <Card />
      </List>
      <ArrowButtonBox>
        <BsArrowLeft className="iconArrowLeft" />
        <BsArrowRight className="iconArrowRight" />
      </ArrowButtonBox>
    </>
  );
};
