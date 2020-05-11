function scrollToAboutMe(){
    var element = document.getElementById("box");

    element.scrollIntoView();
    element.scrollIntoView(false);
    element.scrollIntoView({block: "end"});
    element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}

function sliderHome(){
    document.getElementById('homecontainer').style.width = "100%";
    document.getElementById('maincontainer').style.left = "100%";
    document.getElementById('portfoliocontainer').style.left = "100%";
}

function sliderAbout(){
    document.getElementById('homecontainer').style.width = "0";

    document.getElementById('maincontainer').style.width = "100%";
    document.getElementById('maincontainer').style.left = "0";

    document.getElementById('portfoliocontainer').style.left = "100%";
    
}

function sliderPortfolio(){
    document.getElementById('homecontainer').style.width = "0";

    document.getElementById('maincontainer').style.width = "0";
    document.getElementById('maincontainer').style.left = "0";

    document.getElementById('portfoliocontainer').style.left = "0";
}