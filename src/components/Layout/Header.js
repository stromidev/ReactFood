import { Fragment } from "react";
import Image from "./Image";

import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";


const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <Image></Image>
    </Fragment>
}

export default Header;