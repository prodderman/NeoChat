import * as React from 'react';
import { autobind } from 'core-decorators';
import ContentEditable from 'react-contenteditable';

import { StylesProps, provideStyles } from './Input.styles';

interface IProps {
  value: string;
  forwardRef?: React.RefObject<HTMLElement>;
  onChange(value: string): void;
  onSubmit(value: string): void;
}

class Input extends React.PureComponent<IProps & StylesProps> {
  public render() {
    const { classes, value, forwardRef } = this.props;
    return (
      <div className={classes.input}>
        <div className={classes.prompt}>></div>
        <ContentEditable
          innerRef={forwardRef}
          className={classes.field}
          html={value}
          onChange={this.handleValueChange}
          onKeyDown={this.handleSubmit}
        />
      </div>
    );
  }

  @autobind
  private handleValueChange(event: React.FormEvent<HTMLDivElement>) {
    this.props.onChange(event.currentTarget.textContent || '');
  }

  @autobind
  private handleSubmit(event: React.KeyboardEvent) {
    const { onSubmit, value } = this.props;
    if (event.key === 'Enter') {
      event.preventDefault();
      onSubmit(value);
    }
  }
}

export default provideStyles(Input);
