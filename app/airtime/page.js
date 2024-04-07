"use client";

import React, { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { itemConfig } from "@/itemconfig/itemconfig";
import QuantityInput from "../components/quantityinput";
import CheckoutButton from "../components/CheckoutButton";

const AirtimePage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState("");

  const handleProductChange = (product) => {
    setSelectedProduct(product);
  };

  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

  return (
    <div className="bg-yellow-500 flex items-center flex-col max-w-full container min-h-screen antialiased m-auto">
      <div className="container sm:w-96 lg:w-6/12 justify-center items-center border-b-2 border-t-2 shadow-2xl rounded-lg m-6 h-16 flex">
        <h1 className="text-5xl uppercase text-center items-center justify-center text-black">
          Airtime Packages
        </h1>
      </div>
      <h3 className="text-3xl font-normal text-black text-center mt-500 mb-4">
        Select a package to buy
      </h3>
      <RadioGroup value={selectedProduct} onChange={setSelectedProduct}>
        <div className="grid lg:grid-cols-2 gap-5">
          {itemConfig.airtimeItems.map((product) => (
            <RadioGroup.Option
              key={product.price}
              value={product}
              className={({ active, checked }) => `
                ${
                  active
                    ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300 "
                    : ""
                }
                ${
                  checked
                    ? "bg-sky-700 bg-opacity-100 text-slate-900"
                    : "bg-white"
                } 
                cursor-pointer rounded-lg shadow-md focus:outline-none
                // Apply width style to control the width of each item
                w-96 lg:w-96
              `}
            >
              {({ active, checked }) => (
                <div className="flex flex-col p-4">
                  <div className="flex justify-between w-full">
                    <RadioGroup.Label
                      as="p"
                      className={`text-lg font-medium ${
                        checked ? "text-slate-100" : "text-gray-900"
                      }`}
                    >
                      {product.product}
                    </RadioGroup.Label>
                    {checked && (
                      <button className="text-slate-100 font-medium">✔</button>
                    )}
                  </div>
                  <RadioGroup.Description
                    as="span"
                    className={`text-2xl ${
                      checked ? "text-slate-900" : "text-gray-500"
                    }`}
                  >
                    <span>{product.price}</span>
                  </RadioGroup.Description>
                </div>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>

      <QuantityInput onChange={handleQuantityChange} />
      <CheckoutButton product={selectedProduct} quantity={quantity} />
    </div>
  );
};

export default AirtimePage;
