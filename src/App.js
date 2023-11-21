import './App.css';
import Header from './Components/Header';
import { useEffect, useState } from 'react';
import Location from './Components/Headline';

function App() {

  const token = '544cc40b9018a5';
  const apiKey = 'SiPVszgovu6aFy5pYecgwyi8szDKfZM3';

  const [location, setlocation] = useState(null);
  const [weather, setWeather] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const location = await fetchGeoLocation();
        const locationKey = await fetchLocationKey(location);
        await fetchCurrentWeather(locationKey);
      } catch (error) {
        console.error("Error during data fetching:", error);
      }
    };
   
    const fetchGeoLocation = async () => {
      try {
        const responce = await fetch(`https://ipinfo.io?token=${token}`);
        let data = await responce.json();
        setlocation(data);
        console.log(data)
        return data.city;
      } catch (error) {
        console.log("Erorr while fetching location: ", error)
      }
    }
    const fetchLocationKey = async (location) => {
      try {
        const responce = await fetch(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${location}`);
        const json = await responce.json();
        const data = json[0].Key;
        console.log(data)
        return data;
      } catch (error) {
      console.log("Error while fetching location key: ", error)
      }
    }
    const fetchCurrentWeather = async (locationKey) => {
      try {
        const responce = await fetch(`https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`);
        const json = await responce.json();
        const data = json[0];
        setWeather(data);
        console.log(data)
        return data;
      } catch (error) {
        console.log("Error while fetching data: ", error)
      }
    }
    fetchData();
  }, [])



  return (
    <div>

      <Header />
      {location && weather && <Location city={location.city}  country={location.country} weather={weather.WeatherText}/>}
  
      {weather && (
        <>
          <div>{Math.round(weather.Temperature.Metric.Value)}</div>
          <div>{weather.IsDayTime ? <p>Day</p> : <p>Night</p>}</div>
        </>
      )}
    </div>
  );
  
  }  

export default App;