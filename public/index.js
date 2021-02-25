import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactAntCheckbox from '../src/main';
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
