import React, { useState } from 'react';

function ItemCount({ stock, initial, onAdd }) {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAdd = () => {
    if (quantity <= stock) {
      onAdd(quantity);
    }
  };

  return (
    <div className="item-count">
      <button onClick={decrement}>-</button>
      <span>{quantity}</span>
      <button onClick={increment}>+</button>
      <button onClick={handleAdd}>Adicionar ao Carrinho</button>
    </div>
  );
}

export default ItemCount;


