import { IAppReduxState } from 'shared/types/app';
import * as NS from '../namespace';

export function selectFeatureState(state: IAppReduxState): NS.IReduxState {
  return state.chat;
}
