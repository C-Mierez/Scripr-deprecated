import { useLocomotiveScroll } from "react-locomotive-scroll";
import css from "../styles/layout.module.css";
import { RefObject, useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Squash as Hamburger } from "hamburger-react";

export default function Header(props: {
    sectionRefs: RefObject<HTMLDivElement>[];
}) {
    const { scroll } = useLocomotiveScroll();
    const [currentActiveRefIndex, setCurrentActiveRefIndex] =
        useState<number>(0);
    const [isScrolling, setIsScrolling] = useState<boolean>(false);
    let currentDelta = 0;
    let activeRefIndex = 0;
    // let scrolling = false;

    useEffect(() => {
        if (scroll) {
            scroll.on("scroll", (instance: any) => {
                // // console.log("Start of call ", instance);

                // if (Math.abs(instance.delta.y - instance.scroll.y) < 1) {
                //     scrolling = false;
                //     setIsScrolling(false);
                // } else if (!scrolling) {
                //     scrolling = true;
                //     setIsScrolling(true);
                // }

                // Only run calculation when Delta changes. Scroll value (smoothing) doesn't matter
                if (currentDelta === instance.delta.y) return;
                // Update the current delta
                currentDelta = instance.delta.y;

                const reduceMinDistanceRef = (
                    minIndex: number,
                    currentIndex: number
                ): number => {
                    if (currentIndex >= props.sectionRefs.length) {
                        return minIndex;
                    }

                    const prevDistance = Math.abs(
                        // window.screen.height -
                        props.sectionRefs[
                            minIndex
                        ]?.current?.getClientRects()[0]!.top!
                    );
                    let currDistance = Math.abs(
                        // window.screen.height -
                        props.sectionRefs[
                            currentIndex
                        ]!.current?.getClientRects()[0]!.top!
                    );
                    // Invalid if its not being rendered
                    currDistance =
                        currDistance === 0 ? Number.MAX_VALUE : currDistance;

                    return reduceMinDistanceRef(
                        prevDistance < currDistance ? minIndex : currentIndex,
                        currentIndex + 1
                    );
                };

                // Find the closest section to the top of the screen
                const minIndex = reduceMinDistanceRef(activeRefIndex, 0);
                if (minIndex !== activeRefIndex) {
                    // Update the current active section
                    activeRefIndex = minIndex;
                    setCurrentActiveRefIndex(minIndex);
                    // // console.log("Min ", minIndex);
                }
            });
        }

        return () => {
            if (scroll) scroll.destroy();
        };
    }, [scroll]);

    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <header
                className={`${css.header} ${css.shadow} ${
                    isScrolling ? css.hide : css.show
                }`}
            >
                <div className={css.section}>
                    <div
                        onClick={() => {
                            scroll.scrollTo(0);
                            setShowMenu(false);
                        }}
                    >
                        Scripr
                    </div>
                </div>
                <div className={css.section}>
                    <div
                        className={currentActiveRefIndex == 2 ? css.active : ""}
                        onClick={() => {
                            scroll.scrollTo(props.sectionRefs[2]?.current);
                        }}
                    >
                        About
                    </div>
                    <div
                        className={currentActiveRefIndex == 3 ? css.active : ""}
                        onClick={() => {
                            scroll.scrollTo(props.sectionRefs[3]?.current);
                        }}
                    >
                        Contact
                    </div>
                    <div
                        className={currentActiveRefIndex == 4 ? css.active : ""}
                        onClick={() => {
                            scroll.scrollTo(props.sectionRefs[4]?.current);
                        }}
                    >
                        Reviews
                    </div>
                    <div className={css.launch}>Launch</div>
                </div>
                <div className={css.menuButton}>
                    <Hamburger
                        onToggle={() => {
                            setShowMenu((s) => !s);
                        }}
                        toggled={showMenu}
                    ></Hamburger>
                </div>
            </header>
            <CSSTransition
                in={showMenu}
                timeout={1000}
                unmountOnExit
                classNames={{
                    enter: css.menuEnter,
                    enterActive: css.menuEnterActive,
                    exit: css.menuExit,
                    exitActive: css.menuExitActive,
                    enterDone: css.menuEnterDone,
                }}
            >
                <div className={css.menu}>
                    <div className={css.background}>
                        <div className={css.layer} />
                        <div className={css.layer} />
                        <div className={css.layer} />
                        <div className={css.layer} />
                        <div className={css.layer} />
                    </div>
                    <div className={css.items}>
                        <div
                            className={
                                currentActiveRefIndex == 1 ? css.active : ""
                            }
                            onClick={() => {
                                scroll.scrollTo(props.sectionRefs[1]?.current);
                                setShowMenu(false);
                            }}
                        >
                            Features
                        </div>
                        <div
                            className={
                                currentActiveRefIndex == 2 ? css.active : ""
                            }
                            onClick={() => {
                                scroll.scrollTo(props.sectionRefs[2]?.current);
                                setShowMenu(false);
                            }}
                        >
                            About
                        </div>
                        <div
                            className={
                                currentActiveRefIndex == 3 ? css.active : ""
                            }
                            onClick={() => {
                                scroll.scrollTo(props.sectionRefs[3]?.current);
                                setShowMenu(false);
                            }}
                        >
                            Contact
                        </div>
                        <div
                            className={
                                currentActiveRefIndex == 4 ? css.active : ""
                            }
                            onClick={() => {
                                scroll.scrollTo(props.sectionRefs[4]?.current);
                                setShowMenu(false);
                            }}
                        >
                            Reviews
                        </div>
                        <div className={css.launch}>Launch App</div>
                    </div>
                </div>
            </CSSTransition>
        </>
    );
}
