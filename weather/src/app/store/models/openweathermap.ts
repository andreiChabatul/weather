export interface ICoordinate {
    lat: number,
    lon: number,
}

export interface IOpenweathermap {
    coord: {
        lon: number,
        lat: number
    },
    weather: [
        {
            id: number,
            main: string,
            description: string,
            icon: string
        }
    ],
    base: string,
    main: {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        humidity: number,
        sea_level: number,
        grnd_level: number
    },
    visibility: number,
    wind: IWind,
    clouds: {
        all: number
    },
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