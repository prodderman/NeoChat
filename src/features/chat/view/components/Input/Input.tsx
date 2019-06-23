import * as React from 'react';
import { autobind } from 'core-decorators';
import ContentEditable from 'react-contenteditable';

import { StylesProps, provideStyles } from './Input.styles';

interface IProps {
  value: string;
  onChange(value: string): void;
  onSubmit(value: string): void;
}

class Input extends React.PureComponent<IProps & StylesProps> {
  public render() {
    const { classes, value } = this.props;
    return (
      <div className={classes.input}>
        >
        <ContentEditable
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
    this.props.onChange(event.currentTarget.innerHTML);
  }

  @autobind
  private handleSubmit(event: React.KeyboardEvent) {
    const { onSubmit, value } = this.props;
    if (event.key === 'Enter') {
      onSubmit(value);
    }
  }
}

export default provideStyles(Input);
