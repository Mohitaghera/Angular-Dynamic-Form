import { Component, Input,OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { QuestionControlService } from '../question-control.service';
import { DynamicFormQuestionComponent } from '../dynamic-form-question/dynamic-form-question.component';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DynamicFormQuestionComponent],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css',
  providers: [QuestionControlService],
})
export class DynamicFormComponent implements OnInit{
  @Input() questions: any = [];
  myForm!: FormGroup;
  policyChecked: boolean = false;


  constructor(private questionControlService: QuestionControlService) {}

  ngOnInit(): void {
    this.myForm = this.questionControlService.toFormGroup(this.questions);  
  }
 

  onSubmit() {
    const marriedValue =
    this.myForm.get('married')!.value === null
      ? false
      : this.myForm.get('married')!.value;
  this.myForm.get('married')!.setValue(marriedValue);

    console.log(this.myForm.value);
    this.onReset();
  }
  onReset() {
    this.myForm.reset();
  }
}
