const formGrocery = document.querySelector(".grocery-form");
const btnGrocery = document.querySelector(".grocery-list");
const inputGrocery = document.getElementById("grocery");
const list = document.querySelector(".grocery-list");
const containerGrocery = document.querySelector(".grocery-container");
const alert = document.querySelector(".alert");

let editElement;
let editFlag = false;
let editID = "";

formGrocery.addEventListener("submit", addItem);
window.addEventListener("DOMContentLoaded", setupIems);

function addItem(e) {
  e.preventDefault;
  const value = inputGrocery.value;
  const id = new Date().getTime().toString();

  if (value !== "" && !editFlag) {
    const element = document.createElement("article");

    const attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.classList.add("grocery-item");
    element.innerHTML = `<div class="title">${value}</div>
            <div class="btn-container">
              <span class="edit-btn">
                <i class="fas fa-edit"></i>
              </span>
              <span class="delete-btn">
                <i class="fas fa-trash"></i>
              </span>
            </div>
          `;
    list.appendChild(element);
    // display alert
    displayAlert("item added to the list", "success");
    // show container
    containerGrocery.classList.add("show-container");
    addToLocalStorage(id, value);
    // set back to default
    setBackToDefault();
  } else if (value !== "" && editFlag) {
    editElement.innerHTML = value;
    displayAlert("value changed", "success");

    editLocalStorage(editID, value);
    setBackToDefault();
  }
}

function setupIems() {}
