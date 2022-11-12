import css from "../styles/layout.module.css";

export default function Header() {
    // Return the screen to the top of the page
    const scrollToTop = () => {
        scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        <header className={`${css.header} ${css.shadow}`}>
            <div className={css.section}>
                <div onClick={scrollToTop}>Scripr</div>
            </div>
            <div className={css.section}>
                <div>About</div>
                <div>Contact</div>
                <div className={css.launch}>Launch</div>
            </div>
        </header>
    );
}
