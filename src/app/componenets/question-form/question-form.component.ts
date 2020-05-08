import { Component, OnInit } from '@angular/core';
import { MCQChoice } from 'src/app/datamodels/MCQChoice';
import { QuestionService } from 'src/app/services/question.service';
import { Question } from 'src/app/datamodels/Question';
import { Location } from '@angular/common';
import { McqchoiceService } from 'src/app/services/mcqchoice.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {
isEdit:boolean = false

  selectedOptionTrue : number = 0
  array : MCQChoice[] = []

  mcqChoice : MCQChoice = new MCQChoice()

  mcqQuestion : Question = new Question()

  constructor(private questionService : QuestionService,private location : Location, private mcqchoiceservice:McqchoiceService, private route:ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      
      if (params && params.special) {
      this.mcqQuestion = JSON.parse(params.special)
      }
    
      let edit = !(params && params.special)
      this.isEdit = edit ? false : true
      });
  }

  ngOnInit(): void {
    
  }

  sendQuestion(){
    this.questionService.post(this.mcqQuestion,(question:Question) => {
      this.sendMCQChoice(question)
    })
  }
  sendMCQChoice(question:Question){

    this.array.forEach(element => {
      element.question = question
    });

    this.mcqchoiceservice.post(this.array, (mcqchoice:MCQChoice[]) => {
      console.log(mcqchoice)
      alert("Insert Success")
      this.location.back()
    })
  }

  submit(){
    if ( !this.isEdit){
      this.sendQuestion()
    }else { 
      this.editSend()

    }
  }

  editSend(){
    this.questionService.update(this.mcqQuestion,(question:Question) => {
    alert("Edited successfully")
    this.location.back()
  });
}


  addoption(){

    this.mcqChoice.valid = this.selectedOptionTrue == 0 ? true : false
    let choicetemp = new MCQChoice(null,this.mcqChoice.choice,this.mcqChoice.valid,null)
    this.array.push(choicetemp)

  }
}
