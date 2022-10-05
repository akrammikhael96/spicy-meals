import React, { useState, useEffect, useCallback } from "react";
import LoadingSpinner from "../UI/Spinner";

import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem";




const AvailableMeals = () => {

    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchMealsHandler = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await fetch('https://spicymeals-be975-default-rtdb.firebaseio.com/meals.json');

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const data = await response.json()

            const mealsArr = [];
            for (const key in data) {

                mealsArr.push({
                    id: key,
                    name: data[key].name,
                    description: data[key].description,
                    price: data[key].price
                })

            }

            setMeals(mealsArr);

        } catch (error) {
            setError(error);

        }
        setIsLoading(false)


    },
        [],
    )


    useEffect(() => {
        fetchMealsHandler();

    }, [fetchMealsHandler])




    return (

        <ul className={styles.availableMealsContainer}>
            {isLoading && <LoadingSpinner></LoadingSpinner>}
            {error && <p>{error.message}</p>}
            {meals.map(meal => {
                return (<MealItem key={meal.id} meal={meal} />)
            })}
        </ul>


    );

}

export default AvailableMeals;