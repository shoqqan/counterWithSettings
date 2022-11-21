import style from './Counter.module.css'
import {Button} from "../Button/Button";
import {store, StoreType} from "../redux/store";
import {useEffect} from "react";

type CounterPropsType = {
    counter: number
    maxValue: number
    minValue: number
    message: string
    increment: () => void
    reset: () => void
}
export const Counter = ({counter, maxValue, minValue, message, increment, reset}: CounterPropsType) => {


    return (
        <div className={style.wrapper}>

            {/*className={increment === MAX_VALUE ? `${style.increment} ${style.maximum}` : `${style.increment}`}>{props.store._state.isFirstSet || props.store._state.increment !== 0 ? increment : props.store._state.TEMP_MAX_VALUE===props.store._state.TEMP_MIN_VALUE && props.store._state.TEMP_MIN_VALUE!==0 && props.store._state.TEMP_MAX_VALUE!==0?   'invalid values':'enter values and press "SET"'}</div>*/}
            <div
                className={message === 'invalid value' || counter === maxValue ? style.error : message === 'Enter value' ? '' : ''}>{message ? message : counter}</div>
            <div className={style.buttons}>
                <Button
                    title={'reset'}
                    callback={reset}
                    disabled={counter === minValue || !!message}/>
                <Button
                    title={'inc'}
                    callback={increment}
                    disabled={counter === maxValue || !!message}/>
            </div>

        </div>
    )
}