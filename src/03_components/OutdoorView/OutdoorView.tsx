import {OpenWeatherCurrentResponse, RoomData} from "@/01_types/types";
import WeatherIcon from "@/03_components/WeatherIcon/WeatherIcon";

const OutdoorView = ({owmData, outsideData, onClick}: {
    owmData: OpenWeatherCurrentResponse,
    outsideData: RoomData,
    onClick: () => void
}) => {
    return <li className="rounded-xl p-4 col-span-full bg-white/10 border relative">
        <button onClick={onClick} className={'text-left block w-full'}>
            <div data-id="top-container" className={'flex flex-row justify-between mb-4'}>
                <p className="flex flex-col"><span className="text-sm">{owmData.weather[0].description}</span><span
                    className="text-3xl">{outsideData.temperature} °C</span></p>
                <p className="absolute right-4 top-4">
                    <WeatherIcon id={owmData.weather[0].id}
                                 className="w-30 aspect-[267/167] text-white"/>
                </p>
            </div>
            <div data-id="bottom-container" className={'flex flex-row justify-between'}>
                <p className={"flex flex-col"}><span>{owmData.main.humidity} %</span><span
                    className="text-xxs">Luftfeuchtigkeit</span></p>
                <p className={"flex flex-col"}><span>{owmData.main.temp_min} °C</span><span
                    className="text-xxs">min</span></p>
                <p className={"flex flex-col"}><span>{owmData.main.temp_max} °C</span><span
                    className="text-xxs">max</span></p>
            </div>
        </button>
    </li>
}

export default OutdoorView;