import * as NS from '../../namespace';
import initial from '../initial';

function editReducer(state: NS.IReduxState['edit'] = initial.edit, action: NS.IAction): NS.IReduxState['edit'] {
  switch (action.type) {
    case 'CHAT:MESSAGE_CHANGE': {
      return {
        typedMessage: action.payload.typedMessage,
      };
    }
    case 'CHAT:SEND_MESSAGE_SUCCESS': {
      return {
        ...state,
        typedMessage: '',
      };
    }
    default:
      return state;
  }
}

export default editReducer;
