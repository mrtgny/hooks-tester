import { useGet, useUtils } from "@reactivers/hooks";
import { useEffect } from "react";


const UseFetchExample = () => {
    const { response, request, fetched, fetching } = useGet();
    const { takeIf } = useUtils()

    useEffect(() => {
        request({
            endpoint: `/companies/1ea24ef3-7a9c-4d6d-99ea-1c12b1389ccd`
        })
    }, [request])

    console.log("fetching", fetching);
    console.log("fetched", fetched);

    return (
        <div>
            <p>fetchinhg: {takeIf(fetching, 'true', 'false')}</p>
            <p>fetched: {takeIf(fetched, 'true', 'false')}</p>
            <p style={{ whiteSpace: 'pre-line' }}>response: {JSON.stringify(response, null, 2)}</p>
        </div>
    )
}

export default UseFetchExample;