import React, { useState } from "react";
import { AddCategory } from "./AddCategory";
import GifGrid from "./GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  //   const handleAdd = () => {
  //     setCategories([...categories, "HunterXHunter"]);
  //   };
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {/* <button>Agregar</button> */}
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
