export type weatherData = {
    filetime: string;
    filedata: RoomData[];
}

export type RoomData = {
    name: string;
    temperature: number;
    humidity: number;
}