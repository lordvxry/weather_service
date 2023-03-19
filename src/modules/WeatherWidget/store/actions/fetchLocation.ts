import { AppDispatch } from '../../../../store/store';
import { getLocation } from '../../api/getLocation';
import { locationSlice } from '../reducers/LocationSlice';

export const fetchLocation = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(locationSlice.actions.locationFetching());
    const response = await getLocation();
    const result = {
      latitude: response.coords.latitude,
      longitude: response.coords.longitude,
    };
    dispatch(locationSlice.actions.locationFetchingSuccess(result));
  } catch (err) {
    dispatch(
      locationSlice.actions.locationFetchingSuccess({ latitude: 0, longitude: 0 }),
    );
  }
};
