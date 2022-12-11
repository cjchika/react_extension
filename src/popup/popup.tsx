import React from 'react'
import {createRoot} from 'react-dom/client'
import 'fontsource-roboto'
import './popup.css'
import WeatherCard from '../WeatherCard/WeatherCard'

const App: React.FC<{}> = () => {
  
  return (
    <>
    <WeatherCard city={'Enugu'}/>
    <WeatherCard city={'Abia'}/>
    <WeatherCard city={'error'}/>
    </>
  )
}

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(<App />)


