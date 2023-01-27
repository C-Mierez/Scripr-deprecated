import { useRef, useEffect, RefObject } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import {
    LocomotiveScrollProvider,
    useLocomotiveScroll,
} from "react-locomotive-scroll";

import Card from "../components/Card";
import PageRevealer from "../components/PageRevealer";
import Spacer from "../components/Spacer";
import css from "../styles/index.module.css";
import Header from "../components/Header";

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
                    multiplier: 0.8,
                    smartphone: {
                        smooth: true,
                    },
                    tablet: {
                        smooth: true,
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
                        <h2>
                            <span className={css.colored}>Track</span> your
                            operations
                        </h2>
                    </div>
                    <div className={css.grid}>
                        <Card
                            title="Spot"
                            description="Your purchased assets and their price in real time."
                        />
                        <Card
                            title="Leverage"
                            description="Your leveraged positions and their PnL."
                        />
                        <Card
                            title="NFTs"
                            description="Your profits on NFT flipping."
                        />
                    </div>
                    <div className={css.title}>
                        <h2>
                            <span className={css.colored}>Organize</span> your
                            expenses
                        </h2>
                    </div>
                    <div className={css.title}>
                        <h2>
                            <span className={css.colored}>Link</span> everything
                            you want
                        </h2>
                    </div>
                </section>
                <section
                    className={css.about}
                    data-scroll-section
                    ref={props.sectionRefs[2]}
                >
                    <h1>About</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quos dolorum blanditiis laborum. Aliquam neque sed
                        eaque ea accusamus tenetur, fuga, molestias adipisci
                        unde perspiciatis sunt asperiores tempora illum quis
                        officiis maiores! Recusandae reprehenderit repudiandae
                        accusantium atque, accusamus dolore tempora eius est
                        consectetur magnam sequi vitae modi similique tempore
                        commodi velit quos quia exercitationem facilis sapiente
                        error fuga qui debitis sed. Maxime accusamus perferendis
                        inventore, iure eos dolore iusto sequi in ratione soluta
                        fugit architecto repellat. Repellat quos adipisci
                        laudantium incidunt voluptate. Quo voluptas quasi
                        suscipit amet quod quis, ipsam laborum aut officiis
                        exercitationem obcaecati mollitia consequuntur deleniti
                        optio. Excepturi iure hic quia sequi natus alias dolorem
                        sapiente repudiandae quam numquam enim, non consequatur.
                    </p>

                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </section>
                <section
                    className={css.contact}
                    data-scroll-section
                    ref={props.sectionRefs[3]}
                >
                    <h1>Contact</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quos dolorum blanditiis laborum. Aliquam neque sed
                        eaque ea accusamus tenetur, fuga, molestias adipisci
                        unde perspiciatis sunt asperiores tempora illum quis
                        officiis maiores! Recusandae reprehenderit repudiandae
                        accusantium atque, accusamus dolore tempora eius est
                        consectetur magnam sequi vitae modi similique tempore
                        commodi velit quos quia exercitationem facilis sapiente
                        error fuga qui debitis sed. Maxime accusamus perferendis
                        inventore, iure eos dolore iusto sequi in ratione soluta
                        fugit architecto repellat. Repellat quos adipisci
                        laudantium incidunt voluptate. Quo voluptas quasi
                        suscipit amet quod quis, ipsam laborum aut officiis
                        exercitationem obcaecati mollitia consequuntur deleniti
                        optio. Excepturi iure hic quia sequi natus alias dolorem
                        sapiente repudiandae quam numquam enim, non consequatur.
                        Sequi adipisci dolore illo nisi hic amet ratione fuga
                        perferendis, voluptatum, incidunt corporis maxime
                        eveniet itaque assumenda dolorum expedita earum magnam
                    </p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </section>
            </>
        </>
    );
}
