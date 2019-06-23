import React from 'react';
import { connect } from 'react-redux';
import { trim } from 'ramda';
import { autobind } from 'core-decorators';

import { IAppReduxState } from 'shared/types/app';

import { actions, selectors } from '../../../redux';
import { Message, Input } from '../../components';
import { StylesProps, provideStyles } from './Chat.styles';
import * as NS from '../../../namespace';

interface IStateProps {
  messages: NS.IMessage[];
  typedMessage: string;
}

interface IActionProps {
  register: typeof actions.register;
  changeMessage: typeof actions.changeMessage;
  clearMessage: typeof actions.clearMessage;
  sendMessage: typeof actions.sendMessage;
}

type IProps = IStateProps & IActionProps & StylesProps;

function mapState(state: IAppReduxState): IStateProps {
  return {
    messages: selectors.selectMessages(state),
    typedMessage: selectors.selectTypedMessage(state),
  };
}

const mapDispatch: IActionProps = {
  register: actions.register,
  changeMessage: actions.changeMessage,
  clearMessage: actions.clearMessage,
  sendMessage: actions.sendMessage,
};

class Chat extends React.PureComponent<IProps> {
  public componentDidMount() {
    this.props.register();
  }

  public render() {
    const { classes, messages, typedMessage, changeMessage } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.viewPort}>
          {messages.map(this.renderMessage)}
          <Input
            value={typedMessage}
            onChange={changeMessage}
            onSubmit={this.sendMessage}
          />
        </div>
      </div>
    );
  }

  @autobind
  private renderMessage(message: NS.IMessage) {
    const { classes } = this.props;
    return (
      <div className={classes.message} key={message.messageID}>
        <Message message={message} />
      </div>
    );
  }

  @autobind
  private sendMessage(message: string) {
    const { sendMessage, clearMessage } = this.props;
    sendMessage({ message: trim(message) });
    clearMessage();
  }
}

export default connect(mapState, mapDispatch)(provideStyles(Chat));
