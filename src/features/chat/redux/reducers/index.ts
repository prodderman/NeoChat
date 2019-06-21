import { combineReducers } from 'redux';
import communicationReducer from './communication';
import * as NS from '../../namespace';

export default combineReducers<NS.IReduxState>({
  communication: communicationReducer,
});
