import { IContent } from './content';
import { IKeyEvent } from './key-event';

export enum SessionState {
  INACTIVE = 'INACTIVE',
  ACTIVE = 'ACTIVE',
  CLOSED = 'CLOSED',
}

export interface ISession extends IContent {
  /** IDs of the questions that are part of this session */
  questionIDs: string[];
  /** The IDs of users/observers that are part of the session */
  userIds: string[];
  /** The questions that belong to a user */
  userQuestions: Record<string, string[]>;
  /** The main events that will take place: this helps the observer to track what is happening */
  keyEvents?: IKeyEvent[];
}
