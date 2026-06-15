import {DataFetchManager} from "../managers/data-fetch-manager";

export interface Config {
    disableExtension: boolean,
    disableTooltips: boolean,
    disableUpdates: boolean,
    dataSources: string[],
    ignoredWebsites: string[],
    ignoredNames: string[]
}

export function defaultConfig(): Config {
    return {
        disableExtension: false,
        disableTooltips: false,
        disableUpdates: false,
        dataSources: [DataFetchManager.defaultFetchUrl],
        ignoredWebsites: [],
        ignoredNames: []
    }
}