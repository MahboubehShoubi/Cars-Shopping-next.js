import styles from "../../styles/cars.module.css";
import carsData from "../../data/carsData";
import CarsPages from "../../components/template/carsPages";
import Categories from "../../components/modules/categories";

const cars = () => {
    return (
        <div className={styles.container}>
            <Categories />
            <CarsPages data={carsData} />
        </div>

    );
};

export default cars;