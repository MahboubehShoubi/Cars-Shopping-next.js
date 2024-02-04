import styles from "./carsPages.module.css";
import Card from "../modules/card";

const CarsPages = ({ data }) => {
    return (
        <div className={styles.container}>
            <div className={styles.carsList}>
                {
                    data.map(car => <Card key={car.id} {...car}/>)
                }
            </div>

        </div>
    );
};

export default CarsPages;