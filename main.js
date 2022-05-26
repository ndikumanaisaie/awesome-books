class Books {
  constructor(title, author) {
    // Initializing useful variables
    this.title = title;
    this.author = author;

    this.table = document.createElement('table');
    this.tbody = document.createElement('tbody');
    this.myForm = document.getElementById('form');
    this.bookList = document.getElementById('book-list');
    this.table.appendChild(this.tbody);
    this.bookList.appendChild(this.table);
    this.listTitle = document.querySelector('.list-title');

    this.bookData = (localStorage.book != null) ? JSON.parse(localStorage.book) : [];
  }

  addBook() {
    if (this.title.value === '' || this.author.value === '') {
      this.listTitle.innerHTML = 'Please fill the field below';
    } else {
      this.bookData.push({ bookTitle: this.title.value, bookAuthor: this.author.value });
      this.updateStore();
    }
  }

  removeBook(id) {
    this.bookData.splice(id, 1);
    this.updateStore();
    if (this.bookData.length === 0) {
      this.listTitle.innerHTML = 'Books List is empty';
    } else {
      this.listTitle.innerHTML = '';
    }
  }

  displayBooks() {
    this.tbody.innerHTML = '';
    let id = 0;

    this.bookData.forEach((book) => {
      this.tbody.innerHTML
      += `<tr>
          <td>
            <strong>"${book.bookTitle}"</strong>
            <span><strong>by ${book.bookAuthor}</strong></span>
          </td>
          <td class="remove" onClick="book.removeBook(${id})">Remove</td>
          </tr>`;
      id += 1;
    });
  }

  updateStore() {
    localStorage.book = JSON.stringify(this.bookData);
    this.displayBooks();
  }
}

const title = document.getElementById('book-title');
const author = document.getElementById('author');

const book = new Books(title, author);
book.displayBooks();

// Add navigation to the Awesome Book project

const navLinks = document.getElementById('nav-links');
const listSection = document.getElementById('book-list');
const formSection = document.getElementById('form-section');
const contactSection = document.getElementById('contact-section');

const menuList = document.querySelectorAll('.nav-item');

// Add event listener to top menu

window.addEventListener('load', () => {
  menuList[0].classList.add('active');
  formSection.style.display = 'none';
  contactSection.style.display = 'none';
});

navLinks.addEventListener('click', (e) => {
  if (e.target.classList.contains('list')) {
    formSection.style.display = 'none';
    contactSection.style.display = 'none';
    listSection.style.display = 'flex';

    for (let i = 0; i < menuList.length; i += 1) {
      menuList[i].classList.remove('active');
    }
    e.target.classList.add('active');
  } else if (e.target.classList.contains('add-new')) {
    formSection.style.display = 'flex';
    formSection.style.flexDirection = 'column';
    contactSection.style.display = 'none';
    listSection.style.display = 'none';

    for (let i = 0; i < menuList.length; i += 1) {
      menuList[i].classList.remove('active');
    }
    e.target.classList.add('active');
  } else if (e.target.classList.contains('contact')) {
    formSection.style.display = 'none';
    contactSection.style.display = 'flex';
    listSection.style.display = 'none';

    for (let i = 0; i < menuList.length; i += 1) {
      menuList[i].classList.remove('active');
    }
    e.target.classList.add('active');
  }
});