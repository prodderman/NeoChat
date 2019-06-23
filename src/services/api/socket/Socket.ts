import io from 'socket.io-client';
import { autobind } from 'core-decorators';

import { IMessage, ISendData } from 'shared/types/models';
import { convertServerMessage, convertClientSendData } from '../converters';

class Socket {
  private connection: ReturnType<typeof io>;

  constructor(baseURL: string) {
    this.connection = io(baseURL);
  }

  @autobind
  public subscribeReceiveMessages(
    connectionID: string,
    subscriber: (data: IMessage) => void) {
    this.connection.on(`${connectionID}:new_message`, (data: string) => {
      subscriber(convertServerMessage(data));
    });
  }

  @autobind
  public sendMessage(connectionID: string, data: ISendData) {
    this.connection.emit(`${connectionID}:new_message`, convertClientSendData(data));
  }
}

export default Socket;
