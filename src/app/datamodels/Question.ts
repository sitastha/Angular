export class Question {
    id : number
    question_Title : string

    constructor(id : number = null, question_Title : string = null){
        this.id = id
        this.question_Title = question_Title
    }
}