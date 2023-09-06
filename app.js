var inp = document.getElementById("input");
var toDoList = document.getElementById("toDoLi");
var toDoData = [];
var edit = document.getElementById("editHide")
var updated = document.getElementById("updated");

// ========add
function addToDo() {
    if(inp.value === ""){ alert("Insert Your Task")}
    else{
        toDoData.push(inp.value);
    inp.value = "";
    render();
    }
}
// ========render
function render(delAll) {
    toDoList.innerHTML = "";
    if (delAll) {
        toDoData = [];
        return;
    }
    for (i = 0; i < toDoData.length; i++) {
        toDoList.innerHTML += `<div class="list" >
<li class="pad" > ${toDoData[i]}</li> 
 <span class="btnvisible" ><button class="nBtn1"  onclick="editToDO(${i})"><i class="fa-solid fa-pen"></i></button> <button class="nBtn2" onclick="deleteToDO(${i})"><i class="fa-solid fa-trash"></i></button></span>
 </div>`
    }
}
var lastData;
// ==========edit
function editToDO(e) {
    lastData = toDoData[e]
    toDoData[e] = toDoData[e].innerHTML = `<div><input type="text" name=""id="updated">
    <span><button onclick= "submit(${e})">Submit</button> <button onclick = "cancel(${e})" id="cbtn" >Cancel</button></span></div>`;
       render();
}
// ===========delete
function deleteToDO(e) {
    toDoData.splice(e, 1);
    render();
}

function submit(e) {
    var up = document.getElementById("updated")
    toDoData[e] = up.value;
    render();
}

function cancel(e){
  toDoData[e] = lastData;
  render(); 
 

}



