/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var board = new Board({n: n});
  var row = 0;
  var solution = board.rows();
  // var solution = []; 

  var findSingleSolution = function(row) {
  
    if (row === n) {
      return solution;
    } 
    for (let col = 0; col < n; col++) {
      board.togglePiece(row, col);
      if (!board.hasAnyRooksConflicts()) {
        // solution.push(table[row]);
        row++;
        return findSingleSolution(row);
      }
      board.togglePiece(row, col);
    }
  };

  findSingleSolution(row);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n: n});
  var row = 0;
  
  var findSingleSolution = function(row) {
    if (row === n) {
      return solutionCount++;
    } 
    for (let col = 0; col < n; col++) {
      board.togglePiece(row, col);
      if (!board.hasAnyRooksConflicts()) {
      
        findSingleSolution(row + 1);
      } 
      board.togglePiece(row, col);
    }
  };

  findSingleSolution(row);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n: n});
  var row = 0;
  var solution = board.rows();
  var toggle = false; 

  var findSingleSolution = function(row) {
    if (row === n) {
      toggle = true;
      return solution;
    } 
    for (let col = 0; col < n; col++) {
      board.togglePiece(row, col);
      if (!board.hasAnyQueensConflicts()) {
        findSingleSolution(row + 1);
      } 
      if (toggle) {
        return;
      }
      board.togglePiece(row, col);
    }
  };

  findSingleSolution(row);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n: n});
  var row = 0;
  
  var findSingleSolution = function(row) {
    if (row === n) {
      return solutionCount++;
    } 
    for (let col = 0; col < n; col++) {
      board.togglePiece(row, col);
      if (!board.hasAnyQueensConflicts(col)) {
      
        findSingleSolution(row + 1);
      } 
      board.togglePiece(row, col);
    }
  };

  findSingleSolution(row);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};  
