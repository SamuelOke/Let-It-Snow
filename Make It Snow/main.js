// A Brisk Snowy Day

let cnv = document.getElementById ("mycanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;
let randNumX = randomInt(-3, -1);
let randNumY = randomInt(2, 10);

// Creat an array of random snowflakes
let snowflakes = []
for (let n = 1; n <= 100; n++) {
    snowflakes.push(newRandomSnowflake());
}
console.log(snowflakes);

requestAnimationFrame(draw);
function draw() {
    // Clear Canvas
    fill('black')
    rect(0, 0, cnv.width, cnv.height, 'fill');

    // Move and Draw All Snowflakes
    for(let i = 0; i < snowflakes.length; i++) {
        moveSnowflake(snowflakes[i]);
        drawSnowflake(snowflakes[i]);
    }

    requestAnimationFrame(draw);
}

function newSnowflake(initX, initY, initR) {
    return {
        x: initX,
        y: initY,
        r: initR
    };
}

function newRandomSnowflake() {
    return {
        x: randomInt(0, cnv.width),
        y: randomInt(0, cnv.height),
        r: randomInt(5, 15)
    };
}

function drawSnowflake(aSnowflake) {
    fill('white')
    circle(aSnowflake.x, aSnowflake.y, aSnowflake.r, 'fill');
}

function moveSnowflake(aSnowflake) {
    aSnowflake.x += randomInt(-5, -1)
    aSnowflake.y += randNumY;

    if (aSnowflake.x < 0) {
        aSnowflake.x = cnv.width + 10;
    }

    if (aSnowflake.y > cnv.height) {
        aSnowflake.y = -10;
    }
}
