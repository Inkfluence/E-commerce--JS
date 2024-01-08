// on top scroll function by clicking the icon to top on footer

// get the button
let toTopButton = document.getElementById("totop");

// when user scroll 20px only show the button
window.onscroll = function(){
    scrollFunction()
};
function scrollFunction(){
    if(document.body.scrollTop>20||  document.documentElement.scrollTop>20){
        toTopButton.style.display = "flex";
    }else{
        toTopButton.style.display ="none";
    }
}

// go to top when users click on the button
function toTopFunction(){
    document.body.scrollTop =0;
    document.documentElement.scrollTop = 0;
}