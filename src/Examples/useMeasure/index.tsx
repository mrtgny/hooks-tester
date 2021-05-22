import { useMeasure } from "@reactivers/hooks";
import { useRef } from "react"

const UseMeasureExample = () => {
    const ref = useRef(null);
    const measure = useMeasure({
        ref,
        updateOnWindowResize: true
    })
    return (
        <div className="sample-page center">
            <div className="card center" ref={ref} style={{
                width: '33%',
                height: '33vh',
                backgroundColor: 'purple',
                color: 'white',
            }}>
                <p>
                    {JSON.stringify(measure, null, 2)}
                </p>
            </div>
        </div>
    )
}

export default UseMeasureExample;