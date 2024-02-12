let images = document.querySelectorAll('.slide');
let counter = 0;

function next(){
    if(counter == 4){
        counter = -1;
    }
    counter++;
    slidesimage();
}


function prev(){
    if(counter==0){

    }
    else{
        counter--;
    slidesimage();
    }
    
}

let slidesimage = ()=>{
    images.forEach(
        (images)=>{
            images.style.transform = `translateX(-${counter * 100}%)`;
        }
    )
}

function clock(){
let enddate = "20 feb 2024 5:20 PM";
let end = new Date(enddate);
let now = new Date();
let input = document.getElementsByTagName("input");
let final = (end-now)/1000;

input[0].value = Math.floor((final/3600)%24);
input[1].value = Math.floor((final/60)%60);
input[2].value = Math.floor((final)%60);


}

setInterval(() => {
    clock();
}, 1000);