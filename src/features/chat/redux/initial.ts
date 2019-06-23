import { initialCommunicationField } from 'shared/constants';
import { IReduxState } from '../namespace';

const initial: IReduxState = {
  data: {
    connectionID: null,
    userID: null,
    messages: [],
  },
  communication: {
    registration: initialCommunicationField,
    messageSending: initialCommunicationField,
  },
  edit: {
    typedMessage: '',
  },
};

export default initial;
