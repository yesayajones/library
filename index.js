let myLibrary = ['Paradise', 'Hell', 'Heaven', 'Mountain'];
let container = document.querySelector('.container');

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function () {
		return `The ${title} by ${author}, ${pages} pages, ${read} read yet`;
	};
}

function addBookToLibrary(book) {
	myLibrary.push(book);
}

function loop() {
	myLibrary.forEach((book) => {
		const book_card = document.createElement('div');
		book_card.classList.add('card');
		book_card.innerHTML = `${book}`;
		container.appendChild(book_card);
	});
}

loop();
