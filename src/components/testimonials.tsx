import { CSSTransition } from "react-transition-group";
import css from "../styles/components/testimonials.module.css";
import Ellipsis from "./Ellipsis";
import { useState, useEffect } from "react";
import Image from "next/image";

function mod(n: number, m: number) {
    return ((n % m) + m) % m;
}

export default function Testimonials() {
    const testimonials = [
        {
            image: "/testimonial/jane.jpg",
            name: "Jane Dolly",
            title: "Stay-at-Home Mom",
            review: "Since using Scripr, I have a better understanding of where my money is going and how to budget accordingly. It's made a huge difference in my financial wellbeing!",
        },
        {
            image: "/testimonial/john.jpg",
            name: "P. John Sloan",
            title: "Engineer",
            review: "I never knew managing my finances could be so easy! Scripr has made it simple for me to track my balances and spending, and the data analysis tools are a game-changer.",
        },
        {
            image: "/testimonial/sarah.jpg",
            name: "Sarah Pike",
            title: "Financial Advisor",
            review: "I'm an avid investor and Scripr has made it so much easier for me to keep track of my portfolio. The performance visualizations are great, and the ability to link everything together is fantastic.",
        },
        {
            image: "/testimonial/michael.jpg",
            name: "Michael Brown",
            title: "Entrepreneur",
            review: "I was skeptical about trying another finance tracking app, but Scripr exceeded my expectations. The interface is user-friendly and the features are comprehensive. I'm never going back to my old way of managing my finances.",
        },
        {
            image: "/testimonial/amanda.jpg",
            name: "Amanda Lee",
            title: "Bakery Owner",
            review: "As a small business owner, Scripr has been a lifesaver. I can track all my income and expenses in one place and the data analysis tools have helped me make informed decisions about my finances.",
        },
        {
            image: "/testimonial/david.jpg",
            name: "David Kim",
            title: "Sales Manager",
            review: "I love that Scripr is accessible from anywhere, and the real-time updates make it easy for me to keep track of my finances on-the-go. It's truly transformed the way I manage my money.",
        },
        {
            image: "/testimonial/rachel.jpg",
            name: "Rachel Green",
            title: "Teacher",
            review: "I never used to be very organized with my finances, but Scripr has changed that for me. The app is so easy to use and helps me keep track of all my balances and expenses in one place.",
        },
        {
            image: "/testimonial/jack.jpg",
            name: "Jack Wilson",
            title: "Freelance Designer",
            review: "As a freelance worker, it's crucial for me to keep track of my income and expenses. Scripr has made it so much easier for me to stay on top of my finances and make informed decisions about my business.",
        },
    ];

    useEffect(() => {
        // Scroll testimonial after 5 seconds
        const interval = setInterval(() => {
            setIsScrolling(true);
            setIsScrollingLeft(false);
            setActiveTestimonialIndex((prev) =>
                mod(prev + 1, testimonials.length)
            );
        }, 10000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(1);

    const [isScrolling, setIsScrolling] = useState(false);
    const [isScrollingLeft, setIsScrollingLeft] = useState(false);

    return (
        <div className={css.testimonials}>
            <div className={css.title}>
                <h2>
                    See what others say{" "}
                    <span>
                        <Ellipsis alternate={true} />
                    </span>
                </h2>
            </div>
            <div className={css.grid}>
                <CSSTransition
                    in={isScrolling}
                    timeout={500}
                    classNames={{
                        enter: isScrollingLeft
                            ? css.enterLeft
                            : css.enterMainToLeft,
                        enterActive: isScrollingLeft
                            ? css.enterActiveLeft
                            : css.enterActiveMainToLeft,
                    }}
                >
                    <Testimonial
                        image={
                            testimonials[
                                mod(
                                    activeTestimonialIndex - 1,
                                    testimonials.length
                                )
                            ]!.image
                        }
                        name={
                            testimonials[
                                mod(
                                    activeTestimonialIndex - 1,
                                    testimonials.length
                                )
                            ]!.name
                        }
                        title={
                            testimonials[
                                mod(
                                    activeTestimonialIndex - 1,
                                    testimonials.length
                                )
                            ]!.title
                        }
                        review={
                            testimonials[
                                mod(
                                    activeTestimonialIndex - 1,
                                    testimonials.length
                                )
                            ]!.review
                        }
                    />
                </CSSTransition>
                <CSSTransition
                    in={isScrolling}
                    timeout={500}
                    classNames={{
                        enter: isScrollingLeft
                            ? css.enterLeftToMain
                            : css.enterRightToMain,
                        enterActive: isScrollingLeft
                            ? css.enterActiveLeftToMain
                            : css.enterActiveRightToMain,
                    }}
                >
                    <Testimonial
                        image={testimonials[activeTestimonialIndex]!.image}
                        main={true}
                        name={testimonials[activeTestimonialIndex]!.name}
                        title={testimonials[activeTestimonialIndex]!.title}
                        review={testimonials[activeTestimonialIndex]!.review}
                    />
                </CSSTransition>
                <CSSTransition
                    in={isScrolling}
                    timeout={500}
                    classNames={{
                        enter: isScrollingLeft
                            ? css.enterMainToRight
                            : css.enterRight,
                        enterActive: isScrollingLeft
                            ? css.enterActiveMainToRight
                            : css.enterActiveRight,
                    }}
                    onEntered={() => {
                        console.log("Transition done");
                        setIsScrolling(false);
                    }}
                >
                    <Testimonial
                        image={
                            testimonials[
                                mod(
                                    activeTestimonialIndex + 1,
                                    testimonials.length
                                )
                            ]!.image
                        }
                        name={
                            testimonials[
                                mod(
                                    activeTestimonialIndex + 1,
                                    testimonials.length
                                )
                            ]!.name
                        }
                        title={
                            testimonials[
                                mod(
                                    activeTestimonialIndex + 1,
                                    testimonials.length
                                )
                            ]!.title
                        }
                        review={
                            testimonials[
                                mod(
                                    activeTestimonialIndex + 1,
                                    testimonials.length
                                )
                            ]!.review
                        }
                    />
                </CSSTransition>
            </div>
            <div className={css.scrollButtons}>
                <button
                    className={css.scrollButton}
                    onClick={() => {
                        if (isScrolling) return;

                        setIsScrolling(true);
                        setActiveTestimonialIndex((index) =>
                            mod(index - 1, testimonials.length)
                        );
                        setIsScrollingLeft(true);
                    }}
                >
                    <img src="/svg/Vector.svg" alt="Scroll Left" />
                </button>
                <button
                    className={css.scrollButton}
                    onClick={() => {
                        if (isScrolling) return;

                        setIsScrolling(true);
                        setActiveTestimonialIndex((index) =>
                            mod(index + 1, testimonials.length)
                        );
                        setIsScrollingLeft(false);
                    }}
                >
                    <img src="/svg/Vector.svg" alt="Scroll Right" />
                </button>
            </div>
            <div>
                <p>
                    All kinds of reviews help us learn and improve our product!
                </p>
            </div>
        </div>
    );
}

export function Testimonial(props: {
    image: string;
    name: string;
    title: string;
    review: string;
    main?: boolean;
}) {
    return (
        <div className={`${css.testimonial} ${props.main ? css.main : ""}`}>
            <div className={css.image}>
                <Image
                    src={props.image}
                    alt="Testimonial"
                    width={50}
                    height={50}
                ></Image>
            </div>
            <div className={css.cotent}>
                <p className={css.review}>{props.review}</p>
                <h3 className={css.name}>{props.name}</h3>
                <p className={css.title}>{props.title}</p>
            </div>
        </div>
    );
}
