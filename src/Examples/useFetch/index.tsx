import { AuthProvider, FetchProvider, LocalStorageProvider, useGet, useUtils } from "@reactivers/hooks";
import { useCallback, useEffect } from "react";


const UseFetchExample = () => {
    const { response, request, fetched, fetching } = useGet();
    const { takeIf } = useUtils()

    const callRequest = useCallback(async () => {
        const a = request({
            endpoint: '/todos'
        })
        console.log('a', a)
    }, [])

    useEffect(() => {
        callRequest()
    }, [callRequest])

    return (
        <div>
            <p>fetchinhg: {takeIf(fetching, 'true', 'false')}</p>
            <p>fetched: {takeIf(fetched, 'true', 'false')}</p>
            <p style={{ whiteSpace: 'pre-wrap' }}>response: {JSON.stringify(response, null, 2)}</p>
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