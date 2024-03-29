import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/StateCart';
import ItemCount from './ItemCount'


const ItemDetail = ({ inmueble }) => {
  const { name, descripcion, price, stock, img, id } =
  inmueble;
  const { agregarACarrito } = useContext(CartContext);
  const onAdd = (cantidad) => {
    console.log(`Compraste ${cantidad} items`);
    agregarACarrito(id, cantidad, price)
    };
    return (
    <div>
        <h2>Detalle de: {name}</h2>
      <img src={img} alt={name} style={{ width: '25rem' }} />
      <p>{descripcion}</p>
      <p>${price}</p>
      <ItemCount initial={1} stock={stock} onAdd={onAdd} />
    </div>
  )
}

export default ItemDetail