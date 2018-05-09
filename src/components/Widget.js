/* @flow */

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../redux/actions';
import Header from './Header';
import From from './From';
import To from './To';
import StyledWidget from '../styled/Widget';

type WidgetProps = {
  styles?: boolean,
  width?: number,
  height?: number,
  baseFontSize: number,
  colorStart?: string,
  colorStop?: string,
  syncInterval?: number,
  openexchangeratesAppId?: string,
  onCancel?: Function,
  onExchange?: Function,
  onClickRates?: Function,
  onFetch: Function,
};

class Widget extends PureComponent<WidgetProps> {
  props: WidgetProps;
  intervalId: number;

  static defaultProps = {
    styles: true,
    baseFontSize: 16,
  };

  componentWillMount() {
    const { syncInterval, onFetch, openexchangeratesAppId } = this.props;

    onFetch(openexchangeratesAppId);
    if (syncInterval) {
      this.intervalId = setInterval(() => onFetch(openexchangeratesAppId), syncInterval * 1000);
    }
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  render() {
    const { onCancel, onExchange, onClickRates, styles, width, height, baseFontSize, colorStart, colorStop } = this.props;

    const WidgetDiv = styles ? StyledWidget : 'div';
    const styledProps = styles ? {
      baseFontSize,
      colorStart,
      colorStop,
      em: pixels => `${pixels / baseFontSize}em`,
    } : null;

    return (
    <WidgetDiv className="rev-widget" style={{ width, height }} {...styledProps}>
      <Header onCancel={onCancel} onExchange={onExchange} onRates={onClickRates} />
      <From />
      <To />
    </WidgetDiv>
    );
  }
}

const WidgetContainer = connect(null, {
  onFetch: fetchCurrencies
})(Widget);

export default WidgetContainer;
