import styles from "./CarDetails.module.css";
import Company from "../icons/Company";
import Model from "../icons/Model";
import Calender from "../icons/Calender"
import Location from "../icons/Location";
import Money from "../icons/Money";
import Road from "../icons/Road";

import Back from "../icons/Back";
import { useRouter } from "next/router";




const CarDetails = (props) => {
    const {id , name , price , model , year , distance , location , image , description , category} = props;

    const router = useRouter();
    const backHandler = () => {
        router.back();
    }

    return (
        <div className={styles.container}>
            <div className={styles.back} onClick={backHandler}>
                <p>Back</p>
                <Back />
            </div>
            <img src={image} className={styles.image} />
            <h3 className={styles.header}>
                {name} {model}
            </h3>
            <div className={styles.details}>
                <div>
                    <div>
                        <Company />
                        <p>Company</p>
                    </div>
                    <span>{name}</span>
                </div>
                <div>
                    <div>
                        <Model />
                        <p>Model</p>
                    </div>
                    <span>{model}</span>
                </div>
                <div>
                    <div>
                        <Calender />
                        <p>First registration</p>
                    </div>
                    <span>{year}</span>
                </div>
                <div>
                   <div>
                       <Road />
                       <p>kms driven</p>
                   </div>
                    <span>{distance}</span>
                </div>
            </div>
            <div className={styles.details}>
                <div>
                    <div>
                        <Location />
                        <p>Location</p>
                    </div>
                    <span>{location}</span>
                </div>
            </div>
            <div className={styles.details}>
                <p className={styles.descriptionTitle}>Extra Information</p>
                <p className={styles.descriptionText}>{description}</p>
            </div>
            <div className={styles.details}>
                <div className={styles.price}>
                    <div>
                        <Money />
                    </div>
                    <div>
                        <p>Price:</p>
                        <span>{price}</span>
                    </div>
                </div>
            </div>
            <button className={styles.button}>Buy</button>
        </div>
    );
};

export default CarDetails;