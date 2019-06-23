import { autobind } from 'core-decorators';

import { IConnectionData } from 'shared/types/models';

import { IServerConnectionData } from './types';
import Socket from './socket';
import HttpActions from './HttpActions';

class Api {
  public socket: Socket;
  private actions: HttpActions;

  constructor() {
    this.actions = new HttpActions('http://neowakeup.ru');
    this.socket = new Socket('ws://neowakeup.ru:3001');
  }

  @autobind
  public async register(): Promise<IConnectionData> {
    const URL = `/register`;
    const response = await this.actions.post<IServerConnectionData>(URL);
    return {
      connectionID: response.data.connection_id,
      userID: response.data.user_id,
    };
  }
}

export default Api;
