import * as NS from '../../namespace';

export function addNewMessage(message: NS.IMessage): NS.IAddNewMessage {
  return { type: 'CHAT:ADD_NEW_MESSAGE', payload: { message } };
}
