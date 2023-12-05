import '../App.css'
import {useState, useEffect} from 'react'

function IndiceComponent(props) {
    const { indice } = props;
    const [className, setClassName] = useState(null);

    const greenColorArray = ['Good', 'Very Good', 'Excellent', 'Low'];
    const yellowColorArray = ['Fair', 'Moderate', 'Average', 'Neutral']
    const redColorArray = ['Bad', 'High', 'Poor']
    const purpleColorArray = ['Extreme',  'Very High', 'Very Bad', 'Very Poor', 'Extremely Poor', 'Extremely High']

    useEffect(() => {
        if(greenColorArray.includes(indice))
            setClassName('indice-green')
        else if(yellowColorArray.includes(indice))
            setClassName('indice-yellow')
        else if(redColorArray.includes(indice))
            setClassName('indice-red')
        else if(purpleColorArray.includes(indice))
            setClassName('indice-purple')
//eslint-disable-next-line
    }, [indice])


    return (
        <p className={className}>{indice}</p>
    )
}

export default IndiceComponent;