const axios = require("axios");

axios.get("http://localhost:8080/api/blogs")
  .then(res => console.log(res.data))
  .catch(err => console.log(err.message));
