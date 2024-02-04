import styles from "./categories.module.css";
import Link from "next/link";
import Sedan from "../icons/Sedan";
import Hatchback from "../icons/Hatchback";
import Suv from "../icons/Suv";
import Sport from "../icons/Sport";

const Categories = () => {
    return (
        <div className={styles.container}>
            <Link href={`/category/sedan`}>
                <div className={styles.categoriesBox}>
                    <p>Sedan</p>
                    <Sedan />
                </div>
            </Link>
            <Link href={`/category/hatchback`}>
                <div className={styles.categoriesBox}>
                    <p>Hatchback</p>
                    <Hatchback />
                </div>
            </Link>
            <Link href={`/category/suv`}>
                <div className={styles.categoriesBox}>
                    <p>Suv</p>
                    <Suv />
                </div>
            </Link>
            <Link href={`/category/sport`}>
                <div className={styles.categoriesBox}>
                    <p>Sport</p>
                    <Sport />
                </div>
            </Link>
        </div>
    );
};

export default Categories;