import '../App.css';
import { useState, useEffect } from 'react';

import SunnyIcon from './Icons/SunnyIcon.svg'
import DayPartiallyCloudy from './Icons/NotFullyCloudy.png'
import Cloudy from './Icons/Clouds.png'
import HazyDay from './Icons/HazyDay.png'
import Hail from './Icons/Hail.png'
import Rain from './Icons/HeavyRain.png'
import Ice from './Icons/Ice.png'
import Sleet from './Icons/Sleet.png'
import Snow from './Icons/Snow.png'
import Storm from './Icons/Storm.png'
import Wind from './Icons/Wind.png'
import NoIcon from './Icons/NoIcon.png'
import HazyClouds from './Icons/HazyClouds.png'

function ForecastComponent (props) {
    let { forecast, isFarenheit, isToday } = props;
    console.log(isToday)
    let decisionInputForWeather = forecast.weather;
    decisionInputForWeather = decisionInputForWeather.toLowerCase();
    const [icon, setIcon] = useState(null);
    const [day, setDay] = useState(null)

    const notFullyCloudyIcon = ['partly sunny', 'intermittent clouds', 'partly cloudy', 'partly clear', 'some clouds']
    const cloudyIcon = ['mostly cloudy', 'cloudy', 'many clouds']
    const hazyFogMistIcon = ['haze', 'hazy sunshine', 'hazy moonlight', 'fog', 'mist']
    const rainIcon = ['rain', 'heavy rain', 'light rain', 'moderate rain', 'showers', 'light showers', 'drizzle', 'sprinkles', 'scattered showers', 'moderate rainfall', 'rain showers', 'heavy rainfall', '']
    const snowIcon = ['snow', 'snow storm', 'light snow', 'flurries', 'scattered snow showers', 'light dusting', 'moderate rain','moderate snowfall', 'steady snow', 'continuous snow', 'accumulating snow', 'heavy snowfall', 'snowfall', 'intense snow', 'snow squalls', 'blizzard', 'snowstorm', 'winter storm', 'snow showers', 'severe snowfall', 'whiteout', 'powder snow', 'wet snow', 'rain and snow']
    const stormIcon = ['thunderstorms', 'thunder and rain', 'rain and thunder', 'storm', 'story weather', 'showers with thunder']
    const windIcon = ['wind', 'windy', 'windy weather']
    const iceIcon = ['ice']
    const hailIcon = ['hail', 'hail storm', 'hailstorm']
    const sleetIcon = ['sleet']
    const sunnyIcon = ['sunny', 'mostly sunny']
    const hazyCloudsIcon = ['hazy clouds']

    useEffect(() => {
        if (notFullyCloudyIcon.includes(decisionInputForWeather)) 
            setIcon(DayPartiallyCloudy)
        else if(cloudyIcon.includes(decisionInputForWeather))
            setIcon(Cloudy)
        else if(hazyFogMistIcon.includes(decisionInputForWeather))
            setIcon(HazyDay)
        else if(rainIcon.includes(decisionInputForWeather))
            setIcon(Rain)
        else if(snowIcon.includes(decisionInputForWeather))
            setIcon(Snow)
        else if(stormIcon.includes(decisionInputForWeather))
            setIcon(Storm)
        else if(windIcon.includes(decisionInputForWeather))
            setIcon(Wind)
        else if(iceIcon.includes(decisionInputForWeather))
            setIcon(Ice)
        else if(hailIcon.includes(decisionInputForWeather))
            setIcon(Hail)
        else if(sleetIcon.includes(decisionInputForWeather))
            setIcon(Sleet)
        else if(sunnyIcon.includes(decisionInputForWeather))
            setIcon(SunnyIcon)
        else if(hazyCloudsIcon.includes(decisionInputForWeather))
            setIcon(HazyClouds)
        else
            setIcon(NoIcon)


        if (forecast.day === 0) {
            setDay('SUN');
        } else if (forecast.day === 1) {
            setDay('MON');
        } else if (forecast.day === 2) {
            setDay('TUE');
        } else if (forecast.day === 3) {
            setDay('WED');
        } else if (forecast.day === 4) {
            setDay('THURS');
        } else if (forecast.day === 5) {
            setDay('FRI');
        } else if (forecast.day === 6) {
            setDay('SAT');
        } else {
            setDay('Invalid');
        }
            
        

        if(isToday) {
            setDay('TODAY')
        }
        //eslint-disable-next-line
    }, [decisionInputForWeather, isToday])

    return(

        <div>
            <img src={icon} alt=''/>
        {isFarenheit? <p>{forecast.highInF}/{forecast.lowInF}</p>:<p>{forecast.highInC}/{forecast.lowInC}</p>}
        <p>{day}</p>
        </div>
    )
}

export default ForecastComponent;