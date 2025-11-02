export function galleryscript(path, imgsCount){
    let count = 1;

    const overlay = document.getElementById('overlay');
    const img = document.getElementById('overlay-img');
    overlay.style.display = 'flex';
    img.src = path+count.toString()+".jpg";
    
    document.getElementById('overlay-close').addEventListener('click', ()=>{
        overlay.style.display = 'none';
    })
    document.getElementById('overlay-prev').addEventListener('click', ()=>{
        count--
        if(count<1){
            count = imgsCount;
        }
        img.src = path+count.toString()+".jpg";
    })
    document.getElementById('overlay-next').addEventListener('click', ()=>{
        count++
        if(count>imgsCount){
            count = 1;
        }
        img.src = path+count.toString()+".jpg";
    })
}