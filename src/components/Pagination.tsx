/*
 * @Description: Pagination分页组件
 * @Author: wangfeilong02@baidu.com
 * @Date: 2021-11-01 16:57:38
 */

import React from 'react';
import {themeable, ThemeProps} from '../theme';
import {Icon} from './icons';
import {BaseSchema, SchemaClassName} from '../Schema';

export interface PaginationProps {
  className?: SchemaClassName;

  layout?: string | string[];

  maxButtons?: number;

  mode?: 'normal' | 'simple';

  lastPage: number;

  activePage: number;

  perPage: number;
}
export type PaginationPosition = 'top' | 'bottom' | 'both';
// export class Pagination extends React.Component<PaginationProps> {
export class Pagination extends React.Component {
  render() {
    return (
      <div className="wfl">
          wfl Page test!!!
          这是Pagination组件
      </div>
    );
  }
}

export default themeable(Pagination);


// export default Pagination;
