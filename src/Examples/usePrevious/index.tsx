import { useState } from "react"
import { usePrevious } from "@reactivers/hooks";

const UsePreviousExample = () => {
    const [current, setCurrent] = useState(1);
    const prev = usePrevious(current);

    return (
        <div>
            <p>Prev: {prev}</p>
            <p>Current: {current}</p>
            <button onClick={() => setCurrent(old => old + 1)}>Increase</button>
            <button onClick={() => setCurrent(old => old - 1)}>Decrease</button>
        </div>
    )
}

export default UsePreviousExample;