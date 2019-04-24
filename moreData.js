const axios = require('axios');
const URL = "https://jsonplaceholder.typicode.com/users"

axios.get(URL)
.then(function(response){
    console.log(response);
})