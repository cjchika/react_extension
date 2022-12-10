import React, {useEffect, useState} from 'react'
import {Card, CardContent, Typography, CircularProgress, Box } from '@material-ui/core'
import { fetchOpenWeatherData, OpenWeatherData } from '../utils/api'

const WeatherCard: React.FC<{city: string}> = ({city}) => {
    const [weatherData, setWeatherData] = useState<OpenWeatherData | null>(null)

    useEffect(() => {
        fetchOpenWeatherData(city)
        .then((data) => {
          setWeatherData(data); 
        })
        .catch((err) => console.log(err))
      }, [city])

      if(!weatherData) {
        return (
            <Box sx={{ display: 'flex' }}>
              <CircularProgress />
            </Box>
          );
      }

  return (
    <Box mx={'4px'} my={'16px'}>
        <Card>
        <CardContent>
            <Typography variant='h5'>{weatherData.name}</Typography>
            <Typography variant='body1'>{Math.round(weatherData.main.temp)}</Typography>
            <Typography variant='body1'>Feels like: {Math.round(weatherData.main.feels_like)}</Typography>
        </CardContent>
    </Card>
    </Box>
  )
}

export default WeatherCard