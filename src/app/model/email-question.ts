import { QuestionInterface } from '../question-interface';

export class EmailQuestion extends QuestionInterface {
  override controlType = 'email';
}
