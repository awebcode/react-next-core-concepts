"use client"
import React, { FC, useState } from "react";
import { ReactSortable } from "react-sortablejs";

interface ItemType {
  id: number;
  name: string;
}

export const SortableComponent: FC = (props) => {
  const [state, setState] = useState<ItemType[]>([
    { id: 1, name: "shrek" },
    { id: 2, name: "fiona" },
  ]);

  return (
    <ReactSortable
      swap
      multiDrag
      animation="200"
      easing="ease-out"
      list={state}
      setList={setState}
    >
      {state.map((item) => (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{item.id}</div>
            <p className="text-gray-700 text-base">{item.name}</p>
          </div>
        </div>
      ))}
    </ReactSortable>
  );
};
