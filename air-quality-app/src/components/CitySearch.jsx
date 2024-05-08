import { useState } from 'react'

const CitySearch = ({ getAirQuality }) => {
  const [inputValue, setInputValue] = useState('')
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    const formattedCity = inputValue.replace(/ /g, '-')
    getAirQuality(formattedCity)
  }
  return (
    <div>
      <form action='' className='mb-4'>
        <input
          type='search'
          placeholder='Enter City...'
          value={inputValue}
          onChange={handleInputChange}
          className='px-4 py-2 text-blue-600 bg-white border rounded-md sm:mx-2 dark:bg-gray-300  dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40'
        ></input>
        <button
          type='submit'
          onClick={handleSearch}
          className='x-4 py-2 m-2 p-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-md sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600'
        >
          Search
        </button>
      </form>
    </div>
  )
}

export default CitySearch
