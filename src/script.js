export function galleryscript(){
    const graphics = document.querySelectorAll('.graphics');
    const overlay = document.querySelector('.overlay');
    const overlayClose = document.querySelector('#overlay-close');

    graphics.forEach((graphic, index)=>{
        graphic.addEventListener('click', ()=>{
            overlay.style.display = 'flex'; 
        })
    })
    overlayClose.addEventListener('click', ()=>{
        overlay.style.display = 'none';
    });
}