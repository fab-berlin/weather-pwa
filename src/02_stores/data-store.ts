import {create} from "zustand/react";
import {RoomData} from "@/01_types/types";

interface DataStore {
    data: RoomData[] | null,
    fetchData: () => Promise<void>

}

const useDataStore = create<DataStore>((setState, getState) => ({
    data: null,
    fetchData: async () => {
        const infoUrl = process.env.INFO_API_BASE ?? '';
        const response = await fetch(`${infoUrl}/weatherJson.php`, {cache: 'no-store'});
        const result = await response.json();
        setState({ data: result });
    }
}));