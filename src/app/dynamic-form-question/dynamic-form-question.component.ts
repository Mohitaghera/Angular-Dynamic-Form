import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { QuestionInterface } from '../question-interface';

@Component({
  selector: 'app-dynamic-form-question',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-form-question.component.html',
  styleUrl: './dynamic-form-question.component.css',
})
export class DynamicFormQuestionComponent implements OnInit{
  @Input() question!: QuestionInterface;
  @Input() myForm!: FormGroup;


  ngOnInit(): void {
      this.question.isRequired = this.question.isVisible
      
  }
  // updateCheckboxValue(question: QuestionInterface, event:boolean) {
  //   // question.value = isChecked;
    
  // }

  get isValid() {
    return (
      this.myForm.controls[this.question.key].valid
    );
  }
}
