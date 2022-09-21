import React, { useReducer } from "react";

import CartContext from "./cart-context";

const defaultState = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            const itemToUpdate = state.items.find(meal => meal['name'] === action.item.name)
            if (itemToUpdate) {
                itemToUpdate.amount = +itemToUpdate.amount + +action.item.amount;
                return {
                    ...state,
                    totalAmount: state.items.reduce((acc, item) => { return acc + (+item.amount * +item.price) }, 0)
                }
            } else {
                const newStateItems = state.items.concat(action.item);
                return {
                    ...state,
                    items: newStateItems,
                    totalAmount: newStateItems.reduce((acc, item) => { return acc + (+item.amount * +item.price) }, 0)
                }

            }

        case "INCREMENT_ITEM":
            const itemToIncrement = state.items.find(meal => meal['id'] === action.id)

            itemToIncrement.amount = +itemToIncrement.amount + +1;
            return {
                ...state,
                totalAmount: state.items.reduce((acc, item) => { return acc + (+item.amount * +item.price) }, 0)
            }

        case "DECREMENT_ITEM":
            const itemToDecrement = state.items.find(meal => meal['id'] === action.id)

            if (itemToDecrement.amount > 1) {
                itemToDecrement.amount = +itemToDecrement.amount - +1;
                return {
                    ...state,
                    totalAmount: state.items.reduce((acc, item) => { return acc + (+item.amount * +item.price) }, 0)
                }

            } else {
                const newStateItems = state.items.filter(item => { return item.id !== action.id })
                return {
                    ...state,
                    items: newStateItems,
                    totalAmount: newStateItems.reduce((acc, item) => { return acc + (+item.amount * +item.price) }, 0)
                }
            }












        default:
            return state
    };


}

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState);


    const addItemHandler = (item) => {
        dispatchCartAction({ type: "ADD_ITEM", item: item });
    };
    const removeItemHandler = (id) => { };

    const incrementHandler = (id) => {
        dispatchCartAction({ type: "INCREMENT_ITEM", id: id });

    };
    const decrementHandler = (id) => {
        dispatchCartAction({ type: "DECREMENT_ITEM", id: id });

    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        increment: incrementHandler,
        decrement: decrementHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );



}

export default CartProvider;