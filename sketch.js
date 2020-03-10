let brush = "black"
let brushsize = 20


function setup() {

    // create a 640x480 pixel canvas and attach it to your HTML
    createCanvas(640, 485).parent('p5')

print("this is the setup")

  background(200,200,200)

}

function draw() {







  if (mouseIsPressed) {



    if (brush == "pink") {
      stroke( random(240, 175), 145, 240)
      strokeWeight(brushsize)
      line(mouseX, mouseY, pmouseX, pmouseY)//tail
    }


    if (brush == "white") {
      stroke(0)
      strokeWeight(1)
      fill(255)
      circle(mouseX, mouseY, brushsize)
      stroke(0)
      strokeWeight(1)
      fill(0)
      circle(mouseX, mouseY, brushsize-15)



    }


    if (brush == "greyblack") {
      stroke(0, 0, 0, 50)
      strokeWeight(1)
      line(mouseX, mouseY, mouseX + random(-10, 10), mouseY + random(-10, 10))//hair
    }


    if (brush == "eyering") {
      noFill()
      strokeWeight(2)
      stroke(196, 122, 167)
      circle(mouseX, mouseY, brushsize)
    }


    if (brush == "blackpen") {
      stroke(0)
      strokeWeight(brushsize)
      line(mouseX, mouseY,pmouseX, pmouseY)
  }


  if (brush == "grey line") {
    stroke(random(100, 40, 60))
    strokeWeight(brushsize)
    line(mouseX, mouseY,pmouseX, pmouseY)
  }


  if (brush == "lid") {
    stroke(0)
    strokeWeight(1)
    fill(135, 119, 131)
    arc(mouseX, mouseY, brushsize + 20, brushsize + 20,  0 + PI, 0 , CHORD);
}

if (brush == "plain grey") {
  stroke(150,150,150)
  strokeWeight(brushsize)
  line(mouseX, mouseY,pmouseX, pmouseY);
}

if (brush == "sadpink") {
  stroke(191, 120, 164)
  strokeWeight(brushsize)
  line(mouseX, mouseY,pmouseX, pmouseY);
}

if (brush == "bloodshot") {
  stroke(207, 27, 27)
  strokeWeight(.7)
  line(mouseX, mouseY,pmouseX, pmouseY);
}

if (brush == "longfur") {
  stroke(random(90,150))
  line(mouseX, mouseY, mouseX + random(-20, 20), mouseY + random(-20, 20))
}

    if (brush == "eraser") {
    stroke(200,200,200)
    strokeWeight(40)
    line(mouseX, mouseY, pmouseX, pmouseY)
  }

  if (brush == "black") {
    stroke(0)
    strokeWeight(brushsize)
    line(mouseX, mouseY,pmouseX, pmouseY)
}

if (brush == "yellowtriangle") {
  stroke(0)
  strokeWeight(1)
  fill(201, 192, 109)
  triangle(mouseX, mouseY, pmouseX, pmouseY, mouseX - 10, mouseY + 20)
}

if (brush =="trashbubbles") {
noStroke()
fill(random(40, 120), random(70,130), random(100), 100)
circle(mouseX + random(-20, 20), mouseY + random(-20, 20), random(2, 30))
}

if (brush =="trashgreen") {
noFill()
stroke(94, 117, 100)
strokeWeight(brushsize)
line(mouseX, mouseY, pmouseX, pmouseY)
}

if (brush =="trashyellow") {
noFill()
stroke(201, 201, 119)
strokeWeight(brushsize)
line(mouseX, mouseY, pmouseX, pmouseY)
}

if (brush =="trashpink") {
noFill()
stroke(163, 114, 140)
strokeWeight(brushsize)
line(mouseX, mouseY, pmouseX, pmouseY)
}

if (brush =="trashpurple") {
noFill()
stroke(102, 76, 115)
strokeWeight(brushsize)
line(mouseX, mouseY, pmouseX, pmouseY)
}

if (brush =="trashblue") {
noFill()
stroke(54, 78, 89)
strokeWeight(brushsize)
line(mouseX, mouseY, pmouseX, pmouseY)
}

if (brush =="lightgrey") {
noFill()
stroke(156, 159, 161)
strokeWeight(brushsize)
line(mouseX, mouseY, pmouseX, pmouseY)
}
if (brush =="midgrey") {
noFill()
stroke(112, 114, 115)
strokeWeight(brushsize)
line(mouseX, mouseY, pmouseX, pmouseY)
}
if (brush =="darkgrey") {
noFill()
stroke(69, 70, 71)
strokeWeight(brushsize)
line(mouseX, mouseY, pmouseX, pmouseY)
}

if (brush =="whitepen") {
noFill()
stroke(255)
strokeWeight(brushsize)
line(mouseX, mouseY, pmouseX, pmouseY)
}
}

  stroke(0)
  strokeWeight(1)
  fill(156, 160, 161)
  rect(0, 0, 90, 485)
  //toolbar

  fill(255, 133, 214)
  rect(10, 10, 30, 30)
  noStroke()//tail, pink part

  fill("black")
  rect(50, 10, 30, 30)
  noStroke()//black


  fill(200)
  rect(10, 50, 30, 30)
  noStroke()//fur

  fill("white")
  rect(50, 50, 30, 30)
  noStroke()//eyeball

  fill("white")//black
  rect(10, 90, 30, 30)
  noStroke()

  stroke(145)
  strokeWeight(4)
  line(17,97,23,106)

  stroke(90)
  strokeWeight(4)
  line(28,97,26,115)

  stroke(145)
  strokeWeight(4)
  line(36,112,14,113)

  stroke(120)
  strokeWeight(4)
  line(33,92,35,104)

  stroke(90)
  strokeWeight(4)
  line(21,94,13,101)

  stroke(0)
  strokeWeight(1)
  line(18,66,22,69)

  stroke(0)
  strokeWeight(1)
  line(31,74,29,77)


  fill(69, 70, 71)//darkgrey
  rect(50, 90, 30, 30)
  noStroke()

  fill(185)//grey variation
  rect(10, 130, 30, 30)
  noStroke()

  noStroke()
  fill(135)
  rect(10, 130, 30, 10)
    noStroke()
    fill(80)
    rect(10, 150, 30, 10)
  fill(112, 114, 115)//medium grey
  rect(50, 130, 30, 30)
  noStroke()


  fill(138, 116, 134)//white eyeball
  rect(10, 170, 30, 30)
  noStroke()

  fill(156, 159, 161)//lightgrey
  rect(50, 170, 30, 30)
  noStroke()

  fill(222, 162, 172)//eyelid
  rect(10, 210, 30, 30)
  noStroke()

  fill(163, 114, 140)//shit pink
  rect(50, 210, 30, 30)
  noStroke()

  fill(255,255,255)//eye ring
  rect(10, 250, 30, 30)
  noStroke()

  fill(102, 76, 115)//shitpurple
  rect(50, 250, 30, 30)
  noStroke()

  fill(150, 150, 150)//plain grey
  rect(10, 290, 30, 30)
  noStroke()

  fill(201, 201, 119)//shityellow
  rect(50, 290, 30, 30)
  noStroke()

  fill(190)//bubbles
  rect(10, 330, 30, 30)
  noStroke()



  fill(94, 117, 100)//shitgreen
  rect(50, 330, 30, 30)
  noStroke()

  fill(207, 27, 27)//sadpurple
  rect(10, 370, 30, 30)
  noStroke()

  fill(54, 78, 89)//trashblue
  rect(50, 370, 30, 30)
  noStroke()

  fill(190)//eraser
  rect(10, 410, 30, 30)
  noStroke()

  fill(190)//nexteraser
  rect(50, 410, 30, 30)
  noStroke()
  stroke(0)

  stroke(1)
  strokeWeight(.5)
  fill(200, 207, 120)
  circle(18,339,10)

  strokeWeight(.5)
  fill(124, 163, 70)
  circle(23,345,12)

  stroke(1)
  strokeWeight(.5)
  fill(196, 153, 118)
  circle(34,336,9)

  stroke(1)
  strokeWeight(.5)
  fill(103, 147, 161)
  circle(34,355,4)

  stroke(1)
  strokeWeight(.5)
  fill(80, 133, 84)
  circle(16,355,6)


  fill(145, 15, 36)//save button
  circle(25, 462, 30)


  fill(250, 250, 40)//smiley
  circle(65, 462, 30)

  noStroke()
  fill(195, 160, 235)//purple stripe in tail box
  rect(10, 30, 30, 5)


  noStroke()
  fill(195, 160, 235)//purple stripe in tail box
  rect(10, 10, 30, 10)





  noFill()
  rect(0, 0, 50, 480)
  stroke(0)
  strokeWeight(2)


  stroke(0)
  strokeWeight(1)
  fill(135, 119, 131)
  arc(25, 230, 25, 25, 0+PI , 0, CHORD)//eyelid example



  stroke(0)
  strokeWeight(1)
  line(18,56,22,60)


  stroke(0)
  strokeWeight(1)
  line(29,59,27,65)


  stroke(0)
  strokeWeight(1)
  line(35,59,35,69)


  stroke(0)
  strokeWeight(1)
  line(14,71,25,73)

  stroke(0)
  strokeWeight(1)
  line(38,54,31,53)


  line(10,410,40,440)//eraser x
  stroke(0)
  strokeWeight(1)

  line(10,440,40,410)//eraser x
  stroke(0)
  strokeWeight(1)

stroke(1)
strokeWeight(1)
fill(201, 192, 109)
triangle(18, 299, 33, 299, 26, 315)

///////////////


  noFill()//stroke for tail box
  rect(10, 10, 30, 30)
  stroke(0)
  strokeWeight(1)

  noFill()//stroke for next tail box
  rect(50, 10, 30, 30)
  stroke(0)
  strokeWeight(1)

  noFill()//stroke for fur box
  rect(10, 50, 30, 30)
  stroke(0)
  strokeWeight(1)

  noFill()//stroke for next fur box
  rect(50, 50, 30, 30)
  stroke(0)
  strokeWeight(1)

  noFill()//stroke for black line box
  rect(10, 90, 30, 30)
  stroke(0)
  strokeWeight(1)

  noFill()//stroke for next black line box
  rect(50, 90, 30, 30)
  stroke(0)
  strokeWeight(1)

  noFill()//stroke for greys line box
  rect(10, 130, 30, 30)
  stroke(0)
  strokeWeight(1)

  noFill()//stroke for greys line box
  rect(50, 130, 30, 30)
  stroke(0)
  strokeWeight(1)

  noFill()//stroke for white dot box
  rect(10, 170, 30, 30)
  stroke(0)
  strokeWeight(1)

  noFill()//stroke for next white dot box
  rect(50, 170, 30, 30)
  stroke(0)
  strokeWeight(1)

  noFill()//stroke for eyelid line box
  strokeWeight(1)
  rect(10, 210, 30, 30)
  stroke(0)


  noFill()//stroke for next eyelid line box
  rect(50, 210, 30, 30)
  stroke(0)
  strokeWeight(1)

  noFill()//stroke for pink ring box
  rect(10, 250, 30, 30)
  stroke(0)
  strokeWeight(1)

  noFill()//stroke for next pink ring box
  rect(50, 250, 30, 30)
  stroke(0)
  strokeWeight(1)

  noFill()//stroke for plain grey box
  rect(10, 290, 30, 30)
  stroke(0)
  strokeWeight(1)

  noFill()//stroke for next plain grey box
  rect(50, 290, 30, 30)
  stroke(0)
  strokeWeight(1)

  noFill()//stroke for sadpink box
  rect(10, 330, 30, 30)
  stroke(0)
  strokeWeight(1)

  noFill()//stroke for next sadpink box
  rect(50, 330, 30, 30)
  stroke(0)
  strokeWeight(1)

  noFill()//stroke for sadpurple box
  rect(10, 370, 30, 30)
  stroke(0)
  strokeWeight(1)

  noFill()//stroke for next sadpurple box
  rect(50, 370, 30, 30)
  stroke(0)
  strokeWeight(1)

  noFill()//stroke for eraser box
  rect(10, 410, 30, 30)
  stroke(0)
  strokeWeight(1)

  noFill()//stroke for eraser box
  rect(50, 410, 30, 30)
  stroke(0)
  strokeWeight(1)

  noFill()//stroke for save box
  circle(25, 462, 30)
  stroke(0)
  strokeWeight(2)

  noFill()//stroke for save box
  stroke(0)
  strokeWeight(1)
  circle(65, 462, 30)


  strokeWeight(3)
  point(60, 459)
  stroke(0)


  point(70, 459)
  stroke(0)
  strokeWeight(3)

  stroke(0)
  strokeWeight(1)
  fill(255)
  circle(25, 185, 20)
        stroke(0)
        strokeWeight(1)
        fill(0)
        circle(25, 185, 5)

noFill()
strokeWeight(1.5)
arc(65, 460, 20, 20, 0 , 0 + PI)//smiley
stroke(0)


line(65,420,65,430)
stroke(0)
strokeWeight(1)

line(60,425,70,425)
stroke(0)
strokeWeight(1)
  ////////////


  stroke(207, 109, 176)
  strokeWeight(3)
  circle(25, 265, 15)
  noFill()

  stroke(1)
  strokeWeight(1)
  fill(255)
  circle(25, 385, 25)



  stroke(207, 27, 27)
  strokeWeight(.7)
  line(24, 384, 22, 380)

  stroke(207, 27, 27)
  strokeWeight(.7)
  line(22, 380, 18, 380)

  stroke(207, 27, 27)
  strokeWeight(.7)
  line(26, 387, 26, 392)

  stroke(207, 27, 27)
  strokeWeight(.7)
  line(26, 392, 24, 394)

  stroke(207, 27, 27)
  strokeWeight(.7)
  line(27, 385, 28, 380)

  stroke(207, 27, 27)
  strokeWeight(.7)
  line(28, 380, 31, 379)

    stroke(207, 27, 27)
    strokeWeight(.7)
    line(31, 379, 33, 380)

    stroke(207, 27, 27)
    strokeWeight(.7)
    line(29, 380, 28, 377)

    stroke(207, 27, 27)
    strokeWeight(.7)
    line(24, 386, 20, 388)

    stroke(207, 27, 27)
    strokeWeight(.7)
    line(20, 388, 17, 386)

    stroke(207, 27, 27)
    strokeWeight(.7)
    line(26, 385, 31, 383)

    stroke(207, 27, 27)
    strokeWeight(.7)
    line(31, 383, 31, 387)

    stroke(207, 27, 27)
    strokeWeight(.7)
    line(31, 387, 33, 386)

  stroke(1)
  strokeWeight(1)
  fill(0)
  circle(25, 385, 7)

}


