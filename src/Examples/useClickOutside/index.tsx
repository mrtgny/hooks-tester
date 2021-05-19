import { useCallback, useRef } from "react"
import { useClickOutside } from "@reactivers/hooks"

const center = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const UseClickOutsideExample = () => {
    const ref = useRef(null);

    const callback = useCallback((e) => {
        console.log('clicked outside element', e.target)
    }, [])

    const clicked = useClickOutside({ ref, callback })

    return (
        <div style={{ width: '100vw', height: '100vh', backgroundColor: 'blue', ...center }}>

            <div style={{
                ...center,
                width: 100,
                height: 100,
                backgroundColor: 'green',
                color: 'white'
            }} ref={ref}>
                Click on blue
            </div>
        </div>
    )
}

export default UseClickOutsideExample;