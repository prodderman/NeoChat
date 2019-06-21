import { put, call, all, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import { getErrorMsg } from 'shared/helpers';
import { IDependencies } from 'shared/types/app';

import * as NS from '../namespace';
import * as actions from './actions';

function getSaga(deps: IDependencies) {
  const registerType: NS.IRegister['type'] = 'CHAT:REGISTER';
  return function* saga(): SagaIterator {
    yield all([
      takeLatest(registerType, executeRegister, deps),
    ]);
  };
}

function* executeRegister({ api }: IDependencies) {
  try {
    yield call(api.register);
    yield put(actions.registerSuccess());
  } catch (error) {
    const errorMsg = getErrorMsg(error);
    yield put(actions.registerFail(errorMsg));
  }
}

export { getSaga };
