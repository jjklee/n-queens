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
  var rowIndex = 0;
  var colIndex = 0;
  var table = board.rows();
  var solution = [];
  if (n < 1) {
    return solution;
  }
  var helper = function (rowIndex, colIndex) {
    if (rowIndex === n) {
      return solution;
    } else if (colIndex === n) {
      rowIndex++;
      return helper(rowIndex, colIndex);
    }
    board.togglePiece(rowIndex, colIndex);
    if (!board.hasAnyRooksConflicts()) {
      solution.push(table[rowIndex]);
      rowIndex++;
      return helper(rowIndex, colIndex);
    } else {
      board.togglePiece(rowIndex, colIndex);
      colIndex++;
      return helper(rowIndex, colIndex);
    }
  };  

  helper(rowIndex, colIndex);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  console.log(solution);
  return solution;
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  // findNRooksSolution()
  
  // var hold = function (rowIndex) {
  //   var board = new Board({n: n});
    
  //   var table = board.rows();
  //   var solution = [];
    
  //   if (n < 1) {
  //     return solution;
  //   }
  //   var helper = function (rowIndex) {
  //     for (var i = 0; i < n; i++) {
  //       // if (rowIndex === n) {
  //       //   solutionCount++;
  //       //   return solution;
  //       // }
  //       board.togglePiece(rowIndex, i);
  //       if (!board.hasAnyRooksConflicts()) {
  //         solution.push(table[rowIndex]);
  //         continue; 
  //       } 
  //       board.togglePiece(rowIndex, i);
  //       helper(rowIndex++);
  //     }
  //   };  

  //   helper(rowIndex);
  //   solutionCount++;
  // };
  // hold(rowIndex++);
  // console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  // return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
