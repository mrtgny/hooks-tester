import { AuthProvider, FetchProvider, LocalStorageProvider, useGet, useUtils } from "@reactivers/hooks";
import { useCallback, useEffect } from "react";


const UseFetchExample = () => {
    const { response, request, fetched, fetching } = useGet();
    const { takeIf } = useUtils()

    const callRequest = useCallback(async () => {
        request({
            endpoint: '/todos/1'
        })
    }, [request])

    useEffect(() => {
        callRequest()
    }, [callRequest])

    return (
        <div className="sample-page center">
            <div className="card">
                <div className="row">
                    <p className="label-bg">fetchinhg:</p>
                    <p className="label-dsc-flash">{takeIf(fetching, 'true', 'false')}</p>
                </div>
                <div className="row">
                    <p className="label-bg">fetched:</p>
                    <p className="label-dsc-flash">{takeIf(fetched, 'true', 'false')}</p>
                </div>
                <div className="row">
                    <p className="label-bg">response:</p>
                    <p className="label-dsc-flash">{JSON.stringify(response, null, 2)}</p>
                </div>
                <button onClick={callRequest}>Fetch</button>
            </div>
        </div>
    )
}

const AppWrapper = () => {
    return (
        <LocalStorageProvider>
            <AuthProvider>
                <FetchProvider url="https://jsonplaceholder.typicode.com">
                    <UseFetchExample />
                </FetchProvider>
            </AuthProvider>
        </LocalStorageProvider>
    )
}


export default AppWrapper;