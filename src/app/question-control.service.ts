import { Injectable } from '@angular/core';
import { QuestionInterface } from './question-interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class QuestionControlService {
  constructor() {}

  toFormGroup(questions: QuestionInterface[]) {
    const grp: any = {};

    questions.forEach((question) => {

      // console.log(question);
      
      
      grp[question.key] = question.isRequired
        ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
      if(question.key === 'email'){
        grp[question.key] = question.isRequired
         ? new FormControl(question.value || '', [Validators.required,Validators.email])
         : new FormControl(question.value || '');
         }

      if(!question.isVisible){
          grp[question.key] = new FormControl(question.value || '');
         }
    });
    // console.log(grp);

    return new FormGroup(grp);
  }
}
