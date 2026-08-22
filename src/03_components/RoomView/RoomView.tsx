import {RoomData} from "@/01_types/types";

const RoomView = ({roomData}: {roomData: RoomData}) => {
    return (
        <li>
            <h2>{roomData.name}</h2>
            <p>Temperature: {roomData.temperature}°C</p>
            <p>Humidity: {roomData.humidity}%</p>
        </li>
    );}

export default RoomView;