import { ICommunication, IPlainAction, IPlainFailAction, IAction } from 'shared/types/redux';

export interface IReduxState {
  data: {
    connectionID: string | null;
    userID: string | null;
    messages: IMessage[];
  };
  communication: {
    registration: ICommunication;
  };
  edit: {
    typedMessage: string;
  };
}

export type MessageType = 'in' | 'out';

export interface IMessage {
  messageID: string;
  type: MessageType;
  message: string;
}

export type IMessageChange = IAction<'CHAT:MESSAGE_CHANGE', { typedMessage: string }>;
export type IMessageClear = IPlainAction<'CHAT:MESSAGE_CLEAR'>;

export type IAddNewMessage = IAction<'CHAT:ADD_NEW_MESSAGE', { message: IMessage }>;

export type ISendMessage = IAction<'CHAT:SEND_MESSAGE', { message: string }>;
export type ISendMessageSuccess = IPlainAction<'CHAT:SEND_MESSAGE_SUCCESS'>;
export type ISendMessageFail = IPlainFailAction<'CHAT:SEND_MESSAGE_FAIL'>;

export type IRegister = IPlainAction<'CHAT:REGISTER'>;
export type IRegisterSuccess = IAction<'CHAT:REGISTER_SUCCESS', { connectionID: string, userID: string }>;
export type IRegisterFail = IPlainFailAction<'CHAT:REGISTER_FAIL'>;

export type IAction =
  | IMessageChange
  | IMessageClear
  | IAddNewMessage
  | ISendMessage
  | ISendMessageSuccess
  | ISendMessageFail
  | IRegister
  | IRegisterSuccess
  | IRegisterFail;
