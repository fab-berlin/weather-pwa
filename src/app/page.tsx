'use client';

import {useEffect, useState} from "react";
import {RoomData, WeatherData} from "@/01_types/types";
import RoomView from "@/03_components/RoomView/RoomView";
import OutdoorView from "@/03_components/OutdoorView/OutdoorView";

export default function Home() {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        const fetchData = async () => {
            const response = await fetch('/api', {signal, method: 'GET'});
            const data = await response.json();
            setWeatherData(data);
        }
        fetchData().catch((err) => {
            if (err.name === 'AbortError') {
                console.log('Fetch aborted');
                // This is normal during cleanup, so we don't need to set an error state
            }
        });

        return () => controller.abort();
    }, []);

    const fileTime = weatherData?.filetime
        ? new Date(weatherData.filetime).toLocaleString()
        : null;


    const retrieveData = async () => {
        const response = await fetch('/api', {method: 'GET'});
        const data = await response.json();
        setWeatherData(data);
    }

    const outsideData = weatherData?.filedata.find(item => item.name === "aussen");

    return (
        <>
            <span className="text-xxs text-center block mb-2">{fileTime}</span>
            <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
                {weatherData?.owm && outsideData &&
                    <OutdoorView owmData={weatherData?.owm}
                                 outsideData={outsideData}
                                 onClick={retrieveData}
                    />
                }
                {weatherData?.filedata.filter(item => item.name !== "aussen").map((item: RoomData, index: number) =>
                    <RoomView roomData={item} key={index}/>
                )}
            </ul>
        </>
    );
}
