import { useSafeArea } from "@reactivers/hooks";

const UseSafeAreaExample = () => {
    const { bottom, left, top, right } = useSafeArea();
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <div style={{ top: 0, height: top, width: '100vw', position: 'fixed', left: 0, backgroundColor: 'green', opacity: 0.5 }} />
            <div style={{ bottom: 0, height: bottom, width: '100vw', position: 'fixed', left: 0, backgroundColor: 'red', opacity: 0.5 }} />
            <div style={{ left: 0, width: left, height: '100vh', position: 'fixed', top: 0, backgroundColor: 'blue', opacity: 0.5 }} />
            <div style={{ right: 0, width: right, height: '100vh', position: 'fixed', top: 0, backgroundColor: 'gray', opacity: 0.5 }} />
        </div>
    )
}

export default UseSafeAreaExample;