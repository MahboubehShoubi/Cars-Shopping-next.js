import styles from "./Layout.module.css";
import Link from "next/link";

const Layout = ({children}) => {
    return (
        <>
            <header className={styles.header}>
                <Link href='/'>
                    <img className={styles.logo} src="/logo/Shoub%20Glow%20Logo.jpg"/>
                </Link>
                <div className={styles.headerRight}>
                    <img className={styles.images} src='/images/1.png'/>
                    <h3>Cars Shopping</h3>
                </div>
            </header>

            <div className={styles.container}>{children}</div>

            <footer className={styles.footer}>
                <p>Developer : Mahboubeh Shoubi &copy; | <span>mahboobeh.shobi.65@gmail.com</span></p>
            </footer>

            
        </>
    );
};

export default Layout;