import React, { useState, useEffect } from "react";

const QuantityInput = ({ onChange, defaultValue }) => {
  const [quantity, setQuantity] = useState(defaultValue || 1); // Initialize quantity state with default value provided by parent

  const handleChange = (event) => {
    const value = parseInt(event.target.value); // Parse input value as integer
    setQuantity(value);
  };

  // Call the onChange prop with the new quantity value whenever quantity changes
  useEffect(() => {
    onChange(quantity);
  }, [quantity, onChange]);

  return (
    <input
      type="number"
      value={quantity}
      onChange={handleChange}
      placeholder="Enter quantity..."
      className="w-96 lg:w-96 p-2 border border-gray-300 rounded-lg m-4"
    />
  );
};
export default QuantityInput;
