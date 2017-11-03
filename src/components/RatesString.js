/* @flow */

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import getSymbolFromCurrency from 'currency-symbol-map';
import { currencyFromSelector, currencyToSelector, rateSelector } from '../redux/selectors';

type RatesStringProps = {
  currencyFrom: string,
  currencyTo: string,
  rate: number,
  reverse: boolean,
};

class RatesString extends PureComponent<RatesStringProps> {
  props: RatesStringProps;

  render() {
    const { currencyFrom, currencyTo, rate, reverse } = this.props;

    return (
    <span className="rev-rates-string">
      {reverse ?
      `${getSymbolFromCurrency(currencyTo)}1 = ${getSymbolFromCurrency(currencyFrom)}${rate ? (1.0 / rate).toFixed(2) : 0}`
      :
      `${getSymbolFromCurrency(currencyFrom)}1 = ${getSymbolFromCurrency(currencyTo)}${rate ? rate.toFixed(4) : 0}`
      }
    </span>
    );
  }
}

const RatesStringContainer = connect(state => ({
  currencyFrom: currencyFromSelector(state),
  currencyTo: currencyToSelector(state),
  rate: rateSelector(state),
}))(RatesString);

export default RatesStringContainer;
