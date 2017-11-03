/* @flow */

import React from 'react';

type ButtonProps = {
  disabled?: boolean,
  children: any;
  onClick: Function;
};

const RevButton = ({ disabled, children, onClick, ...passProps }: ButtonProps) => (
<div className={`rev-button${disabled ? ' rev-button--disabled' : ''}`}
     onClick={disabled ? null : onClick}
     {...passProps}>
  {children}
</div>
);


export default RevButton;
