import React from "react";
import mealsImg from '../../Assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCardButton from "./HeaderCardButton";

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>Meals Prep</h1>
                <HeaderCardButton/>
            </header>
            <div className={classes['main-image']}>
                <img src= {mealsImg} alt ="table full of food"/>
            </div>
        </React.Fragment>
    )    
}

export default Header;