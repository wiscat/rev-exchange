import React, { Component } from 'react';
import { render } from 'react-dom';
import RevExchange from '../../src';

class Demo extends Component {
  render() {
    const props = {
      openexchangeratesAppId: 'ca399650be2944478a53d45a473d5f2f',
      styles: true,
      colorStart: '#2978f7',
      colorStop: '#0a3cb9',
      // width: 350,
      height: 500,
      baseFontSize: 16,
      syncInterval: 0,
      from: 'usd',
      to: 'gbp',
      wallet: {
        usd: 10,
        gbp: 15,
        eur: 20,
      },
      available: ['usd', 'gbp'],
      onChangeState: state => console.log(state),
      onClickRates: state => alert('onClickRates: ' + state.rate),
      onCancel: state => alert('onCancel: ' + state.rate),
      onExchange: state => alert('onExchange: ' + state.rate),
    };

    return (
    <div style={{ width: 350, margin: '0 auto' }}>
      <h1>RevExchange Demo</h1>
      <RevExchange {...props} />
    </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
