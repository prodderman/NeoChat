import { put, call, all, takeLatest, take, select, spawn } from 'redux-saga/effects';
import { eventChannel, SagaIterator, Channel } from 'redux-saga';

import { getErrorMsg } from 'shared/helpers';
import { IDependencies } from 'shared/types/app';
import { ReturnPromisedType } from 'shared/types/redux';
import { IMessage } from 'shared/types/models';

import * as NS from '../namespace';
import * as actions from './actions';
import * as selectors from './selectors';

function getSaga(deps: IDependencies) {
  const registerType: NS.IRegister['type'] = 'CHAT:REGISTER';
  const sendMessageType: NS.ISendMessage['type'] = 'CHAT:SEND_MESSAGE';
  return function* saga(): SagaIterator {
    yield all([
      takeLatest(registerType, executeRegister, deps),
      takeLatest(sendMessageType, sendMessage, deps),
    ]);
  };
}

function* executeRegister(deps: IDependencies) {
  try {
    const connectionData: ReturnPromisedType<typeof deps.api.register> = yield call(deps.api.register);
    yield put(actions.registerSuccess({ ...connectionData }));
    yield spawn(subscribeToMessages, deps, connectionData.connectionID);
    // yield spawn(subscribeToStatus, deps, connectionData.connectionID);
  } catch (error) {
    const errorMsg = getErrorMsg(error);
    yield put(actions.registerFail(errorMsg));
  }
}

// function* subscribeToStatus(deps: IDependencies, id: string) {
//   const subscriber = yield call(getSubscriberToStatus, deps, id);
//   const channel = yield call(eventChannel, subscriber);
//   while (true) {
//     const data = yield take(channel);
//     console.log('saga', data);
//   }
// }

// function getSubscriberToStatus({ api }: IDependencies, id: string) {
//   return (emit: any) => {
//     api.socket.subscribeRecieveMessages(id, 'status', emit);
//     return () => void 0;
//   };
// }

function* subscribeToMessages(deps: IDependencies, connectionID: string) {
  const userID: ReturnType<typeof selectors.selectUserID> = yield select(selectors.selectUserID);
  const subscriber = yield call(getSubscriberToMessages, deps, connectionID);
  const channel: Channel<IMessage> = yield call(eventChannel, subscriber);
  while (true) {
    const message: IMessage = yield take(channel);
    yield put(actions.addNewMessage({
      messageID: message.messageID,
      type: userID === message.userID ? 'out' : 'in',
      message: message.message,
    }));
  }
}

function getSubscriberToMessages({ api }: IDependencies, connectionID: string) {
  return (emit: any) => {
    api.socket.subscribeReceiveMessages(connectionID, emit);
    return () => void 0;
  };
}

function* sendMessage(deps: IDependencies, { payload: { message } }: NS.ISendMessage) {
  try {
    const connectionID: ReturnType<typeof selectors.selectConnectionID> = yield select(selectors.selectConnectionID);
    const userID: ReturnType<typeof selectors.selectUserID> = yield select(selectors.selectUserID);
    yield call(deps.api.socket.sendMessage, connectionID, { message, connectionID, userID });
    yield put(actions.sendMessageSuccess());
  } catch (error) {
    const errorMsg = getErrorMsg(error);
    yield put(actions.sendMessageFail(errorMsg));
  }
}

export { getSaga };
