import * as NS from '../../namespace';

export function changeMessage(typedMessage: string): NS.IMessageChange {
  return { type: 'CHAT:MESSAGE_CHANGE', payload: { typedMessage } };
}
