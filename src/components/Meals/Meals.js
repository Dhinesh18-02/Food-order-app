import React, { Fragment } from 'react';
import AvailableMeals from './AvailableMeals';
import MealsSearch from './MealsSearch';


const Meals = () => {
    return (
        <Fragment>
            <MealsSearch />
            <AvailableMeals />
        </Fragment>
    )
};

export default Meals;