"use strict"

function colorChanger(){


    const colors="0123456789abcdef"

    let color="#"

    for (let index = 0; index < 6; index++) {
        
        let index= Math.round(Math.random()*15);

        color+=colors[index];


        
    }

    return color;




}


setInterval(
function my(){
    document.body.style.backgroundColor=colorChanger()
},1000


)



const userinput= document.querySelector('.userinput');
const tagbox = document.querySelector(".tagbox");

let elements= document.getElementsByClassName('tagbox')[0].children;

userinput.onkeydown= function(e){
    // console.log(e.keyCode)

    // console.log(elements)

    if (e.keyCode==13){

        let val= userinput.value.trim();

        if (val===""){
            return;
        }
    //   [...elements].forEach(x=>console.log(x.firstElementChild.innerText))

    const haselement=[...elements].find(x=>x.firstChild.innerText===val);
    // console.log(haselement)
    if (haselement!==undefined){
        userinput.value=""
        return;
    }
      
      

      

        

        const tag= document.createElement('div');
        tag.classList.add('tag');
        const span=document.createElement('span')

        tag.appendChild(span)

        span.innerText=val;
        
        const i= document.createElement('i');
        i.innerText="x";
        i.onclick= function(){
            this.parentElement.remove();
        }

        tag.appendChild(i)
        tagbox.appendChild(tag);
        userinput.value='';










    }



}