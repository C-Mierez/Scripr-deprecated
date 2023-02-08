import css from "../styles/components/timeline.module.css";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

export default function Timeline() {
    const { scroll } = useLocomotiveScroll();
    const timelineRef = useRef<HTMLDivElement>(null);

    const [timelineEndPosition, setTimelineEndPosition] = useState(0);

    const [progress, setProgress] = useState(0);

    const items = [
        {
            text: `We know that keeping track of your money can be a hassle`,
            ref: useRef<HTMLDivElement>(null),
        },
        {
            text: `Our goal is to help as many people as possible take control of their finances`,
            ref: useRef<HTMLDivElement>(null),
        },
        {
            text: `So we've combined finance tracking and data analysis all in one place`,
            ref: useRef<HTMLDivElement>(null),
        },
        {
            text: `We believe that everyone should have access to the tools and information they need to make smart financial moves`,
            ref: useRef<HTMLDivElement>(null),
        },
        {
            text: `We're a small but mighty team of people who are all about helping to make finance less overwhelming and more accessible to people`,
            ref: useRef<HTMLDivElement>(null),
        },
        {
            text: `If you have any questions or ideas for us...`,
            ref: useRef<HTMLDivElement>(null),
        },
    ];
    const [showElements, setShowElements] = useState(items.map(() => false));

    useEffect(() => {
        setTimelineEndPosition(
            window.innerHeight * 0.5 -
                timelineRef.current!.getClientRects()[0]!.height
        );
    }, []);

    useEffect(() => {
        if (scroll) {
            scroll.on("scroll", () => {
                const rect = timelineRef.current!.getClientRects()[0]!;

                const midHeight = window.innerHeight * 0.5;
                const endPosition = midHeight - rect.height;

                // Print all values
                // console.log(
                //     `rect.top: ${rect.top}, midHeight: ${midHeight}, endPosition: ${endPosition}`
                // );

                if (rect.top < midHeight && rect.top > endPosition) {
                    const maxConstant = (midHeight - endPosition) / midHeight;
                    const progress =
                        1 - (rect.top - endPosition) / midHeight / maxConstant;

                    timelineRef.current!.style.setProperty(
                        "--progress",
                        progress.toString()
                    );

                    setProgress(progress);
                }
            });
        }

        return () => {
            if (scroll) scroll.destroy();
        };
    }, [scroll, timelineEndPosition]);

    useEffect(() => {
        const newShowElements = items.map((v, i) => {
            return i == 0
                ? true
                : v.ref.current!.getClientRects()[0]!.top <
                      window.innerHeight * 0.5;
        });

        setShowElements(newShowElements);
    }, [progress]);

    return (
        <>
            <div className={css.columns}>
                <div className={css.col}></div>
                <div className={css.timeline} ref={timelineRef}>
                    <div className={css.fill} />
                </div>
                <div className={css.col}>
                    {showElements.map((v, i) => {
                        return (
                            <CSSTransition
                                key={i}
                                timeout={200}
                                unmountOnExit={false}
                                in={v}
                                classNames={{
                                    enter: css.itemEnter,
                                    enterActive: css.itemEnterActive,
                                    enterDone: css.itemEnterDone,
                                    exit: css.itemExit,
                                    exitActive: css.itemExitActive,
                                    exitDone: css.itemExitDone,
                                }}
                            >
                                <p ref={items[i]?.ref}>{items[i]?.text}</p>
                            </CSSTransition>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
