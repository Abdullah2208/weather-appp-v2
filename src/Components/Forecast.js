import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useState, useEffect } from 'react';
import '../App.css'

import ForecastComponent from './ForecastComponent';

function Forecast(props) {
    const [isToday, setIsToday] = useState(null);

    const { forecast, isFarenheit } = props;
    let myDate = new Date();
    let myDay = myDate.getDay();
    
    const dayOne = {
        highInF : forecast[1].Temperature.Maximum.Value,
        lowInF : forecast[1].Temperature.Minimum.Value,
        highInC: Math.round((forecast[1].Temperature.Maximum.Value - 32)* 5 / 9),
        lowInC: Math.round((forecast[1].Temperature.Minimum.Value -32)* 5 / 9),
        day: new Date(forecast[1].Date).getDay(),
        month: new Date(forecast[1].Date).getMonth()+ 1,
        weather: forecast[1].Day.IconPhrase
    }
    const dayTwo = {
        highInF: forecast[2].Temperature.Maximum.Value,
        lowInF: forecast[2].Temperature.Minimum.Value,
        highInC: Math.round((forecast[2].Temperature.Maximum.Value - 32)* 5 / 9),
        lowInC: Math.round((forecast[2].Temperature.Minimum.Value -32)* 5 / 9),
        day: new Date(forecast[2].Date).getDay(),
        month: new Date(forecast[2].Date).getMonth()+ 1,
        weather: forecast[2].Day.IconPhrase
    }
    const dayThree = {
        highInF: forecast[3].Temperature.Maximum.Value,
        lowInF: forecast[3].Temperature.Minimum.Value,
        highInC: Math.round((forecast[3].Temperature.Maximum.Value - 32)* 5 / 9),
        lowInC: Math.round((forecast[3].Temperature.Minimum.Value -32)* 5 / 9),
        day: new Date(forecast[3].Date).getDay(),
        month: new Date(forecast[3].Date).getMonth()+ 1,
        weather: forecast[3].Day.IconPhrase
    }
    const dayFour = {
        highInF: forecast[4].Temperature.Maximum.Value,
        lowInF: forecast[4].Temperature.Minimum.Value,
        highInC: Math.round((forecast[4].Temperature.Maximum.Value - 32)* 5 / 9),
        lowInC: Math.round((forecast[4].Temperature.Minimum.Value -32)* 5 / 9),
        day: new Date(forecast[4].Date).getDay(),
        month: new Date(forecast[4].Date).getMonth()+ 1,
        weather: forecast[4].Day.IconPhrase
    }

    useEffect(() => {
        setIsToday(dayOne.day === myDay)

        //eslint-disable-next-line
    }, [dayOne.date, myDate])


    return (
        <div>
            <ForecastComponent forecast={dayOne} isFarenheit={isFarenheit} isToday={isToday}/>
            <ForecastComponent forecast={dayTwo} isFarenheit={isFarenheit}/>
            <ForecastComponent forecast={dayThree} isFarenheit={isFarenheit}/>
            <ForecastComponent forecast={dayFour} isFarenheit={isFarenheit}/>
        </div>
    )
}

export default Forecast;