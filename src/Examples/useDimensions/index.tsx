import {
    useDimensions,
    DimensionsProvider,
    useUtils
} from '@reactivers/hooks'

const UseDimensionsExample = () => {
    const {
        size,
        isSizeEqualOrLargerThan,
        isSizeEqualOrSmallerThan,
        isSizeEqualTo,
        isSizeLargerThan,
        isSizeSmallerThan,
    } = useDimensions();
    const { takeIf } = useUtils()

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div>
                <p>Size:{size}</p>
                <p>isSizeEqualOrLargerThan:
					{takeIf(isSizeEqualOrLargerThan("md"), "True", "False")}
                </p>
                <p>isSizeLargerThan:
					{takeIf(isSizeLargerThan("md"), "True", "False")}
                </p>
                <p>isSizeEqualTo:
					{takeIf(isSizeEqualTo("md"), "True", "False")}
                </p>
                <p>isSizeSmallerThan:
					{takeIf(isSizeSmallerThan("md"), "True", "False")}
                </p>
                <p>isSizeEqualOrSmallerThan:
					{takeIf(isSizeEqualOrSmallerThan("md"), "True", "False")}
                </p>
            </div>
        </div>
    )
}

const AppWrapper = () => {
    return (
        <DimensionsProvider>
            <UseDimensionsExample />
        </DimensionsProvider>
    )
}



export default AppWrapper;