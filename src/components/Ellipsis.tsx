import css from "../styles/components/ellipsis.module.css";

// This is ugly but I had to to do it to animate each dot individually :(
export default function Ellipsis() {
    return (
        <div className={css.ellipsis}>
            <div className={css.dot} />
            <div className={css.dot} />
            <div className={css.dot} />
        </div>
    );
}
