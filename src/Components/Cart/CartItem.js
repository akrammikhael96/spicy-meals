import React from "react";
import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import styles from "./CartItem.module.css"

const CartItem = (props) => {
    const cartCtx = useContext(CartContext);

    const decrementItem = () => {
        cartCtx.decrement(props.item.id);
    }




    const incrementItem = () => {
        cartCtx.increment(props.item.id);

    }


    return (
        <div className={styles.CartItemContainer}>
            <li key={props.item.id}>
                <span className={styles.cartItemName}>{props.item.name}</span>
                <span className={styles.cartItemPrice}>${props.item.price.toFixed(2)} </span>
                <span className={styles.cartItemAmount}>x{props.item.amount}</span>
            </li>

            <div className={styles.actionBtn}>
                <button onClick={decrementItem}>-</button>
                <button onClick={incrementItem}>+</button>

            </div>
        </div>
    );

}

export default CartItem;