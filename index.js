//select Library array
let myLibrary = [];
let container = document.querySelector('.container');
const addBookModal = document.getElementById('addBookModal');
const overlay = document.getElementById('overlay');
let add_new = document.getElementById('new');
let submit = document.querySelector('.submit');

//listen for a click on submit button
// 1
submit.addEventListener('click', (event) => {
	event.preventDefault();
	container.innerHTML = '';
	getBookFromInput();
	//3
	const newBook = getBookFromInput();
	console.log(newBook);

	//4
	myLibrary.push(newBook);
	closeAddBookModal();
	//5
	loop();
});

//listen for a click on the add new book button
add_new.addEventListener('click', () => {
	addBookModal.classList.add('active');
	overlay.classList.add('active');
});

//book constructor
function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function () {
		return `The ${title} by ${author}, ${pages} pages, ${read} read yet`;
	};
}

//display the new book on html
function loop() {
	myLibrary.forEach((book) => {
		const bookCard = document.createElement('div');
		const title = document.createElement('p');
		const author = document.createElement('p');
		const pages = document.createElement('p');
		const buttonGroup = document.createElement('div');
		const readBtn = document.createElement('button');
		const removeBtn = document.createElement('button');

		bookCard.classList.add('book-card');
		buttonGroup.classList.add('button-group');
		readBtn.classList.add('btn');
		removeBtn.classList.add('btn');
		// readBtn.onclick = toggleRead;
		// removeBtn.onclick = removeBook;

		title.textContent = `${book.title}`;
		author.textContent = book.author;
		pages.textContent = `${book.pages} pages`;
		removeBtn.textContent = 'Remove';

		if (book.isRead) {
			readBtn.textContent = 'Read';
			readBtn.classList.add('btn-light-green');
		} else {
			readBtn.textContent = 'Not read';
			readBtn.classList.add('btn-light-red');
		}

		bookCard.appendChild(title);
		bookCard.appendChild(author);
		bookCard.appendChild(pages);
		buttonGroup.appendChild(readBtn);
		buttonGroup.appendChild(removeBtn);
		bookCard.appendChild(buttonGroup);
		container.appendChild(bookCard);

		// const book_card = document.createElement('div');
		// book_card.classList.add('card');
		// book_card.innerHTML = `${book}`;
		// container.appendChild(book_card);
	});
}

//create book html card

//get new book details from user
//2
const getBookFromInput = () => {
	const title = document.getElementById('title').value;
	const author = document.getElementById('author').value;
	const pages = document.getElementById('pages').value;
	const isRead = document.getElementById('isRead').checked;
	return new Book(title, author, pages, isRead);
};

// const addBook = (e) => {
// 	e.preventDefault();
// };

//Hide the form
const closeAddBookModal = () => {
	addBookModal.classList.remove('active');
	overlay.classList.remove('active');
	errorMsg.classList.remove('active');
	errorMsg.textContent = '';
};
