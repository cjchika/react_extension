import React, {useState, useEffect} from 'react'
import {createRoot} from 'react-dom/client'
import { InputBase, IconButton, Paper, Box, Grid } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import 'fontsource-roboto'
import './popup.css'
import WeatherCard from '../WeatherCard/WeatherCard'
import { setStoredCities, setStoredOptions , getStoredCities, getStoredOptions, LocalStorageOptions } from '../utils/storage';

const App: React.FC<{}> = () => {
  const [cities, setCities] = useState<string[]>([])
  const [cityInput, setCityInput] = useState<string>("")
  const [options, setOptions] = useState<LocalStorageOptions | null>(null)

  useEffect(() => {
    getStoredCities().then(cities => setCities(cities))
    // getStoredOptions().then(options => setOptions(options))
  }, [])

  const handleCityButtonClick = () => {
    if(cityInput === '') {
      return
    }
    const updatedCities = [...cities, cityInput]
    setStoredCities(updatedCities).then(() => {
      setCities([...cities, cityInput])
      setCityInput('')
    })
  }
  
  const handleDeleteButtonClick = (index: number) => {
    cities.splice(index, 1)
    const updatedCities = [...cities]
    setStoredCities(updatedCities).then(() => {
      setCities([...cities])
    })
  }

  // if(!options) {
  //   return null
  // }
  
  return (
    <>
    <Box mx={'4px'} my={'16px'}>
      <Grid container>
        <Grid item> 
          <Paper>
          <Box mx={"8px"} my="16px">
          <InputBase 
            placeholder='Add a city name'
            value={cityInput}
            onChange={(event) => setCityInput(event.target.value)}
          />
          <IconButton onClick={handleCityButtonClick}>
            <AddCircleIcon />
          </IconButton>
          </Box>
          </Paper>
      </Grid>
    </Grid>
    {cities.map((city, index) => (
      <WeatherCard city={city} key={index} onDelete={() => handleDeleteButtonClick(index)}/>
    ))}
    <Box height="16px" />
    </Box>
    </>
  )
}

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(<App />)


