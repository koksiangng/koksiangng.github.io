function scrollToAboutMe(){
    var element = document.getElementById("box");

    element.scrollIntoView();
    element.scrollIntoView(false);
    element.scrollIntoView({block: "end"});
    element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}

function sliderHome(){
    document.getElementById('homecontainer').style.width = "100%";
    
    document.getElementById('aboutmecontainer').style.left = "100%";
    document.getElementById('projectscontainer').style.left = "100%";
    document.getElementById('contactmecontainer').style.left = "100%";
}

function sliderAbout(){
    document.getElementById('homecontainer').style.width = "0";

    document.getElementById('aboutmecontainer').style.width = "100%";
    document.getElementById('aboutmecontainer').style.left = "0";

    document.getElementById('projectscontainer').style.width = "0";
    document.getElementById('projectscontainer').style.left = "100%";
    
    document.getElementById('contactmecontainer').style.width = "0";
    document.getElementById('contactmecontainer').style.left = "100%";
}

function sliderProjects(){
    document.getElementById('homecontainer').style.width = "0";

    document.getElementById('aboutmecontainer').style.width = "0";
    document.getElementById('aboutmecontainer').style.left = "0";

    document.getElementById('projectscontainer').style.width = "100%";
    document.getElementById('projectscontainer').style.left = "0";

    document.getElementById('contactmecontainer').style.width = "0";
    document.getElementById('contactmecontainer').style.left = "100%";
}

function sliderContactMe(){
    document.getElementById('homecontainer').style.width = "0";

    document.getElementById('aboutmecontainer').style.width = "0";
    document.getElementById('aboutmecontainer').style.left = "0";

    document.getElementById('projectscontainer').style.width = "0";
    document.getElementById('projectscontainer').style.left = "0";

    document.getElementById('contactmecontainer').style.width = "100%";
    document.getElementById('contactmecontainer').style.left = "0";
}

