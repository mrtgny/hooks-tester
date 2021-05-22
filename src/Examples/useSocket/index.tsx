import { SocketProvider, useSocket } from "@reactivers/hooks";
import { useCallback, useEffect, useState } from "react";

const UseSocketExample = () => {
    const [messageQueue, setMessageQueue] = useState([]);

    const onClose = useCallback(() => {
        console.log("closed")
    }, [])

    const onError = useCallback(() => {
        console.log("error")
    }, [])

    const onMessage = useCallback((event, data) => {
        setMessageQueue(old => [...old, { from: 2, value: data }])
    }, [])

    const onOpen = useCallback(() => {
        console.log("open")
    }, [])

    const { connect, lastData, readyState, sendData, socket } = useSocket({
        onClose,
        onError,
        onMessage,
        onOpen,
        wss: true
    });


    useEffect(() => {
        connect({
            url: "echo.websocket.org"
        })
    }, [connect])
    const [value, setValue] = useState("");

    const onSend = () => {
        setMessageQueue(old => ([...old, { from: 1, value }]));
        sendData(value)
        setValue("")
    }

    const containerStyle = {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (
        <div className="sample-page center">
            <div className="card">
                <p>Status: {readyState}</p>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {messageQueue.map(({ from, value }, index) => {
                        return (
                            <div style={{
                                display: 'flex',
                                justifyContent: from === 2 ? 'flex-end' : 'flex-start',

                            }}>
                                <p style={{
                                    backgroundColor: from === 2 ? 'purple' : 'orange',
                                    color: 'white',
                                    borderRadius: 10,
                                    padding: "8px 16px",
                                    margin: 0
                                }} key={index} >{value}</p>
                            </div>
                        )
                    })}
                </div>
                <input type="text" onChange={e => e.target.value && setValue(e.target.value)} value={value} />
                <button onClick={onSend}>Send</button>
            </div>
        </div>
    )
}

const AppWrapper = () => {
    return (
        <SocketProvider>
            <UseSocketExample />
        </SocketProvider>
    )
}

export default AppWrapper;