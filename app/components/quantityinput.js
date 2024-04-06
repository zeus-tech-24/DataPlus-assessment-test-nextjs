import React, { useState } from "react";

// QuantityInput.jsx
const QuantityInput = ({ onChange }) => {
  const [quantity, setQuantity] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
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
