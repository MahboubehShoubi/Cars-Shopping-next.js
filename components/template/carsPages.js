import styles from "./carsPages.module.css";
import Card from "../modules/card";

const CarsPages = ({ data }) => {
    return (
        <div className={styles.container}>
            {
                data.map(car => <Card key={car.id} {...car}/>)
            }
        </div>
    );
};

export default CarsPages;