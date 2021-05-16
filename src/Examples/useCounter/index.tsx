import { useCounter } from "@reactivers/hooks"

const UseCounterExample = () => {
    const { counter, increase, decrease, setCounter, reset } = useCounter();
    return (
        <div>
            <p>Counter: {counter}</p>
            <div>
                <button onClick={() => increase()}>Increase</button>
            </div>
            <div>
                <button onClick={() => decrease()}>Decrease</button>
            </div>
            <div>
                <button onClick={() => setCounter(5)}>Set to 5</button>
            </div>
            <div>
                <button onClick={() => reset()}>Reset</button>
            </div>
        </div>
    )
}

export default UseCounterExample;