import React, { Component } from 'react'
import CartCSS from './Cart.module.css'
import {FiShoppingCart} from 'react-icons/fi'
import { AppStateContext } from './AppState'

interface Props {

}

interface State {
    isOpen: boolean;
}

export default class Cart extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
    }

    render() {
        return (
            <AppStateContext.Consumer>{(state) => {
             return (
                <div className={CartCSS.cartContainer}>
                <button 
                    type="button" 
                    className={CartCSS.button} 
                    onClick={this.handleClick}
                >
                    <FiShoppingCart/>
                    <span>{state.cart.items.length}</span>
                </button>
                <div className={CartCSS.cartDropDown} 
                    style={{
                        display: this.state.isOpen ? 'block' : 'none',
                    }}>
                    <ul>
                        {state.cart.items.map(item => {
                            return <li key={item.id}>{item.name}</li>
                        })}
                    </ul>
                </div>
            </div>
             )
            }}
            </AppStateContext.Consumer>
        )
    }
}
