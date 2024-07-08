import { Status, Data } from "../interfaces/interfaces";
import { ContainerCards } from "./ContainerCards";
import { data } from "../assets";
import { useState } from "react";

const typeHero: Status[] = ["good", "normal", "bad"];

export const DragDrop = () => {
  const [isDragging, setDragging] = useState(false);
  const handleDragging = (dragging: boolean) => setDragging(dragging);
  const [listItems, setListItems] = useState<Data[]>(data);

  function handleUpdateList(id: number, status: Status) {
    let card = listItems.find((el) => el.id === id);
    if (card && card.status !== status) {
      card.status = status;
      setListItems((prev) => [card!, ...prev.filter((item) => item.id !== id)]);
    }
  }

  return (
    <div className="grid">
      {typeHero.map((container) => (
        <ContainerCards
          status={container}
          key={container}
          items={listItems}
          isDragging={isDragging}
          handleDragging={handleDragging}
          handleUpdateList = {handleUpdateList}
        />
      ))}
    </div>
  );
};
