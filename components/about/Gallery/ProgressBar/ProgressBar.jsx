import { BarEl, ProgressBarEl } from "./Elements"

const ProgressBar = (props) => {

    const t = (props.t / 1000) + "s"

    return (
        <ProgressBarEl {...props} t={t}>
            {
                props.isActive ?
                <BarEl /> :
                null
            }
        </ProgressBarEl>
    )
}

export default ProgressBar