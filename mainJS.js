function showM(){
    document.getElementById('listMneuPH').classList.add('opeNnav');
    document.getElementById('showMneu').classList.add('hidMneu');
    document.getElementById('close').classList.add('showClose');

}
function hidM(){

    document.getElementById('listMneuPH').classList.remove('opeNnav');
    document.getElementById('showMneu').classList.remove('hidMneu');
    document.getElementById('close').classList.remove('showClose');
    
}

function reveal(){
    var reveals = document.querySelectorAll(".reveal");
    reveals.forEach((reveal)=>{

var windowHeight = window.innerHeight;
var elementTop = reveal.getBoundingClientRect().top;
var elementVisible = 100;

if(elementTop < windowHeight - elementVisible ){
    reveal.classList.add("active")
}else{
     reveal.classList.remove("active")
}

    });
}

window.addEventListener("scroll",reveal);


