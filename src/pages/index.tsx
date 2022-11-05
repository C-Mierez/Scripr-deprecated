import { useRef } from "react";
import css from "../styles/index.module.css";
import { MutableRefObject } from "react";
import Card from "../components/Card";

export default function HomePage() {
    const scrollToElement = (ref: MutableRefObject<any>) => {
        scrollTo({
            top: ref.current.offsetTop,
            left: 0,
            behavior: "smooth",
        });
    };

    const sectionTrack = useRef(null);
    const sectionOrganize = useRef(null);
    const sectionLink = useRef(null);

    return (
        <>
            <div className={css.gradient}></div>
            <div className={css.landing}>
                <div className={`${css.slice} ${css.desc}`}>
                    <p>Keep your finances in one single place</p>
                </div>
                <div className={`${css.slice} ${css.title}`}>
                    <p>
                        <span className={css.colored}>Analyze</span> your
                        portfolio performance
                    </p>
                    <img
                        className={css.arrows}
                        onClick={() => scrollToElement(sectionTrack)}
                        src="svg/Arrows.svg"
                        alt="Arrows"
                    />
                </div>
            </div>
            <div className={css.section} ref={sectionTrack}>
                <div className={`${css.slice} ${css.title}`}>
                    <p>
                        <span className={css.colored}>Track</span> your open
                        positions
                    </p>
                    <img
                        className={css.arrows}
                        onClick={() => scrollToElement(sectionOrganize)}
                        src="svg/Arrows.svg"
                        alt="Arrows"
                    />
                </div>
                <div className={`${css.slice}`}>
                    <Card />
                </div>
            </div>
            <div className={css.section} ref={sectionOrganize}>
                <div className={`${css.slice}`}>
                    <p>Keep your finances in one single place</p>
                </div>
                <div className={`${css.slice} ${css.title}`}>
                    <p>
                        <span className={css.colored}>Organize</span> into
                        multiple categories
                    </p>
                    <img
                        className={css.arrows}
                        onClick={() => scrollToElement(sectionLink)}
                        src="svg/Arrows.svg"
                        alt="Arrows"
                    />
                </div>
            </div>
            <div className={css.section} ref={sectionLink}>
                <div className={`${css.slice} ${css.title}`}>
                    <p>
                        <span className={css.colored}>Link</span> operations
                        from anywhere
                    </p>
                </div>
                <div className={`${css.slice}`}>
                    <p>Keep your finances in one single place</p>
                </div>
            </div>
        </>
    );
}
