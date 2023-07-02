document.addEventListener("DOMContentLoaded", function() {
    const cells = document.querySelectorAll(".cell");
    let currentPlayer = "red";

    cells.forEach(function(cell) {
        cell.addEventListener("click", function() {
            if (cell.classList.length === 1) {
                const row = getAvailableRow(cell);
                if (row) {
                    const cellBelow = row.querySelector(".cell");
                    cellBelow.classList.add("animate-drop", currentPlayer);
                    setTimeout(function() {
                        cellBelow.classList.remove("animate-drop");
                        cellBelow.classList.add(currentPlayer);
                        currentPlayer = currentPlayer === "red" ? "yellow" : "red";
                    }, 500);
                }
            }
        });
    });

    function getAvailableRow(cell) {
        const rowIndex = [...cell.parentElement.parentElement.children].indexOf(cell.parentElement);
        if (rowIndex < 5) {
            const rowsBelow = [...cell.parentElement.parentElement.children].slice(rowIndex + 1);
            for (const row of rowsBelow) {
                const cellBelow = row.children[cell.cellIndex];
                if (cellBelow.classList.length === 1) {
                    return row;
                }
            }
        }
        return null;
    }
});
