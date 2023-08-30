import "bootstrap/dist/css/bootstrap.min.css";
import { fetchCategoryList } from "./book-api";
import { createMarkupCategoryList, createMarkupTopBooks } from "./templates/markup";

// const listEl = document.querySelector(".js-list");
const containerEl = document.querySelector(".js-container");

// const CATEGORY_LIST = "category-list";
const TOP_BOOKS = "top-books";


window.addEventListener("load", getTopOfBooks);


// async function getListOfBooks() {  

//     try {
//       const data = await fetchCategoryList(CATEGORY_LIST);         
                  
//     addMarkup(listEl, createMarkupCategoryList(data.data));
            
//     }

//     catch (err) {
//       console.log(err.message);
//     }
    
// };  

function addMarkup(element, markup) {
  
    element.insertAdjacentHTML("beforeend", markup); 
  
};

async function getTopOfBooks(){
    try {
        const data = await fetchCategoryList(TOP_BOOKS);       
        

                console.log(data.data.books);
    //   addMarkup(containerEl, createMarkupTopBooks(data.data.books));
              
      }
  
      catch (err) {
        console.log(err.message);
      }
};