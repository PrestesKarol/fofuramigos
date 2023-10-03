import React from 'react';
import ItemCount from './ItemCount'; // Certifique-se de importar o componente ItemCount

function ItemListContainer({ greeting }) {
  const catalogItems = [
    { id: 1, name: 'Ração', price: 35.99, image: '/imagens/racao.png' },
    { id: 2, name: 'Brinquedos', price: 24.99, image: '/imagens/brinquedos.png' },
    { id: 3, name: 'Higiene', price: 29.99, image: '/imagens/higiene.png' },
  ];

  const handleAddToCart = (quantity) => {
    console.log(`Adicionado ${quantity} itens ao carrinho`);
  };

  return (
    <div className="item-list-container">
      <p></p>
      <h2>Itens em Destaque:</h2>
      <ul>
        {catalogItems.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Preço: R$ {item.price.toFixed(2)}</p>
            <ItemCount stock={5} initial={1} onAdd={handleAddToCart} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListContainer;
