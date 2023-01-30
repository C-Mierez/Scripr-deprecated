import { useRef, useEffect, RefObject, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import {
    LocomotiveScrollProvider,
    useLocomotiveScroll,
} from "react-locomotive-scroll";

import Card, { Card2 } from "../components/Card";
import PageRevealer from "../components/PageRevealer";
import Spacer from "../components/Spacer";
import css from "../styles/index.module.css";
import cssCard from "../styles/components/card.module.css";
import Header from "../components/Header";
import Ellipsis from "../components/Ellipsis";
import Timeline from "../components/Timeline";
import ContactForm from "../components/ContactForm";

export default function LocomotiveHomePage() {
    const mainRef = useRef(null);
    const sectionLanding = useRef<HTMLDivElement>(null);
    const sectionBriefing = useRef<HTMLDivElement>(null);
    const sectionAbout = useRef<HTMLDivElement>(null);
    const sectionContact = useRef<HTMLDivElement>(null);
    const sectionRefs = [
        sectionLanding,
        sectionBriefing,
        sectionAbout,
        sectionContact,
    ];
    return (
        <>
            <PageRevealer />
            <LocomotiveScrollProvider
                options={{
                    smooth: true,
                    lerp: 0.05,
                    multiplier: 0.9,
                    smartphone: {
                        smooth: true,
                        multiplier: 3,
                        touchMultiplier: 3,
                        lerp: 0.1,
                    },
                    tablet: {
                        smooth: true,
                        multiplier: 3,
                        touchMultiplier: 3,
                        lerp: 0.1,
                    },
                }}
                watch={[]}
                containerRef={mainRef}
            >
                <Header sectionRefs={sectionRefs} />
                <main data-scroll-container ref={mainRef}>
                    <Landing sectionRefs={sectionRefs} />
                </main>
            </LocomotiveScrollProvider>
        </>
    );
}
export function Landing(props: { sectionRefs: RefObject<HTMLDivElement>[] }) {
    const { scroll } = useLocomotiveScroll();

    const scrollSmoothNextElement = () => {
        if (scroll) {
            scroll.scrollTo(
                scrollableElements[scrollableElementIndex]?.current,
                {}
            );
            scrollableElementIndex =
                (scrollableElementIndex + 1) % scrollableElements.length;
        }
    };

    useEffect(() => {
        if (scroll) {
            scroll.on("scroll", (instance: any) => {
                // console.log(instance.scroll.y);
                // Update
            });
        }

        return () => {
            if (scroll) scroll.destroy();
        };
    }, [scroll]);

    const scrollableElements = props.sectionRefs;
    let scrollableElementIndex = 1;

    return (
        <>
            <>
                <div className={css.navigation}>
                    <div
                        className={css.advance_button}
                        onMouseDown={scrollSmoothNextElement}
                    >
                        <svg
                            viewBox="0 0 29 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M28.9912 8.92304L28.9912 0.771729L14.5 9.82874L0.00878859 0.771727L0.00878823 8.92303L14.5 17.98L28.9912 8.92304Z" />
                        </svg>
                    </div>
                </div>
                <section
                    className={css.landing}
                    data-scroll-section
                    ref={props.sectionRefs[0]}
                >
                    <div className={css.background}></div>
                    <h1>All your Finances</h1>
                    <h2>in one single place</h2>
                    <p
                        data-scroll
                        data-scroll-repeat="true"
                        data-scroll-class={css.fadeIn}
                    >
                        A tool in which to{" "}
                        <span className={css.colored}>manage</span> your assets
                        and <span className={css.colored}>visualize</span> their
                        performance
                    </p>
                </section>
                <Spacer />

                <section
                    className={css.briefing}
                    data-scroll-section
                    ref={props.sectionRefs[1]}
                >
                    <div className={css.title}>
                        <h2>Our Features</h2>
                        <Ellipsis alternate={false} />
                    </div>
                    <div
                        className={css.description}
                        data-scroll
                        data-scroll-repeat="true"
                        data-scroll-class={css.foldDown}
                    >
                        <p>
                            We have a wide variety of functionality and tools at
                            your disposal to make your finances easier.
                        </p>
                    </div>
                    <FeatureGrid />
                </section>

                <section
                    className={css.about}
                    data-scroll-section
                    ref={props.sectionRefs[2]}
                >
                    <div className={css.background_gradient}></div>
                    <div className={css.content}>
                        <About />
                    </div>
                </section>
                <section
                    className={css.contact}
                    data-scroll-section
                    ref={props.sectionRefs[3]}
                >
                    <div className={css.background}></div>
                    <div className={css.content}>
                        <Contact />
                    </div>
                </section>
            </>
        </>
    );
}

export function Contact() {
    return (
        <>
            <div className={css.title}>
                <h2>Reach Out!</h2>
                <Ellipsis alternate></Ellipsis>
            </div>
            <div className={css.grid}>
                <div className={css.info}>
                    <h2
                        data-scroll
                        data-scroll-repeat="true"
                        data-scroll-class={css.foldDown}
                    >
                        We would love to hear
                        <br />
                        from you
                    </h2>
                    <p
                        data-scroll
                        data-scroll-repeat="true"
                        data-scroll-class={css.foldDown}
                    >
                        {`We’re always looking to improve Scripr!
`}
                    </p>
                    <br />
                    <br />
                    <p
                        data-scroll
                        data-scroll-repeat="true"
                        data-scroll-class={css.foldDown}
                    >
                        {`If you have any suggestions, feedback, questions - or just want to say Hi - don’t hesitate to send us a message!`}
                    </p>
                </div>
                <ContactForm />
            </div>
        </>
    );
}

export function About() {
    return (
        <>
            <div className={css.title}>
                <h3
                    data-scroll
                    data-scroll-repeat="true"
                    data-scroll-class={css.foldDown}
                >
                    About Us
                </h3>
                <h2>
                    A <span className={css.gradient}>Clearer</span> View of Your
                    Financial Picture{" "}
                    <span>
                        <Ellipsis alternate={false} />
                    </span>
                </h2>
            </div>

            <Timeline />
        </>
    );
}

export function FeatureGrid() {
    const cardParams = [
        {
            title: "Track",
            description:
                "Follow the state of all your open positions with live and manual price tracking.",
            ref: useRef<HTMLDivElement>(null),
        },
        {
            title: "Organize",
            description:
                "Keep every kind of asset and operation in its place, as you see fit.",
            ref: useRef<HTMLDivElement>(null),
        },
        {
            title: "Link",
            description:
                "Connect operations, investments, expenses and income to each other.",
            ref: useRef<HTMLDivElement>(null),
        },
        {
            title: "Analyze",
            description:
                "Exploit your data to make better decisions and improve your finances.",
            ref: useRef<HTMLDivElement>(null),
        },
    ];
    const [lastSelectedCard, setLastSelectedCard] = useState(0);

    const activateRandomCard = () => {
        cardParams[lastSelectedCard]?.ref.current?.classList.remove(
            cssCard.active!
        );

        // Activate a random card
        const randomCard = Math.floor(Math.random() * cardParams.length);
        cardParams[randomCard]!.ref.current?.classList.add(cssCard.active!);

        setLastSelectedCard(randomCard);
    };

    // TODO: Fix multiple cards being activated at the same time
    useEffect(() => {
        const interval = setInterval(() => {
            cardParams[lastSelectedCard]?.ref.current?.classList.remove(
                cssCard.active!
            );

            // Activate a random card
            const randomCard = Math.floor(Math.random() * cardParams.length);
            cardParams[randomCard]!.ref.current?.classList.add(cssCard.active!);

            setLastSelectedCard(randomCard);
        }, 8000);

        return () => {
            clearInterval(interval);
        };
    }, [lastSelectedCard]);

    return (
        <div
            className={css.grid}
            onMouseEnter={() => {
                cardParams[lastSelectedCard]?.ref.current?.classList.remove(
                    cssCard.active!
                );
            }}
            onTouchStart={() => {
                cardParams[lastSelectedCard]?.ref.current?.classList.remove(
                    cssCard.active!
                );
            }}
        >
            {cardParams.map((params, index) => (
                <Card2
                    ref={params.ref}
                    key={index}
                    title={params.title}
                    description={params.description}
                />
            ))}
        </div>
    );
}
