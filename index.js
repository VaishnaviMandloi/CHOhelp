function openbar(){
    var x = document.getElementById("navbar");
    if(x.className==="navbar"){
        x.className+="reponsive";
    }
    else{
        x.className="navbar";
    }
}