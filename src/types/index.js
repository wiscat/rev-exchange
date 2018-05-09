/* @flow */
import { CALL_API } from '../redux/api';

import type { State } from '../redux/store';

export type ApiAction = {
  [typeof CALL_API]: {
    types: [string, string, string],
    endpoint: string,
  }
}
export type Action = { +type: string } | ApiAction;
export type { Store, Dispatch } from 'redux';
export type { State };
export type Wallet = { [key: string]: number };
export type Rates = { [key: string]: number };
export type GetState = () => State;
export type MainProps = {
  styles: boolean,
  colorStart: string,
  colorStop: string,
  width: number,
  height: number,
  baseFontSize: number,
  syncInterval: number,
  from: string,
  to: string,
  wallet: Wallet,
  available: string[],
  onChangeState: Function,
  onClickRates: Function,
  onCancel: Function,
  onExchange: Function,
  openexchangeratesAppId: string,
};
