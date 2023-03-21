import { List } from "./style";
import { Card } from "../Card";

interface Props {
  children: React.ReactNode;
}
export const CartList = () => {
  return (
    <List>
      <Card />
    </List>
  );
};
