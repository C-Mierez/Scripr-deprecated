import css from "../styles/components/colored_spacer.module.css";
import cssindex from "../styles/index.module.css";
import { useRef, useEffect, RefObject } from "react";

export default function ColoredSpacer({
    nextElement,
}: {
    nextElement: RefObject<HTMLDivElement>;
}) {
    const delimiter = useRef<HTMLDivElement>(null);
    const spacer1 = useRef<HTMLDivElement>(null);
    const spacer2 = useRef<HTMLDivElement>(null);
    const spacer3 = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                console.log(entry);

                if (!entry!.isIntersecting) {
                    slideUp();
                    // scrollTo({
                    //     top: nextElement.current!.offsetTop,
                    //     behavior: "smooth",
                    // });
                } else {
                    if (!spacer1.current?.classList.contains(css.grow!)) {
                        slideDown();
                    }
                }
            },
            {
                root: null,
            }
        );
        observer.observe(delimiter.current!);

        return () => {
            observer.disconnect();
        };
    }, []);

    const slideUp = () => {
        spacer1.current?.style.setProperty("translate", "0% 0%");
        spacer1.current?.style.setProperty("animation-delay", "0.2s");
        spacer1.current?.classList.remove(css.grow!);
        spacer1.current?.classList.add(css.scroll!);
        spacer2.current?.style.setProperty("translate", "0% 0%");
        spacer2.current?.style.setProperty("animation-delay", "0.1s");
        spacer2.current?.classList.remove(css.grow!);
        spacer2.current?.classList.add(css.scroll!);
        spacer3.current?.style.setProperty("translate", "0% 0%");
        spacer3.current?.style.setProperty("animation-delay", "0s");
        spacer3.current?.classList.remove(css.grow!);
        spacer3.current?.classList.add(css.scroll!);
    };

    const slideDown = () => {
        spacer1.current?.style.setProperty("translate", "-100% 0%");
        spacer1.current?.style.setProperty("animation-delay", "0s");
        spacer1.current?.classList.remove(css.scroll!);
        spacer1.current?.classList.add(css.grow!);
        spacer2.current?.style.setProperty("translate", "-100% 0%");
        spacer2.current?.style.setProperty("animation-delay", "0.1s");
        spacer2.current?.classList.remove(css.scroll!);
        spacer2.current?.classList.add(css.grow!);
        spacer3.current?.style.setProperty("translate", "-100% 0%");
        spacer3.current?.style.setProperty("animation-delay", "0.2s");
        spacer3.current?.classList.remove(css.scroll!);
        spacer3.current?.classList.add(css.grow!);
    };

    return (
        <>
            <div className={css.delimiter} ref={delimiter}></div>
            <div className={css.colored_spacer}>
                <div
                    className={`${css.spacer_1} ${css.grow}`}
                    ref={spacer1}
                ></div>
                <div
                    className={`${css.spacer_2} ${css.grow}`}
                    ref={spacer2}
                ></div>
                <div
                    className={`${css.spacer_3} ${css.grow}`}
                    ref={spacer3}
                ></div>
            </div>
        </>
    );
}
