import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { Question } from 'src/app/datamodels/Question';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit {

  array : Question[] = []

  constructor(private questionservice : QuestionService,  private router:Router) {
    this.getAll()
  }
  myimage:string ="assets/quiz.jpg"
  ngOnInit(): void {
  }

  add(){
    this.router.navigate(["question"])
  }

  getAll(){
    this.questionservice.get((question:Question[]) => {
      this.array = question
    })
  }

  delete(event:Event){
    let id = (event.target as Element).id
    this.questionservice.delete(id,(question:Question)=>{
      
      let questiontemp : Question = this.array.filter(x => x.id === question.id)[0]
      this.array.splice(this.array.indexOf(questiontemp));
    });
  }

  edit(event:Event){
    let id = (event.target as Element).id
    let question : Question = this.array.filter(x => x.id === Number(id))[0];
    let navigationExtras: NavigationExtras = {
    queryParams: {
    special: JSON.stringify(question)
    }};
    this.router.navigate(["question"], navigationExtras)
    
  }

}
