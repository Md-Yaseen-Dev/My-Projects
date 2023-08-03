
// const btnE1 = document.getElementById("btn");


// function generateTable() {

//     const inputE1 = document.getElementById("number1").value;
//     const inputE2 = document.getElementById("number2").value;

//     const Numbertable = document.getElementById("table-num");

//     if (inputE1 == "" || inputE2 == "") {

//         alert("please give numbers in the input");


//     }

//     const num1 = parseInt(inputE1);
//     const num2 = parseInt(inputE2);

//     for (let i = num1; i <= num2; i++) {

//         // const tableContainer = document.createElement("div")
//         // tableContainer.className = "table-container"
//         const divE1 = document.createElement("div");
//         divE1.classList.add("result");
//         const table = document.createElement("table")
//         const row = document.createElement("tr");
//         const tHeading = document.createElement("th");
//         tHeading.textContent = `${i}`
//         row.appendChild(tHeading);
//         table.appendChild(row);

//         for (let j = 1; j <= 10; j++) {

//             const row2 = document.createElement("tr");
//             const data = document.createElement("td");
//             data.textContent = `${j * i}`

//             data.addEventListener("click", function () {

//                 divisibleNumber(i * j)
//             })
//             data.className = "number cell"

//             row2.appendChild(data);
//             table.appendChild(row2);
//         }
//         divE1.appendChild(table);
//         Numbertable.appendChild(divE1)
//     }
// }

// btnE1.addEventListener("click", (event)=>{

//     generateTable()
// })

const btn = document.getElementById("btn");
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
  for (let i = converStartNum; i <= convertEndNum; i++) {
    const tableContainer = document.createElement("div");
    tableContainer.className = "table-container";
    const table = document.createElement("table");
    const row = document.createElement("tr");
    // const tHeading = document.createElement("th");
    // tHeading.textContent = `${i}`;
    // row.appendChild(tHeading);
    table.appendChild(row);
    for (let j = 1; j <= 10; j++) {
      const row = document.createElement("tr");
      const tData = document.createElement("td");
      tData.textContent = `${j * i}`;
      tData.addEventListener("click", function () {
        divisibleNumbers(i * j);
      });
      tData.className = "number-cell";
      row.appendChild(tData);
      table.appendChild(row);
    }
    tableContainer.appendChild(table);
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