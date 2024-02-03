import styles from "./card.module.css";
import Location from "../icons/Location";

const Card = (props) => {
    const {id , name , price , model , year , distance , location , image} = props;
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt={id}/>
            <h4 className={styles.title}>{`${name} ${model}`}</h4>
            <p className={styles.details}>{`${distance} - ${year}`}</p>
            <div className={styles.footer}>
                <p className={styles.price}>$ {price}</p>
                <div className={styles.location}>
                    <p>{location}</p>
                    <Location />
                </div>
            </div>
        </div>
    );
};

export default Card;