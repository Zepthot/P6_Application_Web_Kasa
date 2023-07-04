import Intersection from "../../components/Intersection.jsx";
import Afaq from '../../components/Afaq.jsx';

import image from '../../assets/about-img.png';

function About() {
    return (
        <main>
            <Intersection image={image} title={false} />
            <Afaq />
        </main>
    )
}

export default About