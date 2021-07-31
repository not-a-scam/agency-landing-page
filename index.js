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

