import '../App.css'
import IndiceComponent from './IndiceComponent';
import Running from './Icons/Running.png'
import Cycling from './Icons/Cycling.png'
import Driving from './Icons/Driving.png'
import Dust from './Icons/Dust.png'

function Indices(props) {
    let {indices} = props;

    let running = indices[2].Category;

    let cycling = indices[5].Category;

    let driving = indices[41].Category;

    let dustAndDander = indices[19].Category;

    return(
        <div className='indices-main-box'>
            <div className='indices-div'>
                <img src={Running} alt='running'/>
                <p>Running</p>
                <IndiceComponent indice={running}/>
            </div>
            <div className='indices-div'>
                <img src={Cycling} alt='cycling'/>
                <p>Cycling</p>
                <IndiceComponent indice={cycling}/>
            </div>
            <div className='indices-div'>
                <img src={Driving} alt='driving'/>
                <p>Driving</p>
                <IndiceComponent indice={driving}/>
            </div>
            <div className='indices-div'>
                <img src={Dust} alt='dust'/>
                <p>Dust</p>
                <IndiceComponent indice={dustAndDander}/>
            </div>
        </div>
    )

}

export default Indices;