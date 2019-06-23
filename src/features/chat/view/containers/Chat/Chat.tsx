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
  sendMessage: actions.sendMessage,
};

class Chat extends React.PureComponent<IProps> {
  private charRef = React.createRef<HTMLElement>();
  public componentDidMount() {
    this.props.register();
    if (this.charRef.current) {
      this.charRef.current.focus();
    }
  }

  public componentDidUpdate(prevProps: IProps) {
    if (this.charRef.current && prevProps.messages.length !== this.props.messages.length) {
      this.charRef.current.scrollIntoView();
    }
  }

  public render() {
    const { classes, messages, typedMessage, changeMessage } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.viewPort}>
          {messages.map(this.renderMessage)}
          <Input
            forwardRef={this.charRef}
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
    const { sendMessage } = this.props;
    sendMessage({ message: trim(message) });
  }
}

export default connect(mapState, mapDispatch)(provideStyles(Chat));
