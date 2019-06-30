import React, { Component } from 'react';

export class PageHeader extends Component {
    render() {
      return (
        <div className="PageHeader">
          <p>{this.props.title}</p>
        </div>
      )
    }
}

export default PageHeader