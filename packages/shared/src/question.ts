import { IContent } from './content';

export enum QuestionType {
  SELECT = 'SELECT',
  OPTIONS = 'OPTIONS',
  TEXT = 'TEXT',
  NUMBER = 'NUMBER',
  RANGE = 'RANGE',
  SWITCH = 'SWITCH',
  RADIO = 'RADIO',
}

export interface IQuestion extends IContent {
  type: QuestionType;
  /** If true, multiple options may be selected */
  multiple?: boolean;
  range?: number[];
  options?: IContent[];
}
