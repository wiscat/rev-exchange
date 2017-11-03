/* @flow */

import styled from 'styled-components';

const StyledWidget = styled.div`
  font-family: sans-serif;
  width: 100%;
  height: 100%;
  background: radial-gradient(${props => props.colorStart || '#2978f7'}, ${props => props.colorStop || '#0a3cb9'});
  color: #fff;
  display: flex;
  flex-direction: column;

  .rev-string {
    opacity: 0.7;
    font-size: ${props => props.em(12)};
  }
  
  .rev-currency {
    font-size: ${props => props.em(27)};
    margin: ${props => props.em(5)} 0;
  }

  .rev-switcher {
    text-align: center;
    margin: ${props => props.em(20)} 0 0 0;

    span {
      font-size: ${props => props.em(20)};
      opacity: 0.5;
      margin: 0 ${props => props.em(2)};
      cursor: pointer;

      &.rev-selected {
        opacity: 1.0;
      }
    }
  }

  .rev-input {
    margin: ${props => props.em(5)} 0;
    input {
      font-size: ${props => props.em(25)};
      outline: none;
      border: none;
      text-align: right;
      width: 100%;
      background: none;
      color: white;
    }
  }

  .rev-button {
    font-size: ${props => props.em(13)};
    cursor: pointer;

    &.rev-button--disabled {
      opacity: 0.5;
    }
  }

  .rev-select {
    position: relative;
    background: rgba(0,0,0,0.3);
    border-radius: ${props => props.em(7)};
    border: rgba(255,255,255,0.3) solid 1px;
    padding: ${props => props.em(5)} ${props => props.em(17)} ${props => props.em(5)} ${props => props.em(7)};
    font-size: ${props => props.em(14)};
    cursor: pointer;

    i {
      position: absolute;
      right: ${props => props.em(5)};
      top: 50%;
      transform: translate(0%, -50%);
      display: block;
      width: 0;
      height: 0;
      border-left: ${props => props.em(4)} solid transparent;
      border-right: ${props => props.em(4)} solid transparent;

      border-top: ${props => props.em(4)} solid #fff;
    }
  }

  .rev-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    padding: ${props => props.em(5)};
  }

  .rev-card {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: ${props => props.em(20)} 0 ${props => props.em(15)} 0;

    &.rev-card--to {
      background: rgba(0,0,0,0.2);
    }
  }

  .rev-row {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    .rev-row__right {
      max-width: 50%;
      text-align: right;
    }
  }
`;

export default StyledWidget;
