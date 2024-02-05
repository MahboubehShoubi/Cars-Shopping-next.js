import styles from "../../styles/cars.module.css";
import carsData from "../../data/carsData";
import CarsPages from "../../components/template/CarsPages";
import Categories from "../../components/modules/categories";
import FilteredPrice from "../../components/modules/FilteredPrice";

const cars = () => {
    return (
        <div className={styles.container}>
            <FilteredPrice />
            <Categories />
            <CarsPages data={carsData} />
        </div>

    );
};

export default cars;