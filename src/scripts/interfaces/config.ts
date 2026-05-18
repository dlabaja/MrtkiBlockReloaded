export interface Config {
    disableExtension: boolean,
    disableTooltips: boolean,
    disableUpdates: boolean,
    ignoredWebsites: string,
    ignoredNames: string
}

export function defaultConfig(): Config {
    return {
        disableExtension: false,
        disableTooltips: false,
        disableUpdates: false,
        ignoredWebsites: "",
        ignoredNames: ""
    }
}