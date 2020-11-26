function toggler() {

    let myNav = document.getElementById("sideNav");

    if (myNav.style.right === "0px") {
        myNav.style.right = "-500px";
    } else {
        myNav.style.right = "0px";
    }
}