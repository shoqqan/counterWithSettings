import style from "../ButtonIncrement/Counter.module.css";

type ButtonPropsType = {
    title: string
    callback: () => void
    disabled: boolean
    className?:string
}
export const Button = (props: ButtonPropsType) => {
    return (
        <button className={props.disabled ? style.buttonDisabled : style.buttonActive} disabled={props.disabled} onClick={props.callback}>{props.title}</button>
    )
}