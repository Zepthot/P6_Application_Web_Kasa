import '../styles/Afaq.scss';
import Collapsible from './Collapse';

const response = await fetch('./about.json');
let about = await response.json();

function Afaq () {    
    return (
        <div className='drop'>
            {about.map((collapse) => {
                return <Collapsible label={collapse.title} >
                    <p>{collapse.content}</p>
                </Collapsible>
            })}
        </div>
    )
}

export default Afaq