/* @flow */

import React from 'react';

type SelectProps = {
  children: any;
};

const RevSelect = (props: SelectProps) => (
<div className="rev-select" {...props}>
  {props.children}
  <i></i>
</div>
);


export default RevSelect;
