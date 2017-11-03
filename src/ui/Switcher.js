/* @flow */

import React from 'react';

type SwitcherProps = {
  values: string[],
  selected: string,
  onClick: Function,
};

const RevSwitcher = ({ values, selected, onClick }: SwitcherProps) => (
<div className="rev-switcher">
  {values.map(val => (
  <span key={val}
        className={val === selected ? 'rev-selected' : null}
        onClick={onClick}
        data-value={val}>&bull;
  </span>
  ))}
</div>
);

export default RevSwitcher;
