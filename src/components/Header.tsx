import css from "../styles/layout.module.css";

export default function Header() {
    return (
        <header className={css.header}>
            <div className={css.section}>
                <span>Scripr</span>
            </div>
            <div className={css.section}>
                <div>About</div>
                <div>Contact</div>
                <div className={css.launch}>Launch</div>
            </div>
        </header>
    );
}
