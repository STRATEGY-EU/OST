export interface IAnswer {
  id: string;
  questionId: string;
  answer?: string | number | boolean | Array<string>;
  comment?: string;
  time?: number;
  simTime?: number;
}
