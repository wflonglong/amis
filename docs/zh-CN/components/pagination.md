---
title: Pagination 分页组件
description:
type: 0
group: ⚙ 组件
menuName: Pagination
icon:
order: 73
---

分页组件

```schema: scope="body"
{
    "type": "service",
    "api": "/api/mock2/crud/table",
    "body": [
        {
            "type": "pagination",
            "inputName": "rows",
            "outputName": "rows",
            "perPage": 2,
            "body": [
                {
                    "type": "table",
                    "title": "分页表格",
                    "source": "${rows}",
                    "columns": [
                        {
                            "name": "engine",
                            "label": "Engine"
                        },
                        {
                            "name": "version",
                            "label": "Version"
                        }
                    ]
                }
            ]
        }
    ]
}
```
## 属性表

| 属性名        | 类型                                      | 默认值                 | 说明                                                                               |
| ------------- | ----------------------------------------- | ---------------------- | ---------------------------------------------------------------------------------- |
| type          | `string`                  | `"pagination"` | 指定为 Pagination渲染器          |
| layout   | `string \| string[]`       | `pager,go,pageSize,total`                | 通过控制layout属性的顺序，调整分页结构布局                                                      |
| maxButtons    | `number`                                  | `7`                    | 最多显示多少个分页按钮                                                             |
| mode     | `normal \| simple`                                  | `normal`              | 迷你版本/简易版本    主要控制每个页码显示，无边框                                    |
| total    | `number`                                  |            | 总条数                                                                     |
| current  | `number`    |  `1`  |    当前页数    |
| perPage       | `number`                                  | `10`                   | 每页显示多条数据                                                                   |
|  defaultPageSize  | `number`   |    |    默认每页条数 看下amis是否支持，不支持就不要 |
|  showPageSize  | `boolean`  |  TRUE  |    是否展示pageSize切换器 layout和showPageSize都可以控制 |
|  perPageAvailable  | `number[]`    | `[10, 20, 50, 100]` | 指定每页可以显示多少条 |
|  hideOnSinglePage  |  `boolean`  | false    |  只有一页时是否隐藏分页器  |
| onPageChange      | `'top'` 或 `'bottom'` 或 `'none'`         | `"top"`                | 分页显示位置，如果配置为 none 则需要自己在内容区域配置 pagination 组件，否则不显示 |
| body          | [SchemaNode](../../docs/types/schemanode) |              | 内容区域      |