import carsData from "../../data/carsData";
import CarsPages from "../../components/template/carsPages";

const cars = () => {
    return (
        <div>
            <CarsPages data={carsData} />
        </div>

    );
};

export default cars;