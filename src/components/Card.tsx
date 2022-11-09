import { useState } from "react";
import css from "../styles/components/card.module.css";

export default function Card() {
    const [subtitle, setSubtitle] = useState("");

    const sentence =
        "See your balance and your profits as the price changes in real time.";

    const subtitleWords = sentence.split(" ");

    const createSubtitle = () => {
        setSubtitle("");
    };

    const deleteSubtitle = () => {
        setSubtitle("");
    };

    return (
        <div
            className={css.card}
            onMouseEnter={createSubtitle}
            onMouseLeave={deleteSubtitle}
        >
            <div className={css.card_content}>
                <h1>Futures</h1>
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
}
