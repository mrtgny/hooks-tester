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

    const progress = transform(width * 1.0, [0.0, window.innerWidth * 1.0], [0.0, 100.0])

    useEffect(() => {
        if (progress === 100) {
            setStyleWidth("0vw")
        } else if (progress === 0) {
            setStyleWidth("100vw")
        }
    }, [progress])

    return (
        <div className="sample-page center" style={{ justifyContent: 'flex-start' }}>
            <div ref={ref} className="center" style={{
                height: 80,
                width: styleWidth,
                transition: '2s',
                transitionDelay: '0.4s',
                backgroundColor: 'blue',
                justifyContent: 'flex-start'
            }}>
                <p style={{ whiteSpace: 'nowrap' }}>
                    {progress.toFixed(2)}
                </p>
            </div>
        </div>
    )
}

export default UseUtilsExample;