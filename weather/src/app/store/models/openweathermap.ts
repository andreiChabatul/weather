export interface ICoordinate {
    lat: number,
    lon: number,
}

export interface IOpenweathermap {
    coord: {
        lon: number,
        lat: number
    },
    weather: IWeatherType[],
    base: string,
    main: IMainWeather,
    visibility: number,
    wind: IWind,
    clouds: {
        all: number
    },
    rain: IRain,
    dt: number,
    sys: ISunrise,
    timezone: number,
    id: number,
    name: string,
    cod: number
}

export interface ISunrise {
    type: number,
    id: number,
    country: string,
    sunrise: number,
    sunset: number
}

export interface IWind {
    speed: number,
    deg: number,
    gust: number
}

export interface IMainWeather {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number,
    sea_level: number,
    grnd_level: number
}


export interface IWeatherType {
    id: number,
    main: string,
    description: string,
    icon: string
}

export interface IOpenweathermapForecastFive {
    cod: string,
    message: number,
    cnt: number,
    list: IItemForecast[],
    city: {
        id: number,
        name: string,
        coord: ICoordinate,
        country: string,
        population: number,
        timezone: number,
        sunrise: number,
        sunset: number
    }
}

export interface IItemForecast {
    dt: number,
    main: IMainWeather,
    weather: IWeatherType[],
    wind: IWind,
    rain: IRain,
}

export interface IRain {
    '3h': number;
}