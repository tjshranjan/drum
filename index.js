var buttons= document.querySelectorAll(".drum");
function doit(butn){
    switch(butn){
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom1=new Audio("sounds/tom-2.mp3");
            tom1.play();
            break;
        case "s":
            var tom1=new Audio("sounds/tom-3.mp3");
            tom1.play();
            break;
        case "d":
            var tom1=new Audio("sounds/tom-4.mp3");
            tom1.play();
            break;
        case "j":
            var tom1=new Audio("sounds/crash.mp3");
            tom1.play();
            break;
        case "k":
            var tom1=new Audio("sounds/kick-bass.mp3");
            tom1.play();
            break;
        case "l":
            var tom1=new Audio("sounds/snare.mp3");
            tom1.play();
            break;
        default : console.log(buttonInnerHtml);
    }
}
for(let x of buttons){
    x.addEventListener('click',function (){
        var buttonInnerHtml=this.innerHTML;
        doit(buttonInnerHtml);
        buttonanimation(buttonInnerHtml);
    });
    document.addEventListener("keypress",function (event){
        doit(event.key);
        buttonanimation(event.key);
    })
}
function buttonanimation(currentkey){
    var activeButton=document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}