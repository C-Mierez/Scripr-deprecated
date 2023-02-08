import { useEffect, useRef, useState } from "react";
import {
    LocomotiveScrollProvider,
    useLocomotiveScroll,
} from "react-locomotive-scroll";
import { CSSTransition } from "react-transition-group";

import { Card } from "../components/Card";
import ContactForm from "../components/ContactForm";
import Ellipsis from "../components/Ellipsis";
import Header from "../components/Header";
import PageRevealer from "../components/PageRevealer";
import Spacer from "../components/Spacer";
import Testimonials from "../components/Testimonials";
import Timeline from "../components/Timeline";
import cssCard from "../styles/components/card.module.css";
import css from "../styles/index.module.css";
import { HeaderSection } from "../components/Header";

export default function LocomotiveHomePage() {
    const mainRef = useRef(null);
    const sectionLanding = useRef<HTMLDivElement>(null);
    const sectionBriefing = useRef<HTMLDivElement>(null);
    const sectionAbout = useRef<HTMLDivElement>(null);
    const sectionContact = useRef<HTMLDivElement>(null);
    const sectionReview = useRef<HTMLDivElement>(null);

    const sectionRefs: HeaderSection[] = [
        { ref: sectionLanding, title: "Landing" },
        { ref: sectionBriefing, title: "Briefing" },
        { ref: sectionAbout, title: "About" },
        { ref: sectionContact, title: "Contact" },
        { ref: sectionReview, title: "Review" },
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
                    <Landing headerSections={sectionRefs} />
                </main>
            </LocomotiveScrollProvider>
        </>
    );
}
export function Landing(props: { headerSections: HeaderSection[] }) {
    const { scroll } = useLocomotiveScroll();
    const sectionFooter = useRef<HTMLDivElement>(null);

    const scrollSmoothNextElement = () => {
        if (scroll) {
            scroll.scrollTo(
                scrollableElements[scrollableElementIndex]?.ref.current,
                {}
            );
            scrollableElementIndex =
                (scrollableElementIndex + 1) % scrollableElements.length;
        }
    };

    let init = false;
    useEffect(() => {
        if (scroll && !init) {
            scroll.scroll.checkResize();
            init = true;
        }
    }, [scroll]);

    const [atFooter, setAtFooter] = useState(false);
    let atFooterStop = false;
    useEffect(() => {
        console.log(scroll);
        if (scroll) {
            scroll.on("scroll", (instance: any) => {
                if (
                    !atFooterStop &&
                    sectionFooter.current!.getClientRects()[0]!.top <
                        window.innerHeight
                ) {
                    atFooterStop = true;
                    setAtFooter(true);
                } else if (
                    atFooterStop &&
                    sectionFooter.current!.getClientRects()[0]!.top >
                        window.innerHeight
                ) {
                    atFooterStop = false;
                    setAtFooter(false);
                }
            });
        }

        return () => {
            if (scroll) scroll.destroy();
        };
    }, [scroll]);

    const scrollableElements = props.headerSections;
    let scrollableElementIndex = 1;

    return (
        <>
            <>
                <CSSTransition
                    in={atFooter}
                    timeout={1000}
                    classNames={{
                        enterDone: css.hideNav,
                        exit: css.showNavExit,
                        exitActive: css.showNavActive,
                        exitDone: css.showNavDone,
                    }}
                >
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
                </CSSTransition>
                <section
                    className={css.landing}
                    data-scroll-section
                    ref={props.headerSections[0]!.ref}
                >
                    <div className={css.background}></div>
                    <h1>
                        <span>All your Finances</span>
                    </h1>
                    <h2>in one single place</h2>
                    <p
                        data-scroll
                        data-scroll-repeat="true"
                        data-scroll-class={css.fadeIn}
                    >
                        A tool to help you{" "}
                        <span className={css.colored}>track</span> your finance
                        and <span className={css.colored}>visualize</span> its
                        performance
                    </p>
                </section>
                <Spacer />

                <section
                    className={css.briefing}
                    data-scroll-section
                    ref={props.headerSections[1]!.ref}
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
                    ref={props.headerSections[2]!.ref}
                >
                    <div className={css.background_gradient}></div>
                    <div className={css.content}>
                        <About />
                    </div>
                </section>
                <section
                    className={css.contact}
                    data-scroll-section
                    ref={props.headerSections[3]!.ref}
                >
                    <div className={css.background}></div>
                    <div className={css.content}>
                        <Contact />
                    </div>
                </section>
                <section
                    className={css.testimonials}
                    ref={props.headerSections[4]!.ref}
                    data-scroll-section
                >
                    <Testimonials />
                </section>
                <footer
                    className={css.footer}
                    data-scroll-section
                    ref={sectionFooter}
                >
                    <Footer />
                </footer>
            </>
        </>
    );
}

