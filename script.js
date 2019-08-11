function togglesidebar(){
    var w = document.getElementById("sidebarid");
    var m = document.getElementById("mainpageid")
    if(w.style.width == 0 || w.style.width == "0px"){
        w.style.width = "25vw";
        m.style.marginLeft = "25vw";
    } else {
        w.style.width = "0px";
        m.style.marginLeft = "0px";
    }
}