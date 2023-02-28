/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let res = 0;
  let row = grid.length;
  let col = grid[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) {
        res += 4;
        if (j - 1 >= 0 && grid[i][j - 1] === 1) {
          res -= 2;
        }
        if (i - 1 >= 0 && grid[i - 1][j] === 1) {
          res -= 2;
        }
      }
    }
  }
  return res;
};
// @lc code=end
