/* eslint-disable react/prop-types */
const getCardColor = (aqi) => {
  if (aqi <= 50) {
    return 'bg-green-700 text-white'
  } else if (aqi <= 100) {
    return 'bg-yellow-400'
  } else if (aqi <= 150) {
    return 'bg-yellow-600'
  } else if (aqi <= 200) {
    return 'bg-red-600 text-white'
  } else if (aqi <= 300) {
    return 'bg-red-800 text-white'
  } else {
    return 'bg-purple-900 text-white'
  }
}

const AirQualityCard = ({ data }) => {
  const { aqi, city, dominentpol, time } = data
  const cardColor = getCardColor(aqi)
  return (
    <div
      className={`w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto px-4 py-3 ${cardColor} rounded-md shadow-lg text-white font-sans`}
    >
      <div className='flex items-center justify-between'>
        <span className='text-sm font-bold'>{city.name}</span>
      </div>

      <div className='mt-4'>
        <h1 className='text-xl font-semibold'>
          Air Quality Index: <span className='font-bold text-2xl'> {aqi}</span>
        </h1>
        <p className='mt-2 text-sm'>{`Dominant Pollutant: ${dominentpol}`}</p>
        <p className='mt-1 text-sm'>{`Last updated: ${time.s}`}</p>
      </div>
    </div>
  )
}

export default AirQualityCard
