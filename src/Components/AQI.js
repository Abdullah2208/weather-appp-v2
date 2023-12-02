import { useEffect, useState } from "react";
import '../App.css'

import Good from './Icons/Good.svg'
import Moderate from './Icons/Moderate.svg'
import UnhealthyForSensitiveGroups from './Icons/UnhealthyForSensitiveGroups.svg'
import Unhealthy from './Icons/Unhealthy.svg'
import VeryUnhealthy from './Icons/VeryUnhealthy.svg'
import Hazardous from './Icons/Hazardous.svg'
import NoIcon from './Icons/NoIcon.png'
 

function AQI (props) {
    let {aqi, city} = props;
    city = city.toUpperCase();

    const [condition, setCondition] = useState(null);
    const [icon, setIcon] = useState(null);
    const [colors, setColors] = useState(null);

    const goodColors = {
        bannerColor: '#9cd84e',
        fontColor: '#607631'
    }
    const moderateColors = {
        bannerColor: '#facf39',
        fontColor: '#8c6c1d'
    }
    const unhealthyForSensitiveGroupsColors = {
        bannerColor: '#f99049',
        fontColor: '#974a20'
    }
    const unhealthyColors = {
        bannerColor: '#f65e5f',
        fontColor: '#942431'
    }
    const veryUnhealthyColors = {
        bannerColor: '#a070b6',
        fontColor: '#543b63'
    }
    const hazardousColors = {
        bannerColor: '#a06a7b',
        fontColor: '#573344'
    }

    useEffect(() => {
        if(aqi <= 50)
            setCondition('Good')
        else if(aqi >= 51 && aqi <= 100)
            setCondition('Moderate')
        else if(aqi >= 101 && aqi <= 150) 
            setCondition('Unhealthy for sensitive groups')
        else if(aqi >= 151 && aqi <= 200)
            setCondition('Unhealthy')
        else if(aqi >= 201 && aqi <= 300)
            setCondition('Very Unhealthy')
        else if (aqi >= 301) 
            setCondition('Hazardous')
        else 
            setCondition('IDK')

        switch(condition) {
            case 'Good':
                setIcon(Good)
                setColors(goodColors)
                break;
            case 'Moderate':
                setIcon(Moderate)
                setColors(moderateColors)
                break;
            case 'Unhealthy for sensitive groups':
                setIcon(UnhealthyForSensitiveGroups)
                setColors(unhealthyForSensitiveGroupsColors)
                break;
            case 'Unhealthy':
                setIcon(Unhealthy)
                setColors(unhealthyColors)
                break;
            case 'Very Unhealthy':
                setIcon(VeryUnhealthy)
                setColors(veryUnhealthyColors)
                break;
            case 'Hazardous':
                setIcon(Hazardous)
                setColors(hazardousColors)
                break;
            default:
                setIcon(NoIcon)
        }
    //eslint-disable-next-line
    }, [aqi, condition])


    return (
        <div>
            {colors && 
                <div className="aqi-box" style={{backgroundColor: colors.bannerColor}}>
                    <div className="aqi-value">
                        <p>US AQI</p>
                        <p>{aqi}</p>
                    </div>
                    <div className="aqi-condition" style={{color: colors.fontColor}}>
                        <p>LIVE AQI INDEX IN {city}</p>
                        <p>{condition}</p>
                    </div>
                    <div className="aqi-icon">
                        <img src={icon} alt='AQI Icon'/>
                    </div>
                </div>
            }
        </div>
    )

}

export default AQI;