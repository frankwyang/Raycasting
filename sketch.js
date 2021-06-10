// 2D Ray Casting
// by Frank Yang,  2021.6.9
// credit: The Coding Train: https://www.youtube.com/watch?v=TOEi6T2mtHo
// math "Line–line intersection": https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection
// How to run p5.js in VSCode: https://marketplace.visualstudio.com/items?itemName=samplavigne.p5-vscode

let numWalls = 5;
// let wall;
let walls = [];
let ray;
let particle;
let xoff = 0;
let yoff = 1000;

function setup() {
    createCanvas(600, 600);
    // wall = new Boundary(100, 100, 200, 300);
    for (let i = 0; i < numWalls; i++) {
        let x1 = random(width);
        let x2 = random(width);
        let y1 = random(height);
        let y2 = random(height);
        walls[i] = new Boundary(x1, y1, x2, y2);
    }
    // 4 outside walls
    walls.push(new Boundary(0, 0, width, 0));
    walls.push(new Boundary(width, 0, width, height));
    walls.push(new Boundary(width, height, 0, height));
    walls.push(new Boundary(0, height, 0, 0));

    // ray = new Ray(100, 200);
    particle = new Particle();
}

function draw() {
    background(0);
    // wall.show();
    for (let wall of walls) {
        wall.show();
    }

    particle.show();
    particle.update(mouseX, mouseY);
    // particle.update(noise(xoff) * width, noise(yoff) * height);

    // particle.look(wall);
    // particle.look(walls[0]);
    particle.look(walls);

    xoff += 0.01;
    yoff += 0.01;

    // ray.show();
    // ray.lookAt(mouseX, mouseY);
    // let pt = ray.cast(wall);
    // // console.log(pt);
    // if (pt) {
    //     fill(255);
    //     ellipse(pt.x, pt.y, 8, 8);
    // }
}

