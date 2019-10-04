//show team desc
function toggleDisplay() {
    let targetClass = event.target.className;
    let targetId = document.getElementById(targetClass);

    if(targetId.classList.contains("hidden")) {
        targetId.classList.remove("hidden");
    }    
}

//hide team desc
function hideModal() {
    let modal = document.getElementsByClassName("modal");

   document.getElementById("desc1").classList.add("hidden");
}

function hideModal2() {
    let modal = document.getElementsByClassName("modal");

   document.getElementById("desc2").classList.add("hidden");
}

function hideModal3() {
    let modal = document.getElementsByClassName("modal");

   document.getElementById("desc3").classList.add("hidden");
}

function hideModal4() {
    let modal = document.getElementsByClassName("modal");

   document.getElementById("desc4").classList.add("hidden");
}

function hideModal5() {
    let modal = document.getElementsByClassName("modal");

   document.getElementById("desc5").classList.add("hidden");
}

function hideModal6() {
    let modal = document.getElementsByClassName("modal");

   document.getElementById("desc6").classList.add("hidden");
}

function hideModal7() {
    let modal = document.getElementsByClassName("modal");

   document.getElementById("desc7").classList.add("hidden");
}

function hideModal8() {
    let modal = document.getElementsByClassName("modal");

   document.getElementById("desc8").classList.add("hidden");
}