let container = document.querySelector("#container")
function generateGrid(length){
    container.innerHTML = ""
    for(let w = 1; w <= length; w++){
        container.innerHTML += `<div id='row${w}'>`
        for(let h = 1; h <= length; h++){
            document.querySelector(`#row${w}`).innerHTML += "<div class='cell'></div>"
        }
        container.innerHTML += "</div>"
    }
    const divs = document.getElementsByTagName("div")

    for(div of divs){
        div.style.height = 960/length + "px"
        div.style.width = 960/length + "px"
    }
}

let rainbowMode = false;

document.addEventListener('mouseover', function(e){
    if(e.target.className == "cell"){
        if(rainbowMode){
            e.target.style.backgroundColor = `rgb(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256})`
        }else{
            e.target.style.backgroundColor = document.querySelector("#colorpicker").value
        }  
    }
})

document.querySelector("#rainbowSwitch").addEventListener('click', function(){
    rainbowMode = !rainbowMode
})

document.querySelector("#newBoardButton").addEventListener('click', function(){
    let length;
    do {
        length = prompt("How many squares per side? (Max 100)")
    } while (length > 100)
    
    generateGrid(length)
})

generateGrid(16)