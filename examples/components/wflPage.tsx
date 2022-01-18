import React from 'react';

import Button from '../../src/components/Button';
import Pagination from '../../src/components/Pagination';

export default class WFLPageComponent extends React.Component {

  state = {
    activePage: 1,
    perPage: 10
  };

  constructor(props) {
    super(props);
    this.onPageChange = this.onPageChange.bind(this);
  }

  onPageChange(page, perPage) {
    console.log(page, perPage);

  }
  render() {
    return (
      <div className="wfl">
          <h2>normal</h2>
          <Pagination mode="normal"
            activePage={this.state.activePage}
            perPage={this.state.perPage}
            lastPage="99999"
            disabled={false}
            onPageChange={this.onPageChange}></Pagination>
          <h2>simple</h2>
      </div>
    );
  }
}
