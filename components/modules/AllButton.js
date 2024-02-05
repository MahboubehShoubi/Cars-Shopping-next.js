import styles from "./AllButton.module.css";
import Link from "next/link";


const AllButton = () => {
    return (
            <Link href='/cars'>
                <div className={styles.container}>See All Cars</div>
            </Link>
    );
};

export default AllButton;