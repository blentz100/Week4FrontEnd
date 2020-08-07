let id = 0;

document.getElementById('add').addEventListener('click', () => {
	let table = document.getElementById('list');
	let row = table.insertRow(1);

	row.setAttribute('id', `item-${id}`);
	row.insertCell(0).innerHTML = document.getElementById('hike-name').value;
	row.insertCell(1).innerHTML = document.getElementById('distance').value;
	row.insertCell(2).innerHTML = document.getElementById('hike-date').value;
	let actions = row.insertCell(3);
	actions.appendChild(createDeleteButton(id++));
	document.getElementById('hike-name').value = '';
	document.getElementById('distance').value = '';

	//Added next 2 lines as practice. Resetting Date field to current today
	//Have to manipulate the format of the date so days and months are always 2
	let today = new Date();
	date = today.getFullYear()+'-'+(('0' + (today.getMonth() + 1)).slice(-2))+'-'+(('0' + today.getDate()).slice(-2));
	document.getElementById('hike-date').value = date;
});

function createDeleteButton(id){
	let btn = document.createElement('button');
	btn.className = 'btn btn-primary';
	btn.id = id;
	btn.innerHTML = 'Delete';
	btn.onclick = () => {
		console.log(`Deleting row with id: item-${id}`);
		let elementToDelete = document.getElementById(`item-${id}`);
		elementToDelete.parentNode.removeChild(elementToDelete);
	};
	return btn;
}
