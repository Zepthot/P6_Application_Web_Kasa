import React from 'react';
import '../../styles/Main.scss';
import Intersection from "../../components/Intersection.jsx";
import Gallery from '../../components/Gallery.jsx';
import image from '../../assets/IMG.png';

function Main() {
    return (
    <main>
        <Intersection image={image} title={true} />
        <Gallery />
    </main>
    )
}

export default Main