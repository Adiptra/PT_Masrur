/* eslint-disable react/jsx-key */
import React from "react";
import { productSection } from "../../constants/content/productContent";

const ProductSection = () => {
  return (
    <div>
      {productSection.map((data) => (
        <div className="wrapper">
          <h1>{data.title}</h1>
          <h3>{data.subtitle}</h3>
          <div className="type grid grid-cols-2">
            {data.content.map((dataContent) => (
              <div>
                <h1>{dataContent.title}</h1>
                {dataContent.lists.map((listContent) => (
                  <ul className="gap-x-2 ">
                    <li key={listContent.id} className="border-b-2 border-black">
                      <img src={listContent.icon} alt="" />
                      <p></p>
                    </li>
                  </ul>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductSection;
