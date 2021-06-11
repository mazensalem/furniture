import React, { useState } from "react";

const ProductsList = () => {
  const title = "I got plants this week";
  const description =
    "I'm really quite simple. I plant flowers and watch them grow... I stay at home and watch the river flow.";
  const [products, setproduct] = useState([
    {
      ismain: true,
      title: "Use your houseplants as decor",
      img: "https://media.crystallize.com/furniture/20/6/23/11/@1366/houseplants-as-decor-potting.webp",
      price: 0,
    },
    {
      ismain: false,
      title: "Catathea",
      img: "https://media.crystallize.com/furniture/21/1/28/33/@1366/severin-candrian-kehesf-0xmg-unsplash-1.webp",
      price: 50,
    },
    {
      ismain: false,
      title: "Monstera Deliciosa",
      img: "https://media.crystallize.com/furniture/21/1/28/33/@1366/severin-candrian-kehesf-0xmg-unsplash-1.webp",
      price: 99,
    },
  ]);
  return (
    <div className="bg-red-900 w-10/12 mt-20 mb-96 mx-auto">
      <h2 className="bg-green-400 text-4xl font-semibold">{title}</h2>
      <p className="bg-yellow-500 text-xl w-2/4 mt-4">{description}</p>
      <main className="grid grid-cols-4">
        {products.map((product) => (
          <div className={`${product.ismain && "col-span-2"}`}>
            <h1>{product.title}</h1>
            <img src={product.img} />
          </div>
        ))}
      </main>
    </div>
  );
};
export default ProductsList;
