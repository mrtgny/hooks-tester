import { EventListenerProvider, useEventListener } from "@reactivers/hooks"
import { useEffect, useState } from "react";

interface IEvents {
    increase: (by?: number) => void;
    decrease: (by?: number) => void;
    counter: number;
}

const wrapperStyle = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const UseEventListerExample = () => {
    return (
        <div style={wrapperStyle}>
            <div>
                <Comp1 />
                <Comp2 />
            </div>
        </div>
    )
}

const Comp1 = () => {
    const { registerEvent } = useEventListener<IEvents>("CounterSample");
    const [counter, setCounter] = useState(0);


    useEffect(() => {
        return registerEvent("increase", () => setCounter(old => old + 1))
    }, [registerEvent, setCounter])

    useEffect(() => {
        return registerEvent("decrease", () => setCounter(old => old - 1))
    }, [registerEvent, setCounter])

    return (
        <div>
            <p>Counter: {counter}</p>
        </div>
    )
}
const Comp2 = () => {
    const { callAllEvents } = useEventListener<IEvents>("CounterSample")

    const onIncrease = () => {
        callAllEvents("increase")
    }

    const onDecrease = () => {
        callAllEvents("decrease")
    }

    return (
        <div>
            <button onClick={onIncrease}>Increase</button>
            <button onClick={onDecrease}>Decrease</button>
        </div>
    )
}

const AppWrapper = () => {
    return (
        <EventListenerProvider>
            <UseEventListerExample />
        </EventListenerProvider>
    )
}

export default AppWrapper;