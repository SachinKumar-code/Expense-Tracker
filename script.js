let balance = 7000;
let income = 25000;
let expenses = 18000;
let items = [];

// Update balance, income, and expenses
function updateBalance() {
    document.getElementById('updatedBal').innerHTML = balance;
    document.getElementById('updatedInc').innerHTML = income;
    document.getElementById('updatedExp').innerHTML = expenses;
}

// Add new item to the table
function addItem() {
    let itemType = document.getElementById('itemType').value;
    let name = document.getElementById('name').value;
    let amount = parseInt(document.getElementById('amount').value);

    if (itemType === '0') {
        expenses += amount;
        balance -= amount;
    } else {
        income += amount;
        balance += amount;
    }

    items.push({
        name: name,
        amount: amount,
        type: itemType
    });

    updateTable();
    updateBalance();
}

// Update the table with new items
function updateTable() {
    let table = document.getElementById('table');
    let tbody = table.getElementsByTagName('tbody')[0];

    if (!tbody) {
        tbody = document.createElement('tbody');
        table.appendChild(tbody);
    }

    tbody.innerHTML = '';

    for (let i = 0; i < items.length; i++) {
        let row = document.createElement('tr');
        let sNoCell = document.createElement('td');
        let nameCell = document.createElement('td');
        let amountCell = document.createElement('td');
        let typeCell = document.createElement('td');
        let deleteCell = document.createElement('td');

        sNoCell.innerHTML = i + 1;
        nameCell.innerHTML = items[i].name;
        amountCell.innerHTML = items[i].amount;
        typeCell.innerHTML = items[i].type === '0' ? 'Expense' : 'Income';
        deleteCell.innerHTML = '<button onclick="deleteItem(' + i + ')">Delete</button>';

        row.appendChild(sNoCell);
        row.appendChild(nameCell);
        row.appendChild(amountCell);
        row.appendChild(typeCell);
        row.appendChild(deleteCell);

        tbody.appendChild(row);
    }
}

// Delete an item from the table
function deleteItem(index) {
    let itemType = items[index].type;
    let amount = items[index].amount;

    if (itemType === '0') {
        expenses -= amount;
        balance += amount;
    } else {
        income -= amount;
        balance -= amount;
    }

    items.splice(index, 1);

    updateTable();
    updateBalance();
}

updateBalance();