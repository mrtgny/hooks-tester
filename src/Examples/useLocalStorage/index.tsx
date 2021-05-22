import { LocalStorageProvider, useLocalStorage } from "@reactivers/hooks";
import { useState } from "react"

const UseLocalStorageExample = () => {
    const [value, setValue] = useState("");
    const { getItem, setItem, removeItem } = useLocalStorage("test-value");
    const { localStorage } = useLocalStorage();
    const item = getItem();

    const onSet = () => {
        setItem({ value })
        setValue("")
    }

    const onRemove = () => {
        removeItem()
        setValue("")
    }

    return (
        <div className="sample-page center">
            <div style={{ width: 300 }}>
                <p>
                    All: {JSON.stringify(localStorage, null, 2)}
                </p>
                <p >
                    Value: {JSON.stringify(item, null, 2)}
                </p>
                <input type="text" value={value} onChange={e => {
                    setValue(e.target.value)
                }} />
                <button onClick={onSet}>Set</button>
                <button onClick={onRemove}>Remove</button>
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