import './App.css'
const getAirQuality = async (city) => {
  try {
    const response = await fetch(
      `https://api.waqi.info/feed/${city}/?token=${REACT_APP_AQI_AOI_TOKEN}`
    )
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
function App() {
  return <main></main>
}

export default App
