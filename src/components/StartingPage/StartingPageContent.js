import Food from '../../Food';
import { useContext, Fragment } from 'react';
import AuthContext from '../../store/auth-context';
import mealsImage from '../../assets/Pizza.jpeg';
import './StartingPageContent.module.css';
import classes from './StartingPageContent.module.css';

const StartingPageContent = () => {
  const authCtx = useContext(AuthContext);
  return (
    <Fragment >
      {!authCtx.isLoggedIn &&
        <section className={classes.summaryy}>
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
      }
      {!authCtx.isLoggedIn && <img className={classes.img} src={mealsImage} alt="food" />}
      {authCtx.isLoggedIn && <Food />}
    </Fragment>
  );
};

export default StartingPageContent;
