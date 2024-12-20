
let i = document.querySelector("#i")
function r () {
    b = Math.floor(Math.random()*3)
    console.log(b)
    if (b == 0)
        i.innerHTML = "tie"
    else if (b == 1)
        i.innerHTML = "loss"
    else if (b == 2)
        i.innerHTML = "win"
}
function p () {
    b = Math.floor(Math.random()*3)
    if (b == 0)
        i.innerHTML = "win"
    else if (b == 1)
        i.innerHTML = "tie"
    else if (b == 2)
        i.innerHTML = "loss"
}
function s () {
    b = Math.floor(Math.random()*3)
    if (b == 0)
        i.innerHTML = "loss"
    else if (b == 1)
        i.innerHTML = "win"
    else if (b == 2)
        i.innerHTML = "tie"
}


