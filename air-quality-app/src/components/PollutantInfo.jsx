/* eslint-disable react/prop-types */
const PollutantInfo = ({ pollutant }) => {
  const getPollutantInfo = (pollutant) => {
    switch (pollutant) {
      case 'pm25':
        return 'PM2.5 are tiny particles in the air that reduce visibility and cause the air to appear hazy when levels are elevated. They can be a result of burning fossil fuels and chemical reactions.'
      case 'pm10':
        return 'PM10 are inhalable particles that are small enough to penetrate the thoracic region of the respiratory system. They can originate from dust stirred by vehicles on roads, wood burning, and other industrial activities.'
      case 'o3':
        return "Ozone (O3) is a gas that occurs both in the Earth's upper atmosphere and at ground level. It can be good or bad for health and the environment, depending on its location in the atmosphere."
      case 'no2':
        return 'Nitrogen Dioxide (NO2) primarily gets in the air from burning fuel. It can cause respiratory problems and contribute to the formation of other pollutants.'
      case 'so2':
        return 'Sulfur Dioxide (SO2) is produced from burning fossil fuels (coal and oil) and from smelting mineral ores. It can cause respiratory issues and contribute to the formation of other pollutants.'
      case 'co':
        return 'Carbon Monoxide (CO) is a harmful pollutant produced primarily from car exhausts. It is colorless, odorless, and can cause health problems at high levels.'
      case 'NEPH':
        return 'NEPH represents measurements reported by a nephelometer, as a measure of light scattering or reduction due to atmospheric particulate matter (PM). Scattering by PM impairs visibility, therefore this parameter is also referred to as visibility, as it indicates how visual range is affected by airborne particulate matter.'
      default:
        return 'No information available for the pollutant.'
    }
  }

  return (
    <div className='w-full max-w-md mt-10 md:max-w-lg lg:max-w-xl mx-auto px-4 py-3 mb-4 rounded-md shadow-md border border-gray-200 bg-blue-300 text-gray-800 font-sans'>
      <h4 className='text-xl font-semibold mb-2'>
        {pollutant.toUpperCase()} Information
      </h4>
      <p className='text-sm'>{getPollutantInfo(pollutant)}</p>
    </div>
  )
}

export default PollutantInfo
