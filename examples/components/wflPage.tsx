import React from 'react';

import Button from '../../src/components/Button';
import Pagination from '../../src/components/Pagination';

export default class WFLPageComponent extends React.Component {
  render() {
    return (
      <div className="wfl">
          wfl Page test!!!
          <Button className="m-r-xs" classPrefix="cxd-">
            按钮
          </Button>
          <Pagination></Pagination>
      </div>
    );
  }
}
