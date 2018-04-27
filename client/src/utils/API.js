import axios from "axios";

export default {

  searchArticles: function(query) {
    console.log("https://api.nytimes.com/svc/search/v2/articlesearch.json", { params: query });
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", { params: query });
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
