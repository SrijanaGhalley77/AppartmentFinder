import { configureStore } from "@reduxjs/toolkit";
// import locationReducer from "./locationSlice";
import { getApiCall } from "@/services/GetApiCall";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    // location: locationReducer,
    [getApiCall.reducerPath]: getApiCall.reducer, // Correct way to add API reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getApiCall.middleware), // Correctly appending middleware
});

// Setup listeners for refetching on focus
setupListeners(store.dispatch);
