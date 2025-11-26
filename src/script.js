export function galleryscript(path, imgsCount){
    let count = 1;

    const overlay = document.getElementById('overlay');
    const img = document.getElementById('overlay-img');
    const btnNext = document.getElementById('overlay-next');
    const bntPrev = document.getElementById('overlay-prev');

    overlay.style.display = 'flex';
    img.src = path+count.toString()+".jpg";

    if(imgsCount <= 1){
        btnNext.style.display = "none";
        bntPrev.style.display = "none";
    }else{
        btnNext.style.display = "flex";
        bntPrev.style.display = "flex";
    }
    
    document.getElementById('overlay-close').addEventListener('click', ()=>{
        overlay.style.display = 'none';
        img.src = "";
    })
    bntPrev.addEventListener('click', ()=>{
        count--
        if(count<1){
            count = imgsCount;
        }
        img.src = path+count.toString()+".jpg";
    })
    btnNext.addEventListener('click', ()=>{
        count++
        if(count>imgsCount){
            count = 1;
        }
        img.src = path+count.toString()+".jpg";
    })
}