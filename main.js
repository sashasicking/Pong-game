//Play with Player Movment

//Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 300;

// Global Variables
let player = {
  x: 370,
  y: 150,
  w: 30,
  h: 30,
  speed: 10,
};

let player2 = {
  x2: 0,
  y2: 150,
  w: 30,
  h: 30,
  speed: 10,
};

let player3 ={
  x3: 200,
  y3: 150,
  h: 20,
  w: 20,
  speedX:3,
  speedY:3
};




let arrowRightPressed = false;
let arrowLeftPressed = false;
let arrowUpPressed = false;
let arrowDownPressed = false;

let keyRightPressed = false;
let keyLeftPressed = false;
let keyUpPressed = false;
let keyDownPressed = false;
//indicate player speed
let count = 0;
let count2 = 0;
//Main Program Loop
requestAnimationFrame(draw);

function draw() {
  // Logic

  // Move player based on what key is pressed / held down
  if (arrowRightPressed) {
    player.x += player.speed;
  } else if (arrowLeftPressed) {
    player.x += -player.speed;
  }
  if (arrowUpPressed) {
    player.y += -player.speed;
  } else if (arrowDownPressed) {
    player.y += player.speed;
  }

  if (keyRightPressed) {
    player2.x2 += player2.speed;
  } else if (keyLeftPressed) {
    player2.x2 += -player2.speed;
  }
  if (keyUpPressed) {
    player2.y2 += -player2.speed;
  } else if (keyDownPressed) {
    player2.y2 += player2.speed;
  }

  if (player.x < 0) {
    player.x = 0;
  } else if (player.x > 400) {
    player.x = 400;
  } else if (player.y < 0) {
    player.y = 0;
  } else if (player.y > 250) {
    player.y = 250;
  }

  if (player2.x2 < 0) {
    player2.x2 = 0;
  } else if (player2.x2 > 350) {
    player2.x2 = 350;
  } else if (player2.y2 < 0) {
    player2.y2 = 0;
  } else if (player2.y2 > 250) {
    player2.y2 = 250;
  }

  //Drawing
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  //Draw Player
  ctx.fillStyle = "blue";
  ctx.fillRect(player.x, player.y, player.w, player.h);

  ctx.fillStyle = "green";
  ctx.fillRect(player2.x2, player2.y2, player2.w, player2.h);

  ctx.fillStyle = "red"
  ctx.beginPath();
  ctx.arc(player3.x3, player3.y3, player3.w, 0, 2 * Math.PI);
  ctx.stroke();
  


// Ball movement
player3.x3 += player3.speedX;
player3.y3 += player3.speedY;

// Scoring
if (player3.x3 >= 415) {
  count++;
  output.textContent++
  player3.x3 = 200;
  // player3.speedX = 0;
  // player3.speedY= 0;
  player3.speedX = -player3.speedX;
} else if (player3.x3 <= -15) {
  count2++;
  output2.textContent++
  player3.x3 = 200;
  // player3.speedY = 0;
  player3.speedX = -player3.speedX;
}


// Paddle collision
// Paddle collision
if (
    player.x <= player3.x3 + player3.w && 
    player.x + player.w >= player3.x3 - player3.w &&
    player.y <= player3.y3 + player3.h && 
    player.y + player.h >= player3.y3 - player3.h
  ) {
    // Ball hits player1's paddle
    player3.speedX = -player3.speedX;
    player3.x3 = player.x - player3.w;  // Move the ball to the left edge of the paddle
    player3.speedY += Math.random() * 2 - 1;
  } else if (
    player2.x2 <= player3.x3 + player3.w && 
    player2.x2 + player2.w >= player3.x3 - player3.w &&
    player2.y2 <= player3.y3 + player3.h && 
    player2.y2 + player2.h >= player3.y3 - player3.h
  ) {
    // Ball hits player2's paddle
    player3.speedX = -player3.speedX;
    player3.x3 = player2.x2 + player2.w + player3.w;  // Move the ball to the right edge of the paddle
    player3.speedY += Math.random() * 2 - 1;
  }
  
  
  


// Wall collision
if (player3.y3 >= 275 || player3.y3 <= 0) {
  player3.speedY = -player3.speedY;
  player3.speedX += Math.random() * 3 - 1; 
}

  
  // Request another Animation Frame
  requestAnimationFrame(draw);
}

// Key Event Stuff

document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);

function keydownHandler(event) {
  
  //KeyIsPressed Movement
  if (!event.repeat) {
    // if (event.code == "ArrowRight") {
    //   arrowRightPressed = true;
      
    // } else if (event.code == "ArrowLeft") {
    //   arrowLeftPressed = true;} 
      if (event.code == "ArrowUp") {
      arrowUpPressed = true;
      
    } else if (event.code == "ArrowDown") {
      arrowDownPressed = true;
      
    }
}
  

  if (!event.repeat) {
    // if (event.code == "KeyD") {
    //   keyRightPressed = true;
    // } else if (event.code == "KeyA") {
    //   keyLeftPressed = true;}
       if (event.code == "KeyW") {
      keyUpPressed = true;
    } else if (event.code == "KeyS") {
      keyDownPressed = true;
    }
  }

}


function keyupHandler(event) {
  // KeyIsPressed Movement
  if (!event.repeat) {
    if (event.code == "ArrowRight") {
      arrowRightPressed = false;
    } else if (event.code == "ArrowLeft") {
      arrowLeftPressed = false;
    } else if (event.code == "ArrowUp") {
      arrowUpPressed = false;
    } else if (event.code == "ArrowDown") {
      arrowDownPressed = false;
    }
  }

  if (!event.repeat) {
    if (event.code == "KeyD") {
      keyRightPressed = false;
    } else if (event.code == "KeyA") {
      keyLeftPressed = false;
    } else if (event.code == "KeyW") {
      keyUpPressed = false;
    } else if (event.code == "KeyS") {
      keyDownPressed = false;
    }
  }
}


// else if(player3.x + player3.w  == player.x && player3.y == player.y || player3.y + player3.h == player.y){
//   player3.speed = -player3.speed;
//  } else if(player3.x - player3.w  == player2.x && player3.y == player2.y ){
//   player3.speed = -player3.speed
//  }

// else if(player.x <= player3.x + player3.w && player.x >= player3.x - player3.w && player.y <= player3.y + player3.w && player.y >= player3.y - player.w){
//   player3.speed = -player3.speed;
// } else if(player2.x <= player3.x + player3.w && player2.x >= player3.x - player3.w && player2.y <= player3.y + player3.w && player2.y >= player3.y - player.w){
//   player3.speed = -player3.speed;
// }
