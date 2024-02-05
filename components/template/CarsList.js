import { useRouter } from "next/router";
import styles from "./CarsList.module.css";
import Card from "../modules/card";
import Back from "../icons/Back";

const CarsList = ({data}) => {

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
                    data.map(car => <Card key={car.id} {...car} />)
                }
            </div>

        </div>
    );
};

export default CarsList;