import '../App.css'
import { Typewriter } from 'react-simple-typewriter'

function Location(props) {
    const {city, country, weather} = props;
    return (
        <div className='location'>
            <span className='location-gray'>
                Right now in 
            </span>
            <span className='location-black'>
                <Typewriter 
                    words={[` ${city}, ${country}`]}
                    loop={99}
                    cursor
                    cursorStyle="|"
                    delaySpeed={3000}
                />
            </span>
            <span className='location-gray'>
                ,its {weather}
            </span>
        </div>
    )
}

export default Location;