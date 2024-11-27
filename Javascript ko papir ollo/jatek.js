var image = document.getElementById("jatekosvalasztasa");

function ko(){
image.src = "pic/ko.png";
}

function papir(){
    image.src = "pic/papir.png";
    }

    function ollo(){
        image.src = "pic/ollo.png";
        }

function jatek(min,max){
    const lehetoseg = ["ko","papir","ollo"];
    
         
   var x =  Math.floor(Math.random() * (max - min + 1) ) + min;   
   document.getElementById('teszt').innerHTML = lehetoseg[x];

}















