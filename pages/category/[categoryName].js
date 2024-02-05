import { useRouter } from "next/router";
import CarsList from "../../components/template/CarsList";
import carsData from "../../data/carsData";

const Categories = () => {

    const router = useRouter();
    const { categoryName } = router.query;

    const carsList = carsData.filter(car => car.category === categoryName);

    return (
        <div>
            <CarsList data={carsList} />
        </div>
    );
};

export default Categories;