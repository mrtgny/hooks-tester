import {
    AuthProvider,
    FetchProvider,
    LoadingProvider,
    LocalStorageProvider,
    useGet,
    useLoading
} from "@reactivers/hooks"
import { useCallback, memo, useEffect } from "react";

const UseLoadingExample = () => {
    const { request, response } = useGet()
    useEffect(() => {
        request({
            url: "https://jsonplaceholder.typicode.com",
            endpoint: "/todos/1"
        })
    }, [request])
    return (
        <div className="sample-page center">
            <div className="card">
                <p >
                    {JSON.stringify(response, null, 2)}
                </p>
            </div>
        </div>
    )
}

const AppWrapper = () => {
    return (
        <LocalStorageProvider>
            <AuthProvider>
                <LoadingProvider>
                    <InnerProviders />
                </LoadingProvider>
            </AuthProvider>
        </LocalStorageProvider>
    )
}

const InnerProviders = () => {
    const { increase, decrease } = useLoading();

    const decreaser = useCallback(() => {
        setTimeout(() => {
            decrease()
        }, 1000);
    }, [decrease])

    return (
        <>
            <LoadingLayout />
            <Providers increase={increase}
                decreaser={decreaser} />
        </>
    )
}

interface IProviders {
    increase: any;
    decreaser: any;
}

const Providers = memo<IProviders>(({ increase, decreaser }) => {
    return (
        <FetchProvider url={"/api"}
            onRequest={() => increase()}
            onSuccess={decreaser}
            onError={decreaser}>
            <UseLoadingExample />
        </FetchProvider>
    )
})

const LoadingLayout = () => {
    const { isLoading } = useLoading()
    if (isLoading) {
        return (
            <div style={{
                position: 'fixed',
                width: '100vw',
                height: '100vh',
                zIndex: 1,
                left: 0,
                top: 0,
                backgroundColor: 'rgba(0,0,0,0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <div style={{
                    fontSize: 32,
                    color: 'white',
                    fontWeight: 'bold'
                }}>
                    Loading
          </div>
            </div>
        )
    }
    return null;
}

export default AppWrapper;