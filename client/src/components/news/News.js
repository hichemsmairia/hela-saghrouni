import React from "react";


class News extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      news: []
    };
  }

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=04d59d80fc3947229f2282fd4016e7d8"
    )
      .then(response => response.json())
      .then(data => this.setState({ news: data.articles }));
  }

  render() {
    console.log(this.state.news);
    return <div />;
  }
}

export default News ; 