


textshecvla = () => {
    document.getElementById("text").innerHTML = " I am clicked! ";
    document.getElementById("text").style.color = "red";
}
changebackground = () => {
    document.getElementById("text").style.backgroundColor = "green";
}
removebackground = () => {
    document.getElementById("text").style.backgroundColor = "white";
}

document.getElementById("text").addEventListener("click", textshecvla);

document.getElementById("text").addEventListener("mouseenter", changebackground);

document.getElementById("text").addEventListener("mouseleave", removebackground);