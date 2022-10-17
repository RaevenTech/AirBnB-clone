import React from "react";
import styles from "./card.module.css";
import star from "../../assets/Star.png";
//import katieZaferes from "../../assets/katie-zaferes.png";

const Card = (props) => {
    return (
        <section className={styles.cards}>
            <div className={styles.image}>
                <img src={props.img} alt="Katie Zaferes" />
                <badge className={styles.badge}>SOLD OUT</badge>
            </div>
            <div className={styles.rating_info}>
                <img src={star} alt="Star" className={styles.star} />
                <p className={styles.rating}>{props.rating}</p>{" "}
                <p className={styles.gray_info}>
                    ({props.reviewCount})-{props.country}
                </p>
            </div>
            <p className={styles.title}>{props.title}</p>
            <p className={styles.price_person}>
                <span className={styles.price}>From ${props.price} </span> /
                person
            </p>
        </section>
    );
};

export default Card;
