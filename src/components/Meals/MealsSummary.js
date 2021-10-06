import React from 'react';
import classes from './MealsSummary.module.css';


const MealsSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>Delicious Food, Delivered To You!</h2>
            <p>
                Choose Your Favourite Meal From Our Broad Selection
                Of Available Meals And Enjoy A Delicious Lunch Or Dinner At Home.
            </p>
            <p>
                All Our Meals Are Cooked With High-Quality Ingredients,
                Just-In-Time And Of Course By Experienced Chefs!
            </p>
        </section>

    )
};

export default MealsSummary;