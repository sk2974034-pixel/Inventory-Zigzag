/**
 * Converts a string into a zigzag pattern on a given number of rows,
 * then reads it line-by-line.
 * 
 * @param {string} s - The input string.
 * @param {number} numRows - The number of rows for the zigzag pattern.
 * @return {string} - The reconstructed string read row-by-row.
 */
function convert(s, numRows) {
    // Edge case: If there is only 1 row, or the string is shorter than the rows,
    // the zigzag pattern remains the same as the original string.
    if (numRows === 1 || s.length <= numRows) {
        return s;
    }

    // Create an array of empty strings to represent each row
    const rows = Array.from({ length: Math.min(numRows, s.length) }, () => "");
    
    let currentRow = 0;
    let goingDown = false;

    // Traverse the string character by character
    for (const char of s) {
        rows[currentRow] += char;

        // Switch direction if we hit the top row (0) or bottom row (numRows - 1)
        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }

        // Move to the next row
        currentRow += goingDown ? 1 : -1;
    }

    // Join all the row strings together to get the final result
    return rows.join("");
}

// --- Example Usage ---
const inputStr = "PAYPALISHIRING";
const numRows = 3;
const result = convert(inputStr, numRows);

console.log(`Input: s = "${inputStr}", numRows = ${numRows}`);
console.log(`Output: "${result}"`); // Output: "PAHNAPLSIIGYIR"