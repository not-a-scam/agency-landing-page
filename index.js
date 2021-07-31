function dropMenu(){
    const navLinks = document.getElementsByClassName("nav-links")[0];
    console.log(navLinks.style.display);
    if(navLinks.style.display === ""){
        navLinks.style.display = "block";
    } else {
        navLinks.style.display = "";
    }
    
    return false;
}

const learnMoreLinks = document.getElementsByClassName("learn-more");
for(let i = 0; i < learnMoreLinks.length; i++){
    let link = learnMoreLinks[i].firstChild;
    if(link.classList.contains("yellow")){
        learnMoreLinks[i].addEventListener("mouseover" ,() => {
            link.style.backgroundColor = "hsl(51, 100%, 49%)";
        });
        learnMoreLinks[i].addEventListener("mouseout" ,() => {
            link.style.backgroundColor = "hsla(51, 100%, 49%, 0.288)";
        });
    } else if(link.classList.contains("red")){
        learnMoreLinks[i].addEventListener("mouseover" ,() => {
            link.style.backgroundColor = "hsl(7, 99%, 70%)";
        });
        learnMoreLinks[i].addEventListener("mouseout" ,() => {
            link.style.backgroundColor = "hsla(7, 99%, 70%, 0.212)";
        });
    }

}
