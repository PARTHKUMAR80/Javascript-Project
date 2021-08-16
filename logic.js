const lightbox=document.createElement('div');
lightbox.id='lightbox';
document.body.appendChild(lightbox);
const images=document.querySelectorAll('img');
images.forEach(image => {
    image.addEventListener('click',e => {
        lightbox.classList.add('active-lightbox');
        const img=document.createElement('img');
        img.src=image.src;
        while (lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);
    })
})

lightbox.addEventListener('click',e => {
    if (e.target!==e.currentTarget){
        return;
    }
    lightbox.classList.remove('active-lightbox');
})

let btn=document.getElementById('button');
let text=document.getElementById('h1');
let generator=function(){
    newColor='#'+(Math.random()*0xFFFFFF<<0).toString(16);
    console.log(newColor);
    if (newColor.length<7){
        generator();
    }
    return newColor;
}

let generator1=function(){
    newColor='#'+(Math.random()*0xFFFFFF<<0).toString(16);
    console.log(newColor);
    if (newColor.length<7){
        generator1();
    }
    return newColor;
}

btn.addEventListener('click',function(){
    let n1=generator();
    let n2=generator1();
    document.body.style.background=n1;
    btn.style.color=n1;
    btn.style.background=n2;
    text.innerText=n1;
})