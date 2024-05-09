import './App.css'
import { useState } from 'react'
import CitySearch from './components/CitySearch'
import Alert from './components/Alert'
import AirQualityCard from './components/AirQualityCard'
import PollutantInfo from './components/PollutantInfo'
import AirQualityLevelsTable from './components/AirQualityLevelsTable'
import Footer from './components/Footer'

function App() {
  const [error, setError] = useState(null)
  const [airQualityData, setAirQualityData] = useState(null)

  const getAirQuality = async (city) => {
    try {
      const response = await fetch(
        `https://api.waqi.info/feed/${city}/?token=245a49a132fae6fdd9a014ee209a01efe0e0855f`
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
      setError('Sorry, something went wrong')
      setAirQualityData(null)
    }
  }

  return (
    <main className='container'>
      <h1 className='mt-5 mb-3 text-3xl font-semibold text-gray-800 lg:text-4xl'>
        Air Quality Index Checker
      </h1>
      <CitySearch getAirQuality={getAirQuality} />
      {error ? <Alert error={error} /> : ''}
      {airQualityData && <AirQualityCard data={airQualityData} />}
      {airQualityData && airQualityData.dominentpol && (
        <PollutantInfo pollutant={airQualityData.dominentpol} />
      )}
      <AirQualityLevelsTable />

      <p className='mb-4'>
        Location-specific API data sourced from the World Air Quality Index
        Project.{' '}
        <a className='text-purple-600' href='https://aqicn.org/api/'>
          LINK
        </a>
      </p>
      <a href='https://www.buymeacoffee.com/amuaridev'>
        <button className='px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80'>
          Support Me
        </button>
      </a>
      <Footer />
    </main>
  )
}

export default App
