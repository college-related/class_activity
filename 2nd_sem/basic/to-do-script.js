function add()
{
    var uncompleteList = document.getElementById("list");
    var to_dos = document.getElementById("task").value;
    uncompleteList.innerHTML += "<input type='checkbox'>&nbsp;<li>"+to_dos+"</li><br/>";
    i++;
}