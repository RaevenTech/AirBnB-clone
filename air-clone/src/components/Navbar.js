import React from "react";
import logo from "../assets/air-bnb-logo.png";
import styles from "./navbar.module.css";

const Navbar = () => {
    return (
        <nav>
            <img src={logo} alt="logo" className={styles.nav_logo} />
        </nav>
    );
};

export default Navbar;
