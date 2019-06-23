export interface IConnectionData {
  connectionID: string;
  userID: string;
}

export interface IMessage {
  userID: string;
  messageID: string;
  message: string;
}

export interface ISendData {
  userID: string;
  connectionID: string;
  message: string;
}
