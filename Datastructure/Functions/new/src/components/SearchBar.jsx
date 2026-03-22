import React, { useState } from 'react'
import { TextField, InputAdornment, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (query.trim()) {
      onSearch(query.trim())
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        placeholder="Search city..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        size="small"
        sx={{ minWidth: 200 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton type="submit" aria-label="Search for city weather">
                <Search />
              </IconButton>
            </InputAdornment>
          ),
        }}
        inputProps={{
          'aria-label': 'Enter city name to search for weather',
        }}
      />
    </form>
  )
}

export default SearchBar