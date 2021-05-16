import { useUtils, useMeasure } from "@reactivers/hooks";
import { useEffect, useRef, useState } from "react";

const UseUtilsExample = () => {
    const ref = useRef(null);
    const { transform } = useUtils()
    const { width } = useMeasure({
        ref,
        updateOnWindowResize: true
    });
    const [styleWidth, setStyleWidth] = useState('0vw')

    const progress = transform(width, [0, window.innerWidth], [0, 100])

    useEffect(() => {
        if (progress === 100) {
            setStyleWidth("0vw")
        } else if (progress === 0) {
            setStyleWidth("100vw")
        }
    }, [progress])

    const center = {
        display: 'flex',
        alignItems: 'center'
    }

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            ...center
        }}>
            <div ref={ref} style={{
                height: 80,
                width: styleWidth,
                transition: '2s',
                transitionDelay: '0.4s',
                backgroundColor: 'blue',
                ...center
            }}>
                <p>
                    {progress.toFixed(2)}
                </p>
            </div>
        </div>
    )
}

export default UseUtilsExample;