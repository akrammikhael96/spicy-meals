import React from "react";

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => { },
    removeItem: (id) => { },
    increment: (id) => { },
    decrement: (id) => { }
})

export default CartContext;