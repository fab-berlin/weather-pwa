import {OpenWeatherCurrentResponse, RoomData} from "@/01_types/types";

const OutdoorView = ({owmData, outsideData}: { owmData: OpenWeatherCurrentResponse, outsideData: RoomData }) => {
    return <li>
        <div data-id="top-container">
            <p><span>{owmData.weather[0].description}</span><span>{outsideData.temperature}</span></p>
            <p>Weather-Icon</p>
        </div>
        <div data-id="bottom-container">
            <p className={"flex flex-col"}><span>{owmData.main.humidity} %</span><span>Luftfeuchtigkeit</span></p>
            <p className={"flex flex-col"}><span>{owmData.main.temp_min} °C</span><span>min</span></p>
            <p className={"flex flex-col"}><span>{owmData.main.temp_max} °C</span><span>max</span></p>
        </div>
    </li>
}

export default OutdoorView;