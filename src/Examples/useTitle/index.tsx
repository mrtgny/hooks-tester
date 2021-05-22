import { useState } from "react";
import { useTitle } from "@reactivers/hooks";

const UseTitleExample = () => {
    const [show, setShow] = useState(false);

    return (
        <div className="sample-page center">
            <div className="card">
                <p>Page Title is UseTitleExample</p>
                <button onClick={() => setShow(old => !old)}>Switcher</button>
                {show ? <TitleSetter /> : null}
            </div>
        </div>
    )
}

const TitleSetter = () => {
    useTitle({ title: "UseTitleExample", setOldTitleOnUnmount: true });
    return null;
}

export default UseTitleExample;
