import './App.css';
import Header from './Components/Header';
import { useEffect, useState } from 'react';
import Location from './Components/Headline';
import MainBox from './Components/MainBox';

function App() {

  const token = '544cc40b9018a5';
  const apiKey = 'SiPVszgovu6aFy5pYecgwyi8szDKfZM3';

  const [location, setlocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [additionalData, setAdditionalData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const location = await fetchGeoLocation();
        const locationKey = await fetchLocationKey(location.city);
        const coordinates = await location.loc.split(",")
        await additional(coordinates[0], coordinates[1])
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
        return data;
      } catch (error) {
        console.log("Erorr while fetching location: ", error)
      }
    }
    const fetchLocationKey = async (location) => {
      try {
        const responce = await fetch(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${location}`);
        const json = await responce.json();
        const data = json[0].Key;
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
        return data;
      } catch (error) {
        console.log("Error while fetching data: ", error)
      }
    }
    const additional = async (lat, lon) => {
      try {
        const responce = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,is_day,precipitation,rain,showers,snowfall,wind_speed_10m`);
        const json = await responce.json();
        const data = json.current;
        setAdditionalData(data)
      } catch(error) {
        console.log("Error while fetching: ", error)
      }
    } 
    fetchData();
  }, [])

  return (
    <div>
      <Header />
      {location && weather && <Location city={location.city}  country={location.country} weather={weather.WeatherText}/>}
      
      {additionalData && weather && <MainBox weather={weather} additional={additionalData}/>}

    </div>
  );
  
  }  

export default App;