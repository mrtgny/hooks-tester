import { LocalStorageProvider, useLocalStorage } from "@reactivers/hooks";
import { CSSProperties, useState } from "react"

const UseLocalStorageExample = () => {
    const [value, setValue] = useState("");
    const { getItem, setItem } = useLocalStorage("test-value");
    const { localStorage } = useLocalStorage();
    const item = getItem();

    const onSet = () => {
        setItem({ value })
        setValue(value + " ")
    }


    const containerStyle: CSSProperties = {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const pStyle: CSSProperties = {
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-all'
    }

    return (
        <div style={containerStyle}>
            <div style={{ width: 300 }}>
                <p style={pStyle}>
                    All: {JSON.stringify(localStorage, null, 2)}
                </p>
                <p style={pStyle}>
                    Value: {JSON.stringify(item, null, 2)}
                </p>
                <input type="text" onChange={e => {
                    setValue(e.target.value)
                }} />
                <button onClick={onSet}>Set</button>
            </div>
        </div>
    )
}

const AppWrapper = () => {
    return (
        <LocalStorageProvider>
            <UseLocalStorageExample />
        </LocalStorageProvider>
    )
}

export default AppWrapper;