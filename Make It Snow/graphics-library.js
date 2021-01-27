// Graphics Library (Remastered by Samuel Oke Industries)
function stroke(color) {
    ctx.strokeStyle = color;
}

function fill(color) {
    ctx.fillStyle = color;
}

function lineWidth(width) {
    ctx.lineWidth = width;
}

function font(fontSetting) {
    ctx.font = fontSetting;
}

//Draw a stroke or fill rectangle with a top left corner of (x,y), a width of w and a height of h
function rect(x, y, w, h, mode) {
    if (mode === "fill") {
        ctx.fillRect(x, y, w, h);
    } else if (mode === "stroke") {
        ctx.strokeRect(x, y, w, h);
    }
}

//Draw a line segment from (x1 y1) to (x2, y2)
function line(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1); //Endpoint 1
    ctx.lineTo(x2, y2); // Endpoion 2
    ctx.stroke();
}

// Draw a circle with center (x,y) and raduis of r
function circle(x, y, r, mode) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI)
    if (mode === "fill") {
        ctx.fill();
    } else if (mode === "stroke") {
        ctx.stroke();
    }
}

function triangle(x1, y1, x2, y2, x3, y3, mode) {
    ctx.beginPath();
    ctx.moveTo(x1, y1); //Vertex 1
    ctx.lineTo(x2, y2); // Vertex 2
    ctx.lineTo(x3, y3); // Vertex 3
    if (mode === "fill") {
        ctx.fill();
    } else if (mode === "stroke") {
        ctx.closePath();
        ctx.stroke();
    }
}

function text(message, x, y, mode) {
    if (mode === "fill") {
        ctx.fillText(message, x, y);
    } else if (mode === "stroke") {
        ctx.strokeText(message, x, y);
    }
}

function ellipse(x, y, xRadius, yRadius,  rotation, mode) {
    ctx.beginPath();
    ctx.ellipse(x, y, xRadius, yRadius, rotation, 0, 2 * Math.PI);
    if (mode === "fill") {
        ctx.fill();
    } else if (mode === "stroke") {
        ctx.stroke();
    }
}

function image(img, x, y, w, h ) {
    ctx.drawImage(img, x, y, w, h);
}

function imageClip(img, xc, yc, wc, hc, x, y, w, h) {
    ctx.drawImage(img, xc, yc, wc, hc, x, y, w, h);
}

// Draw a star
function drawStar(x, y, color) {
    stroke(color);
    lineWidth(3)
    line(x, y, x - 80, y + 120);
    line(x - 80, y + 120, x + 110, y + 50);
    line(x + 110, y + 50, x - 100, y + 50);
    line(x -100, y + 50, x + 90, y + 120);
    line(x + 90, y + 120, x, y);
}

// Draw a Robot
function drawRobot (x, y, mode) {
    circle(x + 20, y + 20, 6 * Math.PI, "fill")
    fill("white")
    circle(x + 30, y + 20, 2 * Math.PI, 'fill')
    fill("black")
    circle( x + 30, y + 20, 1/2 *Math.PI, "fill")
    line(x + 20, y + 35, x + 20, y + 60)
    rect(x, y + 60, 40, 60, "fill" )
    rect()
}

// Draw many circles inside eachother a.k.a targets
function drawTarget(x, y, r, mode) {
    stroke("green")
    lineWidth(1)
    circle(x, y, r, "stroke")
    circle(x, y, 2 * r, "stroke")
    circle(x, y, 3 * r, "stroke")
    circle(x, y, 4 * r, "stroke")
    circle(x, y, 5 * r, "stroke")
    circle(x, y, 6 * r, "stroke")
    circle(x, y, 7 * r, "stroke")
}