function mouseClicked() {

print(int(mouseX), int(mouseY))

    if(mouseX > 10  && mouseX < 40 && mouseY > 10 && mouseY <40) {

          print("tail")
          brush = "pink"
        }

    if(mouseX > 10  && mouseX < 40 && mouseY > 50 && mouseY <80){

          print("fur")
          brush = "greyblack"
        }

    if(mouseX > 10  && mouseX < 40 && mouseY > 90 && mouseY <120) {

          print("longfur")
          brush = "longfur"
        }

    if(mouseX > 10  && mouseX < 40 && mouseY > 130 && mouseY <160) {

          print("grey line")
          brush = "grey line"
        }

    if(mouseX > 10  && mouseX < 40 && mouseY > 170 && mouseY <200) {

          print("white eyes")
          brush = "white"
        }

    if(mouseX > 10  && mouseX < 40 && mouseY > 210 && mouseY <240) {

          print("eyelid")
          brush = "lid"
        }

    if(mouseX > 10  && mouseX < 40 && mouseY > 250 && mouseY <280) {

          print("eye ring")
          brush = "eyering"
        }
    if(mouseX > 10  && mouseX < 40 && mouseY > 290 && mouseY <320) {

          print("teeth")
          brush = "yellowtriangle"
        }
    if(mouseX > 10  && mouseX < 40 && mouseY > 330 && mouseY <360) {

          print("bubbles")
          brush = "trashbubbles"
        }

  if(mouseX > 10  && mouseX < 40 && mouseY > 370 && mouseY <400) {

          print("bloodeyes")
          brush = "bloodshot"
        }

  if(mouseX > 10  && mouseX < 40 && mouseY > 410 && mouseY <440) {

          print("erase that")
          brush = "eraser"
        }

  if(mouseX > 10  && mouseX < 40 && mouseY > 450 && mouseY <480) {

          print("SAVE!!!")
          save()
          }

  if(mouseX > 50  && mouseX < 80 && mouseY > 50 && mouseY <80) {

            print("white")
            brush = "whitepen"
            }

    if(mouseX > 50  && mouseX < 80 && mouseY > 10 && mouseY <40) {

          print("black")
          brush = "blackpen"
          }

    if(mouseX > 50  && mouseX < 80 && mouseY > 90 && mouseY <120) {

          print("dark grey")
          brush = "darkgrey"
          }

    if(mouseX > 50  && mouseX < 80 && mouseY > 130 && mouseY <160) {

          print("mid grey")
          brush = "midgrey"
          }

    if(mouseX > 50  && mouseX < 80 && mouseY > 170 && mouseY <200) {

          print("light grey")
          brush = "lightgrey"
          }

    if(mouseX > 50  && mouseX < 80 && mouseY > 210 && mouseY <240) {

          print("trashpink")
          brush = "trashpink"
          }

    if(mouseX > 50  && mouseX < 80 && mouseY > 250 && mouseY <280) {

          print("trashpurple")
          brush = "trashpurple"
          }

    if(mouseX > 50  && mouseX < 80 && mouseY > 290 && mouseY <320) {

          print("trashyellow")
          brush = "trashyellow"
          }

    if(mouseX > 50  && mouseX < 80 && mouseY > 330 && mouseY <360) {

        print("trashgreen")
          brush = "trashgreen"
          }

    if(mouseX > 50  && mouseX < 80 && mouseY > 370 && mouseY <400) {

        print("trashblue")
        brush = "trashblue"
          }


  if(mouseX > 50  && mouseX < 80 && mouseY > 450 && mouseY <480) {

              print("Good Job!")

              }
  if(mouseX > 50  && mouseX < 80 && mouseY > 410 && mouseY <440) {

            print("Start Fresh")
            background(200)

            }





}




function keyPressed()  {


if(key == "ArrowLeft") {
  brushsize = brushsize-2
}

if(key == "ArrowRight") {
  brushsize = brushsize+2
}
}
