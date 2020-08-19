import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { AxiosResponse } from 'axios';
import BounceLoader from 'react-spinners/BounceLoader';
import { api } from '../../services/api';
import { Container, StyledWrapper } from './styles';
import Nav from '../../components/Navbar';

interface IPositionProps{
    lat: number,
    lng: number
}

interface IResidenceProps{
  latitude: number,
  longitude: number,
  residentes: number
}

interface IHeatMapProps{
  positions: IPositionProps[],
  options: {
  radius: number,
      opacity: number
  }
}

const Home = () => {
  const [heatMapData, setHeatMapData] = useState<
    IHeatMapProps
  >({} as IHeatMapProps);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response: AxiosResponse<IResidenceProps[]> = await api.get('residences');

        const positions: IPositionProps[] = [];

        response.data.forEach((element) => {
          for (let i = 0; i < element.residentes; i++) {
            positions.push({
              lat: element.latitude,
              lng: element.longitude,
            });
          }
        });

        setHeatMapData({
          positions,
          options: {
            radius: 20,
            opacity: 0.6,
          },
        });
      } catch (err) {
        console.log(err);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    })();
  }, []);

  return (
    <>
      <Nav />
      <Container>
        {isLoading ? (
          <span>
            <BounceLoader size={60} color="#A6BBA8" />
          </span>
        ) : (
          <StyledWrapper>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: String(process.env.REACT_APP_GOOGLE_API_KEY),
              }}
              defaultCenter={{ lat: -27.5900416, lng: -48.5445115 }}
              defaultZoom={4}
              heatmapLibrary
              heatmap={heatMapData}
            />
          </StyledWrapper>
        )}
      </Container>
    </>
  );
};

export default Home;
