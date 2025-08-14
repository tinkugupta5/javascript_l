import React, { useState } from 'react'
import { Box, Paper, CircularProgress, Alert } from '@mui/material'
import WeatherHeader from './WeatherHeader'
import WeatherForecast from './WeatherForecast'
import UnitToggle from './UnitToggle'
import SearchBar from './SearchBar'
import useWeather from '../hooks/useWeather'
import useGeolocation from '../hooks/useGeolocation'

const WeatherWidget = () => {
  const [unit, setUnit] = useState('metric')
  const [searchQuery, setSearchQuery] = useState('')
  const { location, error: geoError } = useGeolocation()
  const { weatherData, forecastData, loading, error } = useWeather(
    searchQuery || (location ? 
      (location.latitude ? `${location.latitude},${location.longitude}` : location.defaultCity) 
      : 'Kolkata'),
    unit
  )

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  const toggleUnit = () => {
    setUnit(unit === 'metric' ? 'imperial' : 'metric')
  }

  const getLocationName = () => {
    if (searchQuery) return searchQuery
    if (location?.cityName) return location.cityName
    if (location?.defaultCity) return location.defaultCity
    return 'Kolkata'
  }

  return (
    <Paper
      elevation={3}
      sx={{
        p: { xs: 2, sm: 3 },
        borderRadius: 2,
        minWidth: 300,
        maxWidth: 800,
        mx: 'auto',
      }}
      aria-label="Weather Widget"
    >
      {geoError && (
        <Alert severity="info" sx={{ mb: 2 }}>
          Using default location (Kolkata). {geoError}
        </Alert>
      )}
      
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <SearchBar onSearch={handleSearch} />
        <UnitToggle unit={unit} onToggle={toggleUnit} />
      </Box>

      {loading ? (
        <Box display="flex" justifyContent="center" my={4}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          {weatherData && (
            <WeatherHeader 
              weatherData={weatherData} 
              unit={unit} 
              location={getLocationName()}
            />
          )}
          {forecastData && <WeatherForecast forecastData={forecastData} unit={unit} />}
        </>
      )}
    </Paper>
  )
}

export default WeatherWidget