import { useEffect, useRef } from "react";
import css from "../styles/index.module.css";
import { MutableRefObject } from "react";
import Card from "../components/Card";
import PageRevealer from "../components/PageRevealer";
import { AnimationOnScroll } from "react-animation-on-scroll";
import ColoredSpacer from "../components/ColoredSpacer";
import ReactFullpage from "@fullpage/react-fullpage";

export default function OtherPage() {
    const scrollToNextElement = () => {
        scrollTo({
            top: scrollableElements[scrollableElementIndex]?.current?.offsetTop,
            left: 0,
            behavior: "smooth",
        });
        scrollableElementIndex =
            (scrollableElementIndex + 1) % scrollableElements.length;
    };

    const sectionLanding = useRef<HTMLDivElement>(null);
    const sectionBriefing = useRef<HTMLDivElement>(null);
    const sectionAbout = useRef<HTMLDivElement>(null);

    const scrollableElements = [sectionLanding, sectionBriefing, sectionAbout];
    let scrollableElementIndex = 1;

    return (
        <>
            <>
                <PageRevealer />
                <div className={css.navigation}>
                    <div
                        className={css.advance_button}
                        onMouseDown={scrollToNextElement}
                    >
                        <svg
                            viewBox="0 0 29 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M28.9912 8.92304L28.9912 0.771729L14.5 9.82874L0.00878859 0.771727L0.00878823 8.92303L14.5 17.98L28.9912 8.92304Z" />
                        </svg>
                    </div>
                </div>

                <ReactFullpage
                    //fullpage options
                    licenseKey={"YOUR_KEY_HERE"}
                    scrollingSpeed={1000} /* Options here */
                    render={({ state, fullpageApi }) => {
                        return (
                            <ReactFullpage.Wrapper>
                                <div className="section">
                                    <p>Section 1 (welcome to fullpage.js)</p>
                                    <button
                                        onClick={() =>
                                            fullpageApi.moveSectionDown()
                                        }
                                    >
                                        Click me to move down
                                    </button>
                                </div>
                                <div className="section">
                                    <p>Section 2</p>
                                </div>
                            </ReactFullpage.Wrapper>
                        );
                    }}
                />
            </>
        </>
    );
}

{
    /* <div className={css.section}>
                            <div className={`${css.slice} ${css.title}`}>
                                <p>
                                    <span className={css.colored}>Track</span>{" "}
                                    your open positions
                                </p>
                            </div>
                            <div className={`${css.slice}`}>
                                <Card />
                            </div>
                        </div>
                        <div className={css.section}>
                            <div className={`${css.slice}`}>
                                <p>Keep your finances in one single place</p>
                            </div>
                            <div className={`${css.slice} ${css.title}`}>
                                <p>
                                    <span className={css.colored}>
                                        Organize
                                    </span>{" "}
                                    into multiple categories
                                </p>
                            </div>
                        </div>
                        <div className={css.section}>
                            <div className={`${css.slice} ${css.title}`}>
                                <p>
                                    <span className={css.colored}>Link</span>{" "}
                                    operations from anywhere
                                </p>
                            </div>
                            <div className={`${css.slice}`}>
                                <p>Keep your finances in one single place</p>
                            </div>
                        </div> */
}
