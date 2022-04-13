import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GiftExpertApp = (props) => {
  const [categories, setCategories] = useState([
    "One Punch",
    // "Samuray X,",
    // "Dragon Ball",
  ]);

  return (
    <div>
      <h2>GiftExpertApp</h2>
      {/*Aca enviamos la referencia de  una funcion al componente AddCategory*/}
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => {
          return <GifGrid key={category} category={category} />;
        })}
      </ol>
    </div>
  );
};

export default GiftExpertApp;
