import { useState } from "react";

const useSelectedItem = () => {
  const [selecteditem, setSeletedItem] = useState();

  const handleChange = (e) => {
    // console.log(e.target.value);
    setSeletedItem(e.target.value);
  };

  return handleChange;
};

export { useSelectedItem };
