let body = document.querySelector('body');
let send = document.getElementById('send');
let itemsBox = document.getElementsByClassName('itemsBox')[0];
let rowBox = document.getElementById('rowBox');
let rowBoxContent = document.getElementById('rowBoxContent');

rowBoxContent.append(rowBox);
//send click function starts
send.addEventListener('click', function () {
    let item = document.createElement('div');
    item.style.background = '#329ea8';
    item.style.height = "80px";
    item.style.width = "150px";
    item.style.margin = "15px";
    item.style.color = "white";
    itemsBox.appendChild(item);

    let ul = document.createElement('ul');
    let li1 = document.createElement('li');
    let li2 = document.createElement('li');
    let li3 = document.createElement('li');
    item.append(ul);
    ul.append(li1);
    ul.append(li2);
    ul.append(li3);
    li1.style.listStyleType = "none";
    li2.style.listStyleType = "none";
    li3.style.listStyleType = "none";
    let title = document.getElementById('title').value;
    let desc = document.getElementById('desc').value;
    li1.textContent = title;
    li2.textContent = desc.slice(0, 15);

    let currentDate = new Date();
    let currentDay = currentDate.getDate();
    let currentMonth = currentDate.getMonth() + 1;
    let currentYear = currentDate.getFullYear();
    li3.textContent = currentDay + " /" + " /" + currentMonth + " /" + currentYear;

    let rowBoxDetails = document.createElement('div');
    rowBoxContent.append(rowBoxDetails);
    let rowBoxItem = document.createElement('div');
    rowBoxDetails.append(rowBoxItem);
    rowBoxItem.style.backgroundColor = "#0398fc";
    rowBoxItem.style.color = "white";
    rowBoxItem.style.padding = "20px";
    rowBoxItem.style.display = "flex";
    rowBoxItem.style.justifyContent = "space-between";
    rowBoxItem.style.textAlign = "center";
    let htmlElementsBox = document.createElement('div');
    let htmlElements = document.createElement('h3');
    rowBoxItem.append(htmlElementsBox);
    htmlElementsBox.append(htmlElements);
    htmlElements.textContent = li1.textContent;

    let descElementBox = document.createElement('div');
    let descElement = document.createElement('p');
    rowBoxItem.append(descElementBox);
    descElementBox.append(descElement);
    descElement.textContent = desc;

    let deleteBox = document.createElement('div');
    let deleteButton = document.createElement('button');
    rowBoxItem.append(deleteBox);
    deleteBox.append(deleteButton);
    deleteButton.textContent = "Remove";
    //hover 
    deleteButton.addEventListener('mouseover', () => {
        // Change the button's background color
        deleteButton.style.color = "white";
        deleteButton.style.backgroundColor = '#ff0000';
    });
    //send click function ends
    // one item remove click function starts 
    deleteButton.addEventListener('click', function () {
        rowBoxItem.remove();
        item.remove();
    })
    //remove click function ends
    //all item remove click function starts
    let removeAll = document.getElementById('removeAll');
    removeAll.addEventListener('click', function () {
        rowBoxDetails.remove();
        item.remove();
    })
    //all item remove click function ends
})