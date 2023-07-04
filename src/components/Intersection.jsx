// import image from '../assets/IMG.png';
import '../styles/Intersection.scss';

function Intersection(props) {
    const image = props.image
    const title = props.title
    return (
    <div className='div-section'>
        <img src={image} alt="Une falaise avec la mer"/>
        {title && <h1>Chez vous, partout et ailleurs</h1>}
    </div>
    )
}

export default Intersection