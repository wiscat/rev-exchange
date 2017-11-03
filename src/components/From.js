/* @flow */

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { setFromAmount, setFromCurrency } from '../redux/actions';
import { currencyFromSelector, amountFromSelector, walletSelector } from '../redux/selectors';
import Currency from '../ui/Currency';
import String from '../ui/String';
import Input from '../ui/Input';
import Card from '../ui/Card';

import type { Wallet } from '../types';

type FromProps = {
  currency: string,
  wallet: Wallet,
  amount: number,
  onChangeAmount: Function,
  onChangeCurrency: Function,
}

class From extends PureComponent<FromProps> {
  input: HTMLInputElement;
  switcherValues: string[];
  props: FromProps;

  componentWillMount() {
    this.switcherValues = Object.keys(this.props.wallet);
  }

  componentDidMount() {
    this.focus();
  }

  focus = () => {
    setTimeout(() => {
      this.input.focus();
    }, 0);
  };

  onInput = () => {
    const { value } = this.input;

    if (!value || value.match(/^\d+(\.)?(\d+)?$/)) {
      this.props.onChangeAmount(value);
    }
  };

  render() {
    const { currency, wallet, amount, onChangeCurrency } = this.props;
    const have = wallet[currency] || 0;

    return (
    <Card cls="rev-card--from" onChange={onChangeCurrency} values={this.switcherValues} selected={currency}>
      <div className="rev-row">
        <div className="rev-row__left">
          <Currency currency={currency} />
          <String>You have ${have}</String>
        </div>
        <div className="rev-row__right">
          <Input inputRef={el => this.input = el}
                 onChange={this.onInput}
                 value={amount || ''}
                 onBlur={this.focus}
                 autoFocus />
        </div>
      </div>
    </Card>
    );
  }
}

const FromContainer = connect(state => ({
  currency: currencyFromSelector(state),
  wallet: walletSelector(state),
  amount: amountFromSelector(state) || 0,
}), {
  onChangeAmount: setFromAmount,
  onChangeCurrency: setFromCurrency
})(From);

export default FromContainer;
