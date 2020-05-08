import { Question } from './Question'

export class MCQChoice{

    id: number
    choice : string
    valid : boolean
    question : Question

    constructor(id:number=null, choice : string=null ,valid : boolean=false, question : Question=null){
        this.id = id
        this.choice = choice
        this.valid = valid
        this.question = question
    }
}