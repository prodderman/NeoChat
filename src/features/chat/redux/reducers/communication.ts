import { makeCommunicationReducer } from 'redux-make-communication';
import { combineReducers } from 'redux';
import * as NS from '../../namespace';
import initial from '../initial';

// tslint:disable:max-line-length
export default combineReducers<NS.IReduxState['communication']>({
  registration: makeCommunicationReducer<NS.IRegister, NS.IRegisterSuccess, NS.IRegisterFail>(
    'CHAT:REGISTER',
    'CHAT:REGISTER_SUCCESS',
    'CHAT:REGISTER_FAIL',
    initial.communication.registration,
  ),
  messageSending: makeCommunicationReducer<NS.ISendMessage, NS.ISendMessageSuccess, NS.ISendMessageFail>(
    'CHAT:SEND_MESSAGE',
    'CHAT:SEND_MESSAGE_SUCCESS',
    'CHAT:SEND_MESSAGE_FAIL',
    initial.communication.messageSending,
  ),
});
