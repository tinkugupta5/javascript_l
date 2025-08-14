import { useState, useEffect } from 'react'
import axios from 'axios'

const useGeolocation = () => {
  const [location, setLocation] = useState(null)
  const [error, setError] = useState(null)

  const reverseGeocode = async (lat, lon) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`
      )
      return response.data[0]?.name || 'Your Location'
    } catch (err) {
      console.error('Reverse geocoding failed:', err)
      return 'Your Location'
    }
  }

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser')
      setLocation({ defaultCity: 'Kolkata' })
      return
    }

    const handleSuccess = async (position) => {
      const cityName = await reverseGeocode(
        position.coords.latitude,
        position.coords.longitude
      )
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        cityName
      })
    }

    const handleError = (err) => {
      setError(err.message)
      setLocation({ defaultCity: 'Kolkata' })
    }

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError)
  }, [])

  return { location, error }
}

export default useGeolocation