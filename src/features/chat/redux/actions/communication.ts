import { makeCommunicationActionCreators } from 'redux-make-communication';
import * as NS from '../../namespace';

export const { execute: sendMessage, completed: sendMessageSuccess, failed: sendMessageFail } =
makeCommunicationActionCreators<NS.ISendMessage, NS.ISendMessageSuccess, NS.ISendMessageFail>(
  'CHAT:SEND_MESSAGE',
  'CHAT:SEND_MESSAGE_SUCCESS',
  'CHAT:SEND_MESSAGE_FAIL',
);

export const { execute: register, completed: registerSuccess, failed: registerFail } =
  makeCommunicationActionCreators<NS.IRegister, NS.IRegisterSuccess, NS.IRegisterFail>(
    'CHAT:REGISTER',
    'CHAT:REGISTER_SUCCESS',
    'CHAT:REGISTER_FAIL',
  );
