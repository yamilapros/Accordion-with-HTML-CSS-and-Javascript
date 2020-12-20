const accordionBox = document.getElementsByClassName('content-box');

for(let i=0; i < accordionBox.length;i++){
    accordionBox[i].addEventListener('click', function(){
        this.classList.toggle('active');
    });
}