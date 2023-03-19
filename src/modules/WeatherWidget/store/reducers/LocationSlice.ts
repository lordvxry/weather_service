import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LocationInfoModel } from '../../models/LocationInfoModel';

interface LocationState {
  location: LocationInfoModel | null;
  isLoading: boolean;
}

const initialState: LocationState = {
  location: null,
  isLoading: false,
};

export const locationSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    locationFetching(state) {
      state.isLoading = true;
    },
    locationFetchingSuccess(state, action: PayloadAction<LocationInfoModel>) {
      state.isLoading = false;
      state.location = action.payload;
    },
  },
});

export const locationReducer = locationSlice.reducer;
