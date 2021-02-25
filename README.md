# react-ant-checkbox
> Checkbox for antd.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-ant-checkbox
```

## properties
| Name         | Type   | Required | Default | Description                           |
| ------------ | ------ | -------- | ------- | ------------------------------------- |
| className    | string | false    | -       | The extended className for component. |
| value        | bool   | false    | -       | The controlled value.                 |
| defaultValue | bool   | false    | -       | Default value.                        |
| onChange     | func   | false    | noop    | The change handler.                   |


## usage
1. import css
  ```scss
  @import "~@jswork/react-ant-checkbox/dist/style.css";

  // or use sass
  @import "~@jswork/react-ant-checkbox/dist/style.scss";

  // customize your styles:
  $react-ant-checkbox-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactAntCheckbox from '@jswork/react-ant-checkbox';
  import './assets/style.scss';

  class App extends React.Component {
    state = { value: false };
    render() {
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-ant-checkbox">
          <article class="message is-info">
            <div class="message-header">Output</div>
            <div class="message-body">
              <ReactAntCheckbox
                value={this.state.value}
                onChange={(e) => {
                  this.setState({ value: e.target.value });
                }}
              >
                轻轻的点击我
              </ReactAntCheckbox>
            </div>
          </article>

          <article class="message">
            <div class="message-header">Output</div>
            <div class="message-body">{JSON.stringify(this.state.value)}</div>
          </article>
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-ant-checkbox/


## license
Code released under [the MIT license](https://github.com/afeiship/react-ant-checkbox/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-ant-checkbox
[version-url]: https://npmjs.org/package/@jswork/react-ant-checkbox

[license-image]: https://img.shields.io/npm/l/@jswork/react-ant-checkbox
[license-url]: https://github.com/afeiship/react-ant-checkbox/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-ant-checkbox
[size-url]: https://github.com/afeiship/react-ant-checkbox/blob/master/dist/react-ant-checkbox.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-ant-checkbox
[download-url]: https://www.npmjs.com/package/@jswork/react-ant-checkbox
