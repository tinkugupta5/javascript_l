# Weather Widget (React + Vite + MUI)

A responsive weather widget matching the mock UI. Features:
- Current conditions + 7‑day forecast
- City search (no hardcoded values)
- Metric/Imperial toggle
- Geolocation on first load
- Accessible (aria labels, semantic structure)
- Separation of components & custom hooks

## Setup

```bash
npm install
npm run dev
```
Open http://localhost:5173

### Environment
Your API key is stored in `.env`:

```
VITE_OWM_KEY=267ee9ed194c3249859042259c051d12
```

If you need to change it, edit `.env` and restart the dev server.

## Notes
- Data source: OpenWeatherMap One Call API + Geocoding API.
- No server required.
