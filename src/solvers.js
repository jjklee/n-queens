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
  var col = 0;
  var table = board.rows();
  var solution = [];

  var findSingleSolution = function (row, col) {
    if (row === n) {
      return solution;
    } else if (col === n) {
      col = 1;
      row = 0;
      return findSingleSolution(row, col);
    }
    board.togglePiece(row, col);
    if (!board.hasAnyRooksConflicts()) {
      solution.push(table[row]);
      col = 0;
      row++;
      return findSingleSolution(row, col);
    } 
    board.togglePiece(row, col);
    col++;
    return findSingleSolution(row, col);

  };  

  findSingleSolution(row, col);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  // var solutionCount = 0;
  // var board = new Board({'n': n});
  // var row = 0;
  // var col = 0;

  // var findAllSolutions = function(row, col) {
  //   if (n === row) {
  //     solutionCount++;
  //     row = 0;
  //     col = 1;
  //     return findAllSolutions(row, col);
  //   } else if (n === col) {
  //     row++;
  //     col = 0;
  //     return findAllSolutions(row, col);
  //   }
  //   board.togglePiece(row, col);
  //   if (!board.hasAnyRooksConflicts()) {
  //     row++;
  //     return findAllSolutions(row, col);
  //   } 
  //   board.togglePiece(row, col);
  //   col++;
  //   return findAllSolutions(row, col);
  // };

  // findAllSolutions(row, col);

  // console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  // return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n: n});
  var table = board.rows();
  console.log(table);
  var solution = [];
  // where we will put individual rows
  var row = 0;
  // how we will iterate through the rows in table
  var helper = function(row) { //this function will iterate through rows and columns while toggling solutions;
    if (row === n) {
      return solution;
    } 
    //this is our basecase  above which will eventually the possible outcome
    for (var i = 0; i < n; i++) { // i is going to be our column index
      board.togglePiece(row, i); //toggles on
      if (!board.hasAnyQueenConflicts()) { //if no conflict
        solution.push(table[row]);
        console.log('tablerow', table[row]);
        console.log('solution', solution); //push that row into the solution array
        row++; //move to the next line
        i = 0; // **** start your column index back at zero or -1 depending. we will see 
        helper(row);
      } else if (board.hasAnyQueenConflics()) {
        board.togglePiece(row, i); //turns piece back to normal
        helper(row); //start again
      }
    }
    
  };
  helper(row);

  

};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
