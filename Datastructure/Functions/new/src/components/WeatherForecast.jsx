import React from 'react'
import { Box, Typography, Paper } from '@mui/material'
import { WbSunny, Cloud, Opacity, AcUnit, Thunderstorm } from '@mui/icons-material'

const WeatherForecast = ({ forecastData, unit }) => {
  // Group forecast by day (OpenWeatherMap provides 3-hour intervals for 5 days)
  const dailyForecast = forecastData.list.reduce((acc, item) => {
    const date = new Date(item.dt * 1000).toLocaleDateString()
    if (!acc[date]) {
      acc[date] = {
        temp_min: item.main.temp_min,
        temp_max: item.main.temp_max,
        weather: item.weather[0],
        date: item.dt,
      }
    } else {
      if (item.main.temp_min < acc[date].temp_min) {
        acc[date].temp_min = item.main.temp_min
      }
      if (item.main.temp_max > acc[date].temp_max) {
        acc[date].temp_max = item.main.temp_max
      }
    }
    return acc
  }, {})

  // Convert to array and skip today (index 0)
  const forecastDays = Object.values(dailyForecast).slice(1, 6)

  const getWeatherIcon = (mainWeather) => {
    const iconProps = { fontSize: 'small' }
    switch (mainWeather.toLowerCase()) {
      case 'clear':
        return <WbSunny {...iconProps} />
      case 'clouds':
        return <Cloud {...iconProps} />
      case 'rain':
        return <Opacity {...iconProps} />
      case 'snow':
        return <AcUnit {...iconProps} />
      case 'thunderstorm':
        return <Thunderstorm {...iconProps} />
      default:
        return <WbSunny {...iconProps} />
    }
  }

  return (
    <Box mt={3}>
      <Typography variant="h6" component="h3" gutterBottom>
        Weekly Forecast
      </Typography>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        gap={2}
      >
        {forecastDays.map((day, index) => (
          <Paper
            key={index}
            elevation={1}
            sx={{
              p: 2,
              flex: 1,
              minWidth: 100,
              textAlign: 'center',
              borderRadius: 2,
            }}
          >
            <Typography variant="subtitle2">
              {new Date(day.date * 1000).toLocaleDateString('en-US', {
                weekday: 'short',
              })}
            </Typography>
            <Box my={1}>{getWeatherIcon(day.weather.main)}</Box>
            <Typography variant="body2" color="text.secondary">
              {day.weather.description}
            </Typography>
            <Box mt={1}>
              <Typography variant="body2">
                H: {Math.round(day.temp_max)}°{unit === 'metric' ? 'C' : 'F'}
              </Typography>
              <Typography variant="body2">
                L: {Math.round(day.temp_min)}°{unit === 'metric' ? 'C' : 'F'}
              </Typography>
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  )
}

export default WeatherForecast