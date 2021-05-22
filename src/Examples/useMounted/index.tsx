import { useMounted, useUtils } from "@reactivers/hooks";

import { useEffect } from "react";

const UseMountedExample = () => {
    const mounted = useMounted();
    const { takeIf } = useUtils();
    return (
        <div className="sample-page center">
            <div className="card" key={`${mounted}`}>
                <h2>Use Mounted Example</h2>
                <div className="row">
                    <p className="label-bg">IsMounted</p>
                    <p className="label-dsc-flash">{takeIf(mounted, "True", "False")}</p>
                </div>
            </div>
        </div>
    )
}

export default UseMountedExample