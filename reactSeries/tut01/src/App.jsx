import Headers from "./Header";
import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Open pound of Beef",
    },
    {
      id: 2,
      checked: false,
      item: "Item 2",
    },
    {
      id: 3,
      checked: false,
      item: "Item 3",
    },
  ]);
  const [newItem, setNewItems] = useState("");
  const handelCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("shopingList", JSON.stringify(listItems));
  };

  const handelDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shopingList", JSON.stringify(listItems));
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted ");
  };
  return (
    <div className="App">
      <Headers title="Groceries List" />
      <AddItem
        newItem={newItem}
        setNewItems={setNewItems}
        handelSubmit={handelSubmit}
      />

      <Content
        items={items}
        handelCheck={handelCheck}
        handelDelete={handelDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}
