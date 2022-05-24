class Books {
  constructor(title, author) {
    // Initializing useful variables
    this.title = title;
    this.author = author;

    this.table = document.createElement('table');
    this.tbody = document.createElement('tbody');
    this.myForm = document.getElementById('form');
    this.bookList = document.getElementById('book-list');
    this.table.classList.add('mylist');
    this.table.appendChild(this.tbody);
    this.bookList.appendChild(this.table);
    this.addBtn = document.getElementById('btn');

    this.bookData = [];
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
      this.tbody.innerHTML += `<tr>
              <td>
                <strong>"${data.bookTitle}"</strong>
                <span><strong>by ${data.bookAuthor}</strong></span>
              </td>
              <td class="remove">Remove</td>
              </tr>`;
      this.myForm.reset();
    });
  }

  removeBook() {
    this.tbody.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove')) {
        const list = e.target.parentElement;
        const bookTitle = list.childNodes[4].value;
        const remain = this.bookData.filter((book) => book.bookTitle !== bookTitle);
        localStorage.setItem('book', JSON.stringify(remain));
        this.tbody.removeChild(list);
      }
    });
  }

  getDataFromStore() {
    window.addEventListener('load', () => {
      if (localStorage.getItem('book')) {
        const books = JSON.parse(localStorage.getItem('book'));
        books.forEach((data) => {
          this.tbody.innerHTML += `<tr>
          <td>
            <strong>"${data.bookTitle}"</strong>
            <span><strong>by ${data.bookAuthor}</strong></span>
          </td>
          <td class="remove">remove</td>
          </tr>`;
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
