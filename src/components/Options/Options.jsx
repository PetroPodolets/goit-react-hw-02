import clsx from "clsx"
import css from "./Options.module.css"
import "clsx"

export default function Options({ updateFeedback, total, onReset }) {
    return (
        <div className={css.divButton}>
            <button className={clsx(css.button, css.green)} onClick={() => updateFeedback("good")}>Good</button>
            <button className={clsx(css.button, css.yellow)} onClick={() => updateFeedback("neutral")}>Neutral</button>
            <button className={clsx(css.button, css.red)} onClick={() => updateFeedback("bad")}>Bad</button>
            {total ? <button className={css.button} onClick={() => onReset()}>Reset</button> : null}
        </div>
    )
}