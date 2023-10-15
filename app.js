// exercise question 1:
const container1 = document.getElementById('container');

// exercise question 2:
const container2 = document.querySelector('#container');

// question 3
const listSecond = document.querySelectorAll('.second');

// question 4
const orderList = document.querySelector('ol');
const third = orderList.querySelector('.third');

// question 5
// with reference to question 1
container1.innerText = 'Hello!';

// question 6
const footer = document.querySelector('div.footer');
footer.classList.add('main');

// question 7
footer.classList.remove('main');

// question 8
const newElement = document.createElement('li');

// question 9
newElement.innerText = 'four';
newElement.classList.add('fourth'); // wasn't asked for, but consistent

// question 10
const unorderList = document.querySelector('ul');
unorderList.append(newElement);

// question 11
// we've already found the ordered list in q4
const listElements = orderList.querySelectorAll('li');
for (let listElement of listElements) {
    listElement.style.backgroundColor = 'green';
}

// question 12
// we found the footer in q6
footer.remove();