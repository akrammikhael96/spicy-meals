import React, { Fragment, useContext, useEffect, useState } from "react";
import styles from "./Header.module.css"
import mealsPhoto from "../../../Assets/meals.jpeg"
import { FiShoppingCart } from 'react-icons/fi';
import CartContext from "../../../Store/cart-context";
import spicyMealsLogo from "../../../spicy.png"

const Header = (props) => {

    const cartCtx = useContext(CartContext);

    const [pump, setPump] = useState(false);

    useEffect(() => {
        if (cartCtx.items.length === 0) return;
        setPump(true);


        const timer = setTimeout(() => {
            setPump(false)

        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [cartCtx.totalAmount, cartCtx.items.length])


    return (
        <Fragment>
            <header className={styles.appBar}>
                <div className={styles.spicyMealsContainer}>

                    <img className={styles.spicyLogo} alt="Spicy Meals Logo" src={spicyMealsLogo}></img>
                    <h2>SPICYMEALS</h2>
                </div>
                <button onClick={props.onShowCart} className={`${styles.btn} ${pump ? styles.pump : ""}`}>
                    <FiShoppingCart />
                    My Cart
                    <div className={styles.cartCounter}>
                        {cartCtx.items.reduce((acc, item) => { return acc + +item.amount }, 0)}
                    </div>
                </button>
            </header>
            <img className={styles.foodPic} src={mealsPhoto} alt="Food Table"></img>
        </Fragment >
    );
}

export default Header;