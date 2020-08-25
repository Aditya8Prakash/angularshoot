var x=0,y=0;
var tank =[];
var l = 150;
var g = 1;
function setup() {
    canvas = createCanvas(displayWidth,600);
    s1 = createSlider(-2,PI*5,0);
}
function draw() {
    background(141, 217, 227);
    textSize(55);
    text("Press Space To Shoot",100,70);
    if (keyCode === 32) {
        push();
            l=l+20;
            tank.push(createMesille(l,462.5,65,12,-(s1.value())/20,50));
        pop();
        g = 2;
    }
    textSize(35);
    if (l>400) {
        text("Please Wait ... Reloading Tank",100,130);
    }
    if (l>displayWidth+300) {
        location.reload();
    }
    push();
        push();
            noStroke();
            rectMode(CENTER);
            fill(156, 96, 44);
            rect(displayWidth/2,600,displayWidth,100);
        pop();
        scale(1.5);
        translate(100,300);
        s1.position(x+80,y+150+300+150/5)
        fill(135, 135, 135);
        push();
            noStroke();
            rotate(-(s1.value())/20);
            rect(x+20,y,100,15,5);
        pop();
        noStroke();
        ellipse(x,y+10,70);
        fill(112, 122, 140);
        ellipse(x-50,y+50,35);
        ellipse(x-0,y+50,35);
        ellipse(x+50,y+50,35);
        fill(200);
        rect(x-150/2,y,150,50,20);
    pop();
}

function createMesille(x,y,w,h,angle,border_radious) {
    push();
    noStroke();
    fill(255,0,0);
        rectMode(CENTER);
        rotate(angle);
        rect(x,y,w,h,border_radious);
    pop();

}