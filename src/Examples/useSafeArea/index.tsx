import { SafeAreaProvider, useSafeArea } from "@reactivers/hooks";

const UseSafeAreaExample = () => {
    const { bottom, left, top, right } = useSafeArea();
    return (
        <div className="sample-page center">
            <div style={{ top: 0, height: top, width: '100vw', position: 'fixed', left: 0, backgroundColor: 'green', opacity: 0.5 }} />
            <div style={{ bottom: 0, height: bottom, width: '100vw', position: 'fixed', left: 0, backgroundColor: 'red', opacity: 0.5 }} />
            <div style={{ left: 0, width: left, height: '100vh', position: 'fixed', top: 0, backgroundColor: 'blue', opacity: 0.5 }} />
            <div style={{ right: 0, width: right, height: '100vh', position: 'fixed', top: 0, backgroundColor: 'gray', opacity: 0.5 }} />
            <div className="card">
                <h2>Use Safe Area Example</h2>
                <h3>Too see safe areas open this page on an device that has notches</h3>
            </div>
        </div>
    )
}

const AppWrapper = () => {
    return (
        <SafeAreaProvider>
            <UseSafeAreaExample />
        </SafeAreaProvider>
    )
}

export default AppWrapper;