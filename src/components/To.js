/* @flow */

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { setToCurrency } from '../redux/actions';
import { walletSelector, currencyToSelector, amountToSelector, availableSelector } from '../redux/selectors';
import Currency from '../ui/Currency';
import String from '../ui/String';
import Input from '../ui/Input';
import Card from '../ui/Card';
import RatesString from './RatesString';
import type { Wallet } from '../types';

type ToProps = {
  currency: string,
  wallet: Wallet,
  amount: number,
  currencies: string[],
  onChangeCurrency: Function,
};

class To extends PureComponent<ToProps> {
  props: ToProps;

  onChange = (e: Event) => {
    e.preventDefault();
    return false;
  };

  render() {
    const { currency, wallet, amount, currencies, onChangeCurrency } = this.props;

    return (
    <Card cls="rev-card--to" values={currencies} selected={currency} onChange={onChangeCurrency}>
      <div className="rev-row">
        <div className="rev-row__left">
          <Currency currency={currency} />
          <String>You have ${wallet}</String>
        </div>
        <div className="rev-row__right">
          <Input type="text" value={amount} onChange={this.onChange} />
          <String><RatesString reverse={true} /></String>
        </div>
      </div>
    </Card>
    );
  }
}

const ToContainer = connect(state => ({
  currency: currencyToSelector(state),
  wallet: walletSelector(state)[currencyToSelector(state)] || 0,
  amount: amountToSelector(state) || '',
  currencies: availableSelector(state),
}), {
  onChangeCurrency: setToCurrency
})(To);

export default ToContainer;
