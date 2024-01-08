import chalk from 'chalk';

function visualizeGraph(nodes, edges) {
    let nodePositions = calculateNodePositions(nodes);
    let canvas = initializeCanvas(50, 100); // Larger canvas size

    // Adjust node rendering
    for (let node of nodes) {
        let position = nodePositions[node.id];
        drawBoxAroundNode(canvas, position, node.data, node.id, chalk.blue);
    }

    // Adjust edge rendering
    for (let edge of edges) {
        let startPosition = nodePositions[edge.startNodeId];
        let endPosition = nodePositions[edge.endNodeId];
        drawLine(canvas, startPosition, endPosition, chalk.red);
    }

    for (let row of canvas) {
        console.log(row.join(''));
    }
}

function drawBoxAroundNode(canvas, position, data, id, color) {
    // Draw a larger box and place the data inside
    let x = position.x;
    let y = position.y;

    // Ensure the box stays within canvas bounds
    if (x > 1 && y > 3 && x < canvas.length - 3 && y < canvas[0].length - 6) {
        canvas[x][y] = canvas[x][y + 5] = canvas[x + 3][y] = canvas[x + 3][y + 5] = color('+');
        for (let i = 1; i <= 4; i++) {
            canvas[x][y + i] = canvas[x + 3][y + i] = color('-'); // Horizontal
            canvas[x + i][y] = canvas[x + i][y + 5] = color('|'); // Vertical
        }

        canvas[x + 1][y + 2] = color(data);
        canvas[x + 2][y + 2] = color(id.toString());
    }
}

function drawLine(canvas, start, end, color) {
    // Implement ASCII line drawing using '/', '\', and '-'
    let deltaX = end.x - start.x;
    let deltaY = end.y - start.y;
    let steps = Math.max(Math.abs(deltaX), Math.abs(deltaY));
    let xIncrement = deltaX / steps;
    let yIncrement = deltaY / steps;

    let x = start.x;
    let y = start.y;
    for (let i = 0; i <= steps; i++) {
        if (Math.abs(xIncrement) > Math.abs(yIncrement)) {
            canvas[Math.round(x)][Math.round(y)] = color('-');
        } else if (xIncrement * yIncrement > 0) {
            canvas[Math.round(x)][Math.round(y)] = color('\\');
        } else {
            canvas[Math.round(x)][Math.round(y)] = color('/');
        }
        x += xIncrement;
        y += yIncrement;
    }
}
function calculateNodePositions(nodes) {
    let positions = {};
    // Use a larger radius for layout
    let angleIncrement = (2 * Math.PI) / nodes.length;
    let radius = 20; // Larger radius
    nodes.forEach((node, index) => {
        let angle = index * angleIncrement;
        positions[node.id] = {
            x: Math.min(Math.round(radius * Math.cos(angle)) + radius, 49), // adjusting the center
            y: Math.min(Math.round(radius * Math.sin(angle)) + radius * 2, 99) // wider spread
        };
    });
    return positions;
}

function initializeCanvas(height, width) {
    let canvas = new Array(height);
    for (let i = 0; i < height; i++) {
        canvas[i] = new Array(width).fill(' ');
    }
    return canvas;
}



let nodes = [
    { id: 1, data: 'A' },
    { id: 2, data: 'B' },
    { id: 3, data: 'C' },
    { id: 4, data: 'D' },
    { id: 5, data: 'E' },
    { id: 6, data: 'F' },
    { id: 7, data: 'G' },
    { id: 8, data: 'H' },
    { id: 9, data: 'I' },
    { id: 10, data: 'J' }
];

let edges = [
    { startNodeId: 1, endNodeId: 2 },
    { startNodeId: 2, endNodeId: 3 },
    { startNodeId: 3, endNodeId: 4 },
    { startNodeId: 4, endNodeId: 5 },
    { startNodeId: 5, endNodeId: 6 },
    { startNodeId: 6, endNodeId: 7 },
    { startNodeId: 7, endNodeId: 8 },
    { startNodeId: 8, endNodeId: 9 },
    { startNodeId: 9, endNodeId: 10 },
    { startNodeId: 10, endNodeId: 1 },
    { startNodeId: 1, endNodeId: 6 },
    { startNodeId: 2, endNodeId: 7 },
    { startNodeId: 3, endNodeId: 8 },
    { startNodeId: 4, endNodeId: 9 },
    { startNodeId: 5, endNodeId: 10 },
    { startNodeId: 6, endNodeId: 1 },
    { startNodeId: 7, endNodeId: 2 },
    { startNodeId: 8, endNodeId: 3 },
    { startNodeId: 9, endNodeId: 4 },
    { startNodeId: 10, endNodeId: 5 },
    { startNodeId: 1, endNodeId: 7 },
    { startNodeId: 2, endNodeId: 8 },
    { startNodeId: 3, endNodeId: 9 },
    { startNodeId: 4, endNodeId: 10 },
    { startNodeId: 5, endNodeId: 6 },
    { startNodeId: 6, endNodeId: 2 },
    { startNodeId: 7, endNodeId: 3 },
    { startNodeId: 8, endNodeId: 4 },
    { startNodeId: 9, endNodeId: 5 },
    { startNodeId: 10, endNodeId: 6 }
];

visualizeGraph(nodes, edges);
