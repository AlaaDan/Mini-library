const book = document.querySelector('.card')as HTMLElement;
const books = document.querySelectorAll('.card');
const books_names_front = document.querySelectorAll('.book_name_front');
const books_author_front = document.querySelectorAll('.book_author_front');
import { renderBook } from "./modules/rederingbooks";
import { addingColor } from "./modules/rederingbooks";


function showHide(id): void{
    book?.classList.toggle('flip');
    document.querySelector('.front_page')?.classList.toggle('front_page_zoom');
    books_names_front[0].classList.toggle('hide');
    books_author_front[0].classList.toggle('hide');
    //document.querySelector('#close').classList.toggle('hide')
    if(document.querySelector('.details')?.classList.contains('show')){
        document.querySelector('.details')?.classList.remove('show');
    }else{
        setTimeout(() => {
            document.querySelector('.details')?.classList.add('show');
        }, 600);
    };    
}


// async function search() {
//     const allBooks: Book_info[] = await getApi();
//     const searchButton = document.querySelector('#searchButton') as HTMLInputElement;
//     console.log(book)

//     const searchedBook = allBooks.filter((book) => {
//       //return book.title.toLowerCase().includes(searchButton.value.toLowerCase());
//     });
  
//   }
  
books.forEach((book, index)=>{
    //console.log(book);
    addingColor(index);
    book.addEventListener('click', ()=>{
        const dataID: any = book.getAttribute('data-id');
        //console.log(dataID);
        renderBook(dataID);
        showHide(dataID)
    })
})




