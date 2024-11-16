const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function drawKochLine(x1, y1, x2, y2, depth) {
    if (depth === 0) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    } else {
        const deltaX = (x2 - x1) / 3;
        const deltaY = (y2 - y1) / 3;
        const xA = x1 + deltaX;
            const yA = y1 + deltaY;
        const xB = 2 * deltaX + x1;
        const yB = 2 * deltaY + y1;

        const angle = Math.PI / 3;
        const xPeak = xA + Math.cos(angle) * deltaX - Math.sin(angle) * deltaY;
        const yPeak = yA + Math.sin(angle) * deltaX + Math.cos(angle) * deltaY;

        drawKochLine(x1, y1, xA, yA, depth - 1)
        drawKochLine(xA, yA, xPeak, yPeak, depth - 1);
        drawKochLine(xPeak, yPeak, xB, yB, depth - 1);
        drawKochLine(xB, yB, x2, y2, depth - 1);
    }
}

function drawSnowflake() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "purple";
    ctx.lineWidth = 2;

    const depth = 5;

    const x1 = 150, y1 = 400;
    const x2 = 450, y2 = 400;
    const x3 = 300, y3 = 100;

    drawKochLine(x1, y1, x2, y2, depth)
    drawKochLine(x2, y2, x3, y3, depth)
    drawKochLine(x3, y3, x1, y1, depth)

}

drawSnowflake()