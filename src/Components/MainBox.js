import "../App.css";
import Forecast from "./Forecast";

import { useState, useEffect} from 'react';
import SunnyIcon from './Icons/SunnyIcon.svg'
import NightClear from './Icons/ClearNight.png'
import DayPartiallyCloudy from './Icons/NotFullyCloudy.png'
import NightPartiallyCloudy from './Icons/NightPartiallyCloudy.png'
import Cloudy from './Icons/Clouds.png'
import HazyDay from './Icons/HazyDay.png'
import HazyNight from './Icons/HazyNight.png'
import Hail from './Icons/Hail.png'
import Rain from './Icons/HeavyRain.png'
import Ice from './Icons/Ice.png'
import Sleet from './Icons/Sleet.png'
import Snow from './Icons/Snow.png'
import Storm from './Icons/Storm.png'
import Wind from './Icons/Wind.png'
import NoIcon from './Icons/NoIcon.png'
import HazyClouds from './Icons/HazyClouds.png'
import WindSock from './Icons/WindSock.png'
import HumiditySensor from './Icons/Humidity.png'
import Umbrella from './Icons/Umbrella.png'


function MainBox (props) {

    const degreeSymbol = '\u00B0';

    const {weather, additional, forecast} = props;

    const condition = weather.WeatherText;

    const isDay = weather.IsDayTime;

    const temperatureInC = Math.round(weather.Temperature.Metric.Value);

    const temperatureInF = Math.round(weather.Temperature.Imperial.Value);

    const [url, setUrl] = useState(null);

    const [isFarenheit, setIsFarenheit] = useState(false)

    const decisionInput = condition.toLowerCase();

    const humidity = additional.relative_humidity_2m;

    const precipitation = additional.precipitation;

    const wind = additional.wind_speed_10m;

    const notFullyCloudyIcon = ['partly sunny', 'intermittent clouds', 'partly cloudy', 'partly clear', 'some clouds']
    const cloudyIcon = ['mostly cloudy', 'cloudy', 'many clouds']
    const hazyFogMistIcon = ['haze', 'hazy sunshine', 'hazy moonlight', 'fog', 'mist']
    const rainIcon = ['rain', 'heavy rain', 'light rain', 'moderate rain', 'showers', 'light showers', 'drizzle', 'sprinkles', 'scattered showers', 'moderate rainfall', 'rain showers', 'heavy rainfall', '']
    const snowIcon = ['snow', 'snow storm', 'light snow', 'flurries', 'scattered snow showers', 'light dusting', 'moderate rain','moderate snowfall', 'steady snow', 'continuous snow', 'accumulating snow', 'heavy snowfall', 'snowfall', 'intense snow', 'snow squalls', 'blizzard', 'snowstorm', 'winter storm', 'snow showers', 'severe snowfall', 'whiteout', 'powder snow', 'wet snow']
    const stormIcon = ['thunderstorms', 'thunder and rain', 'rain and thunder', 'storm', 'story weather', 'showers with thunder']
    const windIcon = ['wind', 'windy', 'windy weather']
    const iceIcon = ['ice']
    const hailIcon = ['hail', 'hail storm', 'hailstorm']
    const sleetIcon = ['sleet']
    const sunnyIcon = ['sunny', 'mostly sunny']
    const clearIcon = ['clear', 'mostly clear']
    const hazyCloudsIcon = ['hazy clouds']

useEffect (() => {
    if (sunnyIcon.includes(decisionInput))
    setUrl(SunnyIcon)

else if (notFullyCloudyIcon.includes(decisionInput)) {
    if(isDay)
        setUrl(DayPartiallyCloudy)
    else 
        setUrl(NightPartiallyCloudy)
}

else if (cloudyIcon.includes(decisionInput))
    setUrl(Cloudy)


else if (clearIcon.includes(decisionInput) && !isDay)
    setUrl(NightClear)

else if (hazyFogMistIcon.includes(decisionInput)) {
    if (isDay) 
        setUrl(HazyDay)
    else 
        setUrl(HazyNight)
}

else if (rainIcon.includes(decisionInput))
    setUrl(Rain)

else if (snowIcon.includes(decisionInput))
    setUrl(Snow)

else if (sleetIcon.includes(decisionInput))
    setUrl(Sleet)

else if (hailIcon.includes(decisionInput))
    setUrl(Hail)

else if (windIcon.includes(decisionInput))
    setUrl(Wind)

else if (stormIcon.includes(decisionInput)) 
    setUrl(Storm)

else if (iceIcon.includes(decisionInput)) 
    setUrl(Ice)

else if (hazyCloudsIcon.includes(decisionInput))
    setUrl(HazyClouds)

else 
    setUrl(NoIcon)
//eslint-disable-next-line
}, [condition, isDay])

    
let impericalWind = wind /1.852;
impericalWind = impericalWind.toFixed(1)

    return (
        <main>
            <div className="main-box">
                <div className="icon"><img src={url} alt="Weather Icon" width={'150px'}/></div>
                {isFarenheit ? <div className="temperature"><p>{temperatureInF}{degreeSymbol}F</p></div>:<div className="temperature"><p>{temperatureInC}{degreeSymbol}C</p></div>}
                <div className="additional-info-box">
                    <div className="humidity"><img src={HumiditySensor} alt="A humidity sensor" width={'30px'}/><p>{humidity}%</p></div>
                    <div className="precipitation"><img src={Umbrella} alt="An umbrella" width={'30px'}/><p>{precipitation}%</p></div>
                    <div className="wind"><img src={WindSock} alt="A wind sock"  width={'30px'}/>{isFarenheit? <p>{impericalWind} knots</p>: <p>{wind}km/h</p>}</div>
                </div>
            </div>
            <Forecast forecast={forecast} isFarenheit={isFarenheit}/>
            <div className="degree-buttons"><div role="button" onClick={() => setIsFarenheit(false)}>{degreeSymbol}C </div><div>|</div><div role="button" onClick={() => setIsFarenheit(true)}> {degreeSymbol}F</div></div>
        </main>
    )
}

export default MainBox;