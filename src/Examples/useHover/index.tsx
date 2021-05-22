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

    return (
        <div className="sample-page center">
            <div className="card" style={{ padding: 50, backgroundColor: 'purple' }}>
                <div ref={ref} style={{
                    width: 300,
                    height: 300,
                    color: 'white',
                    backgroundColor: isHover ? "green" : 'cadetblue',
                }} className="center">
                    <p>
                        isHover {takeIf(isHover, 'True', "False")}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default UseHoverExample;

