import { useRef } from "react";
import css from "../styles/index.module.css";
import { MutableRefObject } from "react";
import Card from "../components/Card";
import PageRevealer from "../components/PageRevealer";

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
        <div>
            {/* <div className={css.gradient}></div> */}
            <PageRevealer />
            <div className={css.navigation}>
                <div className={css.advance_button} onClick={() => {}}>
                    <svg
                        viewBox="0 0 29 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M28.9912 8.92304L28.9912 0.771729L14.5 9.82874L0.00878859 0.771727L0.00878823 8.92303L14.5 17.98L28.9912 8.92304Z" />
                    </svg>
                </div>
            </div>
            <div className={css.landing}>
                <div className={css.background}></div>
                <h1>All your Finances</h1>
                <h2>in one single place</h2>
                <p>
                    A tool in which to{" "}
                    <span className={css.colored}>manage</span> your assets and{" "}
                    <span className={css.colored}>visualize</span> their
                    performance
                </p>
                <div className={css.colored_spacer}></div>
            </div>
        </div>
    );
}

{
    /* <div className={css.section} ref={sectionTrack}>
                <div className={`${css.slice} ${css.title}`}>
                    <p>
                        <span className={css.colored}>Track</span> your open
                        positions
                    </p>
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
            </div> */
}
