import { useHover, useUtils } from "@reactivers/hooks";
import { useRef } from "react";

const UseHoverExample = () => {
    const ref = useRef(null);
    const { takeIf } = useUtils();


    const { isHover } = useHover({
        ref,
        offsets: {
            top: -50, bottom: 50
        },
        includeBorders: true
    });

    const center = { display: 'flex', justifyContent: 'center', alignItems: 'center' };

    return (
        <div style={{ width: '100vw', height: '100vh', ...center }}>
            <div style={{ padding: 50, backgroundColor: 'red' }}>
                <div ref={ref} style={{
                    width: 300,
                    height: 300,
                    backgroundColor: isHover ? "green" : 'blue',
                    ...center
                }}>
                    <p>
                        isHover {takeIf(isHover, 'True', "False")}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default UseHoverExample;

