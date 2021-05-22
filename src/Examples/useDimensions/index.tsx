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
        <div className="sample-page center">
            <div className="card" key={size}>
                <div className="flex">
                    <p className="label-bg">Size:</p>
                    <p className="label-dsc-flash">{size}</p>
                </div>
                <div>
                    <p className="label-bg">isSizeEqualOrLargerThan MD:</p>
                    <p className="label-dsc-flash">{takeIf(isSizeEqualOrLargerThan("md"), "True", "False")}</p>
                </div>
                <div>
                    <p className="label-bg">isSizeLargerThan MD:</p>
                    <p className="label-dsc-flash">{takeIf(isSizeLargerThan("md"), "True", "False")}</p>
                </div>
                <div>
                    <p className="label-bg">isSizeEqualTo MD:</p>
                    <p className="label-dsc-flash">{takeIf(isSizeEqualTo("md"), "True", "False")}</p>
                </div>
                <div>
                    <p className="label-bg">isSizeSmallerThan MD:</p>
                    <p className="label-dsc-flash">{takeIf(isSizeSmallerThan("md"), "True", "False")}</p>
                </div>
                <div>
                    <p className="label-bg">isSizeEqualOrSmallerThan MD:</p>
                    <p className="label-dsc-flash">{takeIf(isSizeEqualOrSmallerThan("md"), "True", "False")}</p>
                </div>
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