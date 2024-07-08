import React from "react";
import { Data, Status } from "../interfaces/interfaces";
import { CardItem } from "./CardItem";

interface Props {
  items: Data[];
  status: Status;
  isDragging: boolean;
  handleDragging: (dragging: boolean) => void;
  handleUpdateList: (id: number, status: Status) => void;
}

export const ContainerCards = ({
  items = [],
  status,
  isDragging,
  handleDragging,
  handleUpdateList,
}: Props) => {
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const id = +e.dataTransfer.getData("text");
    handleUpdateList(id, status);
    handleDragging(false);
  };

  return (
    <div
      className={`containerCards  ${isDragging ? `layout-dragging` : " "}`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}>
      <p className="cardHead">{status} hero</p>
      {items.map(
        (item) =>
          status === item.status && (
            <CardItem
              data={item}
              key={item.id}
              handleDragging={handleDragging}
            />
          )
      )}
      <div></div>
    </div>
  );
};
