import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";


export interface Apartment {
  id: string;
  title: string;
  images: Array<{ url: string }>;
}

export interface LocationData {
  id: string;
  name: string;
  apartments: Apartment[];
}
const initialState: Array<LocationData>=[]

export const locationSlice = createSlice({
  name: "locationInfo",
    initialState,
    reducers: {
        addLocation(state, action: PayloadAction<LocationData>) {
            state.push(action.payload)
      }
  }
});

export const { addLocation } = locationSlice.actions
export const locationSelector = (state: RootState) => state.locationReducer
export default locationSlice.reducer