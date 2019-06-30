import React, { Component } from 'react';
import Article from './Article';

export class PageContent extends Component {
    render() {

      const articles = this.props.articles;

      return (
        <div className="PageContent">
            {articles.map(article => (
              <Article info={article} />
              )
            )}
        </div>
      )
    }
}

export default PageContent