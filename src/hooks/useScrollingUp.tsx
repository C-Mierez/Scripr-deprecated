import { useEffect, useState } from "react";

export default function useScrollingUp() {
    const [scrollingUp, setScrollingUp] = useState(false);

    useEffect(() => {
        let prevScrollY = window.scrollY;

        const updateScrollDirection = () => {
            const scrollY = window.scrollY;
            const direction = scrollY > prevScrollY ? false : true;
            if (
                direction !== scrollingUp &&
                (scrollY - prevScrollY > 10 || scrollY - prevScrollY < -10)
            ) {
                setScrollingUp(direction);
            }
            prevScrollY = scrollY > 0 ? scrollY : 0;
        };

        window.addEventListener("scroll", updateScrollDirection);
        return () => {
            window.removeEventListener("scroll", updateScrollDirection);
        };
    }, [scrollingUp]);

    return scrollingUp;
}
