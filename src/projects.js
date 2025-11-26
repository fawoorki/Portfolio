import {galleryscript} from './script';

const graphics_data = [
    {id: 1, company: "Zaślepki", imgsPath: '/img/projects/zaslepki/', imgCount: 7},
    {id: 1, company: "Zaślepki", imgsPath: '/img/projects/zaslepki/', imgCount: 7},
    {id: 1, company: "Zaślepki", imgsPath: '/img/projects/zaslepki/', imgCount: 7},
    {id: 1, company: "Zaślepki", imgsPath: '/img/projects/zaslepki/', imgCount: 7},
    {id: 1, company: "Zaślepki", imgsPath: '/img/projects/zaslepki/', imgCount: 7},
    {id: 2, company: "Zaślepki", imgsPath: '/img/projects/zaslepki/', imgCount: 7}
]

function Projects() {
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

export default Projects;