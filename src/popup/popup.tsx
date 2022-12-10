import React, {useEffect} from 'react'
import {createRoot} from 'react-dom/client'
import { fetchOpenWeatherData } from '../utils/api'
import './popup.css'

const App: React.FC<{}> = () => {
  useEffect(() => {
    fetchOpenWeatherData("Enugu")
    .then((data) => {
      console.log(data); 
      console.log("Temperature is: ", data.main.temp);
    })
    .catch((err) => console.log(err))
  }, [])
  return (
    <div><img src="icon.png"/></div>
  )
}

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(<App />)


