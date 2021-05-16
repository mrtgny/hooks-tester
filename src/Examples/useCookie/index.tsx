import { CookieProvider, useCookie } from "@reactivers/hooks";
import { useState } from "react"

const UseCookieExample = () => {
    const [value, setValue] = useState("");
    const { getItem, removeItem, setItem } = useCookie("test-cookie");
    const { cookie } = useCookie();
    const item = getItem();

    const onSet = () => {
        setItem({ value, expireDays: 1 })
        setValue(value + " ")
    }

    const onRemove = () => {
        removeItem()
        setValue(value + " ")
    }

    return (
        <div>
            <p style={{ whiteSpace: 'pre-wrap' }}>all: {JSON.stringify(cookie, null, 2)}</p>
            <p style={{ whiteSpace: 'pre-wrap' }}>Value: {JSON.stringify(item, null, 2)}</p>
            <input type="text" onChange={e => setValue(e.target.value)} />
            <button onClick={onSet}>Set</button>
            <button onClick={onRemove}>Remove</button>
        </div>
    )
}

const AppWrapper = () => {
    return (
        <CookieProvider>
            <UseCookieExample />
        </CookieProvider>
    )
}

export default AppWrapper;