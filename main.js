// RANKING LIST START CODE

// HTML Variables
let outputEl = document.getElementById("output");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);
let list = [1, 2, 3, 4, 5];
for (let i = 0; i < list.length; i++) {
  document.getElementById("output").innerHTML += `<div> ${i + 1}: ${list[i]}</div>`;
}
function btnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu").value;

  // Implement Menu Selection
  if (selection === "add") {
    addItem();
  } else if (selection === "remove-last") {
    removeLast();
  } else if (selection === "insert") {
    insert();
  } else if (selection === "remove-pos") {
    removePos();
  } else if (selection === "move") {
    move();
  } else if (selection === "edit") {
    edit();
  }
  document.getElementById("output").innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    document.getElementById("output").innerHTML += `<div> ${i + 1}: ${list[i]}</div>`;
  }
}

// Menu Option Functions
function addItem() {
  list.push(prompt("Enter item:"));
  console.log("Add Item");
}

function removeLast() {
  list.pop();
}

function insert() {
  list.splice(+prompt("Insert position:") - 1, 0, prompt("Item to insert:"));
  console.log("Insert");
}

function removePos() {
  list.splice(+prompt("Insert position:") - 1, 1);
}

function move() {
  let destination = +prompt("Move item to:") - 1;
  let origin = +prompt("Move item from:") - 1;
  let temp = list[origin];
  list[origin] = list[destination];
  list[destination] = temp;
  // temporary variable
}

function edit() {
  list[+prompt("Enter position:") - 1] = prompt("Replace with:");
}
