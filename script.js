const text= document.querySelector('.sec_text');

            const textload=() =>{

                setTimeout(()=>{
                    text.textContent='MERNSTACK Developer.'
                },0);
                setTimeout(()=>{
                    text.textContent='Python Developer.'
                },5000);
                setTimeout(()=>{
                    text.textContent='Django Developer.'
                },10000);
                setTimeout(()=>{
                    text.textContent='Web Designer.'
                },15000);

            }

            textload();
            setInterval(textload,20000);


var aboutlinks=document.getElementsByClassName('about_btns')
var aboutcontent=document.getElementsByClassName('about_contents')

function opentab(tabname){
    for(aboutlinks of aboutlinks){
        aboutlinks.classList.remove("active_btn");
    }
    for(aboutcontent of aboutcontent){
        aboutcontent.classList.remove("active_tab");
    }
    event.currentTarget.classList.add("active_btn")
    document.getElementById(tabname).classList.add("active_tab");
}


// ripple button js

const button = document.querySelector(".ripple-btn");

button.addEventListener("click", drawRipple);

function drawRipple(event) {
  const x = event.clientX - event.target.offsetLeft;
  const y = event.clientY - event.target.offsetTop;

  const ripples = document.createElement("div");
  ripples.classList.add('ripple_effect');

  const container = document.getElementsByClassName('download_btn');
  container.appendChild(ripples);

  ripples.style.left = x + "px";
  ripples.style.top = y + "px";

  this.appendChild(ripples);

  setTimeout(() => {
    ripples.remove();
  }, 1000);
}

