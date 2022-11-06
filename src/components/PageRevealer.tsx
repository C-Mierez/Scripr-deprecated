import css from "../styles/revealer.module.css";

export default function PageRevealer() {
    return (
        <div className={css.container}>
            <div className={css.revealer}>
                <div className={css.revealer_inner}></div>
            </div>
            <div className={css.revealer_right}>
                <div className={css.revealer_inner_right}></div>
            </div>
        </div>
    );
}
