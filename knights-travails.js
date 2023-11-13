// 8x8 chessboard, each square's key is two coordinates "x,y", and its value is an empty array
function createBoard() {
  let board = new Map;

  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
       board.set(`${[x, y]}`, []) ;
      }
    }
  return board;
}

const chessboard = createBoard();

// possible moves of a knight that's standing in coordinates XY
function allowedMoves(coordinates) {
  const knightsMoves = [
    //x // y
    [1, 2],
    [2, 1],
    [2, - 1],
    [1, - 2],
    [- 1, - 2],
    [- 2, - 1],
    [- 2, 1],
    [- 1, 2]
  ];
  
  // list all possible moves of a knight
  const possibleMoves = knightsMoves.map((move) => {
    const newX = coordinates[0] + move[0];
    const newY = coordinates[1] + move[1];
    if (newX < 8 && newX >= 0 &&
    newY < 8 && newY >= 0) {
      return `${newX},${newY}`;
    }
  }).filter((move) => move);
  return possibleMoves;
}

// get all possible knight's moves for the whole chessboard
function getAllMoves() {
  for (let [key] of chessboard) {
    let [x, y] = key.split(',');
    x = parseInt(x);
    y = parseInt(y);
    let allowed = allowedMoves([x, y]);
    //for a "x,y" key of the chessboard map, set as value an array of all allowed moves for this coordinate
    chessboard.set(key, allowed);
  }
}

getAllMoves();



// find the shortest path from start "x,y" to end "x,y", using breadth-first search algorithm
function knightMoves(start, end) {
  // parse arrays with coordinates to strings in "x,y" format
  start = start.toString();
  end = end.toString();

  const visited = new Set();
  const queue = [];
  const paths = [];
  
  queue.push([start, [start]]);
  visited[start] = true;

  while (queue.length > 0) {
    // current location and full path of the knight
    let [location, path] = queue.shift();
    
    visited[location] = true;

    // the shortest path was found
    if (location == end) {
      paths.push(path);
      logShortestPath(paths[0]);
      break;
    }
    
    // get all allowed moves for the current location
    let possibleMoves = chessboard.get(location);
    for (let move of possibleMoves) {
      //make sure the new location hasn't been visited
      if (!visited.has(move)) {
       queue.push([move, [...path, move]]);
      }
    }
 }
}

// print the full path
function logShortestPath(paths) {
  let fullPath = "";
  
  for (let i = 0; i < paths.length - 1; i++) {
    fullPath += `[${paths[i]}] =>`;
  }
  
  fullPath += paths[paths.length - 1];
  console.log(`The shortest path to move the knight from [${paths[0]}] to [${paths[paths.length - 1]}] is: ${fullPath}`);
}

knightMoves([0,0], [7,7]);