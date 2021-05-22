import { useCallback, useRef } from "react"
import { useClickInside } from "@reactivers/hooks"

const center = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const UseClickInsideExample = () => {
    const ref = useRef(null);

    const callback = useCallback((e) => {
        console.log('clicked inside element', e.target)
    }, [])

    const clicked = useClickInside({ ref, callback })

    return (
        <div className="sample-page">
            <div className="card">
                <div style={center} ref={ref}>
                    <div style={{
                        ...center,
                        width: 100,
                        height: 100,
                        backgroundColor: 'blue',
                        color: 'white'
                    }}>
                        Click me
                    </div>
                    <div style={{
                        ...center,
                        width: 100,
                        height: 100,
                        backgroundColor: 'blue',
                        color: 'white'
                    }}>
                        Or me
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UseClickInsideExample;