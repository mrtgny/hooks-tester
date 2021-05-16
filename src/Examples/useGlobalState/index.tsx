import { GlobalStateProvider, useGlobalState } from '@reactivers/hooks'

const UseGlobalStateExample = () => {
    return (
        <div>
            <Comp1 />
            <Comp2 />
        </div>
    )
}

const Comp1 = () => {
    const { globalState } = useGlobalState();
    return (
        <div>
            {globalState.counter || 0}
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