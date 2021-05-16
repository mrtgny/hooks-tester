import { createTheme } from "@reactivers/hooks";

interface ITheme {
    white: string;
    red: string;
    green: string;
    blue: string;
}

interface Themes {
    light: ITheme;
    dark: ITheme;
}

const theme: Themes = {
    light: {
        white: 'white',
        red: 'red',
        green: 'green',
        blue: 'blue'
    },
    dark: {
        white: '#aaa',
        red: 'darkred',
        green: 'darkgreen',
        blue: 'darkblue'
    },
}

const { useTheme, ThemeProvider } = createTheme<ITheme>();

const UseThemeExampleWrapper = () => {

    return (
        <ThemeProvider styles={theme}>
            <UseThemeExample />
        </ThemeProvider>
    )
}

const UseThemeExample = () => {
    const { theme } = useTheme()
    const center = { display: 'flex', justifyContent: 'center', alignItems: 'center' };
    return (
        <div style={{ width: '100vw', height: '100vh', ...center, backgroundColor: theme.white }}>
            <div style={{ width: 330, ...center, justifyContent: 'space-around' }}>
                <div style={{ width: 100, height: 100, backgroundColor: theme.red }} />
                <div style={{ width: 100, height: 100, backgroundColor: theme.green }} />
                <div style={{ width: 100, height: 100, backgroundColor: theme.blue }} />
            </div>
        </div>
    )
}

export default UseThemeExampleWrapper;