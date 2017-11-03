/* @flow */

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Button from '../ui/Button';
import Select from '../ui/Select';
import RatesString from './RatesString';
import { amountFromSelector } from '../redux/selectors';

type HeaderProps = {
  amount: number,
  onCancel: Function,
  onRates: Function,
  onExchange: Function,
};

class Header extends PureComponent<HeaderProps> {
  props: HeaderProps;

  render() {
    const { onCancel, onRates, onExchange, amount } = this.props;

    return (
    <div className="rev-header">
      <Button onClick={onCancel}>Cancel</Button>
      <Select onClick={onRates}><RatesString /></Select>
      <Button onClick={onExchange} disabled={!amount}>Exchange</Button>
    </div>
    );
  }
}

const HeaderContainer = connect((state, ownProps) => ({
  amount: amountFromSelector(state),
  onCancel: ownProps.onCancel ? () => ownProps.onCancel(state) : null,
  onRates: ownProps.onRates ? () => ownProps.onRates(state) : null,
  onExchange: ownProps.onExchange ? () => ownProps.onExchange(state) : null,
}))(Header);

export default HeaderContainer;
