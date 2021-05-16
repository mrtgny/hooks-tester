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
        <div style={containerStyle}>
            <div>
                <p>Status: {readyState}</p>
                {messageQueue.map(({ from, value }, index) => {
                    return (
                        <p key={index} style={{ marginLeft: from === 2 ? 64 : 0 }}>{value}</p>
                    )
                })}
                <input type="text" onChange={e => setValue(e.target.value)} value={value} />
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