
let inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
let ulEl = document.getElementById("ul-el")
let myArr = []

let leadsFromLS = JSON.parse(localStorage.getItem("myArr"))

if (leadsFromLS) {
    myArr = leadsFromLS
    render()
}

inputBtn.addEventListener("click", function() {
    myArr.push(inputEl.value)
   inputEl.value = ""

   localStorage.setItem('myArr', JSON.stringify(myArr))
// localStorage.getItem(key)
// localStorage.clear()
   render()

  
})



function render() {
    let listItems = ""
    for (let i = 0; i < myArr.length; i++) {
       
       listItems += `
       
       <li>
       <a target='_blank' href='${myArr[i]}'>${myArr[i]}</a>
       </li>

       ` 
    }
    ulEl.innerHTML = listItems
   
}





// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()







deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myArr = []
    render()
    
})


tabBtn.addEventListener("click", function() {



    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // since only one tab should be active and in the current window at once
        // the return variable should only have one entry
        myArr.push(tabs[0].url)
    localStorage.setItem('myArr', JSON.stringify(myArr))
    render()

    });

   
})