import './App.css';
import Header from './Components/Header';
import { useEffect, useState } from 'react';
import Location from './Components/Headline';
import MainBox from './Components/MainBox';
import AQI from './Components/AQI';
import Indices from './Components/Indices';
// import Footer from './Components/Footer';

function App() {

  const token = '544cc40b9018a5';
  const apiKey = 'SiPVszgovu6aFy5pYecgwyi8szDKfZM3';

  const [location, setlocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [additionalData, setAdditionalData] = useState(null);
  const [forecast, setForecat ] = useState(null);
  const [aqi, setAqi] = useState(null);
  const [indices, setIndices] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const location = await fetchGeoLocation();
        const locationKey = await fetchLocationKey(location.city);
        const coordinates = await location.loc.split(",");
        await fetchCurrentWeather(locationKey);
        await additional(coordinates[0], coordinates[1]);
        await fetchForecast(locationKey)
        await fetchAQI(location.city);
        await fetchIndices(locationKey);
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
        console.log("Error while fetching additional: ", error)
      }
    } 
    const fetchForecast = async (locationKey) => {
      try{
        const responce = await fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}`);
        const json = await responce.json();
        const data = await json.DailyForecasts;
        setForecat(data)
      }catch(error) {
        console.log('Error while fetching Forecast', error)
      }
    }
    const fetchAQI = async (city) => {
      try{
        const responce = await fetch(`https://api.waqi.info/feed/${city}/?token=10fa5c0c0603216085c6ad4d8349cbd6eb0436f8`)
        const json = await responce.json();
        const data = await json.data;
        setAqi(data)
      } catch (error) {
        console.log("error while fetching AQI: ", error)
      }
    }
    const fetchIndices = async (locationKey) => {
      try {
        const responce = await fetch(`https://dataservice.accuweather.com/indices/v1/daily/1day/${locationKey}?apikey=${apiKey}`);
        const json = await responce.json();
        setIndices(json)
      }catch(error) {
        console.log("error while fetching indices: ", error)
      }  
    }
    fetchData();

  }, [])

  return (
    <div>
      <Header />
      {location && weather && <Location city={location.city}  country={location.country} weather={weather.WeatherText}/>}
      
      {additionalData && weather && forecast && <MainBox weather={weather} additional={additionalData} forecast={forecast} />}

      {aqi && <AQI aqi={aqi.aqi} city={location.city}/>}

      {indices && <Indices indices={indices}/>}

      {/* {weather && aqi && indices && <Footer />} */}

    </div>
  );
  
  }  

export default App;