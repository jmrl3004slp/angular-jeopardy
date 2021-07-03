import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Clue } from '../clue';


@Component({
  selector: 'app-question-screen',
  templateUrl: './question-screen.component.html',
  styleUrls: ['./question-screen.component.css']
})
export class QuestionScreenComponent implements OnInit {
  @Input () public clue:Clue | undefined = undefined;
  @Output() public questionComplete = new EventEmitter();
  answerSeen = false;
  
  constructor() { }

  ngOnInit(): void {
    if (!this.clue) {
      // error, should never show this without a clue
      // todo throw error
      this.questionComplete.emit();
    }
  }
  
  showAnswer(): void {
    this.answerSeen = true;
  }
  showBoard() {
    this.answerSeen = false;
    this.questionComplete.emit();
  }
}
