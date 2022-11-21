import {Button} from "../Button/Button";
import style from "./ButtonIncrementSettings.module.css"
import {store, StoreType} from "../redux/store";
import {InputForSettings} from "../InputForSettings/InputForSettings";
import {ChangeEvent, useEffect, useState} from "react";

type CounterSettingsPropsType = {
    maxValue: number,
    minValue: number,
    onSetClick: (maxValue: number, minValue: number) => void
    setMessage: (message: string) => void
}


export const CounterSettings = ({maxValue, minValue, onSetClick, setMessage}: CounterSettingsPropsType) => {
    const [tempMaxValue, setTempMaxValue] = useState(maxValue)
    const [tempMinValue, setTempMinValue] = useState(minValue)
    useEffect(() => {
        setTempMaxValue(maxValue)
        setTempMinValue(minValue)
    }, [maxValue, minValue])
    const setValues = () => {
        onSetClick(tempMaxValue, tempMinValue)
    }
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const value = +e.currentTarget.value
        if (tempMinValue >= value) {
            setMessage('invalid value')
        } else {
            setMessage('Enter value')

        }
        setTempMaxValue(value)
    }
    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        const value = +e.currentTarget.value
        if (tempMaxValue <= value) {
            setMessage('invalid value')
        } else {
            setMessage('Enter value')
        }
        setTempMinValue(value)
    }
    return (
        <div className={style.wrapper}>
            <div>
                {/*<InputForSettings title={'max-value:'} value={props.store._state.TEMP_MAX_VALUE} store={props.store} action={'ON-CHANGE-MAX-VALUE'} />*/}
                {/*<InputForSettings title={'start-value:'} value={props.store._state.TEMP_MIN_VALUE} store={props.store} action={'ON-CHANGE-MIN-VALUE'} />*/}
                <input type="number" value={tempMaxValue} onChange={onChangeMaxValue}/>
                <input type="number" value={tempMinValue} onChange={onChangeMinValue}/>

            </div>
            <div className={style.buttons}>
                <Button
                    title={'Set'}
                    callback={setValues}
                    disabled={tempMinValue >= tempMaxValue}/>

            </div>

        </div>

    )
}