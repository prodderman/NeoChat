import { IServerMessage, IServerSendData } from '../types';
import { IMessage, ISendData } from 'shared/types/models';

export function convertServerMessage(data: string): IMessage {
  const parsedServerMessage: IServerMessage = JSON.parse(data);
  return {
    message: parsedServerMessage.message,
    messageID: parsedServerMessage.message_id,
    userID: parsedServerMessage.user_id,
  };
}

export function convertClientSendData(message: ISendData): IServerSendData {
  return {
    connection_id: message.connectionID,
    user_id: message.userID,
    message: message.message,
  };
}
