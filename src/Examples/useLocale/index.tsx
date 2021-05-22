import { createLocale } from "@reactivers/hooks";

interface ILocale {
    back: (a?: string) => string;
    next: (a?: string) => string;
}

interface Locales {
    tr: ILocale;
    'en-us': ILocale;
}

const TRLocale: ILocale = {
    back: (a: string) => `Geri ${a}`,
    next: (a: string) => `Ileri ${a}`,
}

const ENLocale: ILocale = {
    back: (a: string) => `Back ${a}`,
    next: (a: string) => `Next ${a}`,
}

const AllLocales: Locales = {
    tr: TRLocale,
    "en-us": ENLocale,
}

const { useLocale, LocalesProvider } = createLocale<ILocale>();

const UseLocaleExample = () => {
    const { locale, setActiveLanguage } = useLocale();
    console.log("locale", locale)
    return (
        <div className="sample-page center">
            <div className="card">
                <p>Back: {locale.back("Test")}</p>
                <p>Next: {locale.next("Test 2")}</p>
                <button onClick={() => setActiveLanguage("tr")}>TR</button>
                <button onClick={() => setActiveLanguage("en-us")}>EN</button>
            </div>
        </div>
    )
}

const AppWrapper = () => {
    return (
        <LocalesProvider locales={AllLocales}>
            <UseLocaleExample />
        </LocalesProvider>
    )
}

export default AppWrapper;