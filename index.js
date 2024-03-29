/**
 * Canvas and Context
 */
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

/**
 * Map
 */
const map = [
    [0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0],
    [0,0,0,0,0,   0,0,1,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0],
    [0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0],
    [0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0],
    [0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0],
    [0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0],
    [0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0],
    [0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0],
    [0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0],
    [0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0],
    [0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0],
    [0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0],
    [0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0],
    [0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0],
    [0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0],
    [0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0],
    [0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0],
    [0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0],
    [0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0],
    [0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0],
    [0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0],
    [0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0],
    [0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0],
    [0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0],
    [0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0],
    [0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0],
    [0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0],
    [0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0],
    [0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0],
    [0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0],
    [0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0],
    [0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0],
    [0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0],
    [0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0],
    [0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0,   0,0,0,0,0],
];

/**
 * Cell Size
 */
const cellSize = 20;

/**
 * Cell Params
 */
const cellStrokeColor = 'rgb(74,74,74)';
const cellStrokeWidth = 1;
const sandStrokeColor = '#8e5e2d';
const sandColor = '#ffeab4';
const sandStrokeWidth = 2;

/**
 * Setting Size Params
 */
const mapHeight = cellSize * map.length;
const mapWidth = cellSize * map[0].length
canvas.height = mapHeight + 100;
canvas.width = mapWidth;

/**
 * Fill Scene by Map
 */
function renderMap() {
    map.forEach((yr, yi) => {
        yr.forEach((xc, xi) => {
            /**
             * Calculate position of cell
             */
            const x = xi * cellSize;
            const y = yi * cellSize;

            if (map[yi][xi] === 0) {
                ctx.strokeStyle = cellStrokeColor;
                ctx.lineWidth = cellStrokeWidth;
                ctx.strokeRect(x, y, cellSize, cellSize);
            } else if (map[yi][xi] === 1) {
                ctx.fillStyle = sandColor;
                ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);

                /* Stroke Of Sand */
                ctx.strokeStyle = sandStrokeColor;
                ctx.lineWidth = cellStrokeWidth;
                ctx.strokeRect(x*cellSize + cellStrokeWidth/2, y*cellSize + cellStrokeWidth/2, cellSize - cellStrokeWidth, cellSize - cellStrokeWidth);
            }
        })
    })
}
renderMap();

/**
 * Separator Line
 */
ctx.fillStyle = 'black';
ctx.fillRect(0, (cellSize * map.length), canvas.width, 10);

/**
 * Mouse States
 */
let isMouseDown = false;
let intervalId = null;

/**
 * Mechanic Params
 */
const speedRenderSand = 6;

/**
 * Canvas Events
 */
canvas.addEventListener('mousedown', (event) => {
    /**
     * Calculate Cell Clicked Position
     */
    const cp = getCellPosition(event.offsetX, event.offsetY);

    /**
     * Toggle Mouse State
     */
    isMouseDown = true;

    /**
     * Check if click on map cell
     */
    if (cp.x < mapWidth && cp.y < mapHeight) {
        intervalPutSend(cp.x, cp.y);
        putSend(cp.x, cp.y);
    }
})
canvas.addEventListener('mouseup', () => {
    isMouseDown = false;
    clearInterval(intervalId);
})
canvas.addEventListener('mousemove', (event) => {
    /**
     * Calculate Cell Clicked Position
     */
    const cp = getCellPosition(event.offsetX, event.offsetY);

    /**
     * Check if click on map cell
     */
    if (!(cp.x < mapWidth && cp.y < mapHeight)) return;

    if (isMouseDown) {
        clearInterval(intervalId);
        intervalPutSend(cp.x, cp.y);
        putSend(cp.x, cp.y);
    } else {
        return ctx.clearRect(0, 0, 20, 20);
    }
})

/**
 * Put Rect of Sand
 */
function putSend(x, y) {
    const cell = map[y][x];

    if (cell === 0) {
        /* Sand Square */
        ctx.fillStyle = sandColor;
        ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);

        /* Stroke Of Sand */
        ctx.strokeStyle = sandStrokeColor;
        ctx.lineWidth = cellStrokeWidth;
        ctx.strokeRect(x*cellSize + cellStrokeWidth/2, y*cellSize + cellStrokeWidth/2, cellSize - cellStrokeWidth, cellSize - cellStrokeWidth);
        map[y][x] = 1;

        fallCellDown(x, y);
    }
}

/**
 * Function to make cell fall down through map
 */
function fallCellDown(x, y) {
    let timeout = 0;

    function fall() {
        timeout++

        if (!(timeout % speedRenderSand)) {

            if (map[y + 1][x]) {
                return delayBeforeStop(x, y);
                // return;
            }

            clearCell(x, y);
            putSend(x, ++y);
        }

        if(map[y + 1] === undefined) {
            return false;
        } else {
            requestAnimationFrame(fall);
        }
    }
    requestAnimationFrame(fall);
}

/**
 * Make Cell Empty
 */
function clearCell (x, y) {
    ctx.clearRect(x*cellSize, y*cellSize, cellSize, cellSize);
    ctx.strokeStyle = cellStrokeColor;
    ctx.lineWidth = cellStrokeWidth;
    ctx.strokeRect(x*cellSize + cellStrokeWidth/2, y*cellSize + cellStrokeWidth/2, cellSize - cellStrokeWidth, cellSize - cellStrokeWidth);
    map[y][x] = 0;
}

/**
 * Get Cell Position in Map Array
 */
function getCellPosition(offsetX, offsetY) {
    /**
     * Calculate Cell Clicked Position
     */
    return {
        x: Math.floor(offsetX/cellSize),
        y: Math.floor(offsetY/cellSize),
    }
}

/**
 * Delay before off fall
 */
const timeout = 2000;
let timeoutId = null;
let delayId = null;
function delayBeforeStop(x ,y) {
    timeoutId = setTimeout(() => {
        cancelAnimationFrame(delayId);
    }, timeout);
    function delay() {
        if (map[y + 1][x]) {
            delayId = requestAnimationFrame(delay);
        } else {
            clearCell(x, y);
            // putSend(x, ++y);
            // clearTimeout(timeoutId);
            // cancelAnimationFrame(delayId);
        }
    }

    delay();
}

/**
 * Interval White non-move mouse and clicked button
 */
function intervalPutSend(x, y) {
    const interval = 100;
    intervalId = setInterval(() => {
        putSend(x, y);
    }, interval);
}
