import { create } from "zustand";

type Track = {
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
    tracks: [
        {
            type: 'string',
            frequency: 'string',
            managedIn: 'string',
            paidWith: 'string',
            currency: 'string',
            amount: 123,
        },
        {
            type: 'string1',
            frequency: 'string1',
            managedIn: 'string1',
            paidWith: 'string1',
            currency: 'string1',
            amount: 22,
        },
        {
            type: 'string2',
            frequency: 'string2',
            managedIn: 'string2',
            paidWith: 'string2',
            currency: 'string2',
            amount: 228,
        },
    ],
    addTrack: (addingTrack) => set((state) => {
        const updatedTracks = [...state.tracks, addingTrack];
        return { tracks: updatedTracks };
    }),
}))