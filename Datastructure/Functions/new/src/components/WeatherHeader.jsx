import React from 'react'
import { Box, Typography, Avatar } from '@mui/material'
import { WbSunny, Cloud, Opacity, AcUnit, Thunderstorm } from '@mui/icons-material'

const WeatherHeader = ({ weatherData, unit, location }) => {
  const { temp, humidity, wind_speed, weather } = weatherData
  const mainWeather = weather[0].main
  const description = weather[0].description

  // Get appropriate weather icon
  const getWeatherIcon = () => {
    switch (mainWeather.toLowerCase()) {
      case 'clear':
        return <WbSunny sx={{ fontSize: 64 }} />
      case 'clouds':
        return <Cloud sx={{ fontSize: 64 }} />
      case 'rain':
        return <Opacity sx={{ fontSize: 64 }} />
      case 'snow':
        return <AcUnit sx={{ fontSize: 64 }} />
      case 'thunderstorm':
        return <Thunderstorm sx={{ fontSize: 64 }} />
      default:
        return <WbSunny sx={{ fontSize: 64 }} />
    }
  }

  return (
    <Box
      display="flex"
      flexDirection={{ xs: 'column', sm: 'row' }}
      alignItems="center"
      justifyContent="space-between"
      mb={3}
      textAlign={{ xs: 'center', sm: 'left' }}
    >
      <Box>
        <Typography variant="h4" component="h2" gutterBottom>
          {location}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </Typography>
        <Typography variant="h6" mt={1}>
          {description.charAt(0).toUpperCase() + description.slice(1)}
        </Typography>
      </Box>

      <Box display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }}>
        <Avatar sx={{ bgcolor: 'transparent', mr: 2 }}>{getWeatherIcon()}</Avatar>
        <Typography variant="h2" component="div">
          {Math.round(temp)}°{unit === 'metric' ? 'C' : 'F'}
        </Typography>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        ml={{ sm: 3 }}
        mt={{ xs: 2, sm: 0 }}
      >
        <Typography variant="body1">
          Humidity: {humidity}%
        </Typography>
        <Typography variant="body1">
          Wind: {Math.round(wind_speed)} {unit === 'metric' ? 'm/s' : 'mph'}
        </Typography>
      </Box>
    </Box>
  )
}

export default WeatherHeader