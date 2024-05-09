const AirQualityLevelsTable = () => {
  const levels = [
    { range: '0 - 50', level: 'Good' },
    { range: '51 - 100', level: 'Moderate' },
    { range: '101 - 150', level: 'Unhealthy for Sensitive Groups' },
    { range: '151 - 200', level: 'Unhealthy' },
    { range: '201 - 300', level: 'Very Unhealthy' },
    { range: '301 and higher', level: 'Hazardous' },
  ]

  return (
    <div className='max-w-full overflow-x-auto mb-4'>
      <div className='bg-white shadow-md rounded my-6'>
        <table className='min-w-max w-full table-auto'>
          <thead>
            <tr className='bg-blue-500 text-white uppercase'>
              <th className='py-3 px-6 text-left'>AQI Range</th>
              <th className='py-3 px-6 text-left'>Level of Health Concern</th>
            </tr>
          </thead>
          <tbody className='text-gray-600 text-sm font-light'>
            {levels.map(({ range, level }, index) => (
              <tr
                key={index}
                className='border-b border-gray-200 hover:bg-gray-100'
              >
                <td className='py-3 px-6 text-left whitespace-nowrap'>
                  {range}
                </td>
                <td className='py-3 px-6 text-left'>{level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AirQualityLevelsTable
