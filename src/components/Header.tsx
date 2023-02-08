import { Squash as Hamburger } from "hamburger-react";
import { useEffect, useState, useRef } from "react";
import type { RefObject } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { CSSTransition } from "react-transition-group";

import css from "../styles/layout.module.css";

export type HeaderSection = {
    ref: RefObject<HTMLDivElement>;
    title: string;
};

export default function Header(props: { sectionRefs: HeaderSection[] }) {
    const { scroll } = useLocomotiveScroll();

    // Current active section index
    const [currentActiveRefIndex, setCurrentActiveRefIndex] =
        useState<number>(0);

    // Current active section index (Same as above, but used in the useEffect)
    // Could this create a race condition?
    const activeRefIndex = useRef(0);

    // Current delta of the scroll (used to determine if the scroll has changed)
    const currentDelta = useRef(0);

    useEffect(() => {
        if (scroll) {
            scroll.on("scroll", (instance: any) => {
                // Only run calculation when Delta changes. Scroll value (smoothing) doesn't matter
                if (currentDelta.current === instance.delta.y) return;
                // Update the current delta
                currentDelta.current = instance.delta.y;

                const reduceMinDistanceRef = (
                    minIndex: number,
                    currentIndex: number
                ): number => {
                    if (currentIndex >= props.sectionRefs.length) {
                        return minIndex;
                    }

                    const prevDistance = Math.abs(
                        props.sectionRefs[
                            minIndex
                        ]?.ref.current?.getClientRects()[0]!.top!
                    );
                    let currDistance = Math.abs(
                        props.sectionRefs[
                            currentIndex
                        ]!.ref.current?.getClientRects()[0]!.top!
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
                const minIndex = reduceMinDistanceRef(
                    activeRefIndex.current,
                    0
                );
                if (minIndex !== activeRefIndex.current) {
                    // Update the current active section
                    activeRefIndex.current = minIndex;
                    setCurrentActiveRefIndex(minIndex);
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
            <header className={`${css.header} ${css.shadow}`}>
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
                    {props.sectionRefs.map((section, i) => {
                        // Skip first two sections
                        if (i < 2) return null;
                        return (
                            <div
                                key={i}
                                className={
                                    currentActiveRefIndex == i ? css.active : ""
                                }
                                onClick={() => {
                                    scroll.scrollTo(section.ref.current);
                                }}
                            >
                                {section.title}
                            </div>
                        );
                    })}
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
                        {props.sectionRefs.map((section, i) => {
                            if (i < 1) return null;
                            return (
                                <div
                                    key={i}
                                    className={
                                        currentActiveRefIndex == i
                                            ? css.active
                                            : ""
                                    }
                                    onClick={() => {
                                        scroll.scrollTo(section.ref.current);
                                        setShowMenu(false);
                                    }}
                                >
                                    {section.title}
                                </div>
                            );
                        })}
                        <div className={css.launch}>Launch App</div>
                    </div>
                </div>
            </CSSTransition>
        </>
    );
}
