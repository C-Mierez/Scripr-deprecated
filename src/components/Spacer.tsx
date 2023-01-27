import css from "../styles/spacer.module.css";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useEffect, useState } from "react";

export default function Spacer() {
    const { scroll } = useLocomotiveScroll();

    const [heightFactor, setHeightFactor] = useState<number>(1);

    useEffect(() => {
        if (scroll) {
            // Subscribe to the scroll event
            scroll.on("scroll", (instance: any) => {
                // Avoid unnecessary calculations if there are no elements in view
                if (Object.keys(instance.currentElements).length > 0)
                    // Calculate the height factor

                    setHeightFactor(
                        1 + (instance.scroll.y / instance.limit.y) * 13
                    );
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
            >
                <div
                    data-scroll
                    data-scroll-speed="1.25"
                    data-scroll-position="top"
                    data-scroll-target="#container"
                    className={css.spacer1}
                    style={{ height: `calc(3vh * ${heightFactor})` }}
                ></div>
                <div
                    data-scroll
                    data-scroll-speed="2.25"
                    data-scroll-position="top"
                    data-scroll-target="#container"
                    className={css.spacer2}
                    style={{ height: `calc(3vh * ${heightFactor})` }}
                ></div>
                <div
                    data-scroll
                    data-scroll-speed="3"
                    data-scroll-position="top"
                    data-scroll-target="#container"
                    className={css.spacer3}
                    style={{
                        height: `calc(3.5vh * ${heightFactor})`,
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
