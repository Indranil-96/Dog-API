alert(" Please Press the fetch button to get the image of Dog");

let button=document.getElementById('btn');
button.addEventListener('click',fetchDetailse);

function fetchDetailse(){
    let xhrRequest=new XMLHttpRequest();

    xhrRequest.onload=function(){
        console.log(xhrRequest.response);
        let responseJon=JSON.parse(xhrRequest.response);
        let urls=responseJon.message;

        let placeholder=document.getElementById('galary');
        const img= new Image();
        img.src=urls;
        placeholder.appendChild(img);
    }

    xhrRequest.open('get','https://dog.ceo/api/breed/affenpinscher/images/random',true);
    xhrRequest.send();
}