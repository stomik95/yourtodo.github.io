const inputBox = document.querySelector(".inputfield input");
const addBtn = document.querySelector(".inputfield button");
const todoList = document.querySelector(".todolist");
const deleteAllBtn = document.querySelector(".footer button")

inputBox.onkeyup = ()=>{
    let userData = inputBox.value;
    if(userData.trim() != 0){
        addBtn.classList.add("active");
    }else{
        addBtn.classList.remove("active");
    }
}

showTasks();

addBtn.onclick = () =>{
    let userData = inputBox.value;
    let getlocalStorage = localStorage.getItem("New Todo");
    if(getlocalStorage == null){
        listArr = [];
    }else{
        listArr = JSON.parse(getlocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();

}

function showTasks() {
    let getlocalStorage = localStorage.getItem("New Todo");
    if(getlocalStorage == null){
        listArr = [];
    }else{
        listArr = JSON.parse(getlocalStorage);
}
const pendingNumber = document.querySelector(".pendingNumber");
pendingNumber.textContent = listArr.length;

let newLiTag = '';
listArr.forEach((element, index) => {
    newLiTag += `<li> ${element} <span onclick = "deleteTask(${index})"; ><i class="fas fa-trash"></i></span></li>`;
});

todoList.innerHTML = newLiTag;
inputBox.value = "";
}
 //20 minute continue

 //delete task function
function deleteTask(index){
    let getlocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getlocalStorage);
    listArr.splice(index, 1); //del or remove the particular indexed li
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}

//delete all task's

deleteAllBtn.onclick = () =>{
    listArr = [];
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}

