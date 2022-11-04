import css from "../styles/index.module.css";

export default function HomePage() {
    return (
        <>
            <div className={css.gradient}></div>
            <div className={css.landing}>
                <div className={`${css.slice} ${css.desc}`}>
                    <p>Keep your finances in one single place</p>
                </div>
                <div className={`${css.slice} ${css.title}`}>
                    <p>
                        <span>Analyze</span> your portfolio performance
                    </p>
                    <img
                        className={css.arrows}
                        src="svg/Arrows.svg"
                        alt="Arrows"
                    />
                </div>
            </div>
            <div className={css.section}>
                <div className={`${css.slice} ${css.title}`}>
                    <p>
                        <span>Track</span> your open positions
                    </p>
                    <img
                        className={css.arrows}
                        src="svg/Arrows.svg"
                        alt="Arrows"
                    />
                </div>
                <div className={`${css.slice}`}>
                    <p>Keep your finances in one single place</p>
                </div>
            </div>
            <div className={css.section}>
                <div className={`${css.slice}`}>
                    <p>Keep your finances in one single place</p>
                </div>
                <div className={`${css.slice} ${css.title}`}>
                    <p>
                        <span>Organize</span> into multiple categories
                    </p>
                    <img
                        className={css.arrows}
                        src="svg/Arrows.svg"
                        alt="Arrows"
                    />
                </div>
            </div>
            <div className={css.section}>
                <div className={`${css.slice} ${css.title}`}>
                    <p>
                        <span>Link</span> operations from anywhere
                    </p>
                    <img
                        className={css.arrows}
                        src="svg/Arrows.svg"
                        alt="Arrows"
                    />
                </div>
                <div className={`${css.slice}`}>
                    <p>Keep your finances in one single place</p>
                </div>
            </div>
        </>
    );
}
