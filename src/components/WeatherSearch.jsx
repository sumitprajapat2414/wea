import { useEffect, useState } from 'react'
import './WeatherSearch.css'
import './WeatherData.css'
import axios from 'axios'

const WeatherSearch = () => {


    const [city, setCity] = useState("")
    const [data, setData] = useState([])



    function getWeatherapi(cityName) {
        if (!city) return
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8abc1802bc1a045e2371c05813ef744b&units=metric`


        axios.get(apiUrl)
            .then((res) => {
                console.log(res.data)
                setData(res.data)
            }).catch((error) => {
                console.log(error);

            })




    }








    function handleSearch(e) {
        e.preventDefault()
        getWeatherapi(city)
        setCity("")

    }

    useEffect(() => {
        getWeatherapi()
    })

    return (
        <>

            <div className="input">
                <div>
                    <form onSubmit={handleSearch} className='inputbar' >
                        <input type="Search" placeholder='Search' value={city} onChange={(e) => { setCity(e.target.value) }} className='searchbox' />
                        <input type="submit" value="Get Weather" className='searchbtn' onClick={handleSearch} />

                    </form>
                </div>
            </div>
            <div className="data">
                <div className='weather-data'>
                    <div className='weather-detail'>
                        <p>Temperature</p>
                        <p>{data?.main?.temp}°C</p>
                    </div>
                    <div className='weather-detail'>
                        <p>Location</p>
                        <p>{data?.name}</p>
                    </div>
                    <div className='weather-detail'>
                        <p>Country</p>
                        <p>{data?.sys?.country}</p>
                    </div>
                    <div className='weather-detail'>
                        <p>Humidity</p>
                        <p>{data?.main?.humidity}%</p>
                    </div>
                    <div className='weather-detail'>
                        <p>Wind Speed</p>
                        <p>{data?.wind?.speed} Km/h</p>
                    </div>
                    <div className='weather-detail'>
                        <p>Feels like Temp.</p>
                        <p>{data?.main?.feels_like}°C</p>
                    </div>
                    <div className='weather-detail'>
                        <p>Min Temp.</p>
                        <p>{data?.main?.temp_min}°C</p>
                    </div>
                    <div className='weather-detail'>
                        <p>Max Temp.</p>
                        <p>{data?.main?.temp_max}°C</p>
                    </div>
                    
                </div>

            </div>
        </>
    )
}

export default WeatherSearch
