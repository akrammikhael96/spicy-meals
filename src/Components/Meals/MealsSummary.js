import React from "react";
import styles from "./MealsSummary.module.css"

const MealsSummary = () => {

    return (
        <div className={styles.summaryContainer}>
            <h4 className={styles.title}>Delicious Food, Delivered To You</h4>
            <p className={styles.text}>Choose your favourite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
            <p className={styles.text}>All our meals are cooked with high quality ingredients, just in time and of course by experienced chefs!</p>
        </div>
    )

}

export default MealsSummary;