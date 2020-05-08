import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MCQChoice } from '../datamodels/MCQChoice';

@Injectable({
  providedIn: 'root'
})
export class McqchoiceService {

  constructor(private httpclient : HttpClient) { 

  }
  post(mcqchoice:MCQChoice[],cb:(response:MCQChoice[])=>void){
    let baseUrl : string = "http://localhost:8080/quiz-rest/rest/MCQChoice/createMCQChoice"
    this.httpclient.post<MCQChoice[]>(baseUrl,mcqchoice).subscribe((data:MCQChoice[]) =>
    cb(data)
  );
  }

  get(){

  }
}
