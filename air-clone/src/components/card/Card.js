import React from "react";
import styles from "./card.module.css";
import katieZaferes from "../../assets/katie-zaferes.png";
import star from "../../assets/Star.png";

const Card = () => {
    return (
        <section className={styles.cards}>
            <div className={styles.image}>
                <img src={katieZaferes} alt="Katie Zaferes" />
            </div>
            <div className={styles.rating_info}>
                <img src={star} alt="Star" className={styles.star} />
                <p className={styles.rating}>5.0</p>{" "}
                <p className={styles.gray_info}>(6)-USA</p>
            </div>
            <p className={styles.title}>Life lessons with katie Zaferes</p>
            <p className={styles.price_person}>
                <span className={styles.price}>From $136 </span> / person
            </p>
        </section>
    );
};

export default Card;
