function setup(){
    //console.log("sketch");
    document.body.style["user-select"] = "none";
    let c = createCanvas(windowWidth, windowHeight);
    c.position(0,0);
    c.style("pointer-events", "none");
}

function draw(){
    //console.log("draw");
    if(mouseIsPressed){
        stroke(0);
        strokeWeight(4);
        //pmouseX is prev x pos of mouse, amking a line to draw on the page
        line(mouseX, mouseY, pmouseX, pmouseY)
    }
}