const OPEN_WEATHER_API_KEY = "544059d90c43e74ca676ebe635e833f5"

export interface OpenWeatherData {
	name: string
	main: {
		feels_like: number
		humidity: number
		pressure: number
		temp: number
		temp_max: number
		temp_min: number
	}
	weather: {
		description: string
		icon: string
		id: number
		main: string
	}[]
	wind: {
		deg: number
		speed: number
	}
}


export const fetchOpenWeatherData = async (city: string): Promise<OpenWeatherData> => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${OPEN_WEATHER_API_KEY}`)

    if(!res.ok) {
        throw new Error("Unable to find city")
    }
		const data: OpenWeatherData = await res.json()
		return data;
}