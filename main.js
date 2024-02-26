function draw(){
    image(video,0,0,640,480)
    fill(0,0,0)
    stroke(0,0,0)
    circle(50,50,80)
    circle(50,430,80)
    circle(590,430,80)
    circle(590,50,80)
    stroke(0,128,128)
    fill(0,128,128)
    rect(90,40,460,20)
    rect(40,90,20,300)
    rect(90,420,460,20)
    rect(580,90,20,300)
}
function preload(){
}
function setup(){
    canvas = createCanvas(640,480);
    canvas.position(150,150)
    video=createCapture(VIDEO)
    video.hide()
    tint_color=""
}
function take_snapshot(){
    save('Anthony.png')
}
function filter_tint(){
    tint_color=document.getElementById("color_name").value
}