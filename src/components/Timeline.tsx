import css from "../styles/components/timeline.module.css";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useEffect, useRef, useState } from "react";

export default function Timeline() {
    const { scroll } = useLocomotiveScroll();
    const timelineRef = useRef<HTMLDivElement>(null);

    const [timelineEndPosition, setTimelineEndPosition] = useState(0);

    useEffect(() => {
        setTimelineEndPosition(
            window.innerHeight * 0.5 -
                timelineRef.current!.getClientRects()[0]!.height
        );
    }, []);

    useEffect(() => {
        if (scroll) {
            scroll.on("scroll", (instance: any) => {
                const rect = timelineRef.current!.getClientRects()[0]!;

                const midHeight = window.innerHeight * 0.5;
                const endPosition = midHeight - rect.height;

                if (rect.top < midHeight && rect.top > endPosition) {
                    const progress =
                        1 - (rect.top - endPosition) / midHeight / 1.4; // Magic numbers :D
                    // console.log(progress);
                    timelineRef.current!.style.setProperty(
                        "--progress",
                        progress.toString()
                    );
                }
            });
        }

        return () => {
            if (scroll) scroll.destroy();
        };
    }, [scroll, timelineEndPosition]);

    return (
        <>
            <div className={css.columns}>
                <div className={css.col}>
                    <p>
                        {`We know that keeping track of your money can be a
                        hassle, so we've combined finance tracking and data
                        analysis all in one place.`}
                    </p>
                    <p>
                        {`Our goal is to help as many people as possible take
                        control of their finances.`}
                    </p>
                    <p>
                        {`We believe that everyone should have access to the tools
                        and information they need to make smart financial moves.`}
                    </p>
                    <p>
                        {`We're a small but mighty team of finance and techies,
                        and we're all about helping making finance more
                        accessible to people.`}
                    </p>
                    <p>{`If you have any questions or ideas for us...`}</p>
                </div>
                <div className={css.timeline} ref={timelineRef}>
                    <div className={css.fill} />
                </div>
                <div className={css.col}></div>
            </div>
        </>
    );
}
