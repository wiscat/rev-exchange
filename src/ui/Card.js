/* @flow */

import React, { PureComponent } from 'react';
import Swipeable from 'react-swipeable';
import Switcher from '../ui/Switcher';

type CardProps = {
  children: any;
  values: string[],
  selected: string,
  cls: string,
  onChange: Function,
};

class RevCard extends PureComponent<CardProps> {
  props: CardProps;

  onRightArrow = () => {
    const { onChange, selected, values } = this.props;
    const next = values[(values.indexOf(selected) + 1) % values.length];
    onChange(next);
  };

  onLeftArrow = () => {
    const { onChange, selected, values } = this.props;
    const idx = values.indexOf(selected);
    const prev = values[idx ? (idx - 1) : values.length - 1];
    onChange(prev);
  };

  onClick = (e: SyntheticInputEvent<EventTarget>) => {
    e.preventDefault();
    const newVal = e.target.getAttribute('data-value');
    if (newVal) {
      this.props.onChange(newVal);
    }
  };

  render() {
    const { values, selected, cls, children } = this.props;

    return (
    <Swipeable className={`rev-card${cls ? ` ${cls}` : ''}`}
               onSwipedLeft={this.onRightArrow}
               onSwipedRight={this.onLeftArrow}>
      {children}
      <Switcher values={values} selected={selected} onClick={this.onClick} />
    </Swipeable>
    );
  }
}

export default RevCard;
