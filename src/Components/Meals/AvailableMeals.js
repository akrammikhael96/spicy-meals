import React from "react";

import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem";

const DUMMY_MEALS = [
    {
        id: 1,
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 25,
    },
    {
        id: 2,
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16,
    },
    {
        id: 3,
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 35,
    },
    {
        id: 4,
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 20,
    }


];

const AvailableMeals = () => {

    return (

        <ul className={styles.availableMealsContainer}>
            {DUMMY_MEALS.map(meal => {
                return (<MealItem key={meal.id} meal={meal} />)
            })}
        </ul>


    );

}

export default AvailableMeals;