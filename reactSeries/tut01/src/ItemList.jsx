import { LineItem } from "./LineItem";

export const ItemList = ({ items, handelCheck, handelDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          key={item.id}
          item={item}
          handelCheck={handelCheck}
          handelDelete={handelDelete}
        />
      ))}
    </ul>
  );
};
