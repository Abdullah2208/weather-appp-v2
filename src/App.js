import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const token = '544cc40b9018a5';
  const apiKey = 'SiPVszgovu6aFy5pYecgwyi8szDKfZM3'
  const [location, setlocation] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const location = await fetchGeoLocation();
      const locationKey = await fetchLocationKey(location);
      const weather = await fetchCurrentWeather(locationKey);
      console.log(weather)
    }
    const fetchGeoLocation = async () => {
      try {
        const responce = await fetch(`https://ipinfo.io?token=${token}`);
        let data = await responce.json();
        data = data.city;
        setlocation(data)
        return data;
      } catch (error) {
        console.log("Erorr while fetching location: ", error)
      }
    }
    const fetchLocationKey = async (location) => {
      try {
        const responce = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${location}`);
        const json = await responce.json();
        const data = json[0].Key;
        return data;
      } catch (error) {
      console.log("Error while fetching location key: ", error)
      }
    }
    const fetchCurrentWeather = async (locationKey) => {
      try {
        const responce = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`);
        const json = await responce.json();
        const data = json[0];
        setWeather(data);
        return data;
      } catch (error) {
        console.log("Error while fetching data: ", error)
      }
    }
    fetchData();
  }, [])
  return (
    <div>
      <div>{location}</div>
      {weather && (
        <>
          <div>{weather.WeatherText}</div>
          <div>{weather.Temperature.Metric.Value}</div>
          <div>{weather.IsDayTime ? <p>Day</p>:<p>Night</p>}</div>
        </>
      )}
    </div>
  );
  
}

export default App;
