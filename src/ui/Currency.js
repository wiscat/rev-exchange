/* @flow */

import React from 'react';

type CurrencyProps = {
  currency: string;
};

const RevCurrency = (props: CurrencyProps) => (
<div className="rev-currency">
  {props.currency.toUpperCase()}
</div>
);

export default RevCurrency;
