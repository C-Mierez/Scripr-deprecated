import css from "../styles/spacer.module.css";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useEffect, useState } from "react";

export default function Spacer() {
    const { scroll } = useLocomotiveScroll();

    const [progressFactor, setProgressFactor] = useState<number>(1);

    useEffect(() => {
        if (scroll) {
            // Subscribe to the scroll event
            scroll.on("scroll", (instance: any) => {
                // Avoid unnecessary calculations if there are no elements in view
                if (Object.keys(instance.currentElements).length > 0) {
                    // Calculate the progress factor
                    setProgressFactor(instance.scroll.y / instance.limit.y);
                }
            });
        }
        return () => {
            if (scroll) {
                scroll.destroy();
            }
        };
    }, [scroll]);

    return (
        <>
            <div
                id="container"
                data-scroll-section
                className={css.spacer_container}
                style={{ height: `calc(9dvh * ${progressFactor * 28 + 1})` }}
            >
                <div
                    data-scroll
                    data-scroll-position="top"
                    className={css.spacer1}
                    data-scroll-target="#container"
                    data-scroll-speed="0.1"
                    style={{
                        height: `calc(3dvh * ${progressFactor * 10 + 1})`,
                    }}
                ></div>
                <div
                    data-scroll
                    data-scroll-position="top"
                    className={css.spacer2}
                    data-scroll-target="#container"
                    data-scroll-speed="0.3"
                    style={{
                        height: `calc(3dvh * ${progressFactor * 16 + 1})`,
                    }}
                ></div>
                <div
                    data-scroll
                    data-scroll-position="top"
                    className={css.spacer3}
                    data-scroll-target="#container"
                    data-scroll-speed="0.6"
                    style={{
                        height: `calc(3dvh * ${progressFactor * 24 + 1})`,
                    }}
                ></div>
            </div>
            <div data-scroll-section className={css.last_spacer}>
                <div className={css.spacer4}></div>
                <div className={css.shape}>
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M1200 0L0 0 598.97 114.72 1200 0z"
                            className={css.shape_fill}
                        ></path>
                    </svg>
                </div>
            </div>
        </>
    );
}
