function Author(authorName, authorEmail) {
    this.authorName = authorName;
    this.authorEmail = authorEmail;
  }
  
  function Book(id, bookName, bookPrice, authorName, authorEmail) {
    this.id = id;
    this.bookName = bookName;
    this.bookPrice = bookPrice;
    this.author = new Author(authorName, authorEmail);
  }
  
  let numOfBook;
  let numBookBtn = document.getElementById("numsBtn");
  let numBookInput = document.getElementById("booksNum");
  let numBookError = document.querySelector(".numBook");
  let numContainer = document.querySelector(".books-number");
  let bookDataContainer = document.querySelector(".books-data");
  let bookName = document.getElementById("bookName");
  let bookPrice = document.getElementById("bookPrice");
  let authorName = document.getElementById("authorName");
  let authorEmail = document.getElementById("authorEmail");
  let subBook = document.getElementById("subBook");
  let nameError = document.querySelector(".nBook");
  let priceError = document.querySelector(".pBook");
  let nAuthorError = document.querySelector(".nAuthor");
  let eAuthorError = document.querySelector(".eAuthor");
  let tableContainer = document.querySelector(".table-container");
  let tableBody = document.querySelector(".table-container table tbody");
  let emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let nameCheck = false;
  let priceCheck = false;
  let nAuthorCheck = false;
  let eAuthorCheck = false;
  let booksArray = [];
  let count = 0;
  let tdId = 0;

  numBookBtn.addEventListener("click", function () {
    validNumBooks();
  });
  
  subBook.addEventListener("click", function () {
    validBookName();
    validBookPrice();
    validAuthorName();
    validAuthorEmail();
    console.log(booksArray);
    if (nameCheck && priceCheck && nAuthorCheck && eAuthorCheck) {
      let obj = new Book(count,bookName.value,bookPrice.value,authorName.value,authorEmail.value);
    //   console.log(obj);
      booksArray.push(obj);
      count++;
      tablePush();
      nameCheck = false;
      priceCheck = false;
      nAuthorCheck = false;
      eAuthorCheck = false;
    }
  
    if (count == numOfBook) {
      bookDataContainer.style.display = "none";
      tableContainer.style.display = "block";
    }
    bookName.value = "";
    bookPrice.value = "";
    authorName.value = "";
    authorEmail.value = "";
  });
  
  function validNumBooks() {
    if (numBookInput.value == "") {
      numBookError.textContent = "Field is required";
      numBookError.style.visibility = "visible";
    } else if (!isFinite(numBookInput.value)) {
      numBookError.textContent = "Numbers only";
      numBookError.style.visibility = "visible";
    } else {
      numBookError.style.visibility = "hidden";
      numOfBook = parseInt(numBookInput.value);
      numContainer.style.display = "none";
      bookDataContainer.style.display = "block";
    }
  }
  
  function validBookName() {
    if (bookName.value == "") {
      nameError.textContent = "Field is required";
      nameError.style.visibility = "visible";
      nameCheck = false;
    } else if (isFinite(bookName.value)) {
      nameError.textContent = "Characters only";
      nameError.style.visibility = "visible";
      nameCheck = false;
    } else {
      nameCheck = true;
      nameError.style.visibility = "hidden";
    }
  }
  
  function validBookPrice() {
    if (bookPrice.value == "") {
      priceError.textContent = "Field is required";
      priceError.style.visibility = "visible";
      priceCheck = false;
    } else if (!isFinite(bookPrice.value)) {
      priceError.textContent = "Numbers only";
      priceError.style.visibility = "visible";
      priceCheck = false;
    } else {
      priceCheck = true;
      priceError.style.visibility = "hidden";
    }
  }
  
  function validAuthorName() {
    if (authorName.value == "") {
      nAuthorError.textContent = "Field is required";
      nAuthorError.style.visibility = "visible";
      nAuthorCheck = false;
    } else if (isFinite(authorName.value)) {
      nAuthorError.textContent = "Characters only";
      nAuthorError.style.visibility = "visible";
      nAuthorCheck = false;
    } else {
      nAuthorCheck = true;
      nAuthorError.style.visibility = "hidden";
    }
  }
  
  function validAuthorEmail() {
    if (authorEmail.value == "") {
      eAuthorError.textContent = "Field is required";
      eAuthorError.style.visibility = "visible";
      eAuthorCheck = false;
    } else if (!emailReg.test(authorEmail.value)) {
      eAuthorError.textContent = "Must be in the form name@example.com";
      eAuthorError.style.visibility = "visible";
      eAuthorCheck = false;
    } else {
      eAuthorError.style.visibility = "hidden";
      eAuthorCheck = true;
    }
  }
  
  function tablePush() {
    let tr = document.createElement("tr");
    tr.setAttribute("id", `td-${tdId}`);
    tr.innerHTML = `<td>${bookName.value}${count}</td>
                    <td>${bookPrice.value}</td>
                    <td>${authorName.value}</td>
                    <td>${authorEmail.value}</td>
                    <td><button class="btn edit">Edit</button></td>
                    <td><button class="btn delete">Delete</button></td>`;
    tableBody.appendChild(tr);
    tdId++;
  }
  
  document.addEventListener("click", function (e) {
    handelEdit(e);
    handelDelete(e);
  });
  
  function handelEdit(e) {
    if (e.target.classList.contains("edit")) {
      var tr = e.target.parentElement.parentElement;  //button --> td ---> tr
      console.log(typeof tr); //object
      var tds = tr.children;
      let arr = [];
      for (let i = 0; i < 4; i++) {
        arr.push(tds[i].textContent);
        let input = document.createElement("input");
        input.value = tds[i].textContent;
        tds[i].innerHTML = "";
        tds[i].appendChild(input);
      }
      tds[4].innerHTML = `<button class="btn save">Save</button>`;
      tds[5].innerHTML = `<button class="btn cancel">Cancel</button>`;
  

      tr.arr = arr; // assign array to obj property
    } else if (e.target.classList.contains("cancel")) {
      var tr = e.target.parentElement.parentElement;
      var tds = tr.children;
      let arr = tr.arr; 
      for (let i = 0; i < 4; i++) {
        tds[i].innerHTML = arr[i];
      }
      tds[4].innerHTML = `<button class="btn edit">Edit</button>`;
      tds[5].innerHTML = `<button class="btn delete">Delete</button>`;
      delete tr.arr;
    } else if (e.target.classList.contains("save")) {
      var tr = e.target.parentElement.parentElement;
      var tds = tr.children;
      let newValues = [];
      for (let i = 0; i < 4; i++) {
        let inputValue = tds[i].firstChild.value;
        tds[i].innerHTML = inputValue;
        newValues.push(inputValue);
      }
      tds[4].innerHTML = `<button class="btn edit">Edit</button>`;
      tds[5].innerHTML = `<button class="btn delete">Delete</button>`;
  

      let trId = tr.getAttribute("id"); //"td-0"
      let id = parseInt(trId.split("-")[1]); //0
  

      let book = booksArray.find((book) => book.id === id);
      if (book) {
        book.bookName = newValues[0];
        book.bookPrice = newValues[1];
        book.author.authorName = newValues[2];
        book.author.authorEmail = newValues[3];
      }
  
      delete tr.arr;
    }
  }
  
  function handelDelete(e) {
    if (e.target.classList.contains("delete")) {
      let tr = e.target.parentElement.parentElement;
      let trId = tr.getAttribute("id");
      let id = parseInt(trId.split("-")[1]);
      booksArray = booksArray.filter((b) => b.id !== id);
      tr.remove();
      count--;
    }
    if (tableBody.children.length == 0 && bookDataContainer.style.display == "none") {
      tableContainer.style.display = "none";
      numContainer.style.display = "block";
      nameCheck = false;
      priceCheck = false;
      nAuthorCheck = false;
      eAuthorCheck = false;
      booksArray = [];
      count = 0;
      numBookInput.value = "";
    }
  }