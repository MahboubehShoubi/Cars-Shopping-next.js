import { useRouter } from "next/router";
import styles from "./categoryPage.module.css";
import carsData from "../../data/carsData";
import Card from "../modules/card";
import Back from "../icons/Back";

const CategoryPage = (props) => {
    const {category} = props;

    const carsList = carsData.filter(car => car.category === category);

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

            <div className={styles.cardsList}>
                {
                    carsList.map(car => <Card key={car.id} {...car} />)
                }
            </div>

        </div>
    );
};

export default CategoryPage;