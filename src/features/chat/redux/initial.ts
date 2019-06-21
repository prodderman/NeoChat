import { initialCommunicationField } from 'shared/constants';
import { IReduxState } from '../namespace';

const initial: IReduxState = {
  communication: {
    registration: initialCommunicationField,
  },
};

export default initial;
