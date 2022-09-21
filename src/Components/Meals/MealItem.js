import React from "react";
import styles from "./MealItem.module.css"
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {

    return (
        <div key={props.meal.id} className={`${styles.menuItemContainer} ${styles.zebra}`}>
            <li >
                <h5 className={styles.mealName}>{props.meal.name}</h5>
                <p className={styles.mealDesc}>{props.meal.description}</p>
                <h6 className={styles.mealPrice}>${props.meal.price.toFixed(2)}</h6>
            </li>
            <div>
                <MealItemForm meal={props.meal}></MealItemForm>
            </div>

        </div>
    );



}

export default MealItem;