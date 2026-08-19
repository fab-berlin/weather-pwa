import {create} from "zustand/react";
import {RoomData} from "@/01_types/types";

interface DataStore {
    data: RoomData[] | null,
    fetchData: () => Promise<void>

}

const useDataStore = create<DataStore>((setState, getState) => ({
    data: null,
    fetchData: async () => {
        const data = await fetch();
    }
}));