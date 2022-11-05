import { useEffect, useRef, useState } from "react";
import css from "../styles/layout.module.css";
import useScrollingUp from "../hooks/useScrollingUp";

export default function Header() {
    const headerRef = useRef<HTMLElement>(null);
    const scrollingUp = useScrollingUp();

    // Return the screen to the top of the page
    const scrollToTop = () => {
        scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };
    console.log("Rendered Header");

    // Hide header when scrolling down
    useEffect(() => {
        if (scrollingUp) {
            headerRef.current!.classList.remove(css.hidden!);
            // Add shadows to the header when the window is not at the top
            if (window.scrollY > 0) {
                headerRef.current!.classList.add(css.shadow!);
            }
        } else {
            headerRef.current!.classList.add(css.hidden!);
            const myInterval = setInterval(function () {
                headerRef.current!.classList.remove(css.hidden!);
                clearInterval(myInterval);
            }, 2000);
        }
    }, [scrollingUp]);

    return (
        <header className={css.header} ref={headerRef}>
            <div className={css.section}>
                <div onClick={scrollToTop}>Scripr</div>
            </div>
            <div className={css.section}>
                <div>About</div>
                <div>Contact</div>
                <div className={css.launch}>Launch</div>
            </div>
        </header>
    );
}
