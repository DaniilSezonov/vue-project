import { getAppConfigValue } from "@/app-config";
import { getEndpointURL } from "./utils";
import type { FetchWeatherResult, WeatherResponseOriginal } from "./gismeteo.types";

const API_URL = "https://api.weather.yandex.ru/v2";

const apiKey = getAppConfigValue("YANDEX_WEAHTER_API_KEY", "efb285ea-e6fd-4856-a3fb-b71dc4468c54");
const DEFAULT_DAY_LIMIT = 1;

export const fetchWeather = async (lat: number, lon: number): Promise<{data?: FetchWeatherResult, error?: string}> => {
    const response = await fetch(
        getEndpointURL(API_URL, "/forecast/", {lat, lon, limit: DEFAULT_DAY_LIMIT}),
        {
            method: "GET",
            headers: {
                "X-Yandex-Weather-Key": apiKey,
                "Content-Type": "application/json",
            }
        }
    )
    try {
        const data = await response.json() as WeatherResponseOriginal;
        return { data: {
            temp: data.fact.temp,
            icon: data.fact.icon,
            dateTime: data.now_dt,
            season: data.fact.season,
            daytime: data.fact.daytime,
            cloudness: data.fact.cloudness,
            precType: data.fact.prec_type,
            precStrength: data.fact.prec_strength,
        }, error: undefined}
    } catch (error: any) {
        return { data: undefined, error }
    }
}