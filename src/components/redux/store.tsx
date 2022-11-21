import {useEffect} from "react";

export type StoreType = {
    _subscriber: () => void
    _state: StateType
    getState: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionType) => void
}
type StateType = {
    increment: number
    TEMP_MIN_VALUE: number
    TEMP_MAX_VALUE: number
    MAX_VALUE: number
    MIN_VALUE: number
    isFirstSet: boolean
    isChanging:boolean
}
type AddingACounter = {
    type: 'ADDING-A-COUNTER'
}
type ResetCounter = {
    type: 'RESET-COUNTER'
}
export type OnChangeMinValue = {
    type: 'ON-CHANGE-MIN-VALUE'
    value: number
}
export type OnChangeMaxValue = {
    type: 'ON-CHANGE-MAX-VALUE'
    value: number
}
type SetValues = {
    type: 'SET-VALUES'
}

type ActionType = AddingACounter | ResetCounter | OnChangeMinValue | OnChangeMaxValue | SetValues


export const store: StoreType = {
    _subscriber() {
        console.log('no subscribers (observers)')
    },
    _state: {
        increment: 0,
        TEMP_MIN_VALUE: 0,
        TEMP_MAX_VALUE: 0,
        MAX_VALUE: 0,
        MIN_VALUE: 0,
        isFirstSet: false,
        isChanging: false
    },
    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._subscriber = observer
    },
    dispatch(action: ActionType) {
        switch (action.type) {
            case 'ADDING-A-COUNTER':
                this._state.increment++
                this._subscriber()
                break
            case 'RESET-COUNTER':
                this._state.increment = this._state.MIN_VALUE
                this._subscriber()
                break
            case 'ON-CHANGE-MIN-VALUE':
                this._state.isFirstSet=false
                this._state.TEMP_MIN_VALUE = action.value
                this._subscriber()
                break
            case 'ON-CHANGE-MAX-VALUE':
                this._state.isChanging=true
                this._state.TEMP_MAX_VALUE = action.value
                this._subscriber()
                break
            case 'SET-VALUES':
                // if (this._state.isFirstSet === false) {
                //     this._state.isFirstSet = true
                // }
                this._state.isFirstSet=true
                this._state.isChanging=false
                this._state.MIN_VALUE = this._state.TEMP_MIN_VALUE
                this._state.MAX_VALUE = this._state.TEMP_MAX_VALUE
                this._state.increment = this._state.TEMP_MIN_VALUE
                this._subscriber()
                break

        }
    }
}
