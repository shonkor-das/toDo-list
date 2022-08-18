
let count = 0;

document.getElementById('input-btn').addEventListener('click', function(){
    count++;
    const inputValue = document.getElementById('input-value').value;
    document.getElementById('input-value').value = '';

    const mainContainer = document.getElementById('content-container');
    const tableContainer = document.createElement("tr");
    // useing template string 
    tableContainer.innerHTML=`
    <th scope="row">${count}</th>
    <td>${inputValue}</td>
    <td>
    <button class="btn btn-primary">Delete</button>
    <button class="btn btn-warning">Edit</button>
    </td>
    `;
   
    mainContainer.appendChild(tableContainer);
});