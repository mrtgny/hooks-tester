import { useState } from "react"
import { usePrevious } from "@reactivers/hooks";

const UsePreviousExample = () => {
    const [current, setCurrent] = useState(1);
    const prev = usePrevious(current);

    return (
        <div className="sample-page center">
            <div className="card" key={prev}>
                <h2>Previous hook example</h2>
                <div style={{ marginBottom: 8 }}>
                    <div className="row" >
                        <p className="label-bg">Prev: </p>
                        <p className="label-dsc-flash">{prev}</p>
                    </div>
                    <div className="row">
                        <p className="label-bg">Current: </p>
                        <p className="label-dsc-flash">{current}</p>
                    </div>
                </div>
                <button onClick={() => setCurrent(old => old + 1)}>Increase</button>
                <button onClick={() => setCurrent(old => old - 1)}>Decrease</button>
            </div>
        </div>
    )
}

export default UsePreviousExample;