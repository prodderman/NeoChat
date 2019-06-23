import { IAppReduxState } from 'shared/types/app';

import * as NS from '../namespace';

function selectFeatureState(state: IAppReduxState): NS.IReduxState {
  return state.chat;
}

export function selectMessages(state: IAppReduxState): NS.IMessage[] {
  return selectFeatureState(state).data.messages;
}

export function selectTypedMessage(state: IAppReduxState): string {
  return selectFeatureState(state).edit.typedMessage;
}

export function selectConnectionID(state: IAppReduxState): string | null {
  return selectFeatureState(state).data.connectionID;
}

export function selectUserID(state: IAppReduxState): string | null {
  return selectFeatureState(state).data.userID;
}
