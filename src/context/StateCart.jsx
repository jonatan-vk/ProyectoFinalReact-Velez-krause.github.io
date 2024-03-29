import React from 'react'
import { useState } from 'react';
import { createContext } from 'react';

export const CartContext = createContext([]);


const StateCartProvider = ({children}) => {
const [cart, setCart] = useState([]);
const agregarACarrito = (id, count, price)=> {
  setCart((itemsActuales) => {
    const itemsAAgregar = itemsActuales.find((item) => item.id === id);
    if (itemsActuales) {
      return itemsActuales.map((item) => {
        if (item.id === id ) {
          return { ...item, quantity: item.quantity + count};
        } else {
          return item;
        }
      });
    } else {
      return [...itemsActuales, { id, quantity: count, price}];
    }
  });
  setCart([...cart, { id, quantity: count, price }]);
};

return (
    <CartContext.Provider value={{ cart, setCart, agregarACarrito }}>
      {children}
    </CartContext.Provider>
  )
}

export default StateCartProvider