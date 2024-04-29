import styles from "./header.module.css";
import Link from "next/link";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link className={styles.logo} href="/">Pokedex</Link>
        </header>
    );
}