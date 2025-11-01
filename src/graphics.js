import {useEffect} from 'react';
import {galleryscript, mainImage} from './script';

const graphics_data = [
    {id: 1, company: "A-Service", imgsPath: '/img/graphics/aService/'},
    {id: 2, company: "Car Renting", imgsPath: '/img/graphics/car-renting/'}
]

function Graphics() {
    useEffect(()=>{
        galleryscript();
    }, [])
    return(
        <main>
            {graphics_data.map((gd) => (
                <section className='graphics' key={gd.id} style={{backgroundImage: `url(${gd.imgsPath}/1.jpg)`}}>
                    <section className='graphicsText'>
                        <p>{gd.company}</p>
                    </section>
                </section>
            ))}
            <section className='overlay'>
                <section id='overlay-close'></section>
                <img id='view-image'></img>
            </section>
        </main>
    )
}

export default Graphics;