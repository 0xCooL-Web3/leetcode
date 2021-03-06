/**
    https://leetcode.com/submissions/detail/689681882/
    Runtime: 96 ms, faster than 79.62% of JavaScript online submissions for Subrectangle Queries.
    Memory Usage: 48.3 MB, less than 31.85% of JavaScript online submissions for Subrectangle Queries.

 * @param {number[][]} rectangle
 */
 var SubrectangleQueries = function(rectangle) {
    this.grid = rectangle;
    
    return this;
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2 
 * @param {number} newValue
 * @return {void}
 */
SubrectangleQueries.prototype.updateSubrectangle = function(row1, col1, row2, col2, newValue) {
    for(let i=row1; i<=row2; i++)
        for(let j=col1; j<=col2; j++)
            this.grid[i][j] = newValue;
};

/** 
 * @param {number} row 
 * @param {number} col
 * @return {number}
 */
SubrectangleQueries.prototype.getValue = function(row, col) {
    return this.grid[row][col];
};

/** 
 * Your SubrectangleQueries object will be instantiated and called as such:
 * var obj = new SubrectangleQueries(rectangle)
 * obj.updateSubrectangle(row1,col1,row2,col2,newValue)
 * var param_2 = obj.getValue(row,col)
 */