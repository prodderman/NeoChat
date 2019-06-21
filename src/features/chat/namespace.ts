import { ICommunication, IPlainAction, IPlainFailAction } from 'shared/types/redux';

export interface IReduxState {
  communication: {
    registration: ICommunication;
  };
}

export type IRegister = IPlainAction<'CHAT:REGISTER'>;
export type IRegisterSuccess = IPlainAction<'CHAT:REGISTER_SUCCESS'>;
export type IRegisterFail = IPlainFailAction<'CHAT:REGISTER_FAIL'>;

export type IAction =
  | IRegister
  | IRegisterSuccess
  | IRegisterFail;
