import { useLocomotiveScroll } from "react-locomotive-scroll";
import css from "../styles/layout.module.css";
import { RefObject, useEffect, useState } from "react";

function isActiveSection() {}

export default function Header(props: {
    sectionRefs: RefObject<HTMLDivElement>[];
}) {
    const { scroll } = useLocomotiveScroll();
    const [currentActiveRefIndex, setCurrentActiveRefIndex] =
        useState<number>(0);
    let currentDelta = 0;
    let activeRefIndex = 0;

    useEffect(() => {
        if (scroll) {
            scroll.on("scroll", (instance: any) => {
                // // console.log("Start of call ", instance);

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
                        ]!?.current?.getClientRects()[0]!.top!
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

    return (
        <header className={`${css.header} ${css.shadow}`}>
            <div className={css.section}>
                <div
                    onClick={() => {
                        scroll.scrollTo(0);
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
                <div className={css.launch}>Launch</div>
            </div>
        </header>
    );
}
