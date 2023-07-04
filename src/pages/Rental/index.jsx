import React, {useEffect, useState} from "react";
import { Navigate, useParams } from "react-router-dom";
import '../../styles/Rental.scss';
import vector from '../../assets/Vector.png';
import stara from '../../assets/star-active.png';
import stari from '../../assets/star-inactive.png';
import Collapsible from "../../components/Collapse";

const response = await fetch('./data.json');
let rentalList = await response.json();

function Index() {
    const { id } = useParams();
    const rental = rentalList.find(rent => rent.id === id);
    const [currentIndex, setCurretIndex] = useState(0);
    const carouselScroll = () => {
        if (currentIndex === rental.pictures.length-1) {
            return setCurretIndex(0);
        }
        return setCurretIndex(currentIndex+1);
    }
    useEffect(() => {
        const interval = setInterval(()=> {carouselScroll()}, 3000)
        return () => clearInterval(interval)})

    const carouselPrevious = () => {
        const index = currentIndex - 1;
        setCurretIndex(index < 0 ? rental.pictures.length-1 : index);
    }

    const carouselNext = () => {
        const index = currentIndex + 1;
        setCurretIndex(index >= rental.pictures.length-1 ? 0 : index);
    }
    const rate = [0, 1, 2, 3, 4];
    if (!rental) {
        return <Navigate to="/error" />;
    }

    return (
        <main className="rental-main">
            <div className="rental-carousel">
                <ul className="rental-carousel-img">
                    {rental.pictures.map((image, index) => {
                        return <li key={rental.pictures.indexOf(image)} style={{transform: `translate(-${currentIndex * 100}%)`}}>
                            <img src={image} alt={`aperçu-${index}`}/>
                        </li>
                    })}
                </ul>
                <button className="left" onClick={carouselPrevious}>
                    <img src={vector} alt="Flèche gauche"/>
                </button>
                <button className="right" onClick={carouselNext}>
                    <img src={vector} alt="Flèche droite"/>
                </button>
            </div>
            <div className="rental-infos">
                <div className="rental-info">
                    <div>
                        <h1>{rental.title}</h1>
                        <h2>{rental.location}</h2>
                        <ul className="rental-tag">
                            {rental.tags.map((tags) => {
                                return <li key={rental.tags.indexOf(tags)} className="rental-tags">{tags}</li>
                            })}
                        </ul>
                    </div>
                    <div className="rental-host-rating">
                        <div className="rental-host">
                            <p className="rental-hostname">{rental.host.name}</p>
                            <img src={rental.host.picture} alt={rental.host.name}/>
                        </div>
                        <ul className="rental-rating">
                            {rate.map((value) => {
                                if (value < rental.rating){
                                    return <li key={value}><img src={stara} alt="star-active"/></li>
                                }
                                return <li key={value+5}><img src={stari} alt="star-inactive"/></li>
                            })}
                        </ul>
                    </div>
                </div>
                <div className="rental-collapse">
                    <Collapsible label='Description' >
                        <p>{rental.description}</p>
                    </Collapsible>
                    <Collapsible label='Équipements' >
                        <ul>
                            {rental.equipments.map((stuff) => {
                                return <li key={rental.equipments.indexOf(stuff)} className="rental-stuff">{stuff}</li>
                            })}
                        </ul>
                    </Collapsible>
                </div>
            </div>
        </main>
    )
}

export default Index