import axios, { AxiosResponse } from 'axios';

interface IAPI {
  results: [
    {
      geometry: {
        location: {
          lat: number;
          lng: number;
        };
      }
    }
  ];
}

export const api = axios.create({
  baseURL: 'http://localhost:5000',
});

export const googleApi = async (
  address: string,
): Promise<AxiosResponse<IAPI>> => axios({
  url: 'https://maps.googleapis.com/maps/api/geocode/json',
  params: {
    address,
    key: process.env.REACT_APP_GOOGLE_API_KEY,
  },
});
