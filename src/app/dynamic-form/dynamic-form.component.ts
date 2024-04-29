import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { QuestionControlService } from '../question-control.service';
import { QuestionInterface } from '../question-interface';
import { DynamicFormQuestionComponent } from '../dynamic-form-question/dynamic-form-question.component';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DynamicFormQuestionComponent],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css',
  providers: [QuestionControlService],
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: any = [];
  myForm!: FormGroup;

  constructor(private questionControlService: QuestionControlService) {}

  ngOnInit(): void {
    this.myForm = this.questionControlService.toFormGroup(this.questions);
  }

  onSubmit() {
    console.log(this.myForm.value);
    this.onReset();
  }
  onReset() {
    this.myForm.reset();
  }
}
