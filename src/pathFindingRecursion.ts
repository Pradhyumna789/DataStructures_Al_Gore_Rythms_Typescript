const dir = {
    [-1, 0], // left
    [1, 0], // right
    [0, -1], // down
    [0, 1], // up
};

function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
    // Base case
    // off the map
    if(curr.x < 0 || curr.x >= maze[0].length || curr.y < 0 || curr.y >= maze.length) { // maze[0] first row of the given square(maze is a square) and maze.length is how many total number of rows we have
        return false;         
    }

    // on a wall
    if(maze[curr.y][curr.x] === wall) {
        return false;
    }

    // reached the end
    if(curr.x === end.x && curr.y === end.y) {
        path.push(end);
        return true;
    }

    // if we've seen this tile before or not
    if(seen[curr.y][curr.x]) {
        return false;
    }

    // push
    seen[curr.y][curr.x] = true;
    path.push(curr);

    // recurse all the 4 directions 
    for(let i = 0; i < dir.length; i++) {
        const[x, y] = dir[i];
        if(walk(maze, wall, {
            x: curr.x + x,
            y: curr.y + y,
        }, end, seen, path)) {
            return true; // if walk is successful we return true
        }
    }

    // pop
    path.pop();
    
    return false; // if we recurse, reach the end and did not find any end in our curr position we return false
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] { // need to return a list of points from the start to the end
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for(let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);
    return path;
}