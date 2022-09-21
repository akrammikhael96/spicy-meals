
import styles from "./MealItemForm.module.css"
import { useContext, useRef } from "react";
import CartContext from "../../Store/cart-context";

const MealItemForm = (props) => {

    const amountInput = useRef();

    const cartCtx = useContext(CartContext);

    const addItemToCart = () => {

        if (amountInput.current.value < 1) return;

        const newItem = { id: props.meal.id, name: props.meal.name, price: props.meal.price, amount: amountInput.current.value }

        cartCtx.addItem(newItem);

    }



    return (
        <div className={styles.addToCartComponent}>
            <div className={styles.amountContainer}>
                <label className={styles.amount}>Amount</label>
                <input ref={amountInput} step={1} defaultValue={1} min={1} className={styles.input} type="number"></input>
            </div>
            <button onClick={addItemToCart} className={styles.btn}>Add to Cart</button>
        </div>
    );
}

export default MealItemForm;