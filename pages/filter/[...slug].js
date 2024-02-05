import { useRouter } from "next/router";
import carsData from "../../data/carsData";
import CarsList from "../../components/template/CarsList";


const FilterCars = () => {

    const router = useRouter();
    const [min , max] = router.query.slug || [];
    const carsList = carsData.filter(car => car.price > min && car.price < max);

    if (!carsList.length) return <h3>NotFound</h3>

    return (
      <CarsList data={carsList} />
    );
};

    export default FilterCars;