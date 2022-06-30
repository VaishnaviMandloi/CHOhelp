function openbar(){
    var x = document.getElementById("mynavbar");
    if(x.className==="navbar"){
        x.className="responsive";
    }
    else{
        x.className="navbar";
    }
}

function loginOpen(){
    document.getElementById('loginform').style.display='block';
}

function loginClose(){
    document.getElementById('loginform').style.display='none';
}