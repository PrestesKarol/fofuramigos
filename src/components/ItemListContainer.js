import React from 'react';

function ItemListContainer({ greeting }) {
  const catalogItems = [
    { id: 1, name: 'Ração', price: 35.99, image: '/imagens/racao.png' },
    { id: 2, name: 'Brinquedos', price: 24.99, image: '/imagens/brinquedos.png' },
    { id: 3, name: 'Higiene', price: 29.99, image: '/imagens/higiene.png' },
  ];

  return (
    <div className="item-list-container">
      <p>{greeting}</p>
      <h2>Itens em Destaque:</h2>
      <ul>
        {catalogItems.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Preço: R$ {item.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListContainer;