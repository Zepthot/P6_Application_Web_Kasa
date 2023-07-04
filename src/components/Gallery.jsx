import { Link } from 'react-router-dom';
import '../styles/Gallery.scss';

const response = await fetch('./data.json');
let rentalList = await response.json();

function Gallery() {
    return (
    <section className='section-gallery'>
        <ul>
            {rentalList.map((rental) => (
                <li key={rental.id}>
                    <Link to={`/${rental.id}`}>
                        <img src={rental.cover} alt={rental.title} />
                        <h2>{rental.title}</h2>
                    </Link>
                </li>
            ))}
        </ul>
    </section>
    )
}

export default Gallery