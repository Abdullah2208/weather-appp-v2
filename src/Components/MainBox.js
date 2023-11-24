import "../App.css";
import { useState, useEffect} from 'react';
import SunnyIcon from './Icons/SunnyIcon.svg'
import NightClear from './Icons/ClearNight.png'
import DayPartiallyCloudy from './Icons/NotFullyCloudy.png'
import NightPartiallyCloudy from './Icons/NightPartiallyCloudy.png'
import Cloudy from './Icons/Clouds.png'


function MainBox (props) {

    const {weather} = props;
    const condition = weather.WeatherText;
    const isDay = weather.IsDayTime;
    const [url, setUrl] = useState(null);

    const decisionInput = condition.toLowerCase();

    const NotFullyCloudyIcon = ['partly sunny', 'intermittent clouds', 'partly cloudy',]
    const CloudyIcon = ['mostly cloudy', 'cloudy', 'mostly sunny']

useEffect (() => {
    if (decisionInput === 'sunny')
        setUrl(SunnyIcon)

    else if (NotFullyCloudyIcon.includes(decisionInput) && isDay)
        setUrl(DayPartiallyCloudy)

    else if (NotFullyCloudyIcon.includes(decisionInput) && !isDay) 
        setUrl(NightPartiallyCloudy)

    else if (CloudyIcon.includes(decisionInput))
        setUrl(Cloudy)

    else if (decisionInput === 'Clear' && !isDay)
        setUrl(NightClear)

}, [condition, isDay])

    

    return (
        <div>
            <img src={url} alt="Weather Icon" width={'150px'}/>
        </div>
    )
}

export default MainBox;