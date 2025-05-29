const addbookbtn=document.querySelector("#button");
const formContainer=document.querySelector("#formContainer");
const libraryContainer = document.querySelector("#libraryContainer");
const newform = document.querySelector("#newform");
let myLibrary = [];

addbookbtn.addEventListener("click",()=>{
    formContainer.style.display =
    formContainer.style.display === "none" ? "block" : "none";
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

newform.addEventListener("submit",function(event){
  event.preventDefault();
  const title=document.querySelector("#title").value;
  const author=document.querySelector("#author").value;
  const pages=document.querySelector("#pages").value;
  const read=document.querySelector("#read").checked;

  const newBook=new Book(title,author,pages,read);
  myLibrary.push(newBook);
  displayBooks();
  newform.reset();
  formContainer.style.display = "none";
});

function displayBooks(){
  libraryContainer.innerHTML="";
  for(let i=0;i<myLibrary.length;i++)
  {
    let bookDiv=document.createElement("div");
    bookDiv.classList.add("book");
    bookDiv.innerHTML = `
      <h3>${myLibrary[i].title}</h3>
      <p>Author: ${myLibrary[i].author}</p>
      <p>Pages: ${myLibrary[i].pages}</p>
      <p>Read: ${myLibrary[i].read ? "Yes" : "No"}</p>`;


    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", function () {
      myLibrary.splice(i, 1);
      displayBooks();
    });
    bookDiv.appendChild(removeBtn);

    libraryContainer.appendChild(bookDiv);
  }
}