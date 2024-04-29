import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { Observable } from 'rxjs';
import { QuestionService } from './question.service';
import { QuestionInterface } from './question-interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DynamicFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [QuestionService],
})
export class AppComponent {
  questions: QuestionInterface[] = [];

  constructor(questionService: QuestionService) {
    this.questions = questionService.getQuestions();
  }
}
