/* @flow */

import React from 'react';

type InputProps = {
  inputRef?: Function;
  type?: string,
  value: string | number,
  onChange?: Function,
  onBlur?: Function,
  autoFocus?: boolean,
};

const RevInput = ({ inputRef, ...passProps }: InputProps) => (
<div className="rev-input">
  <input ref={inputRef} {...passProps} />
</div>
);

export default RevInput;
