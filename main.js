class Books {
  constructor(title, author) {
    // Initializing useful variables
    this.title = title;
    this.author = author;

    this.newDiv = document.createElement('div');
    this.myForm = document.getElementById('form');
    this.bookList = document.getElementById('book-list');
    this.newDiv.classList.add('mylist');
    this.bookList.appendChild(this.newDiv);
    this.addBtn = document.getElementById('btn');

    this.bookData = (localStorage.getItem('book') !== null) ? JSON.parse(localStorage.getItem('book')) : [];
  }

  newBook() {
    this.addBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (this.title.value.trim() === '') return;
      if (this.author.value.trim() === '') return;

      const data = {
        bookTitle: this.title.value,
        bookAuthor: this.author.value,
      };

      this.bookData.push(data);
      localStorage.setItem('book', JSON.stringify(this.bookData));
      this.newDiv.innerHTML += `<div>
              <p><strong>${data.bookTitle}</strong></p>
              <p><strong>${data.bookAuthor}</strong></p>
              <button class="remove">delete</button>
              <hr/>
              </div>`;
      this.myForm.reset();
    });
  }

  removeBook() {
    this.newDiv.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove')) {
        const list = e.target.parentElement;
        const bookTitle = list.childNodes[4].value;
        const remain = this.bookData.filter((book) => book.bookTitle !== bookTitle);
        localStorage.setItem('book', JSON.stringify(remain));
        this.newDiv.removeChild(list);
      }
    });
  }

  getDataFromStore() {
    window.addEventListener('load', () => {
      if (localStorage.getItem('book')) {
        const books = JSON.parse(localStorage.getItem('book'));
        books.forEach((data) => {
          this.newDiv.innerHTML += `<div>
                <p><strong>${data.bookTitle}</strong></p>
                <p><strong>${data.bookAuthor}</strong></p>
                <button class="remove">delete</button>
                <hr/>
                </div>`;
          this.bookData.push(books);
        });
      }
    });
  }
}

const title = document.getElementById('book-title');
const author = document.getElementById('author');

const book = new Books(title, author);

book.newBook();
book.removeBook();
book.getDataFromStore();
