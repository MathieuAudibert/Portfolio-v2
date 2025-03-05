import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
    return (
    <nav className={styles.navbar}>
        <img className={styles.menuBtn} src={getImageUrl("icones/menuIcon.png")} alt="menuBtn" />
        <a className={styles.title} href="/">Mathieu Audibert</a>
        <div className={styles.menu}>
            <ul className={styles.menuItems}>
                <li><a href="#apropos">A propos</a></li>    
                <li><a href="#experiences">Experiences</a></li>   
                <li><a href="#projets">Projets</a></li>   
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
    );
};