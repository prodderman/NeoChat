export interface IServerConnectionData {
  connection_id: string;
  user_id: string;
}

export interface IServerMessage {
  user_id: string;
  message_id: string;
  message: string;
}
