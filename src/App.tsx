import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/ButtonIncrement/Counter";
import {CounterSettings} from "./components/ButtonIncrementSettings/CounterSettings";
import {StoreType} from "./components/redux/store";

type AppPropsType = {
    store: StoreType
}

function App(props: AppPropsType) {
    const [counter, setCounter] = useState(0)
    const [maxValue, setMaxValue] = useState(10)
    const [minValue, setMinValue] = useState(0)
    const [message, setMessage] = useState('')

    useEffect(() => {
        const counter = localStorage.getItem('counter')
        const maxValue = localStorage.getItem('maxValue')
        const minValue = localStorage.getItem('minValue')

        counter && setCounter(JSON.parse(counter))
        maxValue && setMaxValue(JSON.parse(maxValue))
        minValue && setMinValue(JSON.parse(minValue))
    }, [])

    useEffect(() => {
        localStorage.setItem('counter', JSON.stringify(counter))
    }, [counter])


    const onSetClick = (max: number, min: number) => {
        if (message === 'Enter value') {
            setMessage('')
            setMaxValue(max)
            setMinValue(min)
            setCounter(min)
            localStorage.setItem('maxValue', JSON.stringify(max))
            localStorage.setItem('minValue', JSON.stringify(min))
        }
    }
    const incrementCounter = () => {
        setCounter(counter + 1)
    }
    const resetCounter = () => {
        setCounter(minValue)
    }
    return (
        <div className="App">
            <CounterSettings maxValue={maxValue}
                             minValue={minValue}
                             setMessage={setMessage}
                             onSetClick={onSetClick}
            />
            <Counter counter={counter}
                     maxValue={maxValue}
                     minValue={minValue}
                     message={message}
                     increment={incrementCounter}
                     reset={resetCounter}
            />
        </div>
    );
}

export default App;
