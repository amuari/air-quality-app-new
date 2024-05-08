import './App.css'
import { useState } from 'react'
import CitySearch from './components/CitySearch'
import Alert from './components/Alert'

function App() {
  const [error, setError] = useState(null)
  const [airQualityData, setAirQualityData] = useState(null)
  const getAirQuality = async (city) => {
    try {
      const response = await fetch(
        `https://api.waqi.info/feed/${city}/?token=245a49a132fae6fdd9a014ee209a01efe0e0855f  `
      )
      const data = await response.json()
      console.log(data)
      if (response.ok && data.status === 'ok') {
        setAirQualityData(data.data)
        setError(null)
      } else {
        setError(
          'Sorry city not available. Try another location nearby or check your spelling  '
        )
        setAirQualityData(null)
      }
    } catch (error) {
      console.error('network error:', error)
      setError('Sorry,Something went wwrong')
      setAirQualityData(null)
    }
  }
  return (
    <main className='container'>
      <h1 className='mt-5 mb-3 text-3xl font-semibold text-gray-800  lg:text-4xl'>
        Air Quality Index Checker
      </h1>
      <CitySearch getAirQuality={getAirQuality} />
      {error ? <Alert error={error} /> : ''}
      {airQualityData && (
        // Air Quality Card Component
        // Pollutant Info
        <div></div>
      )}
    </main>
  )
}

export default App
