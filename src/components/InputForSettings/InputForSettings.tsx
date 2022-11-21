import s from './InputForSettings.module.css'
import {ChangeEvent} from "react";
import {StoreType} from "../redux/store";

type InputForSettingsPropsType = {
    store: StoreType
    value: number
    action: 'ON-CHANGE-MIN-VALUE' | 'ON-CHANGE-MAX-VALUE'
    title:string
}
export const InputForSettings = (props: InputForSettingsPropsType) => {
    const onChangeEvent = (e: ChangeEvent<HTMLInputElement>) => {
        props.action === 'ON-CHANGE-MIN-VALUE' ? props.store.dispatch({type: 'ON-CHANGE-MIN-VALUE', value: Number(e.currentTarget.value)})
            :props.store.dispatch({type: "ON-CHANGE-MAX-VALUE", value: Number(e.currentTarget.value)})

    }
    return (
        <div className={s.inp}>
            <span>{props.title}</span>
            <input type="number"
                   className={props.value < 0 ? s.required : s.normal}
                   value={props.value}
                   onChange={onChangeEvent}/>
        </div>
    )

}