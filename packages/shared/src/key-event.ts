import { IContent } from '.';

export interface IKeyEvent extends IContent {
  /** Is the event active */
  active?: boolean;
  /** Has the event passed */
  done?: boolean;
}
