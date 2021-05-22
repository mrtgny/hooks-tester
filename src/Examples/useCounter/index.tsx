import { useCounter } from "@reactivers/hooks"

const UseCounterExample = () => {
    const { counter, increase, decrease, setCounter, reset } = useCounter();
    return (
        <div className="sample-page center">
            <div className="card">
                <p>Counter: {counter}</p>
                <button onClick={() => increase()}>Increase</button>
                <button onClick={() => decrease()}>Decrease</button>
                <button onClick={() => setCounter(5)}>Set to 5</button>
                <button onClick={() => reset()}>Reset</button>
            </div>
        </div>
    )
}

export default UseCounterExample;