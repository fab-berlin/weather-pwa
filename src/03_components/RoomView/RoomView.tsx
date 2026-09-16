import {RoomData} from "@/01_types/types";

const RoomNames: Record<string, string> = {
    wohnzimmer: "Wohnzimmer",
    schlafzimmer: "Schlafzimmer",
    kinderzimmer: "Kinderzimmer",
    badezimmer: "Badezimmer",
    office: "Arbeitszimmer",
    gaestezimmer: "Gästezimmer",
    schuppen: "Schuppen",
};

const RoomView = ({roomData}: { roomData: RoomData }) => {
    return (
        <li className="rounded-xl p-4 col-span-1 bg-white/10 border gap-y-1 grid">
            <h2 className="text-sm">{RoomNames[roomData.name] ?? roomData.name}</h2>
            <p className="flex flex-col">
                <span className="text-3xl">{roomData.temperature}°C</span>
                <span className="text-xxs">Temperatur</span>
            </p>
            <p className="flex flex-col">
                <span className="">{roomData.humidity}%</span>
                <span className="text-xxs">Luftfeuchtigkeit</span>
            </p>
        </li>
    );
}

export default RoomView;