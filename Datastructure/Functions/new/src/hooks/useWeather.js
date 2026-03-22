import { useState, useEffect } from 'react'
import axios from 'axios'

const useWeather = (locationQuery, unit) => {
  const [weatherData, setWeatherData] = useState(null)
  const [forecastData, setForecastData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!locationQuery) return

    const fetchWeather = async () => {
      setLoading(true)
      setError(null)
      try {
        // Determine if query is coordinates (lat,lon) or city name
        const isCoordinates = locationQuery.includes(',')

        // Current weather
        const currentUrl = `${import.meta.env.VITE_OPENWEATHER_BASE_URL}/weather?${
          isCoordinates
            ? `lat=${locationQuery.split(',')[0]}&lon=${locationQuery.split(',')[1]}`
            : `q=${locationQuery}`
        }&units=${unit}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`

        // Forecast
        const forecastUrl = `${import.meta.env.VITE_OPENWEATHER_BASE_URL}/forecast?${
          isCoordinates
            ? `lat=${locationQuery.split(',')[0]}&lon=${locationQuery.split(',')[1]}`
            : `q=${locationQuery}`
        }&units=${unit}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`

        const [currentRes, forecastRes] = await Promise.all([
          axios.get(currentUrl),
          axios.get(forecastUrl),
        ])

        setWeatherData({
          temp: currentRes.data.main.temp,
          humidity: currentRes.data.main.humidity,
          wind_speed: currentRes.data.wind.speed,
          weather: currentRes.data.weather,
        })
        setForecastData(forecastRes.data)
      } catch (err) {
        setError(
          err.response?.data?.message || 'Failed to fetch weather data. Please try again.'
        )
        setWeatherData(null)
        setForecastData(null)
      } finally {
        setLoading(false)
      }
    }

    fetchWeather()
  }, [locationQuery, unit])

  return { weatherData, forecastData, loading, error }
}

export default useWeather