import React from 'react'
import {createRoot} from 'react-dom/client'
import './options.css'

const App = () => {
    return (
        <img src="icon.png"/>
    )
  }

const container = document.createElement('div')
document.body.appendChild(container)

const root = createRoot(container)
root.render(<App />)