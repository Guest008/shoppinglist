import { useState } from "react";

export const useCartShow = (initialValue: boolean = false) => {
  const [state, setState] = useState(initialValue);

  const show = () => {
    setState(true);
  };

  const hide = () => {
    setState(false);
  };

  return { state, show, hide };
};
