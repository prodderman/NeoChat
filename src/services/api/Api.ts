import { autobind } from 'core-decorators';
import HttpActions from './HttpActions';

class Api {
  private actions: HttpActions;

  constructor() {
    this.actions = new HttpActions('http://neowakeup.ru:3000');
  }

  @autobind
  public async register(): Promise<void> {
    const URL = `/register`;
    await this.actions.post(URL);
  }
}

export default Api;
