export function galleryscript(){
    const graphics = document.querySelectorAll('.graphics');
    const overlay = document.querySelector('.overlay');

    graphics.forEach((graphic, index)=>{
        graphic.addEventListener('click', ()=>{
            overlay.style.display = 'flex'; 
        })
    })
}