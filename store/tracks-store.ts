import { create } from "zustand";

type Track = {
    name: string,
    type: string,
    frequency: string,
    managedIn: string,
    paidWith: string,
    currency: string,
    amount: number,
}

type Tracks = {
    tracks: Track[],
    addTrack: (addingTrack: Track) => void
}

export const useTracks = create<Tracks>()((set) => ({
    tracks: [],
    addTrack: (addingTrack) => set((state) => {
        const updatedTracks = [...state.tracks, addingTrack];
        return { tracks: updatedTracks };
    }),
}))