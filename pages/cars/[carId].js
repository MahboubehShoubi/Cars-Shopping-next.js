import { useRouter } from "next/router";
import carsData from "../../data/carsData";
import CarDetails from "../../components/template/CarDetails";

const CarDetail = () => {
    const router = useRouter();
    const { carId } = router.query;
    const carDetails = carsData[carId - 1];
    return (
        <div>
            <CarDetails { ...carDetails } />
        </div>
    );
};

    export default CarDetail;