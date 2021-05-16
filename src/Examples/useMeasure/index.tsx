import { useMeasure } from "@reactivers/hooks";
import { useRef } from "react"

const UseMeasureExample = () => {
    const ref = useRef(null);
    const measure = useMeasure({
        ref,
    })
    const center = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
    return (
        <div style={{
            ...center,
            width: '100vw',
            height: '100vh'
        }}>
            <div ref={ref} style={{
                width: '33%',
                height: '33vh',
                backgroundColor: 'green',
                whiteSpace: 'pre-wrap',
                color: 'white',
                ...center
            }}>
                {JSON.stringify(measure, null, 2)}
            </div>
        </div>
    )
}

export default UseMeasureExample;