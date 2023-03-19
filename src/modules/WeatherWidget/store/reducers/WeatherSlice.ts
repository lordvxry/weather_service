import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WeatherModel } from '../../models/WeatherModel';
import { ComingWeatherModel } from '../../models/ComingWeatherModel';

interface WeatherState {
  weather: WeatherModel | null;
  comingWeather: ComingWeatherModel;
  isLoading: boolean;
  error: string;
}

export interface WeatherPayload {
  weather: WeatherModel;
  comingWeather: ComingWeatherModel;
}

const initialState: WeatherState = {
  weather: null,
  comingWeather: { list: [] },
  isLoading: false,
  error: '',
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    weatherFetching(state) {
      state.isLoading = true;
    },
    weatherFetchingSuccess(state, action: PayloadAction<WeatherPayload>) {
      state.isLoading = false;
      state.error = '';
      state.weather = action.payload.weather;
      state.comingWeather = action.payload.comingWeather;
    },
    weatherFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const weatherReducer = weatherSlice.reducer;
