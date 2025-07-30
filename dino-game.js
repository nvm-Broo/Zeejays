const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

let dino = { x: 50, y: 110, vy: 0, gravity: 0.8, jump: -12, width: 30, height: 30 };
let cactus = { x: 600, width: 20, height: 40 };
let isJumping = false, score = 0;

function drawDino() {
  ctx.fillStyle = "#FFD700";
  ctx.fillRect(dino.x, dino.y, dino.width, dino.height);
}

function drawCactus() {
  ctx.fillStyle = "#fff";
  ctx.fillRect(cactus.x, 120, cactus.width, cactus.height);
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawDino();
  drawCactus();

  dino.y += dino.vy;
  dino.vy += dino.gravity;

  if (dino.y >= 110) {
    dino.y = 110;
    dino.vy = 0;
    isJumping = false;
  }

  cactus.x -= 5;
  if (cactus.x < -cactus.width) {
    cactus.x = 600 + Math.random() * 200;
    score++;
  }

  if (
    dino.x < cactus.x + cactus.width &&
    dino.x + dino.width > cactus.x &&
    dino.y + dino.height > 120
  ) {
    alert("Game Over! Score: " + score);
    cactus.x = 600;
    score = 0;
  }

  requestAnimationFrame(update);
}

function jump() {
  if (!isJumping) {
    dino.vy = dino.jump;
    isJumping = true;
  }
}

document.addEventListener("keydown", e => {
  if (e.code === "Space") jump();
});

canvas.addEventListener("touchstart", jump);

update();
