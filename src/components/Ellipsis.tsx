import css from "../styles/components/ellipsis.module.css";

// This is ugly but I had to to do it to animate each dot individually :(
export default function Ellipsis(props: { alternate: boolean }) {
    return (
        <div className={css.ellipsis}>
            <div
                className={`${css.dot} ${props.alternate ? css.alternate : ""}`}
            />
            <div
                className={`${css.dot} ${props.alternate ? css.alternate : ""}`}
            />
            <div
                className={`${css.dot} ${props.alternate ? css.alternate : ""}`}
            />
        </div>
    );
}
