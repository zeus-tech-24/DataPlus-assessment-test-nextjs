import React, { useState } from "react";

// QuantityInput.js
const QuantityInput = ({ onChange }) => {
  const [quantity, setQuantity] = useState(1); // Initialize quantity state with default value of 1

  const handleChange = (event) => {
    const value = parseInt(event.target.value); // Parse input value as integer
    setQuantity(value);
    onChange(value); // Call the onChange prop with the new quantity value
  };

  return (
    <input
      type="number"
      value={quantity}
      onChange={handleChange}
      placeholder="Enter quantity..."
      className="w-80 lg:w-96 p-2 border border-gray-300 rounded-lg m-4"
    />
  );
};

export default QuantityInput;
