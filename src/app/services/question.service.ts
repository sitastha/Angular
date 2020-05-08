import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../datamodels/Question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpclient : HttpClient) { 

  }

  post(question:Question,cb:(response:Question) => void){
    let baseUrl : string = "http://localhost:8080/quiz-rest/rest/Questions/createQuestion"
    this.httpclient.post<Question>(baseUrl,question).subscribe((data:Question) =>
      cb(data)
    );
  }

  get(cb:(response:Question[]) => void){
    let baseUrl : string = "http://localhost:8080/quiz-rest/rest/Questions/getAllQuestion"
    this.httpclient.get<Question[]>(baseUrl).subscribe((data:Question[]) =>
      cb(data)
    );
  }

  delete(id:string,CB:(response:Question)=>void){
    let baseUrl : string = "http://localhost:8080/quiz-rest/rest/Questions/delete/"+id
    this.httpclient.delete<Question>(baseUrl).subscribe((data:Question) =>
      CB(data)
    );
  }

  update(question:Question,cb:(response:Question) => void){
    let baseUrl : string = "http://localhost:8080/quiz-rest/rest/Questions/EditQuestion"
    this.httpclient.put<Question>(baseUrl,question).subscribe((data:Question) =>
      cb(data)
    );
  }
}
