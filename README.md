# processingjs
/* Lab1: What is for dinner*/
var x = 100;
var y = 100;

background(186, 145, 20); // wooden table
fill(230, 216, 216);//dish color
ellipse(200, 200, 350, 350); // plate
ellipse(200, 200, 300, 300); 

//Green beans
fill(32, 224, 121);
ellipse(x,y,10,10);
ellipse(x+11,y+10,10,10);
ellipse(x+11, y, 10, 10);
ellipse(x, y+15,10,10);
ellipse(x+20,y,10,10);
ellipse(x+30, y+10,10,10);
ellipse(x+50,y,10,10);
ellipse(x, y+30,10,10);
ellipse(x+45,y+20,10,10);
ellipse(x+50,y+40,10,10);
ellipse(x+40,y+50,10,10);
ellipse(x+40,y+30,10,10);
ellipse(x+30,y+30,10,10);
ellipse(x+20,y+50,10,10);
ellipse(x+17,y+30,10,10);

//Egg white
noStroke();
fill (241, 250, 240);
arc(250,200,100,150,150,300);
ellipse(270,180,100,100);
//Egg yolk
fill(227, 193, 43);
ellipse(270,180,60,50);

//tomato slide
fill(255, 0, 0);
ellipse(x,y+120,65,65);//first slide
ellipse(x+50,y+170,65,65);

//tomato inside
fill(168, 165, 134);
//inside of the tomato on the left
triangle(x+5,y+100,x+25,y+110,x+1,y+120);//top right
triangle(x+20,y+130,x-5,y+140,x+1,y+120);//bottom right
triangle(x-12,y+105,x-15,y+130,x+1,y+120);//left middle

//inside of the tomato on the right
triangle(x+55,y+150,x+75,y+160,x+51,y+170);
triangle(x+70,y+180,x+45,y+190,x+51,y+170);
triangle(x+38,y+155,x+35,y+180,x+51,y+170);

/*Lab2: Shooting Star*/
var xPos = 50;
var yPos = 50;
var xPos1 = 300;
var yPos1 = 50;

draw = function() {
    background(29, 40, 115);
    //1st building
    fill(153,144,144);
    rect(0,150,90,250);
    fill(255, 238, 0);//window color
    rect(30,180,30,30);//1st window
    rect(30,240,30,30);//2nd window
    rect(30,300,30,30);//3rd window
    rect(30,350,30,50);
    
    //2nd buidling
    fill(153, 144, 12);
    triangle(100,100,140,70,180,100);//roof
    fill(24, 166, 201);
    rect(100, 100, 80, 300);
    fill(255, 238, 0);//window color
    rect(130,150,20,40);//1st window
    rect(130,210,20,40);//2nd window
    rect(130,270,20,40);//3rd window
    rect(130,350,30,50);///main door
    
    
    fill(255, 242, 0);
    //shooting star 1
    ellipse(xPos, yPos, 10, 10);
    xPos += 5;
    yPos += 5;
    //shooting star 2
    ellipse(xPos1, yPos1, 15,15);
    xPos1 += -5;
    yPos1 += 5;
    
    
};

/*Lab3 Draw an animal*/
var bodyX = 200;
var bodyY = 220;
var bodyW = 180;
var faceW = bodyW/2;

draw = function() {
    background(207, 254, 255);
    //peak
    fill(230, 212, 14);
    rect(bodyX+20,bodyY-70,faceW/3,faceW/10);
    //tale
    ellipse(bodyX - 70, bodyY+20, faceW/1.5,faceW/3);
    
    fill(237, 223, 151);
    ellipse(bodyX, bodyY, bodyW, 106); // body?
    ellipse(bodyX, bodyY-70, faceW, 47); // face?
    
    //eyes
    fill(46, 15, 15);
    ellipse(bodyX+5, bodyY-75,faceW/6, faceW/10);
    
    //wing
    fill(237, 223, 151);
    arc(bodyX-10,bodyY, faceW,faceW/2,1,130);
    
    //front leg
    line(bodyX-5, bodyY+52, bodyX-5, bodyY+70);
    line(bodyX-5, bodyY+70, bodyX-17, bodyY+80);
    line(bodyX-5, bodyY+70, bodyX-5, bodyY+80);
    line(bodyX-5, bodyY+70, bodyX+5, bodyY+80);
    fill(230, 212, 14);
    arc(bodyX-5, bodyY+73, faceW/2, faceW/6,faceW*5/6,faceW*13/6);
    
    //back leg
    line(bodyX, bodyY+52, bodyX, bodyY+70);
    line(bodyX, bodyY+70, bodyX-12, bodyY+80);
    line(bodyX, bodyY+70, bodyX, bodyY+80);
    line(bodyX, bodyY+70, bodyX+10, bodyY+80);
    fill(230, 212, 14);
    arc(bodyX, bodyY+78, faceW/2, faceW/6,faceW,faceW);
    
    //water
    fill(0, 0, 255);
    rect(0, bodyY+40,400,200);
    
    bodyX += 2;
    
};

/*Lab4: Ad design*/

var X = 50;
var Y = X*4;

draw = function() {
background(218, 219, 199);
fill(11, 120, 44);
textSize(30);
text("NATUAL NUTS MILK",10, 30);

fill(107, 103, 33);
textSize(25);
text("No preservatives", 15, 60);
text("No added sugars", 15, 90);

fill(150, 161, 127);
textSize(20);
text("(drinkable at any ages greater than 3 yo)", 15, 120);

//1st cup
fill(255,255,255);
line(X,Y,X+2,Y+70);
line(X+2,Y+70,X+40,Y+70);
line(X+40,Y+70,X+42,Y);
ellipse((X+(X+42))/2, Y,42,10);

//plus size
fill(227, 157, 157);
rect(X+70,Y+30,5,20);//vertial
rect(2*X+12,Y+36,20,5);//horizontal

var drawNuts = function(nutX, nutY) {
//nuts
fill(166, 148, 43);
ellipse(nutX,nutY,10,7);
};
drawNuts(X*3+10,Y+50);
drawNuts(X*3+25,Y+50);
drawNuts(X*3,Y+30);
drawNuts(X*3+15, Y+40);
drawNuts(X*3+25, Y+30);

//equal sign
fill(40, 31, 219);
rect(X*3+45, Y+30, 20, 5);
rect(X*3+45, Y+40, 20, 5);

//2nd cup
fill(X*4+30, Y+37, 194);
line(X*5,Y,X*5+2,Y+70);
line(X*5+2,Y+70,X*5+40,Y+70);
line(X*5+40,Y+70,X*5+42,Y);
ellipse(X*5+21, Y,42,10);

X += -1 ;
     
};
