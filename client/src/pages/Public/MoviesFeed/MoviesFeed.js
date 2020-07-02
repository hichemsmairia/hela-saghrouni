import React from 'react' ; 

class NewsFeed extends React.Component {
  state = {
    articles: []
  };

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?category=entertainment&language=fr&apiKey=6f9cf5e6b9684bd3a6a8117e35feb1c9"
    )
      .then(res => res.json())
      .then(res => res.articles)
      .then(articles => {
        this.setState({ articles })
      })

      //hedhi bech na3mel test lel api ye5dem wella la 
      .then(()=> console.log(this.state.articles))
  }

  render() {
    return (
      <div style={{"padding-top":"160px"}}>
        <h1 class="center">L'actualite du monde de Cinema </h1>
        <ArticleList articles={this.state.articles} />
      </div>
    );
  }
}

const ArticleList = props => (
  <div>
    <ol>
      {props.articles.map((article, index) => (
        <div key={index}>
          <li>{article.title}</li>
          <img style={{"height":"120px"}} src={article.urlToImage} />
          <br />
        </div>
      ))}
    </ol>
  </div>
);



export default NewsFeed