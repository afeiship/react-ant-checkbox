import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import { Checkbox } from 'antd';
import objectAssign from 'object-assign';

const CLASS_NAME = 'react-ant-checkbox';

export default class ReactAntCheckbox extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * The controlled value.
     */
    value: PropTypes.bool,
    /**
     * Default value.
     */
    defaultValue: PropTypes.bool,
    /**
     * The change handler.
     */
    onChange: PropTypes.func
  };

  static defaultProps = {
    value: false,
    defaultValue: false,
    onChange: noop
  };

  constructor(inProps) {
    super(inProps);
    this.state = {
      value: inProps.value
    };
  }

  shouldComponentUpdate(inProps) {
    const { value } = inProps;
    if (value !== this.state.value) {
      this.setState({ value });
    }
    return true;
  }

  handleChange = (inEvent) => {
    const { checked } = inEvent.target;
    const { onChange } = this.props;
    const target = { value: checked };

    this.setState(target, () => {
      onChange({ target });
    });
  };

  render() {
    const { className, value, defaultValue, onChange, ...props } = this.props;
    const _value = this.state.value;

    return (
      <Checkbox
        onChange={this.handleChange}
        className={classNames(CLASS_NAME, className)}
        defaultChecked={defaultValue}
        checked={_value}
        onChange={this.handleChange}
        {...props}
      />
    );
  }
}
