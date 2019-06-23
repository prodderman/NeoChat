import { combineReducers } from 'redux';
import communicationReducer from './communication';
import dataReducer from './data';
import editReducer from './edit';
import * as NS from '../../namespace';

export default combineReducers<NS.IReduxState>({
  data: dataReducer,
  edit: editReducer,
  communication: communicationReducer,
});
