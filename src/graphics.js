import {useEffect} from 'react';
import {galleryscript} from './script';
import aservice1 from './aservice1.jpg';

const graphics_data = [
    {id: 1, company: "A-Service", img: aservice1},
    {id: 2, company: "A-Service", img: aservice1},
    {id: 3, company: "A-Service", img: aservice1},
    {id: 4, company: "A-Service", img: aservice1},
    {id: 5, company: "A-Service", img: aservice1},
    {id: 6, company: "A-Service", img: aservice1}
]

function Graphics() {
    useEffect(()=>{
        galleryscript();
    }, [])
    return(
        <main>
            {graphics_data.map((gd) => (
                <section className='graphics' key={gd.id} style={{backgroundImage: `url(${gd.img})`}}>
                    <section className='graphicsText'>
                        <p>{gd.company}</p>
                    </section>
                </section>
            ))}
            <section className='overlay'>
                <img id='view-image'></img>
            </section>
        </main>
    )
}

export default Graphics;