const btn = document.getElementById("btn");

// ----------------generatetable------------------------------------
function generateTable() {
  const startNumber = document.getElementById("number1").value.toLowerCase().trim();
  const endNumber = document.getElementById("number2").value.toLowerCase().trim();
  const numberTable = document.getElementById("table-num");
  const converStartNum = parseInt(startNumber);
  const convertEndNum = parseInt(endNumber);
  if (converStartNum === "" || convertEndNum === "") {
    alert("Please enter a number");
    return;
  }
  // ---------------------numbers from start ti end ------------------------------
  for (let i = converStartNum; i <= convertEndNum; i++) {
    const tableContainer = document.createElement("div");
    tableContainer.className = "table-container";
    const row = document.createElement("tr");
    // const table = document.createElement("table");
    // const row = document.createElement("tr");
    // const tHeading = document.createElement("th");
    // tHeading.textContent = `${i}`;
    // row.appendChild(tHeading);
    // table.appendChild(row);
    for (let j = 1; j <= 10; j++) {
      const tData = document.createElement("td");
      tData.textContent = `${j * i}`;
      tData.addEventListener("click", function () {
        divisibleNumbers(i * j);
      });
      tData.className = "number-cell";
      row.appendChild(tData);
      // table.appendChild(row);
    }
    tableContainer.appendChild(row);
    numberTable.appendChild(tableContainer);
  }
}

function divisibleNumbers(number) {
  const cells = document.getElementsByClassName("number-cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].classList.remove("highlight");
  }

  for (let i = 0; i < cells.length; i++) {
    if (parseInt(cells[i].textContent) % number === 0) {
      cells[i].classList.add("highlight");
    }
  }
}

btn.addEventListener("click", (event) => {
  generateTable();
});