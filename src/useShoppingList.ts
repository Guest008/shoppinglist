import { useState } from "react";

interface Product {
  name: string;
  subject: string;
  price: number;
  imgPath: string;
}

export const useShoppingList = (initialValue: Product[] = []) => {
  const [state, setState] = useState(initialValue);

  const add = (newItem: Product) => {
    setState([...state, newItem]);
  };

  const remove = (index: number) => {
    const updatedList = [...state];
    updatedList.splice(index, 1);
    setState(updatedList);
  };

  const getTotalPrice = () => {
    return state.reduce((total, item) => total + item.price, 0);
  };

  return { state, add, remove, getTotalPrice };
};