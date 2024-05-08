const AirQualityCard = ({ data }) => {
  const { aqi, city, dominentpol, time } = data
  return (
    <div className='w-full md:max-w-sm md:mx-52 lg:mx-80 xl:mx-96 px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800'>
      <div className='flex items-center justify-between'>
        <span className='text-sm font-light text-gray-800 dark:text-gray-400'>
          {city.name}
        </span>
      </div>

      <div className='mt-4'>
        <h1 className='text-lg font-semibold text-gray-800 dark:text-white'>
          Air Quality Index: {aqi}
        </h1>
        <p className='mt-2 text-sm text-gray-600 dark:text-gray-300'>
          Dominant Pollutant: {dominentpol}
        </p>
        <p className='mt-1 text-sm text-gray-600 dark:text-gray-300'>
          Last updated: {time.s}
        </p>
      </div>
    </div>
  )
}

export default AirQualityCard
