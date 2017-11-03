/* @flow */

import React from 'react';

type StringProps = {
  children: any;
};

const RevString = (props: StringProps) => (
<div className="rev-string">
  {props.children}
</div>
);


export default RevString;
