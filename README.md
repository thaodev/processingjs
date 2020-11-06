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