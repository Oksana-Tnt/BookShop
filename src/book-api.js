import axios from "axios";

const BASE_URL = "https://books-backend.p.goit.global/books";

 function fetchCategoryList(end_point){    
    
    return  axios.get(`${BASE_URL}/${end_point}`);
};

export{ fetchCategoryList };