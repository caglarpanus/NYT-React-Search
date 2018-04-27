import React, { Component } from "react";
import API from "../../utils/API";
import {Savedcard} from "../../components/Savedcard";

class Saved extends Component {

  state = {
    articles: [],
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.findAll()
      .then(res =>
        this.setState({ articles: res.data })
      )
      .catch(err => console.log(err));
  };

  deleteArticle =(id) =>{
    API.remove(id)
    .then(res => this.loadArticles())
    .catch(err => console.log(err));
};


  render() {
    return (
      <div>

        <div className="container">

          <div className="row resultsWindow">
            <div className="col-md-12">
              <div className="card">
                <h5 className="card-header text-white bg-dark">Saved Articles</h5>
                <div className="card-body">
                  {this.state.articles.length ? (
                    <div>
                  {this.state.articles.map(article => {
                    const date= article.date.split("T")
                    return (
                      <Savedcard
                        id={article._id}
                        title={article.title}
                        date={date[0]}
                        url={article.url}
                        snippet={article.snippet}
                        onClick={() => this.deleteArticle(article._id)}
                      />
                    );
                  })}
                </div>
                ) : (
                    <h3>No Results to Display</h3>
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  };
}


export default Saved;
