import { useEffect, useRef } from "react";
import { MutableRefObject } from "react";
import {
    LocomotiveScrollProvider,
    useLocomotiveScroll,
} from "react-locomotive-scroll";

import css from "../styles/index.module.css";
import Card from "../components/Card";
import { AnimationOnScroll } from "react-animation-on-scroll";
import PageRevealer from "../components/PageRevealer";
import Spacer from "../components/Spacer";

export default function LocomotiveHomePage() {
    const mainRef = useRef(null);
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
                <main data-scroll-container ref={mainRef}>
                    <Landing />
                </main>
            </LocomotiveScrollProvider>
        </>
    );
}
export function Landing() {
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

    const sectionLanding = useRef<HTMLDivElement>(null);
    const sectionBriefing = useRef<HTMLDivElement>(null);
    const sectionAbout = useRef<HTMLDivElement>(null);

    const scrollableElements = [sectionLanding, sectionBriefing, sectionAbout];
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
                <div
                    className={css.landing}
                    data-scroll-section
                    ref={sectionLanding}
                >
                    <div className={css.background}></div>
                    <a href={"./locomotiveIndex"}>
                        <h1>All your Finances</h1>
                    </a>
                    <h2>in one single place</h2>
                    <AnimationOnScroll animateIn="animate__fadeInUp">
                        <p>
                            A tool in which to{" "}
                            <span className={css.colored}>manage</span> your
                            assets and{" "}
                            <span className={css.colored}>visualize</span> their
                            performance
                        </p>
                    </AnimationOnScroll>
                </div>
                {/* <ColoredSpacer nextElement={sectionBriefing} /> */}
                <Spacer></Spacer>

                <div className={css.main}>
                    <div
                        className={css.briefing}
                        data-scroll-section
                        ref={sectionBriefing}
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
                                <span className={css.colored}>Organize</span>{" "}
                                your expenses
                            </h2>
                        </div>
                        <div className={css.title}>
                            <h2>
                                <span className={css.colored}>Link</span>{" "}
                                everything you want
                            </h2>
                        </div>
                    </div>
                    <div
                        className={css.about}
                        data-scroll-section
                        ref={sectionAbout}
                    >
                        <h1>About</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Quos dolorum blanditiis laborum. Aliquam neque
                            sed eaque ea accusamus tenetur, fuga, molestias
                            adipisci unde perspiciatis sunt asperiores tempora
                            illum quis officiis maiores! Recusandae
                            reprehenderit repudiandae accusantium atque,
                            accusamus dolore tempora eius est consectetur magnam
                            sequi vitae modi similique tempore commodi velit
                            quos quia exercitationem facilis sapiente error fuga
                            qui debitis sed. Maxime accusamus perferendis
                            inventore, iure eos dolore iusto sequi in ratione
                            soluta fugit architecto repellat. Repellat quos
                            adipisci laudantium incidunt voluptate. Quo voluptas
                            quasi suscipit amet quod quis, ipsam laborum aut
                            officiis exercitationem obcaecati mollitia
                            consequuntur deleniti optio. Excepturi iure hic quia
                            sequi natus alias dolorem sapiente repudiandae quam
                            numquam enim, non consequatur. Sequi adipisci dolore
                            illo nisi hic amet ratione fuga perferendis,
                            voluptatum, incidunt corporis maxime eveniet itaque
                            assumenda dolorum expedita earum magnam, unde vitae
                            quasi excepturi autem quidem reprehenderit.
                            Inventore perspiciatis labore aut, temporibus
                            assumenda porro quisquam voluptatum quam eum, autem
                            cupiditate, deserunt id unde! Rerum praesentium ipsa
                            aperiam commodi dolorum amet iusto quae, placeat
                            illum, veritatis sapiente laboriosam nihil excepturi
                            accusamus vero delectus consequatur doloribus odit
                            cumque nostrum labore. Velit dolor repellat non quae
                            perspiciatis cupiditate pariatur deserunt laborum
                            rem ea ullam doloribus aspernatur autem, eaque
                            tenetur nostrum soluta, suscipit quos, voluptate
                            iure. Deleniti sint odit cum deserunt repellat
                            asperiores id! Ipsam blanditiis sequi quaerat
                            assumenda, praesentium id maiores, quidem doloribus
                            fugit aut aliquid, dolores magnam perferendis labore
                            corrupti. Aspernatur veritatis odit aut? Beatae
                            ipsum temporibus quae deleniti culpa praesentium
                            optio laborum adipisci, quisquam excepturi illo
                            reprehenderit dignissimos asperiores aliquam,
                            quibusdam ullam porro eveniet! Vitae veritatis
                            recusandae odit dolore accusamus. Maxime, at?
                            Voluptatum esse beatae deserunt ipsa quo ad libero
                            dicta ipsum aspernatur? Totam voluptate excepturi
                            praesentium eos asperiores repellat placeat quaerat
                            sint numquam consectetur beatae, non, dolor ullam
                            quis animi sequi cumque! Amet deleniti nostrum nemo
                            facere dolore consequatur, accusantium voluptas,
                            iusto libero tenetur ullam dolor architecto quod,
                            distinctio totam aliquid dolores maiores quasi vero
                            saepe temporibus! Minima, laboriosam laudantium
                            cumque voluptas, voluptatem nisi beatae reiciendis
                            dicta recusandae omnis vero sit. Expedita reiciendis
                            sapiente cumque repellendus quas aut, inventore
                            asperiores sunt placeat quia ducimus? Numquam, odit!
                        </p>
                    </div>
                </div>
            </>
        </>
    );
}
