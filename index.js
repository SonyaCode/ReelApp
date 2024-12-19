const appSettings = {
    databaseURL: "https://reel-app-7aaab-default-rtdb.firebaseio.com/"
}

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
const app = initializeApp(appSettings)
console.log(app)

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")

addButtonEl.addEventListener("click", function() {
   let inputValue = inputFieldEl.value
  
   console.log(`${inputValue} added to database`)
})
