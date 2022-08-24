import React from 'react';

export default function Sudoku() {
  /*
Have the function SudokuQuadrantChecker(strArr) read the strArr parameter being passed, which
will represent a 9x9 Sudoku board of integers ranging from 1 to 9. The rules of Sudoku are to
place each of the 9 integers integer in every row and column and not have any integers repeat
in the respective row, column, or 3x3 sub-grid. The input strArr will represent a Sudoku board
and it will be structured in the following format: ["(N,N,N,N,N,x,x,x,x)","(...)","(...)",...)]
where N stands for an integer between 1 and 9 and x will stand for an empty cell. Your program
will determine if the board is legal; the board also does not necessarily have to be finished. If
the board is legal, your program should return the string legal but if it isn't legal, it should
return the 3x3 quadrants (separated by commas) where the errors exist. The 3x3 quadrants are
numbered from 1 to 9 starting from top-left going to bottom-right.
For example, if strArr is: ["(1,2,3,4,5,6,7,8,1)","(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)",
"(1,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)",
"(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)"] then your program should return 1,3,4 since the
errors are in quadrants 1, 3 and 4 because of the repeating integer 1.
Another example, if strArr is: ["(1,2,3,4,5,6,7,8,9)","(x,x,x,x,x,x,x,x,x)","(6,x,5,x,3,x,x,4,x)"
"(2,x,1,1,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)",
"(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,9)"] then your program should return 3,4,5,9.
*/

  const helpers = {
    holdObj: {},
  };

  const SudokuQuadrantChecker = strArr => {
    helpers.holdObj = {};
    // clean the array from array of strings to an array of nine nine-member arrays.
    const modStrArr = strArr.map(val => val.replace(/[()]/g, '').split(','));
    // make two new copies of the array to be used
    const copy1Arr = modStrArr.slice(0);
    const copy2Arr = modStrArr.slice(0);

    // val is the row string, ind is the row number - send each to rowTester
    modStrArr.forEach((val, ind) => {
      helpers.rowTester(val, ind);
    });

    // Part II - organize arrays based on columns and send to vertTester method for checking

    // create a 'row' out of each column, and send it to vertTester.  vertTester will
    // be exactly the same as rowTester, except the output will be inverted to give
    // the correct blocks
    copy1Arr[0].forEach((val, ind) => {
      const vertArr = [];
      for (let i = 0; i < 9; i++) {
        vertArr.push(copy1Arr[i][ind]);
      }
      helpers.vertTester(vertArr, ind);
    });

    // Part III - create a 'row' out of each block, and send it to blockTester.
    // blockTester will be exactly the same as rowTester, except the output will
    // be the offending blocks
    for (let a = 0; a < 3; a++) {
      for (let b = 0; b < 3; b++) {
        const blockArr = [];
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            blockArr.push(copy2Arr[a * 3 + i][b * 3 + j]);
          }
        }
        helpers.blockTester(blockArr, a.toString() + b.toString());
      }
    }

    let blocks = Object.keys(helpers.holdObj);
    if (!blocks.length) {
      return 'legal';
    }
    blocks = blocks.map(val => parseInt(val, 3) + 1).sort();
    return blocks.join(',');
  };

  Object.assign(helpers, {
    rowTester(arr, num) {
      // format the string as an array of nine number strings
      // var newArr = str.replace(/[()]/g, '').split(',');
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (arr[i] !== 'x' && arr[i] === arr[j] && i !== j) {
            const rep1 =
              Math.floor(num / 3).toString() + Math.floor(i / 3).toString();
            rep1 in helpers.holdObj
              ? helpers.holdObj[rep1]++
              : (helpers.holdObj[rep1] = 1);
          }
        }
      }
    },
    vertTester(arr, num) {
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (arr[i] !== 'x' && arr[i] === arr[j] && i !== j) {
            const rep1 =
              Math.floor(i / 3).toString() + Math.floor(num / 3).toString();
            rep1 in helpers.holdObj
              ? helpers.holdObj[rep1]++
              : (helpers.holdObj[rep1] = 1);
          }
        }
      }
    },
    blockTester(arr, block) {
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (arr[i] !== 'x' && arr[i] === arr[j] && i !== j) {
            block in helpers.holdObj
              ? helpers.holdObj[block]++
              : (helpers.holdObj[block] = 1);
          }
        }
      }
    },
  });

  return SudokuQuadrantChecker([
    '(1,2,3,4,5,6,7,8,1)',
    '(x,x,x,x,x,x,x,x,x)',
    '(x,x,x,x,x,x,x,x,x)',
    '(1,x,x,x,x,x,x,x,x)',
    '(x,x,x,x,x,x,x,x,x)',
    '(x,x,x,x,x,x,x,x,x)',
    '(x,x,x,x,x,x,x,x,x)',
    '(x,x,x,x,x,x,x,x,x)',
    '(x,x,x,x,x,x,x,x,x)',
  ]);

  return <div>Sudoku</div>;
}
