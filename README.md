# Zigzag Conversion

## Overview

The Zigzag Conversion is a string manipulation algorithm that converts a given string into a zigzag pattern across a specified number of rows, then reads it row-by-row to produce the converted output.

## Problem Description

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this (you may want to do this manually with a few examples first):

```
P       A       H       N
A   P   L   S   I   R   I   G
Y       I
```

And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

```
string convert(string s, int numRows);
```

## Examples

### Example 1
```
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"

Visualization:
P   A   H   N
A P L S I R I G
Y   I
```

### Example 2
```
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"

Visualization:
P       I       N
A   L   S   I   G
Y   A   H   R
P       I
```

### Example 3
```
Input: s = "A", numRows = 1
Output: "A"
```

## Algorithm Explanation

1. **Create rows array**: Initialize an array to store characters for each row
2. **Track direction**: Use a flag to track whether we're moving down or up
3. **Iterate through string**: For each character:
   - Add it to the current row
   - Check if we've hit the top (row 0) or bottom (row numRows-1)
   - If so, change direction
   - Move to the next row
4. **Join rows**: Concatenate all row strings to get the final result

### Time Complexity: O(n)
- Where n is the length of the string

### Space Complexity: O(n)
- To store the result in the rows array

## Files

- **zigzag-conversion.js** - The main JavaScript implementation with console example
- **interactive.html** - Interactive web interface to test the algorithm
- **display.html** - Static display showing the result
- **README.md** - This documentation file

## Usage

### Option 1: Run in Node.js
```bash
node zigzag-conversion.js
```

### Option 2: Use the Interactive Web Interface
Open `interactive.html` in your browser to:
- Enter any string
- Specify the number of rows
- Get instant conversion results

### Option 3: Use in Your Code
```javascript
function convert(s, numRows) {
    if (numRows === 1 || s.length <= numRows) {
        return s;
    }

    const rows = Array.from({ length: Math.min(numRows, s.length) }, () => "");
    
    let currentRow = 0;
    let goingDown = false;

    for (const char of s) {
        rows[currentRow] += char;

        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }

        currentRow += goingDown ? 1 : -1;
    }

    return rows.join("");
}

// Example usage
const result = convert("PAYPALISHIRING", 3);
console.log(result); // Output: "PAHNAPLSIIGYIR"
```

## Edge Cases

- **Single row**: If `numRows = 1`, the output is the same as input
- **Short string**: If string length ≤ numRows, the output is the same as input
- **Empty string**: Returns empty string
- **Single character**: Returns that character

## Testing

Try these test cases:

```javascript
convert("PAYPALISHIRING", 3)    // "PAHNAPLSIIGYIR"
convert("PAYPALISHIRING", 4)    // "PINALSIGYAHRPI"
convert("A", 1)                 // "A"
convert("AB", 1)                // "AB"
convert("ABCD", 2)              // "ACBD"
```

## How the Interactive Tool Works

The `interactive.html` file provides a user-friendly interface where you can:

1. Enter any string in the input field
2. Specify the number of rows (1 or more)
3. Click "Run Conversion" or press Enter
4. View the converted output instantly

This is perfect for testing different inputs and understanding how the algorithm works!

## Real-World Applications

- Text encoding/decoding in cryptography
- Rail fence cipher
- Data compression patterns
- String transformation algorithms

## License

This project is free to use and modify.

## Author

Created for educational purposes to demonstrate string manipulation and algorithmic thinking.
