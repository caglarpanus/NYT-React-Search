import axios from "axios";

const BASE_URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=$";
const APIKEY = "&api-key=9d5ff69c3663425e9d88e15ed30c49c6";

export default {

  searchArticles: function(query) {
    console.log(BASE_URL + query + APIKEY , { params: query });
    return axios.get(BASE_URL , { params: query });
  },

  findAll: function() {
    return axios.get("/api/articles/");
  },

  remove: function(id) {
    return axios.delete("/api/articles/" + id);
  },

  save: function(article) {
    return axios.post("/api/articles/", article);
  }
};