export function Footer() {
    return (
        <>
            <div className={css.grid}>
                <div className={css.links}>
                    <a href="">
                        <p>Docs</p>
                    </a>
                    <a href="">
                        <p>Showcase</p>
                    </a>
                    <a href="">
                        <p>Support</p>
                    </a>
                </div>
                <div className={css.newsletter}>
                    <div className={css.title}>Hop into our Newsletter!</div>
                    <div className={css.form}>
                        <input type="text" placeholder="Your E-mail" required />
                        <button>Subscribe</button>
                    </div>
                </div>
                <div className={css.presentation}>
                    <div className={css.logo}>SCRIPR</div>
                    <div className={css.slogan}>
                        <p>A Clearer View of Your Financial Picture</p>
                    </div>
                </div>
            </div>
            <div className={css.spacer}>
                <span />
                <span />
                <span />
                <span />
            </div>
            <div className={css.socials}>
                <a
                    className={css.icon}
                    href="https://github.com/C-Mierez"
                    target={"_blank"}
                    rel="noreferrer"
                >
                    <svg
                        viewBox="0 0 42 35"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_327_256)">
                            <path
                                d="M41.9982 14.2134C41.9982 14.2134 40.6197 14.0981 39.6799 14.0648C38.3513 14.0176 36.6764 14.0308 34.7776 14.1253C34.8479 13.6349 34.8974 13.1377 34.8985 12.6272C34.9953 10.7546 34.3665 9.00277 33.3438 7.45539C33.591 6.60163 33.8807 5.5155 33.9532 4.28349C34.036 2.8792 33.9146 1.32203 32.7872 0.269814L32.498 0.000346026H32.1035C29.4205 0.000346026 27.5839 1.12353 26.4609 2.01399C24.8394 1.38636 23.0161 1.00033 21.0039 1.00033C18.9802 1.00033 17.1394 1.39178 15.4512 2.01794C14.3288 1.12707 12.4907 0.000346026 9.80469 0.000346026L9.41177 0L9.12264 0.267594C8.02442 1.28735 7.92325 2.80176 7.99177 4.1992C8.05224 5.43148 8.32513 6.55212 8.56796 7.44726C7.52802 9.02484 6.90386 10.822 6.90386 12.5996C6.90386 13.1113 6.95148 13.61 7.02102 14.1016C5.21524 14.0177 3.60554 14.0018 2.32764 14.0468C1.38794 14.0808 0.648902 14.1356 0.00929299 14.1953C-0.0209432 13.6948 0.0319556 15.0585 0.0357351 15.2011C1.02189 15.1073 2.36295 15.0193 4.11192 15.0174C4.36175 15.0171 4.61866 15.0198 4.88538 15.0249C5.59207 15.0325 6.40207 15.0722 7.2135 15.113C7.29098 15.4248 7.37902 15.7316 7.48712 16.031C4.17977 16.1009 0.182421 16.7185 0.182421 16.7185L0.334759 17.7048C0.334759 17.7048 4.4283 17.0699 7.91288 17.0212C8.50959 18.217 9.36225 19.2847 10.489 20.156C12.0296 21.3472 14.0324 22.1795 16.4773 22.6247C16.1576 22.9536 15.8665 23.3143 15.6082 23.6951L15.5477 23.6421C15.5515 23.6346 15.0506 23.8874 14.2997 23.9547C13.5488 24.022 12.6225 24.0016 11.8016 24.0016C10.5766 24.0016 10.0371 23.4228 9.17469 22.3688C8.69715 21.7252 8.11493 21.2039 7.54966 20.8082C6.97083 20.4031 6.47707 20.1171 5.86607 20.0152L5.78407 20.0001H5.70015C5.2335 20.0001 4.78192 20.0342 4.36031 20.5157C4.14941 20.7565 4.00619 21.2027 4.10068 21.5802C4.19517 21.9578 4.43363 22.1897 4.64751 22.3322C6.01423 23.2433 6.25578 25.0466 7.11237 26.6505C7.91227 28.2445 9.63865 29.0001 11.4034 29.0001H14.003V33.799C14.003 33.799 15.3214 34.2302 16.001 34.3966V28.5997C16.001 27.509 16.4689 26.0115 17.21 24.8888C17.9512 23.7662 18.8874 23.0997 19.7003 23.0997H22.501C23.3139 23.0997 24.1815 23.7475 24.8761 24.8654C25.5707 25.9832 26.001 27.4843 26.001 28.5997V34.3966C26.6813 34.2299 27.3485 34.03 28.001 33.799V28.5997C28.001 27.0152 27.4807 25.2679 26.5752 23.8107C26.3005 23.3683 25.977 22.9498 25.6163 22.5743C27.9315 22.1169 29.8334 21.2989 31.3135 20.1544C32.4379 19.285 33.2886 18.2205 33.8839 17.0275C37.4465 17.0577 41.671 17.6974 41.671 17.6974C41.7091 17.3992 41.7866 16.7424 41.7866 16.7424L41.7639 16.7001C41.7639 16.7001 37.4642 16.0829 34.3096 16.0331C34.415 15.7395 34.5027 15.4381 34.579 15.1327C35.4741 15.0847 36.3475 15.0469 37.1181 15.0371C37.2515 15.0354 37.3838 15.0339 37.5126 15.0333L41.8956 15.2121M10.3996 2.1325C12.4172 2.32375 13.9352 3.22457 14.6379 3.84925L15.1067 4.26336L15.6848 4.02714C17.2663 3.37596 19.0302 3.00175 21.0032 3.00175C22.9762 3.00175 24.7405 3.3778 26.2024 4.01733L26.7883 4.27509L27.2668 3.84931C27.9698 3.2244 29.4903 2.32321 31.509 2.13253C31.7773 2.57749 32.0107 3.2103 31.9543 4.16765C31.8871 5.31334 31.5806 6.56129 31.3489 7.30242L31.1984 7.78484L31.4974 8.19306C32.4869 9.54232 32.9914 11.0026 32.9056 12.5466L32.9037 12.573V12.5995C32.9037 15.0949 32.005 17.0922 30.0912 18.5721C28.1773 20.0521 25.1559 20.9999 20.9036 20.9999C16.6514 20.9999 13.6281 20.052 11.7142 18.5721C9.80035 17.0922 8.90366 15.0949 8.90366 12.5995C8.90366 11.1348 9.43261 9.52344 10.4095 8.19127L10.7025 7.79283L10.5618 7.31822C10.3302 6.53034 10.0461 5.25396 9.98955 4.10139C9.94269 3.14396 10.1698 2.53861 10.3996 2.1325ZM8.31181 24.281C9.17759 25.179 10.2258 25.9998 11.804 25.9998C12.5832 25.9998 13.5558 26.0262 14.4798 25.945C14.4831 25.9447 14.4873 25.9433 14.4911 25.943C14.3694 26.293 14.2783 26.6452 14.202 26.9996H11.4051C10.1718 26.9996 9.30052 26.5541 8.89928 25.7516L8.8917 25.7365L8.88414 25.7251C8.71973 25.4198 8.50385 24.8103 8.31181 24.281Z"
                                fill="white"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_327_256">
                                <rect
                                    width="41.9983"
                                    height="34.3966"
                                    fill="white"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                </a>
                <a
                    className={css.icon}
                    href="https://twitter.com/CMierez_"
                    target={"_blank"}
                    rel="noreferrer"
                >
                    <svg
                        viewBox="0 0 51 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_328_259)">
                            <path
                                d="M25.1339 12.3615C24.1339 -1.63849 40.1339 -1.6385 43.1339 7.36151H49.1339L45.134 13.3615C45.134 51.3615 7.13391 44.3615 2.1339 39.3615C2.1339 39.3615 13.9059 36.6235 20.1339 30.3615C25.9849 24.4785 29.8419 36.4735 16.8469 33.1385C2.13388 29.3615 1.13391 17.3615 1.13391 17.3615C1.13391 17.3615 10.1339 18.3615 14.1339 19.3615C18.1339 20.3615 16.1339 25.3615 13.1339 24.3615C10.1339 23.3615 3.13391 17.3615 4.1339 3.3615C9.15791 10.6955 21.1339 18.3615 31.1339 15.3615"
                                stroke="white"
                                strokeWidth="2.26772"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_328_259">
                                <rect
                                    width="50.2676"
                                    height="44.4883"
                                    fill="white"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                </a>
                <a
                    className={css.icon}
                    href="mailto: carlos.mierez20@gmail.com"
                    target={"_blank"}
                    rel="noreferrer"
                >
                    <svg
                        id="Layer_1"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 122.88 88.86"
                    >
                        <title>email</title>
                        <path d="M7.05,0H115.83a7.07,7.07,0,0,1,7,7.05V81.81a7,7,0,0,1-1.22,4,2.78,2.78,0,0,1-.66,1,2.62,2.62,0,0,1-.66.46,7,7,0,0,1-4.51,1.65H7.05a7.07,7.07,0,0,1-7-7V7.05A7.07,7.07,0,0,1,7.05,0Zm-.3,78.84L43.53,40.62,6.75,9.54v69.3ZM49.07,45.39,9.77,83.45h103L75.22,45.39l-11,9.21h0a2.7,2.7,0,0,1-3.45,0L49.07,45.39Zm31.6-4.84,35.46,38.6V9.2L80.67,40.55ZM10.21,5.41,62.39,47.7,112.27,5.41Z" />
                    </svg>
                </a>
            </div>

            <div className={css.legal}>
                <p>
                    By using Scripr, {`you're`} agreeing to our{" "}
                    <span>Terms of Service</span> and{" "}
                    <span>Privacy Policy</span>.
                </p>
                <p className={css.copyright}>
                    ©Copyright. All rights reserved.
                </p>
            </div>
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
                        We would <span>love</span> to hear
                        <br />
                        from you
                    </h2>
                    <p
                        data-scroll
                        data-scroll-repeat="true"
                        data-scroll-class={css.slideInLeft}
                    >
                        {`We’re always looking to improve Scripr!
`}
                    </p>
                    <br />
                    <br />
                    <p
                        data-scroll
                        data-scroll-repeat="true"
                        data-scroll-class={css.slideInLeft}
                    >
                        {`If you have any suggestions, feedback, questions `}
                        <FancyText text="~ or you just want to say Hi ~" />
                        {` please do not hesitate to send us a message!`}
                    </p>
                </div>
                <ContactForm />
            </div>
        </>
    );
}

export function FancyText(props: { text: string }) {
    return (
        <>
            {props.text.split("").map((char, index) => {
                return (
                    <span
                        className={css.bounce}
                        key={index}
                        style={{ animationDelay: `${index * 0.05}s` }}
                    >
                        {char}
                    </span>
                );
            })}
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
                <Card
                    ref={params.ref}
                    key={index}
                    title={params.title}
                    description={params.description}
                />
            ))}
        </div>
    );
}
