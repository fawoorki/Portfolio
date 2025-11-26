import {galleryscript} from './script';

const graphics_data = [
    {id: 1, company: "A-Service", imgsPath: '/img/graphics/aService/', imgCount: 3},
    {id: 2, company: "Car Renting", imgsPath: '/img/graphics/car-renting/', imgCount: 2},
    {id: 3, company: "Language School", imgsPath: '/img/graphics/language-school/', imgCount: 2}
]

function Graphics() {
    return(
        <main>
            {graphics_data.map((gd) => (
                <section className='graphics' key={gd.id} onClick={() => {galleryscript(gd.imgsPath, gd.imgCount)}}>
                    <img src={gd.imgsPath+"/1.jpg"} alt={gd.company}></img>  
                </section>
            ))}
            <section id='overlay'>
                <span id='overlay-prev'></span>
                <img id='overlay-img' alt='overlay_image'></img>
                <span id='overlay-next'></span>
                <span id='overlay-close'></span>
            </section>
        </main>
    )
}

export default Graphics;