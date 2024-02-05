import styles from "../styles/Index.module.css";
import carsData from "../data/carsData";
import CarsPages from "../components/template/CarsPages";
import Categories from "../components/modules/categories";
import FilteredPrice from "../components/modules/FilteredPrice";
import AllButton from "../components/modules/AllButton";

function Index() {

    const cars = carsData.slice(0 , 3);
  return (
    <div className={styles.container}>
        <FilteredPrice />
        <Categories />
        <AllButton />
        <CarsPages data={cars} />
    </div>
  )
}

export default Index;
