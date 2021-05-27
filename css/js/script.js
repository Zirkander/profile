function removeTodd(element){
    // var temp = element.dataset;
    // console.dir(temp);
    var requests = document.getElementById("todd");
    requests.remove();
    // console.dir(document.getElementById(element))
}
function removePhil(element){
    // var temp = element.dataset;
    // console.dir(temp);
    var requests = document.getElementById("phil");
    requests.remove();
    // console.dir(document.getElementById(element))
}

function changeName(){
    // console.dir(document.querySelector("#name"));
    document.querySelector("#name").innerText = "John Doe";
}