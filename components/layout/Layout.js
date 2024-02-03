import styles from "./Layout.module.css";

const Layout = ({children}) => {
    return (
        <>
            <header className={styles.header}>
                <img className={styles.logo} src="/logo/Shoub%20Glow%20Logo.jpg"/>
                <h1>Cars Shopping</h1>
            </header>

            <div className={styles.container}>{children}</div>

            <footer className={styles.footer}>
                <p>Developer : Mahboubeh Shoubi &copy; | mahboobeh.shobi.65@gmail.com</p>
            </footer>

            
        </>
    );
};

export default Layout;