import {
    useAuth,
    useGet,
    usePost,
    AuthProvider,
    FetchProvider,
    LocalStorageProvider
}
    from "@reactivers/hooks";
import { useCallback, useEffect, useState } from "react";

const UseFetchAuthSignInExample = () => {
    const { token, isLoggedIn, login, logout } = useAuth()
    const { request } = useGet();

    useEffect(() => {
        if (token) {
            if (isLoggedIn) {
                //show application
            } else {
                //get user info
                request({
                    endpoint: '/users/getUserInfo',
                    onSuccess: (response) => {
                        delete response.data.token;
                        login(response.data);
                    }
                })
            }
        } else {
            if (isLoggedIn) {
                //old session -> logout
                logout()
            } else {
                //showSignIn page
            }
        }
    }, [token, isLoggedIn, login, request, logout]);

    if (token) {
        if (isLoggedIn) {
            return <Application />
        } else {
            return <p>Loading...</p>
        }
    } else {
        if (isLoggedIn) {
            return <p>Logging out...</p>
        } else {
            return <SignInPage />
        }
    }
}

const Application = () => {
    const { user, logout } = useAuth()
    return (
        <div>
            <h1>Awesome application</h1>
            <p style={{ whiteSpace: 'pre-line' }}>
                {JSON.stringify(user, null, 2)}
            </p>
            <button onClick={logout}>Log out</button>
        </div>
    )
}

const SignInPage = () => {
    const [info, setInfo] = useState({});
    const { login } = useAuth()
    const { request } = usePost();

    const signIn = useCallback(() => {
        request({
            endpoint: `/users/signin`,
            body: info,
            onSuccess: (response) => {
                login(response.data)
            }
        })
    }, [request, info, login])

    return (
        <div>
            <input type="text" onChange={e => {
                setInfo(old => ({ ...old, username: e.target.value }))
            }} />
            <input type="text" onChange={e => {
                setInfo(old => ({ ...old, password: e.target.value }))
            }} />
            <button onClick={signIn}>Sign in</button>
        </div>
    )
}


const AppWrapper = () => {
    return (
        <LocalStorageProvider>
            <AuthProvider>
                <FetchProvider url="/api">
                    <UseFetchAuthSignInExample />
                </FetchProvider>
            </AuthProvider>
        </LocalStorageProvider>
    )
}

export default AppWrapper;