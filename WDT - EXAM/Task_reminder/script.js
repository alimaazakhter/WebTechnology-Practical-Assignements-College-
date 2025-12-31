// let tasks = [];
let tasks = JSON.parse(localStorage.getItem("tasks"))||[];
function storeToLocal(){
    localStorage.setItem("tasks",JSON.stringify(tasks));
}
// parse() - converts string >>> array
// stringify() convert array >>> string


function addItem(){
    let add = document.getElementById("item").value;

    if(document.getElementById("item").value == ""){
        alert("Please enter task to add!")  
    }
    else{
        // tasks += add;
        tasks.push(add);
        document.getElementById("item").value = '';
        storeToLocal();
        showTable(tasks);
    }
}

function clearItem(){
    tasks = [];
    document.getElementById("reminder").innerHTML = "<tr><th>No</th><th>Reminder</th><th width='30%'>Action</th></tr>";
}

function showTable(tasks){
    let table = document.getElementById("reminder").innerHTML = "<tr class='tbl-heading'><th>No</th><th>Reminder</th><th width='30%'>Action</th></tr>";

    for(let i = 0; i < tasks.length; i++)
    {
        console.log(tasks[i]);
        document.getElementById("reminder").innerHTML += `<tr class="tr${i%2}"><td>${i+1}</td><td>${tasks[i]}</td><td><input class="btn-del" type="button" value="DELETE" onclick="deleteItem(${i})"><input class="btn-del" type="button" value="EDIT" onclick="editItem(${i})"></td></tr>`;
    }
}//setInterval(showTable(tasks), 1000)
showTable(tasks)

function deleteItem(index){
    tasks.splice(index, 1);
    storeToLocal();
    showTable(tasks);
}

function searchItem(){
    let searchText = document.getElementById("search").value;
    let result = [];
    
    if(searchText == "")
    {
        storeToLocal();
        showTable(item);
        return;
    }
    else
    {
        for(let i = 0; i <= tasks.length; i++)
        {
            if(tasks[i].toLowerCase().includes(searchText)){
                result.push(tasks[i]);
                storeToLocal();
                showTable(result);
            }
            else{
                showTable(result);
            }
        }
        
    }
}

function editItem(index){
    document.getElementById("item").value = tasks[index];
    tasks.splice(index, 1);
    storeToLocal();
    showTable(tasks);

}