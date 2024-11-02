type WeatherResponseLocationInfo = {
  lat: number;
  lon: number;
  tzinfo: {
    name: string;
    abbr: string;
    dst: boolean;
    offset: number;
  },
  offset: null;
  name: string;
  abbr: string;
  dst: boolean;
  url: string;
}
type WeatherResponseFact = {
  temp: number; // Temperature
  feels_like: number;
  temp_wate: string;
  icon: string;
  condition: string;
  wind_speed: number;
  wind_dir: "nw" | "n" | "ne" | "e" | "se" | "s" | "sw" | "w" | "c",
  preassure_mm: number;
  preassure_pa: number;
  humidity: number; // %
  daytime: "d" | "n";
  season: "summer" | "autumn" | "winter" | "spring";
  is_thunder: boolean;
  prec_type: number; // 0 - без осадков, 1 - дождь, 2 - дождь / снег, 3 - снег, 4 - град
  prec_strength:  number; // 0 - нет осадков, 1 - Сильный ливень/снег.
  cloudness: number; // 0 - 1, 0 - ясно 1 - пасмурно
}
///https://yandex.ru/dev/weather/doc/ru/concepts/forecast-rest#req-example
export interface WeatherResponseOriginal {
  now: number; // unixtime
  now_dt: string; // UTC
  info: WeatherResponseLocationInfo,
  fact: WeatherResponseFact,
  forecasts: Array<any>;
}

export interface FetchWeatherResult {
  temp: number; // Temperature
  icon: string; // Код иконки погоды. Иконка доступна по адресу https://yastatic.net/weather/i/icons/funky/dark/<значение из поля icon>.svg.
  dateTime: string;
  season: "summer" | "autumn" | "winter" | "spring";
  daytime: "d" | "n"; // day | night
  cloudness: number; // 0 - 1, 0 - ясно 1 - пасмурно
  precType: number; // 0 - без осадков, 1 - дождь, 2 - дождь / снег, 3 - снег, 4 - град
  precStrength: number; // 0 - нет осадков, 1 - Сильный ливень/снег.
  phenomIcon?: string; // (см icon)
}