const readline = require("readline");

function convert(s, numRows) {
    if (numRows === 1 || s.length <= numRows) {
        return s;
    }

    const rows = Array.from(
        { length: Math.min(numRows, s.length) },
        () => ""
    );

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

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the string: ", (s) => {
    rl.question("Enter number of rows: ", (numRows) => {

        const result = convert(s, parseInt(numRows));

        console.log("\nResult:", result);

        rl.close();
    });
});
