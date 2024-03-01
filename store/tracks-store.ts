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
            currency: 'USD',
            amount: 123,
        },
        {
            type: 'string1',
            frequency: 'string1',
            managedIn: 'string1',
            paidWith: 'string1',
            currency: 'RUB',
            amount: 22,
        },
        {
            type: 'string2',
            frequency: 'string2',
            managedIn: 'string2',
            paidWith: 'string2',
            currency: 'USD',
            amount: 228,
        },
    ],
    addTrack: (addingTrack) => set((state) => {
        const updatedTracks = [...state.tracks, addingTrack];
        return { tracks: updatedTracks };
    }),
}))