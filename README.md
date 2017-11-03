# rev-exchange

rev-exchange is a simple React component for exchange currency.

It fetches rates from https://openexchangerates.org/.

[demo](http://rev-exchange.surge.sh/)

## Install
npm:
``` bash
npm install rev-exchange --save
```

yarn:
``` bash
yarn add rev-exchange
```

## Usage

```javascript
const props = {
  openexchangeratesAppId: 'your-app-id',
  styles: true,
  colorStart: '#2978f7',
  colorStop: '#0a3cb9',
  width: 300,
  height: 350,
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

<RevExchange {...props} />
```
