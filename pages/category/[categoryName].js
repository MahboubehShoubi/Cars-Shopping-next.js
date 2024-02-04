import { useRouter } from "next/router";
import CategoryPage from "../../components/template/categoryPage";

const Categories = () => {
    const router = useRouter();
    const { categoryName } = router.query;
    return (
        <div>
            <CategoryPage category={categoryName} />
        </div>
    );
};

export default Categories;