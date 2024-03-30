/**
 * Canvas and Context
 */
const canvas = document.getElementById('canvas');
const container = document.getElementById('container');
const ctx = canvas.getContext('2d');

/**
 * Map
 */
const mapSize = 60;
let map = new Array(mapSize).fill(0).map((e) => new Array(mapSize).fill(0));

/**
 * Cell Size
 */
const cellSize = 13;

/**
 * Cell Params
 */
const cellStrokeColor = 'rgb(74,74,74)';
const cellStrokeWidth = 1;
const sandStrokeColor = '#ffeab4';
const sandColor = '#ffeab4';
const sandStrokeWidth = 3;

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
            const y = (map.length - 1 - yi) * cellSize;
            const x = (yr.length - 1 - xi) * cellSize;
            const currentCell = map[map.length - 1 - yi][yr.length - 1 - xi]; // reversed iteration

            if (currentCell === 0) {
                ctx.fillStyle = '#414141';
                ctx.fillRect(x, y, cellSize, cellSize);
                ctx.strokeStyle = cellStrokeColor;
                ctx.lineWidth = cellStrokeWidth;
                ctx.strokeRect(x, y, cellSize, cellSize);
            } else {
                ctx.fillStyle = sandColor;
                ctx.fillRect(x, y, cellSize, cellSize);
                setSandStroke(yr.length - 1 - xi, map.length - 1 - yi)
            }
        })
    })

    /**
     * Check for fall
     */
    map.forEach((yr, yi) => {
        yr.forEach((xc, xi) => {
            /**
             * Calculate position of cell
             */
            const y = (map.length - 1 - yi) * cellSize;
            const x = (yr.length - 1 - xi) * cellSize;
            const currentCell = map[map.length - 1 - yi][yr.length - 1 - xi]; // reversed iteration
            const nextYLine = map[map.length - yi];

            if (!nextYLine) return false;
            else if (currentCell === 1 && nextYLine[yr.length - 1 - xi] === 0) {
                map[map.length - 1 - yi][yr.length - 1 - xi] = 0;
                map[map.length - yi][yr.length - 1 - xi] = 1;
                return false;
            } else if (currentCell === 1 && nextYLine[yr.length - 1 - xi] !== 0) {
                const isRightFallAvailable = nextYLine[yr.length - xi] === 0;
                const isLeftFallAvailable = nextYLine[yr.length - 2 - xi] === 0;
                const bothDirAvailable = isRightFallAvailable && isLeftFallAvailable;

                /**
                 * Check side fall
                 */
                if (!bothDirAvailable) {
                    if (isLeftFallAvailable) {
                        map[map.length - 1 - yi][yr.length - 1 - xi] = 0;
                        nextYLine[yr.length - 2 - xi] = 1;
                    } else if(isRightFallAvailable) {
                        map[map.length - 1 - yi][yr.length - 1 - xi] = 0;
                        nextYLine[yr.length - xi] = 1;
                    } else return false;
                } else {
                    const random = Math.floor(Math.random()*(1-1+1))+1;
                    const dir = random >= 5 ? 'right' : 'left';

                    if (dir === 'right') {
                        map[map.length - 1 - yi][yr.length - 1 - xi] = 0;
                        nextYLine[yr.length - xi] = 1;
                    } else if (dir === 'left') {
                        map[map.length - 1 - yi][yr.length - 1 - xi] = 0;
                        nextYLine[yr.length - 2 - xi] = 1;
                    }
                }
            }
        })
    })
}

/**
 * Set Sand Stroke
 */
function setSandStroke(x, y) {
    const isAroundCellInMap = {
        top: map[y - 1] ? map[y - 1][x] : 0,
        right: map[y][x + 1] ?? 0,
        bottom: map[y + 1] ? map[y + 1][x] : 0,
        left: map[y][x - 1] ?? 0 ,
    };
    for (const [key, value] of Object.entries(isAroundCellInMap)) {
        if (value) continue;

        ctx.fillStyle = '#ba5700';

        switch (key) {
            case 'top':
                ctx.fillRect(x*cellSize, y*cellSize, cellSize, 3);
                break;
            case 'right':
                ctx.fillRect(x*cellSize + cellSize - 2, y*cellSize, 3, cellSize + 3);
                break;
            case 'bottom':
                ctx.fillRect(x*cellSize, y*cellSize + cellSize, cellSize, 3);
                break;
            case 'left':
                ctx.fillRect(x*cellSize, y*cellSize, 3, cellSize + 3);
                break;
        }
    }
}
map[59][59] = 1;
map[59][58] = 1;
map[59][57] = 1;
map[58][58] = 1;

/**
 * Separator Line
 */
ctx.fillStyle = 'black';
ctx.fillRect(0, (cellSize * map.length), canvas.width, 10);

/**
 * Buttons
 */
function createButton(text, callback) {
    const button = document.createElement('button');
    button.classList.add('canvas-button');
    button.innerText = text;
    container.childNodes[3].append(button);
    button.addEventListener('click', callback);
}
/**
 * Mouse States
 */
let isMouseDown = false;
let isMouseIn = false;
const mousePos = {
    x: 0,
    y: 0,
}

/**
 * Canvas Events
 */
canvas.addEventListener('mouseenter', () => {
    isMouseIn = true;
});
canvas.addEventListener('mouseleave', () => {
    isMouseIn = false;
});
canvas.addEventListener('mousedown', (event) => {
    /**
     * Calculate Cell Clicked Position
     */
    const cp = getCellPosition(event.offsetX, event.offsetY);
    mousePos.x = event.offsetX;
    mousePos.y = event.offsetY;

    /**
     * Toggle Mouse State
     */
    isMouseDown = true;

    /**
     * Check if click on map cell
     */
    if (cp.x < mapWidth && cp.y < mapHeight) {
        map[cp.y][cp.x] = 1;
    }
})
window.addEventListener('mouseup', () => {
    isMouseDown = false;
});
canvas.addEventListener('mousemove', (event) => {
    /**
     * Calculate Cell Clicked Position
     */
    const cp = getCellPosition(event.offsetX, event.offsetY);

    /**
     * Check if click on map cell
     */
    if (!(event.offsetX < mapWidth && event.offsetY < mapHeight)) return;

    if (isMouseDown && isMouseIn && !map[cp.y][cp.x]) {
        map[cp.y][cp.x] = 1;
    }
});
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
 * Clear Map
 */
function clearMap() {
    map = new Array(mapSize).fill(0).map((e) => new Array(mapSize).fill(0));
    ctx.fillStyle = 'black';
    ctx.fillRect(0, (cellSize * map.length), canvas.width, 10);
}

/**
 * Setup for render init
 */
function setup() {
    setInterval(() => {
        renderMap();
    }, 35);

    setTimeout(() => {
        createButton('Clear', clearMap);
    }, 1000);
}
/**
 * Entry
 */
setup();
