import css from "../styles/components/contactForm.module.css";
import Ellipsis from "./Ellipsis";

export default function ContactForm() {
    return (
        <div
            className={css.form}
            data-scroll
            data-scroll-repeat="false"
            data-scroll-class={css.slideIn}
        >
            <div className={css.fields}>
                <TextField label={"First Name"} />
                <TextField label={"Last Name"} />
                <TextField label={"E-mail"} />
                <TextField label={"Phone"} />
                <TextArea label={"Your Message"} />
            </div>
            <button className={css.submit}>SEND</button>
        </div>
    );
}

export function TextField(props: { label: string }) {
    return (
        <div
            className={css.textfield}
            data-scroll
            data-scroll-repeat="false"
            data-scroll-class={css.slideIn}
        >
            <input type="text" required />
            <div className={css.label}>{props.label}</div>
        </div>
    );
}

export function TextArea(props: { label: string }) {
    return (
        <div
            className={css.textfield}
            data-scroll
            data-scroll-repeat="false"
            data-scroll-class={css.slideInUp}
        >
            <textarea required />
            <div className={css.label}>{props.label}</div>
        </div>
    );
}
