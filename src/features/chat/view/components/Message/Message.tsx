import * as React from 'react';

import * as NS from '../../../namespace';
import { StylesProps, provideStyles } from './Message.styles';

interface IProps {
  message: NS.IMessage;
}

class Message extends React.PureComponent<IProps & StylesProps> {
  public render() {
    const { classes, message } = this.props;
    return (
      <div className={classes.message}>
        <div className={classes.author}>
          {`${this.getAuthorName(message)}: `}
        </div>
        <div
          className={classes.text}
          dangerouslySetInnerHTML={{
            __html: message.message,
          }}
        />
      </div>
    );
  }

  private getAuthorName(message: NS.IMessage) {
    return message.type === 'in'
      ? 'unknown'
      : 'you';
  }
}

export { IProps };
export default provideStyles(Message);
