import React, { Fragment ,useContext } from 'react';
import mealsImage from '../../assets/meals.jpeg';
import AuthContext from '../../store/auth-context';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';


const Header = props => {
    const authCtx = useContext(AuthContext);

    const logoutHandler = () => {
        authCtx.logout();
    };

    return (
        <Fragment>
            <header className={classes.header}>
                <h1 className={classes.h}>DeliciousMeals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
                <button className={classes.logout} onClick={logoutHandler}>Logout</button>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A table full of delicious Food!" />
            </div>
        </Fragment>
    )
};


export default Header;


