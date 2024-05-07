import { Injectable } from '@angular/core';
import { QuestionInterface } from './question-interface';
import { textQuestion } from './model/text-question';
import { DropdownQuestion } from './model/dropdown-question';
import { NumberQuestion } from './model/number-question';
import { CheckboxQuestion } from './model/checkbox-question';
import { TextareaQuestion } from './model/textarea-question';
import { EmailQuestion } from './model/email-question';
import { PhoneQuestion } from './model/phone-question';
import { SliderQuestion } from './model/slider-question';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor() {}

  getQuestions() {
    const questions: QuestionInterface[] = [
      new textQuestion({
        key: 'firstName',
        label: 'First Name',
        value: '',
        isRequired: true,
        isVisible:true
      }),
      new textQuestion({
        key: 'lastName',
        label: 'Last Name',
        value: '',
        isRequired: true,
        isVisible:true
      }),
      new NumberQuestion({
        key: 'age',
        label: 'Age',
        type:'number',
        isRequired: true,
      isVisible:false
      }),
      new EmailQuestion({
        key: 'email',
        label: 'Email',
        hint:'abc@gmail.com',
        type: 'email',
        isRequired: true,
        isVisible:true
      }),
   
      new PhoneQuestion({
        key: 'phone',
        label: 'Phone Number',
        type: 'tel',
        isRequired: true,
        isVisible:true
      }),
      new CheckboxQuestion({
        key:'married',
        label:'Married',
        type:'checkbox',
        isVisible:true,
      }),

      new DropdownQuestion({
        key: 'country',
        label: 'Country',
        isRequired:true,
        isVisible:true,
        options: [
          { key: 'india', value: 'India' },
          { key: 'USA', value: 'USA' },
          { key: 'UAE', value: 'UAE' },
          { key: 'nepal', value: 'Nepal' },
        ],
      }),
      new TextareaQuestion({
        key:'message',
        label:'Message',
        isVisible:true,
      }),
      new SliderQuestion({
        key: 'policy',
        label:'By selecting this, you agree to our privacy policy.',
        type:'checkbox',
        isVisible:true,
        isRequired:true
      })
    ];

    return questions;
  }
}

