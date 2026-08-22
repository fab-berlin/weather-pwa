export type WeatherData = {
    filetime: string;
    filedata: RoomData[];
    owm: OpenWeatherCurrentResponse;
}

export type RoomData = {
    name: string;
    temperature: number;
    humidity: number;
}

export interface WeatherCondition {
    id: number;
    main: string;          // z.B. "Clouds", "Rain", "Clear"
    description: string;
    icon: string;           // z.B. "04d" -> Basis für Icon-Mapping
}

export interface MainWeatherData {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level?: number;
    grnd_level?: number;
}

export interface Coord {
    lon: number;
    lat: number;
}

export interface Wind {
    speed: number;
    deg: number;
    gust?: number;
}

export interface Clouds {
    all: number;
}

export interface Sys {
    type?: number;
    id?: number;
    country: string;
    sunrise: number;   // Unix-Timestamp
    sunset: number;    // Unix-Timestamp
}

export interface OpenWeatherCurrentResponse {
    coord: Coord;
    weather: WeatherCondition[];
    base: string;
    main: MainWeatherData;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;         // Unix-Timestamp
    sys: Sys;
    timezone: number;   // Offset in Sekunden zu UTC
    id: number;          // City-ID
    name: string;        // Stadtname
    cod: number;          // Response-Code
}