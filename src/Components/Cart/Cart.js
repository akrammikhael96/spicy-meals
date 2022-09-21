import React, { Fragment, useContext, useState } from "react";
import CartContext from "../../Store/cart-context";
import styles from "./Cart.module.css"
import CartItem from "./CartItem";



const Cart = (props) => {

    const [isOrdering, setIsOrdering] = useState(false);

    const cartCtx = useContext(CartContext);



    const cartItems = cartCtx.items.map(item => {
        return (
            <CartItem item={item}></CartItem>

        );
    })

    const orderHandler = () => {
        setIsOrdering(true);
    }


    return (
        <div className={styles.cartContainer}>
            {isOrdering ? <h3 className={styles.cartTitle}>Ordering Please Wait ... </h3> :
                <Fragment>
                    <h3 className={styles.cartTitle}>Your Cart</h3>
                    <div className={styles.cartItemsContainer}><ul>{cartItems}</ul></div>

                    <div className={styles.lineBreak}></div>
                    <div className={styles.amountContainer}>
                        <span>Total Amount</span>
                        <span>${cartCtx.totalAmount.toFixed(2)}</span>
                    </div>
                    <div className={styles.actionButtonsContainer}>
                        <button onClick={props.onHideCart}>Close</button>
                        {cartCtx.items.length > 0 && <button onClick={orderHandler}>Order Now</button>}
                    </div>
                </Fragment>
            }


        </div>
    );


}

export default Cart;