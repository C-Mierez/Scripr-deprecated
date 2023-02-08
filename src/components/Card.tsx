import css from "../styles/components/card.module.css";

import React from "react";

export const Card = React.forwardRef<
    HTMLDivElement,
    { title: string; description: string }
>((props, ref) => {
    const subtitleWords = props.description.split(" ");

    return (
        <div
            ref={ref}
            data-scroll
            data-scroll-repeat="true"
            data-scroll-class={css.slideIn}
            className={css.card}
        >
            <div className={css.card_content}>
                <h1>{props.title}</h1>
                <p>
                    {subtitleWords.map((word, i) => (
                        <span
                            key={i}
                            style={{ transitionDelay: `${80 * i}ms` }}
                        >
                            {word}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    );
});

Card.displayName = "Card";
