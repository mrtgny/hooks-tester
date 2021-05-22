import { GlobalStateProvider, useGlobalState } from '@reactivers/hooks'

const UseGlobalStateExample = () => {
    return (
        <div className="sample-page center">
            <div className="card">
                <h1>Global State Example</h1>
                <Comp1 />
                <Comp2 />
            </div>
        </div>
    )
}

const Comp1 = () => {
    const { globalState } = useGlobalState();
    return (
        <div>
            <p>Counter: {globalState.counter || 0}</p>
        </div>
    )
}

const Comp2 = () => {

    const { setGlobalState } = useGlobalState();
    const increase = () => {
        setGlobalState(old => ({
            ...old,
            counter: old.counter ? old.counter + 1 : 1
        })
        )
    }

    const decrease = () => {
        setGlobalState(old => ({
            ...old,
            counter: old.counter ? old.counter - 1 : -1
        })
        )
    }

    return (
        <div>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Increase</button>
        </div>
    )
}

const AppWrapper = () => {
    return (
        <GlobalStateProvider>
            <UseGlobalStateExample />
        </GlobalStateProvider>
    )
}

export default AppWrapper;