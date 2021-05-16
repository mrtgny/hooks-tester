import { useState } from "react";
import { useTitle } from "@reactivers/hooks";

const UseTitleExample = () => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <button onClick={() => setShow(old => !old)}>Switcher</button>
            {show ? <TitleSetter /> : null}
            Page Title is UseTitleExample
        </div>
    )
}

const TitleSetter = () => {
    useTitle({ title: "UseTitleExample", setOldTitleOnUnmount: true });
    return null;
}

export default UseTitleExample;
