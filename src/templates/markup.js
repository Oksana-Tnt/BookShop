
function createMarkupCategoryList(arr) {
    return arr.map(({ id, list_name }) => 
    `
    <li class="list-group-item" data-id="${id}">${list_name}</li>
    `).join("");   
  
  };
  
  function createMarkupTopBooks(arr){
    return arr.map(({_id, title, book_image, author})=> `

    <div class="card" data-id="${_id}">
      <img src="${book_image}" class="card-img-top" alt="${title}">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <div class="card-footer">
        <small class="text-body-secondary">${author}</small>
      </div>
      </div>
    </div>

    `).join("");
  };
  export {createMarkupCategoryList, createMarkupTopBooks};