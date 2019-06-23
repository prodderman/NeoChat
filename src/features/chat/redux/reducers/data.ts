import * as NS from '../../namespace';
import initial from '../initial';

function dataReducer(state: NS.IReduxState['data'] = initial.data, action: NS.IAction): NS.IReduxState['data'] {
  switch (action.type) {
    case 'CHAT:ADD_NEW_MESSAGE': {
      return {
        ...state,
        messages: state.messages.concat(action.payload.message),
      };
    }
    case 'CHAT:REGISTER_SUCCESS': {
      return {
        ...state,
        connectionID: action.payload.connectionID,
        userID: action.payload.userID,
      };
    }
    default:
      return state;
  }
}

export default dataReducer;
