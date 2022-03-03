import React, {useContext} from 'react';
import PizzaCSS from './Pizza.module.css';
import {AppSetStateContext, useSetState} from './AppState'

interface Pizza {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface Props {
  pizza: Pizza;
}

const Pizza: React.FC<Props> = ({ pizza }) => {
  const setState = useSetState();
  const handleAddToCartClick = () => {
      setState((state) => {
        return {
          ...state, 
          cart: {...state.cart, items: [
            ...state.cart.items, 
            {id: pizza.id, name: pizza.name, price: pizza.price },
          ], 
        },
      };
    });
  };
  return (
    <li className={PizzaCSS.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <button type="button" onClick={handleAddToCartClick}>Add to Cart</button>
    </li>
  );
};

export default Pizza;
