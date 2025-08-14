import React from 'react'
import { FormControlLabel, Switch, Typography, Box } from '@mui/material'

const UnitToggle = ({ unit, onToggle }) => {
  return (
    <Box display="flex" alignItems="center">
      <Typography variant="body1" mr={1}>
        °C
      </Typography>
      <FormControlLabel
        control={
          <Switch
            checked={unit === 'imperial'}
            onChange={onToggle}
            color="primary"
            inputProps={{ 'aria-label': 'Switch between Celsius and Fahrenheit' }}
          />
        }
        label="°F"
        labelPlacement="end"
      />
    </Box>
  )
}

export default UnitToggle