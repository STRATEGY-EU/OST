import { ILokiObj } from './loki-object';
import { IQuestion } from './question';
import { ISession } from './session';
import { IUser } from './user';

export interface IExercise extends ILokiObj {
  id: string;
  name: string;
  desc?: string;
  users: IUser[];
  sessions: ISession[];
  questions: IQuestion[];
  /** ID of the currently active session */
  activeSessionId?: string;
  startDate?: number;
  endDate?: number;
}
