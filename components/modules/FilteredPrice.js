import styles from "./FilteredPrice.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

import { toast } from "react-toastify";



const FilteredPrice = () => {

    const [min , setMin] = useState("");
    const [max , setMax] = useState("");

    const router = useRouter();

    const searchHandler = () => {
        if(min && max) {
            router.push(`/filter/${min}/${max}`);
        }else {
            toast.error('Please enter the min-price and max-price !', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.priceBox}>
                <input placeholder="Inter min-price" value={min} onChange={e => setMin(e.target.value)}/>
                <input placeholder="Inter max-price" value={max} onChange={e => setMax(e.target.value)}/>
            </div>
            <button onClick={searchHandler}>Search</button>
            <toastContainer />
        </div>
    );
};

export default FilteredPrice;